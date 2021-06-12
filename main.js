/* 
Kiekviena užduotis turi būti aprašyta kaip atskira funkcija
kuriai yra paduodami duomenys. Aprašykite visas funkcijas žemiau. 
Visas funkcijas iškvieskite vieną po kitos, žemiau šio komentaro.

Taip pat parašykite funkciją kuri: isikviesdama save pačią atspausdina skaičius nuo 1 iki 10

*/





kaviniuSkaiciuokle();
kaunoKavines();
patiekaluSkaiciuokle();


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

