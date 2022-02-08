//QUESTA è LA VECCHIA VERSIONE DI JAVASCRIPT E COME SI SCRIVEVA UTILIZZANDO IL PROPTOTYPE
//NELLA PARTE DELLA FUNZIONE METTO IL COSTRUTTORE - ovvero tutte le parti dell'oggetto che cambiano perchè vengono attribuite a run time
//NELLA PARTE SOTTO (fuori dalla funzione) METTO TUTTE LE FUNZIONI CHE MI INTERESSANO.

function Rect(topLeft, bottomRight) {
    this.topLeft = topLeft
    this.bottomRight = bottomRight;
    this.topRight = new Point(this.bottomRight.x, this.topLeft.y);
    this.bottomLeft = new Point(this.topLeft.x, this.bottomRight.y)
}



Rect.prototype.area = function () {
    return this.bottomRight.distanceFrom(this.bottomLeft) * this.bottomRight.distanceFrom(topRight);
}

Rect.prototype.perimeter = function(){
    return this.topLeft.distanceFrom(this.topRight)
         + this.topRight.distanceFrom(this.bottomRight)
         + this.bottomRight.distanceFrom(this.bottomLeft)
         + this.bottomLeft.distanceFrom(this.topLeft); 
}


///CREAZIONE DELLA CLASSE FIGLIA DI RECT CON PROTOTYPE (più complesso della versione senza prototype)
function Squa(topLeft, side) {
    // this.topLeft = topLeft;
    // this.side = side;
    // this.bottomRight = new Point(topLeft.x + side, topLeft.y + side);
    // this.topRight = new Point(this.bottomRight.x, this.topLeft.y);
    // this.bottomLeft = new Point(this.topLeft.x, this.bottomRight.y)

    Rect.call(this, topLeft, new Point(topLeft.x + side, topLeft.y + side));  //il this definisce la creazione dell'oggetto insieme al CALL (come fa il SUPER di extends)
    this.side = side;
    Object.setPrototypeOf(Squa.prototype, Rect.prototype);
}


///CREO IL RETTANGOLO (quadrato) NUOVO E GLI DO IL PROTOTYPE DEL PADRE COSI CHE GLI VENGANO PASSATE TUTTE LE FUNZIONI DI RECT.
// const rect = new Rect(topLeft, side);
// Quad.prototype = rect;


///FINO AD ORA NON FUNZIONA SE NON GLI PASSO DEI PARAMENTRI MA CI SONO DIVERSI MODI PER CREARE IL NUOVO OGGETTO QUAD:
// Object.setPrototypeOf(Quad.prototype, Rect.prototype);                    --> lo riscrivo nel function Quad.