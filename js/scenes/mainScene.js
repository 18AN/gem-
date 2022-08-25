export default class MainScene extends Phaser.Scene {
    constructor(){
        super();
    }

    preload(){
        this.load.spritesheet('gemStart', '../../assets/gems/start.png', {frameWidth:392, frameHeight:370})
        this.load.spritesheet('gem', '../../assets/gems/middle.png', {frameWidth:449, frameHeight:430})
        this.load.spritesheet('gemEnd', '../../assets/gems/finish.png', {frameWidth:326, frameHeight:330})
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
        const gem = this.add.sprite(700, 170);
        gem.setScale(0.2);
        gem.play('appear');
        gem.chain(['spin','disappear'])
    }

    update(){
        
    }
}