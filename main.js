/*
//es.1

var pesoTotale = 0;
var zucchine = [
    {
        'varieta': 'boh',
        'peso': 25,
        'lunghezza': 30
    },
    {
        'varieta': 'boh',
        'peso': 22,
        'lunghezza': 14
    },
    {
        'varieta': 'boh',
        'peso': 28,
        'lunghezza': 42
    },
    {
        'varieta': 'boh',
        'peso': 33,
        'lunghezza': 37
    },
    {
        'varieta': 'boh',
        'peso': 800,
        'lunghezza': 305
    },
    {
        'varieta': 'boh',
        'peso': 200,
        'lunghezza': 122
    },
    {
        'varieta': 'boh',
        'peso': 20,
        'lunghezza': 20
    },
    {
        'varieta': 'boh',
        'peso': 20,
        'lunghezza': 12
    },
    {
        'varieta': 'boh',
        'peso': 20,
        'lunghezza': 13
    },
    {
        'varieta': 'boh',
        'peso': 19,
        'lunghezza': 96
    },
];

for (i = 0; i < zucchine.length; i++) {
    pesoTotale += zucchine[i]['peso'];
}

console.log('Peso totale: ' + pesoTotale);

//es.2

var min15 = [];
var mag15 = [];
var pTmn15 = 0;
var pTmg15 = 0;

for (i = 0; i < zucchine.length; i++) {
    
    if(zucchine[i]['lunghezza'] > 15) {
        mag15.push(zucchine[i]);
    } else {
        min15.push(zucchine[i]);
    }

}

for (i = 0; i < mag15.length; i++) {
    pTmg15 += mag15[i]['peso'];
}

for (i = 0; i < min15.length; i++) {
    pTmn15 += min15[i]['peso'];
}

console.log(min15);
console.log(mag15);

console.log('Peso totale < 15: ' + pTmn15);
console.log('Peso totale > 15: ' + pTmg15);

//es.3 

function reverse(p) {
var reversed = "";

    for (i = p.length - 1; i >= 0; i--) {
        reversed += p[i];
    }

return reversed;    
}
    
var parola;

do {
parola = prompt("Inserisci una parola.");
} while (!isNaN(parola));

console.log(reverse(parola));
*/


//******ESERCIZI ASSEGNATI 12/3/21******

//1)
/*
var nomi = ['Homer', 'Lisa', 'Marge', 'Maggie', 'Bart'];
var cognomi = ['Simpson', 'Burns', 'Szislak', 'Johnson', 'Bouvier'];
var nomeI = '';
var cognomeI = '';
var invitati = [];
var v = 0;

for (i = 0; i < 3; i++) {   
nomeI = nomi[Math.floor(Math.random() * nomi.length)];
cognomeI = cognomi[Math.floor(Math.random() * cognomi.length)];
invitati[i] = nomeI + ' ' + cognomeI;

    for (ii = 0; ii < i; ii++) {
        
        if (invitati[i] == invitati[ii]) {
            i--;
        }

    }

}

for (i = 0; i < 3; i++) {
    console.log('Invitato: ' + invitati[i]);
}
*/

//2)
/*
var num = [3, 5, 7, 22, 46, 96, 101, 8];
var somma = 0;

for (i = 0; i < num.length; i++) {
    
    if (i % 2 != 0) {
        console.log(num[i]);
        somma += num[i];
    }

}

console.log(num);
console.log('Somma dei numeri in posizione "informatica" dispari: ' + somma);
*/

//3)
/*
var numOne = [7, 5, 99, 4, 6, 78, 88, 989, 332];
var numTwo = [111, 222, 333, 444];

console.warn("Lunghezza dei due array prima dell'aggiunta di elementi casuali:");
console.log(numOne.length);
console.log(numTwo.length);


for (i = numTwo.length; i < numOne.length; i++) {
    numTwo[i] = Math.floor((Math.random() * 1000) + 1);
}

console.warn("Lunghezza dei due array dopo l'aggiunta di elementi casuali:");
console.log(numOne.length);
console.log(numTwo.length);
*/

//4)
/*
function merge(l, n) {
    var merged = [];

    for (i = 0; i < l.length; i++) {
        merged.push(l[i]);
        merged.push(n[i]);
    }

    return merged;
}

var lettere = ['a', 'b', 'c'];
var numeri = [1, 2, 3];

console.log(merge(lettere, numeri));
*/

//5)
/*
function between(n, aa, bb) {
    var nn = [];
    //compresi tra a e b esclusi, posizione 'informatica'
    for (i = aa + 1; i < bb; i++) {
        nn.push(n[i]);
    }

    return nn;
}

var num = [0, 1, 2, 3, 4, 5, 6, 7];
var a = 3;
var b = 6;

console.log('Array di elementi in posizione "informatica" tra 3(a) e 6(b) esclusi: ' + between(num, a , b));
*/