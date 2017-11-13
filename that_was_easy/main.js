function sayThatWasEasy(){
var thatWasEasy = new Audio("You_Are_a_Pirate!.mp3");
thatWasEasy.play();
}
$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function daniel(){
    var daniel = new Audio("danielCullin.mp3");
    daniel.play();
}
$("#daniel").on("click", daniel);

function delegateKeypress(event){
    if (event.charCode == 32) {
        $("#daniel").trigger("click");
    }

}