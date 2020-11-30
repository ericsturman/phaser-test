import Phaser from "phaser"
import image from "./dvd200.png"

var config = {
    type: Phaser.AUTO,
    width: window.innerWidth - 20,
    height: window.innerHeight - 20,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

function printSize() {
    const timeout = 200
    setTimeout(() => {
        location.reload()
    }, timeout);
    
}

window.addEventListener('resize', printSize);

var game = new Phaser.Game(config);

function preload ()

{
    this.load.image('dvd', image);
}

function create ()
{
    var logo = this.physics.add.image(200, 100, 'dvd');

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    emitter.startFollow(logo);
}
