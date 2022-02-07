class Rectangle {

    constructor(topLeft, topRight, bottomRight, bottomLeft) {
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomRight = bottomRight;
        this.bottomLeft = bottomLeft;
    }


    get perimeter(){
        return this.topLeft.distanceFrom(this.topRight)
             + this.topRight.distanceFrom(this.bottomRight)
             + this.bottomRight.distanceFrom(this.bottomLeft)
             + this.bottomLeft.distanceFrom(this.topLeft); 
    }

    get area(){
        return this.bottomRight.distanceFrom(this.bottomLeft)
             * this.bottomRight.distanceFrom(this.topRight); 
    }

}