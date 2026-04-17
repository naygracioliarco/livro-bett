export class Preload extends Phaser.Scene {
    constructor() {
        super({ key: 'Preload' });
    }

    preload() {
        this.load.json('gameData', 'resources/game/data/oda.json');

        this.load.image('bgCapa', 'resources/game/images/bgCapa.png');
        this.load.image('titulo', 'resources/game/images/titulo.png');

        this.load.image('bgDialogo', 'resources/game/images/bgIntro.png');
        this.load.image('modalDialogo1', 'resources/game/images/modalDialogo1.png');
        this.load.image('modalDialogo2', 'resources/game/images/modalDialogo2.png');
        this.load.image('btVoltarDialogo', 'resources/game/images/btVoltarDialogo.png');
        this.load.image('btAvancarDialogo', 'resources/game/images/btAvancarDialogo.png');
        this.load.image('imgIntro', 'resources/game/images/imgIntro.png');

        this.load.image('bgGame', 'resources/game/images/bgGame.png');
        this.load.image('box1', 'resources/game/images/box1.png');
        this.load.image('box2', 'resources/game/images/box2.png');

        this.load.image('frase1', 'resources/game/images/frase1.png');
        this.load.image('frase2', 'resources/game/images/frase2.png');
        this.load.image('frase3', 'resources/game/images/frase3.png');
        this.load.image('frase4', 'resources/game/images/frase4.png');
        this.load.image('frase5', 'resources/game/images/frase5.png');

        this.load.image('frase1Arrasta', 'resources/game/images/frase1Arrasta.png');
        this.load.image('frase2Arrasta', 'resources/game/images/frase2Arrasta.png');
        this.load.image('frase3Arrasta', 'resources/game/images/frase3Arrasta.png');
        this.load.image('frase4Arrasta', 'resources/game/images/frase4Arrasta.png');
        this.load.image('frase5Arrasta', 'resources/game/images/frase5Arrasta.png');

        this.load.image('check1', 'resources/game/images/check1.png');
        this.load.image('check2', 'resources/game/images/check2.png');

        // Efeitos sonoros
        this.load.audio('VibingOverVenus', 'resources/game/sounds/VibingOverVenus.mp3');
        this.load.audio('click', 'resources/game/sounds/click.mp3');
        this.load.audio('acerto', 'resources/game/sounds/acerto.mp3');
        this.load.audio('erro', 'resources/game/sounds/erro.mp3');

        this.load.image('modalFeedbackPositivo', 'resources/game/images/modalDialogo1.png');
        this.load.image('digiPositivo', 'resources/game/images/imgIntro.png');

        // Adicione um texto de carregamento
        const loadingText = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Carregando...', {
            fontSize: '32px',
            color: '#ffffff',
        }).setOrigin(0.5, 0.5);
        
        // Atualize a barra de carregamento (opcional)
        this.load.on('progress', (value) => {
            loadingText.setText(`Carregando... ${Math.round(value * 100)}%`);
        });
        
    }

    create() {

        const gameData = this.cache.json.get('gameData');
        this.game.registry.set('gameData', gameData);

        // Colocar as fontes aqui para garantir que foram carregadas. Verificar em index.html se está fazendo o load no css.
        Promise.all([
            document.fonts.load('36px Nunito-ExtraBold'),
            document.fonts.load('40px Nunito'),
            document.fonts.load('30px Nunito-Bold'),
            document.fonts.load('48px Nunito-Black'),
        ]).then(() => {
            this.scene.start('Capa');
        });

    }
}
