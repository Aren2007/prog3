let LivingCreator = require('./LivingCreator')

module.exports =class Grass extends LivingCreator{
    constructor(x, y) {
       super(x, y)
               
      
    }
    
    mul() {
        this.multiply++;
        if(this.multiply >=5){
            let emptyCells = super.chooseCell(0)
            let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if(this.multply >= 5 && newCell){
            let x = newCell[0]
            let y = NewCell[1]
            var gr = new Grass(x, y, 1)
            grassArr.push(gr)
            this.multiply = 0;
        }
        }  
       
}
}


