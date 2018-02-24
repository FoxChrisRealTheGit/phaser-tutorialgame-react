export default function playState(){
    return{
        create: function () {
        },
        update: function(){

        },
        win: function(){
            this.game.state.start('win')
        }
    }
}