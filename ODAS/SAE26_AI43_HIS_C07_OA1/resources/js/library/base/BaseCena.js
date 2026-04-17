export class BaseCena extends Phaser.Scene {
  /** @param {string} key */
  constructor(key) {
    super({ key });
  }

  create() {
    // subclasses chamam super.create() por último
  }
}
