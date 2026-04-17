import { BaseCena } from '../../js/library/base/BaseCena.js';
import SoundManager from '../../js/library/managers/SoundManager.js';
import { FeedbackPositivo } from '../components/FeedbackPositivo.js';

export class Game extends BaseCena {
    constructor(controladorDeCenas) {
        super('Game'); // Passa o nome da cena para a classe base
        this.controladorDeCenas = controladorDeCenas; // Armazena a referência ao controlador de cenas
        this.loaded = false;
        this.checkTimer = null; // Timer para controlar o desaparecimento do check
    }

    create() {

        const background = this.add.image(0, 0, 'bgGame').setOrigin(0, 0);

        const titleStyle = {
            fontFamily: 'Nunito-ExtraBold',
            fontSize: '40px',
            color: '#FFFFFF',
            align: 'center',
            stroke: '#000',
            strokeThickness: 10,
            fontStyle: 'normal',
            lineSpacing: 'normal'
        };


        const title = this.add.text(
            100,
            71,
            'CLIQUE E ARRASTE PARA CLASSIFICAR AS FRASES EM UMA DAS DUAS CATEGORIAS',
            titleStyle
        ).setOrigin(0, 0);
        title.x = background.x + (background.width - title.width) / 2;

        this.aBoxes = [];

        this.aBoxes[0] = this.add.image(0, 271, 'box1').setOrigin(0, 0);
        this.aBoxes[1] = this.add.image(1369, 271, 'box2').setOrigin(0, 0);

        this.aObjFrases = [
            {
                img: 'frase1',
                box: 1
            },
            {
                img: 'frase2',
                box: 0
            },
            {
                img: 'frase3',
                box: 1
            },
            {
                img: 'frase4',
                box: 1
            },
            {
                img: 'frase5',
                box: 0
            }
        ]

        this.aFrases = [];
        this.frasesPosicoesOriginais = [];
        this.frasesNosBoxes = [[], []]; // Array para armazenar frases nos boxes [box0, box1]

        let offsetY = 246;

        for (let i = 0; i < this.aObjFrases.length; i++) {
            const objFrase = this.aObjFrases[i];
            const frase = this.add.image(0, 0, `${objFrase.img}Arrasta`).setOrigin(0, 0).setInteractive({cursor: 'pointer'});
            frase.x = background.x + (background.width - frase.width) / 2;
            frase.y = offsetY;
            offsetY = frase.y + frase.height + 10;
            
            // Armazenar posição original
            this.frasesPosicoesOriginais[i] = { x: frase.x, y: frase.y };
            
            // Adicionar propriedades para controle
            frase.setData('indice', i);
            frase.setData('boxCorreto', objFrase.box);
            frase.setData('imgOriginal', objFrase.img);
            frase.setData('posicaoOriginal', { x: frase.x, y: frase.y });
            frase.setData('arrastando', false);
            
            // Configurar drag and drop
            this.input.setDraggable(frase);
            
            this.aFrases.push(frase);
        }

        // Configurar eventos de drag
        this.input.on('dragstart', (pointer, gameObject) => {
            gameObject.setData('arrastando', true);
            gameObject.setTint(0xcccccc); // Efeito visual durante o arraste
            this.children.bringToTop(gameObject);
        });

        this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on('dragend', (pointer, gameObject) => {
            gameObject.setData('arrastando', false);
            gameObject.clearTint();
            
            const indice = gameObject.getData('indice');
            const boxCorreto = gameObject.getData('boxCorreto');
            const posicaoOriginal = gameObject.getData('posicaoOriginal');
            
            // Verificar se foi solto em um box
            let soltoEmBox = false;
            let boxIndex = -1;
            
            for (let i = 0; i < this.aBoxes.length; i++) {
                const box = this.aBoxes[i];
                if (this.verificarColisao(gameObject, box)) {
                    soltoEmBox = true;
                    boxIndex = i;
                    break;
                }
            }
            
            if (soltoEmBox) {
                const box = this.aBoxes[boxIndex];
                if (boxIndex === boxCorreto) {
                    // Acertou! Posicionar no box correto
                    this.posicionarFraseNoBox(gameObject, boxIndex);
                    SoundManager.play('acerto', 1, false, () => {
                        // Verificar se todas as frases foram colocadas
                        this.verificarSeTerminou();
                    });
                } else {
                    // Errou! Voltar ao local original
                    this.voltarFraseAoOriginal(gameObject, posicaoOriginal);
                    SoundManager.play('erro');
                }
                this.mostrarCheckNoBox(box, boxIndex === boxCorreto);
            } else {
                // Não foi solto em nenhum box, voltar ao original
                this.voltarFraseAoOriginal(gameObject, posicaoOriginal);
            }
        });

        this.check = this.add.image(0, 0, 'check1').setOrigin(0, 0);
        this.check.visible = false;

        this.feedbackPositivo = new FeedbackPositivo(this);
        this.feedbackPositivo.setDataFeedback({
            title: 'MUITO BEM, VOCÊ CONSEGUIU!',
            text: ''
        });
        this.feedbackPositivo.callbackFechar = () => {
            this.controladorDeCenas.mudarCena(0);
        };

        super.create();
    }

