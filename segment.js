class Segment{


    static calculateLenght(A, B){
        let length = MathC.calculateDistance(A, B);
        return length;
    }


    static calculateMedianPoint(A, B){
        let median = MathC.medianPoint(A, B);
        return median;
    }
}