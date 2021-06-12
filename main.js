/* 
Kiekviena užduotis turi būti aprašyta kaip atskira funkcija
kuriai yra paduodami duomenys. Aprašykite visas funkcijas žemiau. 
Visas funkcijas iškvieskite vieną po kitos, žemiau šio komentaro.

Taip pat parašykite funkciją kuri: isikviesdama save pačią atspausdina skaičius nuo 1 iki 10



*/

//Rekursija



console.log("Rekursijos užduotis")
rekursija(10);
console.log("kiek yra kavinių?")
kaviniuSkaiciuokle();
console.log("kiek yra kavinių yra Kaune?")
kaunoKavines();
console.log("Kiek pirmoje kavineje yra patiekalu?")
patiekaluSkaiciuokle();
console.log("kiek skirtingų patiekalų yra Kauno filialuose?")
// visuPatiekaluSkaiciuokle();

let keys = Object.keys(data);

//kiek yra kavinių?
function kaviniuSkaiciuokle() {
    let kaviniuSkaicius = 0;
    for (let index = 0; index < Object.keys(data).length; index++) {
        kaviniuSkaicius++;
    }
    console.log(kaviniuSkaicius)
}
// console.log(data[1].kavine)

//kiek yra kavinių yra Kaune?

function kaunoKavines() {
    kaunoSkaicius = 0;
    for (let index = 0; index < Object.keys(data).length; index++) {
        if (data[index].adresas.includes('Kaunas')) {
            kaunoSkaicius++;
        }

    }
    console.log(kaunoSkaicius)
}

//Kiek pirmoje kavineje yra patiekalu?


function patiekaluSkaiciuokle() {
    let pirmas = Object.keys(data[1].menu)
    pirmoPatiekalai = 0;
    for (let index = 0; index < Object.keys(pirmas).length; index++) {
        pirmoPatiekalai++;
    }
    console.log(pirmoPatiekalai)
}

// kiek skirtingų patiekalų yra Kauno filialuose?

hasDuplicates();
function hasDuplicates(data) {
    let pirmas = Object.keys(data[1].menu)
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < Object.keys(pirmas).length; ++i) {
        var value = pirmas[i];
        if (value in valuesSoFar) {
            return true;
        }
        valuesSoFar[value] = true;
    }
    return false;
}

// function visuPatiekaluSkaiciuokle() {
// Object.keys(data).forEach((key) => {
//     console.log(data[key])
// })
// }
// var mapping = data.map()


// Rekursija
function rekursija(counter) {
    if (counter > 0) {
        rekursija(counter - 1);
    }
    console.log(counter);
}