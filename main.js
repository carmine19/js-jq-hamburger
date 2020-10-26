

// visualizzo al click sul mobile il menu
$(".fas").click(function() {
    $(".hamburger-menu").addClass("active");
});

// rimuovo il click dalla x
$(".close").click(function() {
    $(".hamburger-menu").removeClass("active");
});


// versione con javascript
/*

var hamburger_menu = document.getElementsByClassName('fas');

for (var i = 0; i < hamburger_menu.length ; i++) {
    hamburger_menu[i].addEventListener('click', function (){
       var h_menu =  document.getElementsByClassName('hamburger-menu')[0];
       h_menu.classList.add('active');
    })
}

var close_menu = document.getElementsByClassName('close');

for (var i = 0; i < hamburger_menu.length ; i++) {
    close_menu[i].addEventListener('click', function (){
        var h_menu =  document.getElementsByClassName('hamburger-menu')[0];
        h_menu.classList.remove('active');
    })
}
*/
