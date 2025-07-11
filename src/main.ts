import Phaser from "phaser";
import { MainMenu } from './assets/mainMenu';
import { CityView } from './assets/cityView';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [MainMenu, CityView]
};

const game = new Phaser.Game(config);