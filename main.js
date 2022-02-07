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

// const perimeter = Triangle.calculatePerimeter(pointA, pointB, pointE);
// console.log("Il perimetro del triangolo è: " + perimeter.toFixed(2));

// const area = Triangle.calculateArea(pointA, pointB, pointE);
// console.log(area);

const point1 = new Point(1, 1);
const point2 = new Point(1, 5);
const point3= new Point(4, 1);

const tri1 = new Triangle(point1, point2, point3);

console.log(tri1.perimeter);

console.log(tri1.area);


//CALCOLO SEGMENTO:

const lenght = Segment.calculateLenght(pointA, pointB);
console.log("La lunghezza del segmento è: " + lenght);

const median = Segment.calculateMedianPoint(pointA, pointB);
console.log(median);


//CALCOLO RETTANGOLO:

// const rectangle = new Rectangle(pointA, pointB, pointC, pointD);

// console.log(rectangle.perimeter);

const topLeft = new Point(1, 6);
const topRight = new Point(8, 6);
const bottomRight = new Point(8, 1);
const bottomLeft = new Point(1, 1);

const rect1 = new Rectangle(topLeft, topRight, bottomRight, bottomLeft);

console.log(rect1.perimeter);

console.log(rect1.area);






////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OGGETTO MAP()

const mappa = new Map();
//la classe MAP è intrinseca a Javascript (non bisogna crearla) ed è composta da KEY:VALUE pairs..... 
//ma a differenza dell'oggetto, dove la chiave è sempre una stringa, nella mappa può essere qualsiasi cosa!!
//inoltre una mappa mantiene sempre l'ordine di ingresso degli oggetti (come sono stati scritti).

mappa.set(1, "pluto");
mappa.set(2, "pippo");

//se scrivo mappa.set(1, topolino); -----> mi sovrascriverà il primo valore "pluto"
//se scrivo mappa.set(3, pluto);    -----> mi manterrà entrambi i valori uguali "pluto" ma a due KEY diverse (1, 3)

console.log(mappa);

//inoltre sembra un oggetto ma usa una freccia tra i key:value pairs e li scrive come key -> value