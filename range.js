
//TEORIA NEL MAIN DA LINEA 153 IN GIù:    ---> CREARE OGGETTI CICLABILI  ---> devo aggiungere la funzione chiave [SYMBOL] + ciò che devo fare [ITERATOR]

class Range{
    constructor(start, end, step){
        this.start = start;
        this.end = end;
        this.step = step;
    }

    [Symbol.iterator](){                   // ---> ALL'INTERNO DELL'ITERATOR DEVE PER FORZA AVERE UNA FUNZIONE CHIAMATA NEXT(): --> 
        const iterator = {};
        let currentValue = this.start;
        iterator.next = () => {
            const returnObject = {};
            if (currentValue < this.end) {
                returnObject.value = currentValue;
                currentValue += this.step;
                returnObject.done = false;
            } else {
                returnObject.done = true;
            }
            return returnObject;
        }
        return iterator;
    }
}

//ogni volta che chiama next crea un returnObject --> al primo giro returnObject.value = 0 ---> poi diventa 0 + 2(step) = 2 --> returnObject.done ? NO ---> allora continua se currentValue è minore del valore END.
