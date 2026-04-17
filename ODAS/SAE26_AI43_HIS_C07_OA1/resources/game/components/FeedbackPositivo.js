import { Button } from "../../js/library/components/Button.js";
import { ColorManager } from "../../js/library/managers/ColorManager.js";
import SoundManager from "../../js/library/managers/SoundManager.js";

export class FeedbackPositivo extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene, 0, 0);
        this.scene = scene;
        this.isVisible = false;
        this.isLastPhase = false; // Nova propriedade para controlar se é a última fase
        this.create();
        scene.add.existing(this);
    }

    create() {

        // Fundo preto com transparência
        this.background = this.scene.add.rectangle(0, 0, 1920, 1080, 0x000000);
        this.background.setAlpha(0.8);
        this.background.setOrigin(0, 0);
        this.background.setInteractive();

        // Modal de feedback positivo
        this.imageBox = this.scene.add.image(0, 0,
            'modalFeedbackPositivo'
        ).setOrigin(0, 0);
        this.imageBox.x = this.background.x + this.background.width / 2 - this.imageBox.width / 2;
        this.imageBox.y = this.background.y + this.background.height / 2 - this.imageBox.height / 2;

        // Título com mesmo estilo do Enunciado
        const titleStyle = {
            fontFamily: 'Nunito-Black',
            fontSize: '48px',
            color: '#FFFFFF',
            align: 'center',
            stroke: '#000',
            strokeThickness: 10,
            fontStyle: 'normal',
        };

        // Título com mesmo estilo do Enunciado
        this.title = this.scene.add.text(
            0,
            0,
            'Titulo',
            titleStyle
        ).setOrigin(0, 0);

        // Retângulo de referência para o texto (invisível)
        this.textBox = this.scene.add.rectangle(
            0,
            0,
            1137, // largura especificada
            400, // altura especificada
            0xFF0000 // cor vermelha
        ).setOrigin(0, 0);
        this.textBox.setAlpha(0); // Torna invisível
        this.textBox.x = this.imageBox.x + (this.imageBox.width - this.textBox.width) / 2;
        this.textBox.y = this.imageBox.y + (this.imageBox.height - this.textBox.height) / 2;

        this.mainText = this.scene.add.text(
            this.textBox.x,
            this.textBox.y,
            '', {
                fontFamily: 'Nunito-Medium',
                fontSize: '38px',
                color: '#000',
                align: 'center',
                wordWrap: {
                    width: 744
                },
                lineSpacing: 14
            }
        ).setOrigin(0, 0);
        this.mainText.setOrigin(0, 0);

        this.digi = this.scene.add.image(0, 0, 'digiPositivo').setOrigin(0, 0);
        this.digi.x = this.imageBox.x + this.imageBox.width - this.digi.width;
        this.digi.y = this.imageBox.y + this.imageBox.height - this.digi.height - 28;

        // Container para os botões
        this.buttonContainer = this.scene.add.container(0, 0);
        
        // Posição Y base para os botões
        this.buttonY = this.imageBox.y + (this.imageBox.height - 90) - 130; // 90 é a altura padrão do botão

        // Criar botão único (padrão)
        const marca = ColorManager.getCurrentMarca(this.scene);
        const colorsOrange = ColorManager.getColors(marca, ColorManager.ORANGE);
        
        this.button = new Button(this.scene, {
            text: 'INÍCIO',
            colors: colorsOrange
        });
        this.button.x = this.imageBox.x + (this.imageBox.width - this.button.width) / 2;
        this.button.y = this.buttonY;

        this.button.on('buttonClick', () => {
            this.hide();
            if(this.callbackFechar != null){
                this.callbackFechar();
            }
        });


        // Container agrupando todos os elementos
        this.add([
            this.background,
            this.imageBox,
            this.textBox,
            this.title,
            this.mainText,
            this.digi,
            this.button,
        ]);

        // Inicialmente escondido e no topo
        this.setVisible(false);
        this.setDepth(9999);
        
        
    }


    show() {
        this.setVisible(true);
        this.isVisible = true;
    }

    hide() {
        this.setVisible(false);
        this.isVisible = false;
        SoundManager.stopAll();
    }

    setDataFeedback(data) {
        this.title.text = '';
        this.mainText.text = '';

        this.title.setText(data.title);
        this.mainText.setText(data.text);

        console.log(this.title.text);

        if (this.title.text !== '' && data.text === '') {
            this.title.x = this.textBox.x + (this.textBox.width - this.title.width) / 2;
            this.title.y = this.textBox.y + (this.textBox.height - this.title.height) / 2;
        } else {
            this.title.x = this.textBox.x + (this.textBox.width - this.title.width) / 2;
            this.title.y = this.imageBox.y + 200;

            this.mainText.x = this.textBox.x + (this.textBox.width - this.mainText.width) / 2;
            this.mainText.y = this.title.y + this.title.height + 60;
        }
    }

    // Novo método para definir se é a última fase
    setLastPhase(isLastPhase) {
        this.isLastPhase = isLastPhase;
        this.updateButtonLayout();
    }

    // Callbacks para os novos botões
    callbackFechar(){}
    callbackRecomecar(){}
    callbackFinalizar(){}
}