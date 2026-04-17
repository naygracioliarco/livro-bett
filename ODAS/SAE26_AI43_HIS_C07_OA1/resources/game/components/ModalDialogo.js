import { Button } from "../../js/library/components/Button.js";
import { ColorManager } from "../../js/library/managers/ColorManager.js";

export class ModalDialogo extends Phaser.GameObjects.Container {
    constructor(scene) {
        super(scene, 0, 0);

        this.background = this.scene.add.image(0, 0, 'bgDialogo').setOrigin(0, 0);
        this.add(this.background);

        this.contModal = 1;
        this.contTexto = 0;
        this.totalModal = 2;

        this.imgIntro = this.scene.add.image(208, 111, 'imgIntro').setOrigin(0, 0);
        this.imgIntro.visible = false;
        this.add(this.imgIntro);

        this.scene = scene;
        this.modalDialogo = this.scene.add.image(0, 0, `modalDialogo${this.contModal}`).setOrigin(0, 0);
        this.modalDialogo.y = this.background.y + this.background.height - this.modalDialogo.height; 
        this.add(this.modalDialogo);

        this.width = this.background.width;
        this.height = this.background.height;

        

        /*this.titulo = this.scene.add.text(this.modalDialogo.x + 340, 405, 'DIGI', { 
            fontFamily: 'Nunito-ExtraBold',
            fontSize: '30px',
            color: '#000',
            width: '500px'
         }).setOrigin(0, 0);
        this.add(this.titulo);*/

        this.texto = this.scene.add.text(this.modalDialogo.x + 280, this.modalDialogo.y + 500, 'A TURMA', { 
            fontFamily: 'Nunito-Bold',
            fontSize: '35px',
            color: '#000',
            lineSpacing: 5,
            wordWrap: { width: 970 }
        }).setOrigin(0, 0);
        this.add(this.texto);

        this.btVoltarDialogo = this.scene.add.image(this.texto.x, this.texto.y + this.texto.height + 120, 'btVoltarDialogo').setOrigin(0, 0);
        this.add(this.btVoltarDialogo);
        this.btVoltarDialogo.visible = false;
        this.btVoltarDialogo.setInteractive({ cursor: 'pointer' });
        this.btVoltarDialogo.on('pointerdown', () => {
            this.contModal--;
            this.contModal = this.contModal < 1 ? this.totalModal : this.contModal;
            this.contTexto--;
            this.updateDialogo();
        });

        this.btAvancarDialogo = this.scene.add.image(this.modalDialogo.x + 1072, this.btVoltarDialogo.y, 'btAvancarDialogo').setOrigin(0, 0);
        this.add(this.btAvancarDialogo);
        this.btAvancarDialogo.setInteractive({ cursor: 'pointer' });
        this.btAvancarDialogo.on('pointerdown', () => {
            this.contModal++;
            this.contModal = this.contModal > this.totalModal ? 1 : this.contModal;
            this.contTexto++;
            this.updateDialogo();
            
        });

        this.marca = ColorManager.getCurrentMarca(this.scene);
        
        // Pegando a cor da marca
        const colors = ColorManager.getColors(this.marca, ColorManager.ORANGE);
        
        this.btVamosLa = new Button(this.scene, {
            text: 'COMEÇAR',
            colors: ColorManager.getColors(this.marca, ColorManager.RED)
        });
        this.add(this.btVamosLa);
        this.btVamosLa.visible = false;
        this.btVamosLa.x = this.btAvancarDialogo.x - this.btVamosLa.width + this.btAvancarDialogo.width;
        this.btVamosLa.y = this.btAvancarDialogo.y;
        this.btVamosLa.on('buttonClick', () => {
            this.scene.controladorDeCenas.proximaCena();
        });

        this.btPular = new Button(this.scene, {
            text: 'PULAR',
            colors: ColorManager.getColors(this.marca, ColorManager.YELLOW) 
        });
        this.add(this.btPular);
        this.btPular.x = 1636;
        this.btPular.y = 37;
        this.btPular.on('buttonClick', () => {
            this.scene.controladorDeCenas.proximaCena();
        });

        this.aDialogos = [];

        this.scene.add.existing(this);
    }

    setValue(value) {
        this.aDialogos = value;
        this.texto.setText(this.aDialogos[this.contTexto]);
    }

    updateDialogo() {
        this.modalDialogo.setTexture(`modalDialogo${this.contModal}`);
        this.btVoltarDialogo.visible = this.contTexto > 0 ? true : false;
        this.btAvancarDialogo.visible = this.contTexto < this.aDialogos.length - 1 ? true : false;
        this.texto.setText(this.aDialogos[this.contTexto]);

        this.imgIntro.visible = this.contTexto == 1 ? true : false;

        // Corrigindo a visibilidade do botão "VAMOS LÁ!"
        this.btVamosLa.visible = this.contTexto == this.aDialogos.length - 1 ? true : false;
        
        
        
    }
    
    
}
