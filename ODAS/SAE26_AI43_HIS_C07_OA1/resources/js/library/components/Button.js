/**
 * Botão simples (fundo + texto) alinhado ao uso em Capa / ModalDialogo / FeedbackPositivo.
 * Requer `Phaser` global (phaser.min.js no index.html).
 */
export class Button extends Phaser.GameObjects.Container {
  /**
   * @param {Phaser.Scene} scene
   * @param {{ text: string; colors: { bg: number; border?: number; text?: string }; showIcon?: boolean }} config
   */
  constructor(scene, config) {
    super(scene, 0, 0);
    const { text = '', colors = {}, showIcon: _showIcon = false } = config;
    const bgColor = colors.bg ?? 0x80298f;

    const w = 360;
    const h = 90;

    const bg = scene.add
      .rectangle(0, 0, w, h, bgColor)
      .setOrigin(0, 0)
      .setStrokeStyle(4, colors.border ?? 0xffffff)
      .setInteractive({ useHandCursor: true });

    const label = scene.add
      .text(w / 2, h / 2, text, {
        fontFamily: 'Nunito-Bold, Nunito, sans-serif',
        fontSize: '32px',
        color: colors.text ?? '#ffffff',
        align: 'center',
      })
      .setOrigin(0.5);

    this.add(bg);
    this.add(label);

    this.setSize(w, h);

    bg.on('pointerdown', () => {
      this.emit('buttonClick');
    });

    scene.add.existing(this);
  }
}
