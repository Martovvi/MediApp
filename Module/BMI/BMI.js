
function evaluateBMI(bmi){
    var bmiKlasse = bmiTable(bmi);
    return "Damit bist du "+'\n'+bmiKlasse;
}

//Ordnet den berechneten Werten eine passende Ausgabe zu.
function bmiTable(bmi){
    switch(true){
        case bmi<16.00:
            return 'stark untergewichtig.'

        case bmi>=16.00 && bmi <= 16.99:
            return 'mäßig untergewichtig.'

        case bmi>=17.00 && bmi <= 18.49:
            return 'leicht untergewichtig.'

        case bmi>=18.50 && bmi <= 24.99:
            return 'normalgewichtig.'

        case bmi>=25.00 && bmi <= 29.99:
            return 'übergewichtig.'

        case bmi>=30.00 && bmi <= 34.99:
            return 'im Bereich Adipositas Grad 1.'

        case bmi>=35.00 && bmi <= 39.99:
            return 'im Bereich Adipositas Grad 2.'

        case bmi>=40.00:
            return 'im Bereich Adipositas Grad 3.'
    }
}

export {evaluateBMI};