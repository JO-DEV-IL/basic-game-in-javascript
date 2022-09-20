// Player class will need to draw and update the player character, so it will take the entire game object as an argument
// player.js will keep track of player changes

// When passing the game object it does not create a copy of the game object, it only points to it
export class Player {
    constructor(game){
        this.game = game
        this.width = 100
        this.height = 91.3
        this.x = 0
        this.y = this.game.height - this.height // positions the player at the bottom left of the canvas space
        this.image = document.getElementById('player')
        this.speed = 0
        this.maxSpeed = 10
        this.velocity = 0
        this.weight = 1
    }
    
    update(input){
        // horizontal movement
        this.x += this.speed
        if(input.includes('ArrowRight')){
            this.speed = this.maxSpeed
        }else if(input.includes('ArrowLeft')){
            this.speed = -this.maxSpeed
        }else{
            this.speed = 0
        }

        //vertical movement
        if(input.includes('ArrowUp') && this.onGround()){
            this.velocity -= 30
        }
        this.y += this.velocity
        if(!this.onGround()){
            this.velocity += this.weight
        }else{
            this.velocity = 0
        }

        // player boundry to keep from running off the canvas
        if(this.x < 0){
            this.x = 0
        }else if(this.x > this.game.width - this.width){
            this.x = this.game.width - this.width
        }
    }
    draw(context){
        context.fillStyle = 'white' // This line controls player space
        context.fillRect(this.x,this.y,this.width,this.height)
        context.drawImage(this.image,0,0,this.width,this.height,this.x,this.y,this.width,this.height) // Crops out first image in player sprite sheet
    }
    
    //simple boolean utility function to determine is player is in the air or not
    onGround(){
        return this.y >= this.game.height - this.height
    }
}