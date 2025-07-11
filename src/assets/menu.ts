export class MenuItem extends Phaser.GameObjects.Text {
    constructor(x: number, y: number, text: string, scene: Phaser.Scene) {
        super(scene, x, y, text, { fontSize: '32px', color: '#fff' });
    }

    select(){
        this.setStyle({ color: '#f8ff38' });
    }

    deselect(){
        this.setStyle({ color: '#fff' });
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
    }

    addMenuItem(text: string) {
        const menuItem = new MenuItem(0, this.menuItems.length * 40, text, this.scene);
        this.menuItems.push(menuItem);
        this.add(menuItem);
        return menuItem;
    }

    selectNext() {
        this.menuItems[this.menuItemIndex].deselect();
        do {
            this.menuItemIndex++;
            if (this.menuItemIndex >= this.menuItems.length) {
                this.menuItemIndex = 0;
            }
        } while (!this.menuItems[this.menuItemIndex].active);
        this.menuItems[this.menuItemIndex].select();
    }

    selectPrevious() {
        this.menuItems[this.menuItemIndex].deselect();
        do {
            this.menuItemIndex--;
            if (this.menuItemIndex < 0) {
                this.menuItemIndex = this.menuItems.length - 1;
            }
        } while (!this.menuItems[this.menuItemIndex].active);
        this.menuItems[this.menuItemIndex].select();
    }

    select(index: number | null = null) {
        if(!index) {
            index = 0;
        }
        this.menuItems[this.menuItemIndex].deselect();
        this.menuItemIndex = index;
        while (!this.menuItems(this.menuItemIndex).active) {
            this.menuItemIndex++;
            if (this.menuItemIndex >= this.menuItems.length) {
                this.menuItemIndex = 0;
            }
            if (this.menuItemIndex === index) {
                return;
            }
        }
        this.menuItems[this.menuItemIndex].select();
        this.selected = true;
        }
    }
}