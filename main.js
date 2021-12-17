

let myAge = 30;

// Skriver ut "hello" när vi trycker på elementet med ID #about
$("#about").click(function () {

    // Skriver ut till konsolen
    console.log("Hello..");
})



/*
Här
Skriver
All 
Kommentar
*/
$("#hide").click(function () {
    $("#about").hide();
})



// call "showBox" function when we click the show-button
$("#show").click(showBox)

// function to show #about element
function showBox() {
    $("#about").show()
}


// Toggle our #about element from show/hide when we click toggle-button
$("#toggle").click(toggleBox)

function toggleBox() {
    $("#about").toggle();
}


// For all inputs in our class "power", print the text inside our #about element
$(".power").keyup(function () {
    $("#about").html($(this).val())
})


// Save the selected value from the dropdown and print it (console)
$("#cars").change(function () {
    let selectedCar = $("#cars>option:selected").val();
    alert("You picked: " + selectedCar)
})

// När vi trycker på "add notes"-knappen så 
// skapar vi en lista med items och visar den
$("#notes_button").click(function () {
    let list = $('<ul class="form-data"></ul>');
    list.append('<li>Notes</li>');
    $(".notes").append(list)
})
