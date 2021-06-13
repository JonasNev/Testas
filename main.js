
// Užduotys

// 1. kiek yra kavinių?
// 2. kiek yra kavinių yra Kaune?
// 3. kiek pirmoje kavinėje yra patiekalų?
// 4. kiek skirtingų patiekalų yra Kauno filialuose?
// 5. Kokia vidutinė patiekalų kaina tinkle? (2 sk po kablelio)
// 6. Ar vidudinė patiekalų kaina Kauno filialuose aukštesnė už vidutinę patiekalų kainą kituose filialuose?
// 7. Kiek procentų patiekalų yra vegetariški? (visame tinkle 2 sk po kablelio)
// 8. Ar Vilniuje procentaliai daugiau vegetariškų patiekalų nei kituose miestuose?
ParodoKiekYraKaviniu(data);
KiekYraKaviniuKaune(data);
SuskaiciuojaKiekYraPatiekaluPirmojeKavineje(data);
KiekSkirtinguPatiekaluYraKaunoFilialuose(data);
VisuPatiekaluKainuVidurkioSkaiciavimas(data);
ArVidutineKainaKauneAukstesneUzKituFilialu(data);
KiekProcentuPatiekaluYraVegetariski(data);
ArVilniujeDaugiauVegetariskuPatiekaluNeiKituoseMiestuose(data);


function ParodoKiekYraKaviniu() {
    console.log("Kavinių skaičius yra " + data.length)
}

function KiekYraKaviniuKaune(data) {
    let kaunoKavines = 0;
    for (let index = 0; index < data.length; index++) {
        if (data[index].adresas.toLowerCase().includes("kaunas")) {
            kaunoKavines++;
        }

    }
    console.log("Kavinių skaičius kaune yra " + kaunoKavines)
}

function SuskaiciuojaKiekYraPatiekaluPirmojeKavineje() {
    let pirmaKavine = data[0].menu;
    let patiekaluSkaicius = 0;
    for (let index = 0; index < pirmaKavine.length; index++) {
        patiekaluSkaicius++;
    }
    console.log("Patiekalų skaičius pirmoje kavinėje yra " + patiekaluSkaicius)
}

function KiekSkirtinguPatiekaluYraKaunoFilialuose() {
    var skirtingiPatiekai = [];
    let patiekaluSkaicius = 0;
    data.forEach(kavine => {
        if (kavine.adresas.toLowerCase().includes("kaunas")) {
            kavine.menu.forEach(patiekalas => {
                if (skirtingiPatiekai.includes(Object.keys(patiekalas)[0])) {
                    patiekaluSkaicius++;
                } else {
                    skirtingiPatiekai.push(Object.keys(patiekalas)[0]);
                }
            });
        }
    });
    console.log("Patiekalų skaičius Kauno filialuose yra " + skirtingiPatiekai.length)
}

function VisuPatiekaluKainuVidurkioSkaiciavimas() {
    let kaina = 0;
    let count = 0;
    data.forEach(kavine => {
        kavine.menu.forEach(patiekalas => {
            kaina += Object.values(patiekalas)[0];
            count++;
        });
    });
    let vidurkis = kaina / count;
    vidurkis = vidurkis.toFixed(2);
    console.log("Vidutinė patiekalų kaina tinkle yra " + vidurkis)
}

function ArVidutineKainaKauneAukstesneUzKituFilialu() {
    let kaunoKaina = 0;
    let kaunoPatiekalai = 0;
    let kituKaina = 0;
    let kituPatiekalai = 0
    data.forEach(kavine => {
        if (kavine.adresas.toLowerCase().includes("kaunas")) {
            kavine.menu.forEach(patiekalas => {
                kaunoKaina += Object.values(patiekalas)[0];
                kaunoPatiekalai++;
            });
        } else {
            kavine.menu.forEach(patiekalas => {
                kituKaina += Object.values(patiekalas)[0];
                kituPatiekalai++;
            });
        }
    });
    let kaunoVidurkis = (kaunoKaina / kaunoPatiekalai).toFixed(2);
    let kituVidurkis = (kituKaina / kituPatiekalai).toFixed(2);
    if (kaunoVidurkis > kituVidurkis) {
        console.log("Kauno patiekalų vidutinė kaina didesnė už kitų filialų")
    } else {
        console.log("Kitų filialų vidutinė kaina didesnė už Kauno")
    }
}

function KiekProcentuPatiekaluYraVegetariski() {
    let vegetariskiPatiekalai = 0;
    let neVegetariskiPatiekalai = 0;
    data.forEach(kavine => {
        kavine.menu.forEach(patiekalas => {
            if (Object.values(patiekalas)[1] == 'taip') {
                vegetariskiPatiekalai++;
            } else {
                neVegetariskiPatiekalai++;
            }
        });
    });
    let visiPatiekalai = neVegetariskiPatiekalai + vegetariskiPatiekalai;
    let vegetariskuProcentas = ((vegetariskiPatiekalai / visiPatiekalai) * 100).toFixed(2);
    console.log("Iš visų patiekalų, vegetariškų patiekalų procentas yra " + vegetariskuProcentas)
}

function ArVilniujeDaugiauVegetariskuPatiekaluNeiKituoseMiestuose() {
    let vegetariskiVilniausPatiekalai = 0;
    let neVegetariskiPatiekalai = 0;
    let visiVegetariski = 0;
    data.forEach(kavine => {
        if (kavine.adresas.includes("Vilnius")) {
            kavine.menu.forEach(patiekalas => {
                if (Object.values(patiekalas)[1] == 'taip' ) {
                    vegetariskiVilniausPatiekalai++;
                    visiVegetariski++;
                }
            });
        }else{
            kavine.menu.forEach(patiekalas => {
                if (Object.values(patiekalas)[1] == 'taip') {
                    neVegetariskiPatiekalai++;
                    visiVegetariski++;
                }
            });
        }
    });
    let vilniusProcentas = ((vegetariskiVilniausPatiekalai/visiVegetariski) *100).toFixed(2)
    let kitiProcentas = ((neVegetariskiPatiekalai/visiVegetariski) *100).toFixed(2)
    if (vilniusProcentas > kitiProcentas) {
        console.log("Vilniuje didesnis procentas vegetariškų patiekalų")
    }else{
        console.log("Kituose miestuose didesnis procentas vegetariškų patiekalų")
    }

}

// kavine.menu.forEach(patiekalas => {
//     if (Object.values(patiekalas)[1] == 'taip') {
//         neVegetariskiPatiekalai++
//     }
// });