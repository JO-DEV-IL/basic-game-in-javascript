//Import
import { Player } from './player.js'
import { InputHandler } from './input.js'

// Load event
//JS will wait until all img assets are fully loaded before running
window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')
    canvas.width = 500
    canvas.height = 500
 
    class Game{
        constructor(width,height){
            this.width = width
            this.height = height
            this.player = new Player(this)
            this.input = new InputHandler()
        }
        update(){
            this.player.update(this.input.keys)
        }
        draw(context){
            this.player.draw(context)
        }
    }

    const game = new Game(canvas.width,canvas.height)
    console.log(game)

    // Animation loop
    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height) // Clears canvas everytime we 'draw' something as to not leave old trails
        game.update()
        game.draw(ctx)
        requestAnimationFrame(animate)
    }
    animate()
})