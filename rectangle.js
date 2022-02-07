class Rectangle{
    constructor(point1, point2, point3, point4){
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
        this.point4 = point4;
    }

    get perimeter(){
        let A = this.point1.distanceFrom(this.point2);
        let B = this.point2.distanceFrom(this.point3);
        let C = this.point3.distanceFrom(this.point4);
        let D = this.point4.distanceFrom(this.point1);
        let perim = A + B + C + D;
        return perim;
    }
}