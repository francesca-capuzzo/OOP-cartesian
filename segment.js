class Segment{
    // constructor(pointA, pointB){
    //     this.pointA = pointA;
    //     this.pointB = pointB;
    // }

    // get lenght(){
    //     return this.pointA.distanceFrom(this.pointB);
    // }

    // get median(){
    //     return this.pointA.medianPointFromPoint(this.point2);
    // }


    static calculateLenght(A, B){
        let length = MathC.calculateDistance(A, B);
        return length;
    }


    static calculateMedianPoint(A, B){
        let median = MathC.medianPoint(A, B);
        return median;
    }
}