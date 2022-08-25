import MainScene from "./scenes/mainScene.js";

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: window.innerWidth,
    height: window.innerHeight,
    pixelArt: true,
    scene: [MainScene]
};


const game = new Phaser.Game(config);
