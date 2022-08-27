export default class MainScene extends Phaser.Scene {
    constructor(){
        super();
        this.count = 0;
        this.x =700;
        this.y =350;
    }

    preload(){
        this.load.spritesheet('gemStart', '../../assets/gems/start.png', {frameWidth:392, frameHeight:370})
        this.load.spritesheet('gem', '../../assets/gems/middle.png', {frameWidth:449, frameHeight:430})
        this.load.spritesheet('gemEnd', '../../assets/gems/finish.png', {frameWidth:326, frameHeight:330})
        this.load.spritesheet('gemAdded', '../../assets/gems/added.png', {frameWidth:355, frameHeight:330})
    }

    create(){
        this.anims.create({
            key: 'appear',
            frames: this.anims.generateFrameNumbers('gemStart', { frames: [ 0, 1, 2, 3 ] }),
            frameRate: 5,
            repeat: 1
        });
        this.anims.create({
            key: 'spin',
            frames: this.anims.generateFrameNumbers('gem', { frames: [ 0, 1, 2, 3 ] }),
            frameRate: 5,
            repeat: 1
        });
        this.anims.create({
            key: 'disappear',
            frames: this.anims.generateFrameNumbers('gemEnd', { frames: [ 0, 1, 2, 3 ] }),
            frameRate: 5,
            repeat: 1
        });
        this.anims.create({
            key: 'added',
            frames: this.anims.generateFrameNumbers('gemAdded', { frames: [0] }),
            frameRate: 5,
            repeat: 1
        });     
        this.gem = new Gem(this, 700, 350)
    }

    update(){
        this.count++
        if(this.count < 100){
            Phaser.Actions.ScaleXY([this.gem], 0.005, 0.005, 1, 1)
        }else if(this.count >= 200 && this.count < 300){
            Phaser.Actions.ScaleXY([this.gem], -0.005, -0.005, 1, 1)
            Phaser.Actions.SetXY([this.gem], this.x, this.y, 0.0012, 0.0012)
            this.x--
            this.y--
        }
    }
}