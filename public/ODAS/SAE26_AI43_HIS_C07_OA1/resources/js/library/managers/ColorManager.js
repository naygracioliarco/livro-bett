export class ColorManager {
  static YELLOW = 'yellow';
  static ORANGE = 'orange';
  static RED = 'red';

  /** @param {Phaser.Scene} scene */
  static getCurrentMarca(scene) {
    const d = scene.registry?.get('gameData');
    const marca = d?.configuracoes?.marca;
    return typeof marca === 'string' && marca.length ? marca : 'SAE';
  }

  /**
   * @param {string} _marca
   * @param {string} variant yellow | orange | red
   */
  static getColors(_marca, variant) {
    const map = {
      yellow: { bg: 0xfbbf24, border: 0xd97706, text: '#ffffff' },
      orange: { bg: 0xf97316, border: 0xea580c, text: '#ffffff' },
      red: { bg: 0xe11d48, border: 0x9f1239, text: '#ffffff' },
    };
    const k =
      variant === ColorManager.YELLOW
        ? 'yellow'
        : variant === ColorManager.ORANGE
          ? 'orange'
          : variant === ColorManager.RED
            ? 'red'
            : 'orange';
    return map[k];
  }
}