    verificarColisao(frase, box) {
        // Verificar se a frase está sobrepondo o box
        const fraseBounds = frase.getBounds();
        const boxBounds = box.getBounds();
        
        return !(fraseBounds.x > boxBounds.x + boxBounds.width ||
                fraseBounds.x + fraseBounds.width < boxBounds.x ||
                fraseBounds.y > boxBounds.y + boxBounds.height ||
                fraseBounds.y + fraseBounds.height < boxBounds.y);
    }

    posicionarFraseNoBox(frase, boxIndex) {
        const imgOriginal = frase.getData('imgOriginal');
        const indice = frase.getData('indice');
        
        // Remover a frase arrastável
        frase.destroy();
        
        // Criar a frase correta no box
        const fraseCorreta = this.add.image(0, 0, imgOriginal).setOrigin(0, 0);
        
        // Calcular posição no box
        const box = this.aBoxes[boxIndex];
        const frasesNoBox = this.frasesNosBoxes[boxIndex];
        
        // Posição base do box
        let x = box.x + (box.width - fraseCorreta.width) / 2; // Margem lateral
        let y = box.y + 219 + (frasesNoBox.length * (fraseCorreta.height + 20)); // Empilhamento vertical
        
        fraseCorreta.x = x;
        fraseCorreta.y = y;
        
        // Adicionar à lista de frases no box
        this.frasesNosBoxes[boxIndex].push(fraseCorreta);
        
        // Remover da lista de frases arrastáveis
        this.aFrases.splice(this.aFrases.indexOf(frase), 1);
        
        
    }

    voltarFraseAoOriginal(frase, posicaoOriginal) {
        // Animação suave de volta ao local original
        this.tweens.add({
            targets: frase,
            x: posicaoOriginal.x,
            y: posicaoOriginal.y,
            duration: 300,
            ease: 'Power2'
        });
    }

    mostrarCheckNoBox(box, acertou) {
        // Cancelar timer anterior se existir
        if (this.checkTimer) {
            this.checkTimer.remove();
            this.checkTimer = null;
        }
        
        // Definir textura baseada no resultado
        const textura = acertou ? 'check1' : 'check2';
        this.check.setTexture(textura);
        
        // Centralizar o check no box
        this.check.x = box.x + (box.width - this.check.width) / 2;
        this.check.y = box.y + (box.height - this.check.height) / 2;
        
        // Mostrar o check
        this.check.visible = true;
        this.children.bringToTop(this.check);

        // Fazer o check desaparecer após 1.5 segundos
        this.checkTimer = this.time.delayedCall(1500, () => {
            this.check.visible = false;
            this.checkTimer = null;
        });
    }

    verificarSeTerminou() {
        // Verificar se todas as frases foram colocadas nos boxes corretos
        if (this.aFrases.length === 0) {
            this.feedbackPositivo.show();
        }
    }
}