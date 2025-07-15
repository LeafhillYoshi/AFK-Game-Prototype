import Phaser from "phaser";
import { CityView, CityViewUI } from './assets/cityView';
import { TavernView, TavernViewUI } from "./assets/tavernView";


const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: [
    CityView,
    CityViewUI,
    TavernView,
    TavernViewUI
  ]
};

const game = new Phaser.Game(config);