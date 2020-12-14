var counter=0;

function myFunction() {   
    counter++;
    console.log(counter);
    /*Abfrage über %=Modulo Operator*/
    if (counter % 2 !== 0) {
        let elements = document.getElementsByClassName("wrapper");
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.add('redBackgroundRed');
        }
    } else {
        counter = 0;
        let elements = document.getElementsByClassName("wrapper");
        for (var i = 0; i < elements.length; i++) {
            elements[i].classList.remove('redBackgroundRed');
        }
    }
}
