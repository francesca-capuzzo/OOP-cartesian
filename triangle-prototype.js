function Tria(p1, p2, p3){
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
}

Tria.prototype.perimeter = function(){
    return this.p1.distanceFrom(this.p2) + this.p2.distanceFrom(this.p3) + this.p3.distanceFrom(this.p1);
}


Tria.prototype.area = function(){
    const pdHalf = this.perimeter() / 2;                                               //-------> ESSENDO UNA FUNZIONE SENZA NOME (il perimetro), VA CHIAMATA LA FUNZIONE E NON PIù SOLO IL NOME DELLA FUNZIONE
    const pdHalfMinusFirst = pdHalf - this.p1.distanceFrom(this.p2);
    const pdHalfMinusSecond = pdHalf - this.p2.distanceFrom(this.p3);
    const pdHalfMinusThird = pdHalf - this.p3.distanceFrom(this.p1);
    return Math.sqrt(pdHalf * pdHalfMinusFirst * pdHalfMinusSecond * pdHalfMinusThird);

}


function RightTri(p1, p2, p3){
    Tria.call(this, p1, p2, p3);
    Object.setPrototypeOf(RightTri.prototype, Tria.prototype);
}


RightTri.prototype.calculateHypo = function(){
    const cat1 = this.p1.distanceFrom(this.p2);
    const cat2 = this.p2.distanceFrom(this.p3);
    const hypotenuse = Math.sqrt(Math.pow(cat1, 2) + Math.pow(cat2, 2));
    return hypotenuse;
}
