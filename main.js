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
]

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
var reversed = [];

        for (i = p.length - 1; i >= 0; i--) {
            reversed[p.length - (i + 1)] = p[i];
        }

return reversed.join('');    
}
    
var parola;

do {
parola = prompt("Inserisci una parola.");
} while (!isNaN(parola));

console.log(reverse(parola));
