
class MathC{
    
    static calculateDistance(A, B){           //sqrt(xa-xb^2 + ya-yb^2)

        const xDiff = A.x - B.x;
        const xDiff2 = xDiff * xDiff;

        const yDiff = A.y - B.y;
        const yDiff2 = yDiff * yDiff;

        const sumDiff = xDiff2 + yDiff2;
        const sqrtSumDiff = Math.sqrt(sumDiff);

        return sqrtSumDiff;
        
        // return Math.sqrt(Math.pow((A.x - B.x),2) + Math.pow((A.y - B.y),2));
    }


    static medianPoint(A, B){            //(xa+xb)/2    (ya+yb)/2
        
        const xM = (A.x + B.x)/2;
        const yM = (A.y + B.y)/2;

        const pointM = new Point(xM, yM);
        return pointM;

        // return new Point((A.x + B.x)/2, (A.y + B.y)/2);
    }

    static distanceFromOrigin(P){

        const origin = new Point(0, 0);

        return this.calculateDistance(origin, P);
    }

    
    static nearestPoint(startingPoint, ...points){

        let nearestPoint = points[0];

        for (let i = 1; i < points.length; i++) {
            const point = points[i];
        
            if (this.calculateDistance(startingPoint, point) < this.calculateDistance(startingPoint, nearestPoint)) {
                nearestPoint = point;
            }
            
        }
        return nearestPoint;
    }

    

}