export class MenuItem extends Phaser.GameObjects.Text {
    constructor(x: number, y: number, text: string, scene: Phaser.Scene) {
        super(scene, x, y, text, { fontSize: '32px', color: '#fff' });
    }
}

export class Menu extends Phaser.GameObjects.Container {
    
    menuItems: any[];
    menuItemIndex: number;
    selected: boolean;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y);
        this.menuItems = [];
        this.menuItemIndex = 0;
        this.x = x;
        this.y = y;
        this.selected = false;

        scene.add.existing(this);
    }
}