/** @type {Phaser.Game | null} */
let gameRef = null;

const SoundManager = {
  /** @param {Phaser.Game} game */
  init(game) {
    gameRef = game;
  },

  /**
   * @param {string} key
   * @param {number} [volume]
   * @param {boolean} [loop]
   * @param {() => void} [onComplete]
   */
  play(key, volume = 1, loop = false, onComplete = null) {
    if (!gameRef?.sound) return;
    try {
      const s = gameRef.sound.add(key, { volume });
      s.play();
      if (!loop && typeof onComplete === 'function') {
        s.once('complete', onComplete);
      }
    } catch {
      // som opcional
    }
  },

  stopAll() {
    gameRef?.sound?.stopAll();
  },
};

export default SoundManager;
