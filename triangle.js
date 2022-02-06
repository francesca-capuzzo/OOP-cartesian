class Triangle{

    static calculatePerimeter(A, B, C){
        let distanceAB = MathC.calculateDistance(A, B);
        let distanceBC = MathC.calculateDistance(B, C);
        let distanceCA = MathC.calculateDistance(C, A);
        let perimeter = distanceAB + distanceBC + distanceCA;
        return perimeter;
    }

    static calculateArea(A, B ,C){
        let perimeter = this.calculatePerimeter(A, B, C);
        let halfPerimeter = perimeter/2;
        let distanceAB = MathC.calculateDistance(A, B);
        let distanceBC = MathC.calculateDistance(B, C);
        let distanceCA = MathC.calculateDistance(C, A);
        let area = Math.sqrt((halfPerimeter * (halfPerimeter - distanceAB) * (halfPerimeter - distanceBC) * (halfPerimeter - distanceCA)));
        return "L'area del triangolo è: " + area.toFixed(2);
    }
}
