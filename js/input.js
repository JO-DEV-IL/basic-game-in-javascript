// input.js will keep track of user input

export class InputHandler{
    constructor(){
        this.keys = []
        window.addEventListener('keydown', e => {
            console.log(e.key,this.keys)
            
            //If select keys are pressed (on keydown) && isn't already present in [this.keys], push key value into the array
            if((
                e.key === 'ArrowDown' || 
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Enter')
                && this.keys.indexOf(e.key) === -1){
                this.keys.push(e.key)
            }
        })
        
        //If select keys are pressed (on keyup) && is present in [this.keys], splice key value out of the array
        window.addEventListener('keyup', e => {
            if(
                e.key === 'ArrowDown' || 
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Enter'){
                this.keys.splice(this.keys.indexOf(e.key),1)
            }
            console.log(e.key,this.keys)
        })
    }
}