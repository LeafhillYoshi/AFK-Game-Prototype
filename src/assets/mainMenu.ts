class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'MainMenu' });

    function preload(this: Phaser.Scene) {
      this.load.image('logo', 'https://labs.phaser.io/assets/sprites/phaser3-logo.png');
    }

    function create(this: Phaser.Scene) {
      this.add.image(400, 300, 'logo');
      const startGame = this.add.text(20, 20, 'Start the game!', {
        font: '24px Arial',
        color: '#ffffff'
      });

      startGame.setInteractive();
      startGame.on('pointerover', () => {
        startGame.setStyle({ fill: '#ff0' });
      });
      startGame.on('pointerout', () => {
        startGame.setStyle({ fill: '#fff' });
      });

      startGame.on('pointerdown', () => {
        this.scene.start('CityView');
      });

    }

    function update() {

    }
  }
}