class Entity extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key, type){
        super(scene, x, y, key)
        this.scene = scene
        this.scene.add.existing(this)
        this.scene.physics.world.enableBody(this, 0)
        this.setData('type', type)
        this.setData('isDead', false)
    }
}

class Gem extends Entity {
    constructor(scene,x,y,key){
        super(scene,x,y,key,'Gem')
        this.setData('speed', 200)
        this.setScale(0.2)
        this.play('appear')
        this.chain(['spin','disappear','added'])
    }
}