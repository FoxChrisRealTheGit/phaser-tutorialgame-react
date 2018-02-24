export default function loadState(){
    return{
        preload: function () {
           //load images
           this.game.load.image('sky', 'img/sky.jpg');
           this.game.load.image('player','img/player.png');
           this.game.load.image('bullet1', 'img/bullet1.png');
            this.game.load.image('enemy', 'img/enemy.png');
           //load audio
        },
        create: function () {
            this.game.state.start('play')
        }
    }
}