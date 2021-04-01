menu_array = ["Chicken Tandoori Pizza",
    "Margharita Pizza", "Veg Supreme Pizza",
    "Cheesy Sausage Pizza", "Onion Pizza"
]

function getmenu() {
    var htmldata;
    htmldata = "<ol class='menulist'>";
    menu_array.sort();
    for (var i = 0; 1 < menu_array.length; i++) {
        htmldata = htmldata + "<li>" + menu_array[i] + "</li>";
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_array.push(item);
    menu_array.sort();
    htmldata = "<section class='cards'>";
    for (var i = 0; i < menu_array.length; i++) {
        htmldata = htmldata + "<div class='card'>" + "<img src='pizzaImg.png'>" + menu_array[i] + "</div>"

    }
    htmldata = htmldata + "</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}