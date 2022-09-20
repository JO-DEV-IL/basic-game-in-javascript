// Player class will need to draw and update the player character, so it will take the entire game object as an argument
//player.js will keep track of player changes

// When passing the game object it does not create a copy of the game object, it only points to it
export class Player {
    constructor(game){
        this.game = game
        this.width = 100
        this.height = 91.3
        this.x = 0
        this.y = this.game.height - this.height // positions the player at the bottom left of the canvas space
        this.image = document.getElementById('player')
    }
    update(){
        //this.x++
    }
    draw(context){
        context.fillStyle = 'white' // This line controls player space
        context.fillRect(this.x,this.y,this.width,this.height)
        context.drawImage(this.image,0,0,this.width,this.height,this.x,this.y,this.width,this.height) // Crops out first image in player sprite sheet
    }
}