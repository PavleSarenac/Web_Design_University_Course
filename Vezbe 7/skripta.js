let korpa = [];
function pokupiInformacije() {
    let storageKorpa = localStorage.getItem("korpa");
    if (storageKorpa == null) {
        localStorage.setItem("korpa", korpa);
    } else {
        let tekstKorpe = storageKorpa; // u localStorage se sve cuva kao string
        korpa = tekstKorpe.split(",");
    }
}

function popuniStranicu() {
    let artikli = document.getElementById("artikli");
    for (let i = 1; i <= 10; i++) {
        let slika = document.createElement("img");
        slika.src = "images/artikal_" + i + ".jpg";
        slika.id = "artikal_" + i;
        if (i <= 3) slika.className = "nike";
        else if (i <= 5) slika.className = "adidas";
        else if (i <= 8) slika.className = "puma";
        else if (i <= 10) slika.className = "skechers";
        artikli.appendChild(slika);
    }
}

function prikaziKorpu() {
    alert(localStorage.getItem("korpa"));
}

function isprazniKorpu() {
    korpa = [];
    localStorage.setItem("korpa", "");
}

function filtriraj() {
    let nizBrendovaZaSakrivanje = [];
    let poljaZaStikliranje = document.querySelectorAll("input[type = 'checkbox']");
    poljaZaStikliranje.forEach(element => {
        if (!element.checked) nizBrendovaZaSakrivanje.push(element.id);
    });

    let nizSlika = document.querySelectorAll("img");
    nizSlika.forEach(slika => {
        if (nizBrendovaZaSakrivanje.includes(slika.className)) {
            slika.style.display = "none";
        } else {
            slika.style.display = "inline-block";
        }
    });
}

function dodajDogadjaje() {
    document.getElementById("prikaz").addEventListener("click", prikaziKorpu);
    document.getElementById("isprazni").addEventListener("click", isprazniKorpu);
    document.getElementById("filter").addEventListener("click", filtriraj);

    let nizSlika = document.getElementsByTagName("img");
    for (let i = 0; i < nizSlika.length; i++) {
        nizSlika[i].addEventListener("click", function() {
            klikNaSliku(nizSlika[i].id);
        });
    }
}

function klikNaSliku(ime) {
    korpa.push(ime);
    localStorage.setItem("korpa", korpa);
}

function inicijalizujProdavnicu() {
    pokupiInformacije();
    popuniStranicu();
    dodajDogadjaje();
}