import { Menu, MenuItem } from './menu';

export class CityView extends Phaser.Scene {
   
    graphics!: Phaser.GameObjects.Graphics;
    
    constructor() {
        super({ key: 'CityView' });
    }

    preload(this: Phaser.Scene){

    }

    create() {
        // Create the city view layout
        this.cameras.main.setBackgroundColor('#63C5DA');
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.strokeRect(0, 450, 800, 150);
        this.graphics.fillRect(50, 50, 150, 450);
    }

    update(this: Phaser.Scene) {
        // Update logic for the city view
    }
}