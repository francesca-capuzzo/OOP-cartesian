const pointA = new Point(3, 5);

const pointB = new Point(6, 1);

const pointC = new Point(7, 1);

const pointD = new Point(3, 6);

const pointE = new Point(1, 1);

const pointF = new Point(-2, 1);


const distance = MathC.calculateDistance(pointA, pointB);
console.log(distance);

const medianPoint = MathC.medianPoint(pointA, pointB);
console.log(medianPoint);

const distanceOrigin = MathC.distanceFromOrigin(pointA);
console.log(distanceOrigin);

const distanceOrigin2 = MathC.distanceFromOrigin(pointB);
console.log(distanceOrigin2);

const nearest = MathC.nearestPoint(pointA, pointB, pointC, pointD, pointE, pointF);
console.log(nearest);

//GENERALIZZANDO:

const distanceFromB = pointA.distanceFrom(pointB);
console.log(distanceFromB);

const distanceFromOriginA = pointA.distanceFromOrigin();
console.log(distanceFromOriginA);
const distanceFromOriginB = pointB.distanceFromOrigin();
console.log(distanceFromOriginB);

const medianFromB = pointA.medianPointFromPoint(pointB);
console.log(medianFromB);


const nearestToA = pointA.nearestPoint(pointB, pointC, pointD, pointE);
console.log(nearestToA);


//CALCOLO TRIANGOLO:

const perimeter = Triangle.calculatePerimeter(pointA, pointB, pointE);
console.log("Il perimetro del triangolo è: " + perimeter.toFixed(2));

const area = Triangle.calculateArea(pointA, pointB, pointE);
console.log(area);


//CALCOLO SEGMENTO:

const lenght = Segment.calculateLenght(pointA, pointB);
console.log("La lunghezza del segmento è: " + lenght);

const median = Segment.calculateMedianPoint(pointA, pointB);
console.log(median);