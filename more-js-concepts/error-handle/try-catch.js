function checkAge() {
    let ageField = document.getElementById("age");
    let ageText = ageField.value;
    let errTag = document.getElementById("error");
    try {
        // kono akta program er vitore error hote pare amn code gula amra trty er vitore likhbo 
        let age = parseInt(ageText);
        if (isNaN(age)) {
            throw "Please enter valid number";
        }

        errTag.innerHTML = "";
    }
    catch (err) {
        // try er vitore  je error ta thagbe seta amra cath er vitore dhorte pari 
        console.log("ERRPR:", err);
        errTag.innerText = err;
    }

    finally {
        // finnaly ata sob somoy print hobei error thauk bah na thauk
        console.log("All Done");
    }
    console.log(1111);
}