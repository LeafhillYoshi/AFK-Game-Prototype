import { Menu } from './menu';

export class CityView extends Phaser.Scene {

    constructor() {
        super({ key: 'CityView' });
    }

    preload(this: Phaser.Scene) {

    }

    create() {
        // Create the city view layout
        this.cameras.main.setBackgroundColor('#63C5DA');
        
        this.scene.launch('CityViewUI');

    }

    update() {
        // Update logic for the city view
    }
}

class CityMenu extends Menu {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y)
        this.addMenuItem("Explore Dungeon");
        this.addMenuItem("Visit Tavern");
        this.addMenuItem("Visit Shop");
        this.addMenuItem("Visit Blacksmith");
        this.addMenuItem("Visit Alchemist");
        this.addMenuItem("Adventurer's Guild");
        this.addMenuItem("Adventurer's University");
    }

    confirm(){
        const selectedItem = this.menuItems[this.menuItemIndex].text;
        switch (selectedItem) {
            case "Explore Dungeon":
                console.log("Exploring Dungeon...");
                //this.scene.events.emit('exploreDungeon');
                break;
            case "Visit Tavern":
                console.log("Visiting Tavern...");
                //this.scene.events.emit('visitTavern');
                break;
            case "Visit Shop":
                console.log("Visiting Shop...");
                //this.scene.events.emit('visitShop');
                break;
            case "Visit Blacksmith":
                console.log("Visiting Blacksmith...");
                //this.scene.events.emit('visitBlacksmith');
                break;
            case "Visit Alchemist":
                console.log("Visiting Alchemist...");
                //this.scene.events.emit('visitAlchemist');
                break;
            case "Adventurer's Guild":
                console.log("Visiting Adventurer's Guild...");
                //this.scene.events.emit('adventurersGuild');
                break;
            case "Adventurer's University":
                console.log("Visiting Adventurer's University...");
                //this.scene.events.emit('adventurersUniversity');
                break;
            default:
                console.warn(`Unknown menu item: ${selectedItem}`);
                break;
        }
    }
}

export class CityViewUI extends Phaser.Scene {

    graphics!: Phaser.GameObjects.Graphics;
    menus!: Phaser.GameObjects.Container;

    constructor() {
        super({ key: 'CityViewUI' });
    }

    preload(this: Phaser.Scene) {
        // Load assets for the city view UI
    }
    create() {
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(1, 0xffffff);
        this.graphics.strokeRect(10, 10, 280, 700);
        this.graphics.fillRect(50, 50, 150, 450);

        this.menus = this.add.container(0, 0);
        const cityMenu = new CityMenu(this, 20, 20);
        this.menus.add(cityMenu);
        
        // Add keyboard input listeners with null safety
        if (this.input.keyboard) {
            this.input.keyboard.on('keydown-UP', () => cityMenu.selectPrevious());
            this.input.keyboard.on('keydown-DOWN', () => cityMenu.selectNext());
            this.input.keyboard.on('keydown-ENTER', () => cityMenu.confirm());
            this.input.keyboard.on('keydown-SPACE', () => cityMenu.confirm());
        }
    }

    update() {
        // Update logic for the city view UI
    }

}


