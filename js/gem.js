import MainScene from "./scenes/mainScene.js";
const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: window.innerWidth,
    height: window.innerHeight,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0}
        }
    },
    pixelArt: true,
    roundPixels: true,
    scene: [MainScene]
};


const game = new Phaser.Game(config);
