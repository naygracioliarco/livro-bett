export class ControladorDeCenas {
  /** @param {Phaser.Game} game */
  constructor(game) {
    this.game = game;
    this.ordem = ['Capa', 'Intro', 'Game'];
    this.i = 0;
  }

  proximaCena() {
    if (this.i < this.ordem.length - 1) {
      this.i++;
      this.game.scene.start(this.ordem[this.i]);
    }
  }

  /** @param {number} indice índice em ordem (0 = Capa) */
  mudarCena(indice) {
    const max = this.ordem.length - 1;
    this.i = Math.max(0, Math.min(indice | 0, max));
    this.game.scene.start(this.ordem[this.i]);
  }
}
