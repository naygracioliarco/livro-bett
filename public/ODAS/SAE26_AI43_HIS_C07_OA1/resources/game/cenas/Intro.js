import { BaseCena } from '../../js/library/base/BaseCena.js';
import { ModalDialogo } from '../components/ModalDialogo.js';

export class Intro extends BaseCena {
    constructor(controladorDeCenas) {
        super('Intro');
        this.controladorDeCenas = controladorDeCenas;
    }

    create() {
        const background = this.add.image(0, 0, 'bgDialogo').setOrigin(0, 0);

        const modalDialogo = new ModalDialogo(this);
        modalDialogo.setValue(this.game.registry.get('gameData').dialogos);

        super.create();
        
    }
}