class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    distanceFrom(point){
        let xDiff = this.x - point.x;
        let xDiff2 = xDiff * xDiff;

        let yDiff = this.y - point.y;
        let yDiff2 = yDiff * yDiff;

        let sumDiff2 = xDiff2 + yDiff2;
        let sqrtSumDiff = Math.sqrt(sumDiff2);
        
        return sqrtSumDiff;
    }


    distanceFromOrigin(){
        const origin = new Point(0, 0);
        return this.distanceFrom(origin);
    }

    medianPointFromPoint(point){
        let xM = (this.x + point.x)/2;
        let yM = (this.y + point.y)/2;

        const pointM = new Point(xM, yM);
        return pointM;
    }


    nearestPoint(...points){
        let nearest = points[0];
        for (let i = 0; i < points.length; i++) {
            const point = points[i];
            if (this.distanceFrom(point) < this.distanceFrom(nearest)) {
                nearest = point;
            }
        }
        return nearest;
    }
}