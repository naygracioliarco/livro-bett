import { ControladorDeCenas } from '../managers/ControladorDeCenas.js';

export class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot' });
  }

  create() {
    const g = this.game;
    const controladorDeCenas = new ControladorDeCenas(g);
    g.controladorDeCenas = controladorDeCenas;
    for (const key of ['Capa', 'Intro', 'Game']) {
      const s = g.scene.getScene(key);
      if (s) s.controladorDeCenas = controladorDeCenas;
    }
    this.scene.start('Preload');
  }
}
