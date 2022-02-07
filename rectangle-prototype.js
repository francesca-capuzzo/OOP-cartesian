//QUESTA è LA VECCHIA VERSIONE DI JAVASCRIPT E COME SI SCRIVEVA UTILIZZANDO IL PROPTOTYPE
//NELLA PARTE DELLA FUNZIONE METTO IL COSTRUTTORE - ovvero tutte le parti dell'oggetto che cambiano perchè vengono attribuite a run time
//NELLA PARTE SOTTO (fuori dalla funzione) METTO TUTTE LE FUNZIONI CHE MI INTERESSANO.

function Rect(topLeft, botomRight) {
    this.topLeft = topLeft
    this.botomRight = botomRight;
    this.topRight = new Point(this.bottomRight.x, this.topLeft.y);
    this.bottomLeft = new Point(this.topLeft.x, this.bottomRight.y)
    
}


Rect.prototype.area = function () {
    return this.bottomRight.distanceFrom(this.bottomLeft) * this.bottomRight.distanceFrom(topRight);
}

function Quad(topLeft, side) {
    this.topLeft = topLeft;
    this.side = side;
    this.bottomRight = new Point(topLeft.x + side, topLeft.y + side);
}


const rect = new Rect(topLeft, side);
Quad.prototype = rect;