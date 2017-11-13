function sayThatWasEasy(){
var thatWasEasy = new Audio("You_Are_a_Pirate!.mp3");
thatWasEasy.play();
}
$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event){
    if (event.charCode == 32) {
        $("#easy").trigger("click");
    }
}
