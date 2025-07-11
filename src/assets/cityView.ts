import { Menu, MenuItem } from './menu';

export class CityView extends Phaser.Scene {
    constructor() {
        super({ key: 'CityView' });
    }

    preload(this: Phaser.Scene){

    }

    create(this: Phaser.Scene) {
        // Create the city view layout
        this.cameras.main.setBackgroundColor('#63C5DA');
    }

    update(this: Phaser.Scene) {
        // Update logic for the city view
    }
}