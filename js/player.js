// Player class will need to draw and update the player character, so it will take the entire game object as an argument
// When passing the game object it does not create a copy of the game object, it only points to it
class Player {
    constructor(game){
        this.game = game

    }
}