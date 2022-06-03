function openSidebar() {
    console.log(!document.getElementById("sidebar1").style.display)
    if(document.getElementById("sidebar1").style.display == "none" || !document.getElementById("sidebar1").style.display){
    document.getElementById("sidebar1").style.display = "flex";
    document.getElementById("sidebar1").style.transitionTimingFunction = "ease";
}
    else if(document.getElementById("sidebar1").style.display == "flex"){
        document.getElementById("sidebar1").style.display = "none";
    document.getElementById("sidebar1").style.transitionTimingFunction = "ease";

    }
    console.log("abrir", document.getElementById("sidebar1").style.display) ;
    }
// function cambiarbg() {
//     if( document.getElementById("bg").style.backgroundImage = "foto/fondo.svg"){
//         document.getElementById("bg").style.backgroundImage = "foto/bgrun.svg";
//     }
// }


function flip(e)
{
    console.log(e)
    if(e.srcElement.id == "Nombre") 
    {
        if(e.srcElement.value.length<2)
        {
            e.srcElement.style.backgroundColor = "#ff0202";
        }
        else
        {
            e.srcElement.style.backgroundColor = "#fff";
        } 
    }
    else if(e.srcElement.id == "Apellido") 
    {
        if(e.srcElement.value.length<2) 
        {
            e.srcElement.style.backgroundColor = "#ff0202";
        }
        else
        {
        e.srcElement.style.backgroundColor = "#fff";
        }
    }
    else if(e.srcElement.id == "mail") 
    {
        if(e.srcElement.value.length<2) 
        {
            e.srcElement.style.backgroundColor = "#ff0202";
        }
        else
        {
        e.srcElement.style.backgroundColor = "#fff";
        }
    }
    else if(e.srcElement.id == "Comentario") 
    {
        if(e.srcElement.value.length<2) 
        {
            e.srcElement.style.backgroundColor = "#ff0202";
        }
        else
        {
        e.srcElement.style.backgroundColor = "#fff";
        }
    }
}

// expresiones regulares regex 

//     console.log(!document.getElementById("sidebar1").style.display)
//     if(document.getElementById("sidebar1").style.display == "none" || !document.getElementById("sidebar1").style.display){
//     document.getElementById("sidebar1").style.display = "flex";
//     document.getElementById("sidebar1").style.transitionTimingFunction;
// }


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

