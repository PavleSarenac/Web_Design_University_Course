// alert("obavestenje");
// document.write("<h1>Naslov 1</h1>");

function igrajIgru() {
    let rezultat = 0;
    while (true) {
        // let nivo = document.mojaForma.nivo.value;
        let nivo = document.getElementById("nivo").value;
        let negativno = document.getElementById("negativni").checked;
        let brojA = Math.floor((Math.random() - (negativno ? 0.5 : 0)) * Math.pow(10, nivo));
        let brojB = Math.floor((Math.random() - (negativno ? 0.5 : 0)) * Math.pow(10, nivo));
        alert("Koliko je " + brojA + " + " + brojB + "?");
        let odgovor = prompt("Unesite rezultat");
        if (odgovor == null) {
            let napusti = confirm("Da li zelite da napustite igru?");
            if (napusti) break;
            else continue;
        }
        odgovor = parseInt(odgovor);
        if (brojA + brojB == odgovor) {
            alert("Tacan odgovor");
            rezultat += 50;
        } else {
            alert("Netacan odgovor");
            break;
        }
    }
    dodajRezultat(rezultat);
}

function dodajRezultat(rezultat) {
    let tekstRezultata = document.getElementById("rezultati").innerText;
    let rezultati = tekstRezultata.split(",");
    rezultati.push(rezultat);
    rezultati.sort(komparator);
    document.getElementById("rezultati").innerHTML = rezultati;
}

function komparator(a, b) {
    return parseInt(a) - parseInt(b);
}

let imena = [];
function dodajIme() {
    let ime = document.getElementById("ime").value;
    imena.push(ime);
    imena.sort(komparator);
    document.getElementById("imena").innerHTML = imena;
}

let hendler;
function zapocni() {
    hendler = setInterval(stoperica, 1000);
}

function zaustavi() {
    clearInterval(hendler);
}

let vreme = 0;
function stoperica() {
    vreme++;
    document.getElementById("vreme").innerHTML = vreme;
}