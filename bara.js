function openSidebar() {
    console.log(!document.getElementById("sidebar1").style.display)
    if(document.getElementById("sidebar1").style.display == "none" || !document.getElementById("sidebar1").style.display){
    document.getElementById("sidebar1").style.display = "flex";}
    else if(document.getElementById("sidebar1").style.display == "flex"){
        document.getElementById("sidebar1").style.display = "none";
    }
    console.log("abrir", document.getElementById("sidebar1").style.display) ;
    }


// function closeSidebar() {
//     document.getElementById("sidebar1").style.display = "none";
//     console.log("cerrar");

//     }

// function() 
// {
//     $('#bars').click 
//     ( 
//         function() 
//             {
//             $('.sidebar').css('left', 0);
//             }
//     )
// }

// $(document).ready
// (
//     console.log("dom cargado"),
// )
// function openSidebar()
// {
//     $('#bars').click
//     (
//     function()
//     {
//         $('.sidebar').css('left', 0);
//         // $('.opacMenu').fadeIn();
//     }
//     )
// }
    // $('.opacMenu').click
    // (
    // function()
    // {
    //     $('.sidebar').css('left', '-300px');
    //     // $('.opacMenu').fadeOut();
    // }

