function resetujGreske() {
    document.getElementById("korisnickoImeGreska").innerHTML = "";
    document.getElementById("mejlGreska").innerHTML = "";
    document.getElementById("telefonGreska").innerHTML = "";
    document.getElementById("lozinkaGreska").innerHTML = "";
    document.getElementById("potvrdaLozinkeGreska").innerHTML = "";
}

let nizKorisnika = [
    {
        korisnickoIme : "_",
        mejl : "_",
        telefon : "_",
        lozinka : "_"
    }
];

function prijaviSe() {
    document.getElementById("korisnickoImeGreska").innerHTML = "";
    document.getElementById("lozinkaGreska").innerHTML = "";

    let korisnickoIme = document.getElementById("korisnickoIme").value;
    let lozinka = document.getElementById("lozinka").value;

    for (let i = 0; i < nizKorisnika.length; i++) {
        if (korisnickoIme == nizKorisnika[i].korisnickoIme) {
            if (lozinka == nizKorisnika[i].lozinka) {
                window.location.href = "prodavnica.html";
            } else {
                document.getElementById("lozinkaGreska").innerHTML = "Lozinka nije ispravna.";
                return;
            }
        }
    }
    document.getElementById("korisnickoImeGreska").innerHTML = "Korisnicko ime ne postoji.";
}

function inicijalizujPodatke() {
    let korisnici = localStorage.getItem("korisnici");
    if (korisnici != null) {
        nizKorisnika = JSON.parse(korisnici);
    } else {
        localStorage.setItem("korisnici", JSON.stringify(nizKorisnika));
    }
}

function registrujSe() {
    resetujGreske();

    let korisnickoIme = document.getElementById("korisnickoIme").value;
    let mejl = document.getElementById("mejl").value;
    let telefon = document.getElementById("telefon").value;
    let lozinka = document.getElementById("lozinka").value;
    let potvrdaLozinke = document.getElementById("potvrdaLozinke").value;

    if (/^[a-zA-Z]\w*$/.test(korisnickoIme) == false) {
        document.getElementById("korisnickoImeGreska").innerHTML = "Korisnicko ime nije u dobrom formatu.";
    } else if (/^\w+@[a-z]+\.[a-z]{2,3}$/.test(mejl) == false) {
        document.getElementById("mejlGreska").innerHTML = "Mejl nije u dobrom formatu.";
    } else if (/^\+381 6\d \d{3}-\d{3,4}$/.test(telefon) == false) {
        document.getElementById("telefonGreska").innerHTML = "Telefon nije u dobrom formatu.";
    } else if (
        /^.{6,}$/.test(lozinka) == false || // da li je cela lozinka duzine bar 6 karaktera
        /[a-z]/.test(lozinka) == false ||  // da li u lozinci postoji makar jedno malo slovo bilo gde u stringu
        /[A-Z]/.test(lozinka) == false ||  // da li u lozinci postoji makar jedno veliko slovo bilo gde u stringu
        /\d/.test(lozinka) == false // da li u lozinci postoji makar jedna cifra bilo gde u stringu
    ) {
        document.getElementById("lozinkaGreska").innerHTML = "Lozinka nije u dobrom formatu.";
    } else if (lozinka != potvrdaLozinke) {
        document.getElementById("potvrdaLozinkeGreska").innerHTML = "Polja lozinke i potvrde lozinke se ne podudaraju.";
    }

    if (!proveriJedinstvenost(korisnickoIme)) {
        document.getElementById("korisnickoImeGreska").innerHTML = "Korisnicko ime je zauzeto.";
        return;
    }
    dodajKorisnika(korisnickoIme, mejl, telefon, lozinka);
}

function proveriJedinstvenost(ime) {
    for (let i = 0; i < nizKorisnika.length; i++) {
        if (ime == nizKorisnika[i].korisnickoIme) {
            return false;
        }
    }
    return true;
}

function dodajKorisnika(ime, m, t, l) {
    nizKorisnika.push(
        {
            korisnickoIme : ime,
            mejl : m,
            telefon : t,
            lozinka : l
        }
    );

    localStorage.setItem("korisnici", JSON.stringify(nizKorisnika));
}