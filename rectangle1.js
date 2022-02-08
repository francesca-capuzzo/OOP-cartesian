class Rectangle1 {

    constructor(point1, width, height) {
        this.topLeft = point1;
        this._width = width;
        this._height = height;

        this.topRight = new Point(this.topLeft.x + width, this.topLeft.y)
        this.bottomRight = new Point(this.topLeft.x + width, this.topLeft.y + height)
        this.bottomLeft = new Point(this.topLeft.x, this.topLeft.y + height)
    }


    get height(){
        return this._height;
    }

    set height(value){
        this._height = value;
        this.bottomRight = new Point(this.topLeft.x + this._width, this.topLeft.y + this._height)
        this.bottomLeft = new Point(this.topLeft.x, this.topLeft.y + this._height)
    }

    // get topRight(){
    //     return new Point(this.topLeft.x + this.width, this.topLeft.y)
    // }

    // get bottomRight(){
    //     return new Point(this.topLeft.x + this.width, this.topLeft.y + this.height)
    // }

    // get bottomLeft(){
    //     return new Point(this.topLeft.x, this.topLeft.y + this.height)
    // }


    get perimeter(){
        // return this.topLeft.distanceFrom(this.topRight)
        //      + this.topRight.distanceFrom(this.bottomRight)
        //      + this.bottomRight.distanceFrom(this.bottomLeft)
        //      + this.bottomLeft.distanceFrom(this.topLeft); 
        return (this.width + this.height) * 2;
    }

    get area(){
        // return this.bottomRight.distanceFrom(this.bottomLeft)
        //      * this.bottomRight.distanceFrom(this.topRight);
        return this.width * this.height;
    }

}