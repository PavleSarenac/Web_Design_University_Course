$(document).ready(function () {
    let operation = null;
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function validateKorPoruka() {
        if (/^[A-Z]+$/.test($("#korPoruka").val())) {
            return true;
        } else {
            return false;
        }
    }

    function validatePomeraj() {
        if (/^\d+$/.test($("#pomeraj").val()) && parseInt($("#pomeraj").val()) > 0) {
            return true;
        } else {
            return false;
        }
    }

    function encrypt() {
        let text = $("#korPoruka").val();
        let encryptedText = "";
        if (operation == "zamena") {
            for (let i = 0; i < text.length; i++) {
                encryptedText += alphabet[(alphabet.indexOf(text[i]) + 3) % alphabet.length];
            }
        } else if (operation == "mesanje") {
            if (!validatePomeraj()) {
                alert("Unesite ponovo pomeraj.");
                return;
            }
            let n = parseInt($("#pomeraj").val());
            let added = [];
            for (var i = 0; i < text.length; i++) {
                for (var j = i; j < text.length; j += n) {
                    if (jQuery.inArray(j, added) == -1) {
                        encryptedText += text[j];
                        added.push(j);
                    }
                }
            }
        }
        $("#encPoruka").text(encryptedText);
    }

    $("input[type='radio']").on("change", function () {
        $("#pomeraj").val("");
        let checked = $("input[type='radio']:checked").val();
        if (checked == "zamena") {
            $("#pomeraj").prop("disabled", true);
        } else if (checked == "mesanje") {
            $("#pomeraj").prop("disabled", false);
        }
    });

    $("#sifruj").click(function () {
        if (!validateKorPoruka()) {
            alert("Unesite ponovo tekst.");
            return;
        }
        operation = $("input[type='radio']:checked").val();
        if (!operation) {
            alert("Odaberite nacin sifrovanja.");
            return;
        }
        encrypt();
    });
});