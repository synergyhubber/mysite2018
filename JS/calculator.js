window.onload = function () {
    var screen;// refer to the result div html element tag (store the math question string or result value )
    var output; // for calulating the question string, e.g "1*2+2"
    var limit; // limit for calculator input to 16
    var zero; // for zero button click processing
    var period; //for period button click processing
    var operator; // for handling operating clicks

    screen = document.getElementById("result");
    screen.innerHTML = "";
    output = "";


    var elem = document.querySelectorAll(".num");
    var len = elem.length;

    for (var i = 0; i < len; i++) {
        elem[i].addEventListener("click", function () {
            num = this.value; //get the button value of the button clicke
            output = screen.innerHTML += num;
            limit = output.length;

            if (limit > 16) {
                alert("You have exceeded the max inpputs");
            }

        }, false);
    }

    var elemZero = document.querySelector(".zero");
    elemZero.addEventListener("click", function () {
        zero = this.value;

        if (screen.innerHTML === "") {
            screen.innerHTML = zero;
            output = screen.innerHTML;//output = screen.innerHTML =zero;
        } else if (screen.innerHTML === output) {
            screen.innerHMTL = screen.innerHMTL + zero;
            output = screen.innerHTML;//output = screen.innerHTML +=zero;

        }
    }, false);

    document.querySelector(".period").addEventListener("click", function () {
        period = this.value;

        if (screen.innerHTML === "") {
            screen, innerHTML = screen.innerHTML.concat("0,");
            output = screen.innerHTML; //output = screen.innerHTML=zero;
        } else if (screen.innerHTML === output) {
            screen, innerHTML = screen.innerHTML + period;
            output = screen.innerHTML;

        }
    }, false);

    document.querySelector("#delete").addEventListener("click", function () {
        screen.innerHTML = "";
        output = "";

    }, false);

    var elemOperator = document.querySelectorAll(".operator");
    var len2 = elemOperator.length;

    for (var i = 0; i < len2; i++) {
        elemOperator[i].addEventListener("click", function () {
            operate = this.value;

            if (screen.innerHTML === "") {
                screen.innerHMTL = screen.innerHTML.concat('');
            } else if (output) {
                screen.innerHTML = screen.innerHTML.concat(operate);
                output = screen.innerHTML;
            }

        }, false);
        document.querySelector("#eqn-bg").addEventListener("click", function () {
            if (screen.innerHTML === "") {
                screen.innerHTML = "";
                output = "";
            } else if (screen.innerHMTL === output) {
                screen.innerHTML = eval(output);
            }
        }, false);

    }
}