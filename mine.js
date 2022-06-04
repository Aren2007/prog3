class Mine extends LivingCreator {
    constructor(x, y) {
        
        super(x, y)
        this.energy = 0
       
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
       

        return super.chooseCell(character);
    }

   


    boom() {
        var emptyCells = this.chooseCell(4);
        var newCell = random(emptyCells);
        if(newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            for (var i in zombiArr) {
                if (newX == zombiArr[i].x && newY == zombiArr[i].y) {
                    zombiArr.splice(i, 1);
                    break;
                }
            }
            
            if(this.energy >= 1) {
                this.die()
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in mineArr) {
            if (this.x == mineArr[i].x && this.y == mineArr[i].y) {
                mineArr.splice(i, 1);
                break;
            }
        }
    }
}