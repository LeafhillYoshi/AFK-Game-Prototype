import Phaser from "phaser";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create,
    update
  }
};

function preload(this: Phaser.Scene) {
    this.load.image('logo', 'https://labs.phaser.io/assets/sprites/phaser3-logo.png');
}

function create(this: Phaser.Scene) {
    this.add.image(400, 300, 'logo');
}

function update() {

}

const game = new Phaser.Game(config);