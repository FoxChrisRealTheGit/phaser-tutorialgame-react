export default function loadState(){
    return{
        preload: function () {
           //load images

           //load audio
        },
        create: function () {
            this.game.state.start('menu')
        }
    }
}