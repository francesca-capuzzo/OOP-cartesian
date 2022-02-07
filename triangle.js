// class Triangle{

//     static calculatePerimeter(A, B, C){
//         let distanceAB = MathC.calculateDistance(A, B);
//         let distanceBC = MathC.calculateDistance(B, C);
//         let distanceCA = MathC.calculateDistance(C, A);
//         let perimeter = distanceAB + distanceBC + distanceCA;
//         return perimeter;
//     }

//     static calculateArea(A, B ,C){
//         let perimeter = this.calculatePerimeter(A, B, C);
//         let halfPerimeter = perimeter/2;
//         let distanceAB = MathC.calculateDistance(A, B);
//         let distanceBC = MathC.calculateDistance(B, C);
//         let distanceCA = MathC.calculateDistance(C, A);
//         let area = Math.sqrt((halfPerimeter * (halfPerimeter - distanceAB) * (halfPerimeter - distanceBC) * (halfPerimeter - distanceCA)));
//         return "L'area del triangolo è: " + area.toFixed(2);
//     }
// }

class Triangle {

    constructor(point1, point2, point3) {
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }

    get perimeter() {
        return this.point1.distanceFrom(this.point2) + this.point2.distanceFrom(this.point3) + this.point3.distanceFrom(this.point1);
    }

    get area() {
        const pd2 = this.perimeter / 2;
        const pd2MinusFirstSide = pd2 - this.point1.distanceFrom(this.point2);
        const pd2MinusSecondSide = pd2 - this.point2.distanceFrom(this.point3);
        const pd2MinusThirdSide = pd2 - this.point3.distanceFrom(this.point1);
        return Math.sqrt(pd2 * pd2MinusFirstSide * pd2MinusSecondSide * pd2MinusThirdSide);
    }
}


