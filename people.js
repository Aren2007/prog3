class People extends LivingCreator{
    constructor(x, y) {
      super(x, y)
        this.energy = 8
        
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

    mine() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;

            var newMine = new Mine(newX, newY);
            mineArr.push(newMine);
            this.energy = 8
        }
    }

    move() {
        this.energy--
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        if(newCell && this.energy >= 0) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 3 tiv@
            matrix[this.y][this.x] = 0 
            this.y = newY
            this.x = newX
        } else {
            this.die()
        }
    }
    

    eat() {
        var emptyCells = this.chooseCell(4);
        var newCell = random(emptyCells);
        if(newCell) {
            this.energy++
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = matrix[this.y][this.x] ///kam 3 tiv@
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            for (var i in zombiArr) {
                if (newX == zombiArr[i].x && newY == zombiArr[i].y) {
                     zombiArr.splice(i, 1);
                    break;
                }
            }
            
            if(this.energy >= 10) {
                this.mine()
            }
        } else {
            this.move()
        }
    }
    die() {
        matrix[this.y][this.x] = 0
        for (var i in peopleArr) {
            if (this.x == peopleArr[i].x && this.y == peopleArr[i].y) {
                peopleArr.splice(i, 1);
                break;
            }
        }
    }
}