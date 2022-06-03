function openSidebar() {
    console.log(!document.getElementById("sidebar1").style.display)
    if (document.getElementById("sidebar1").style.display == "none" || !document.getElementById("sidebar1").style.display) {
        document.getElementById("sidebar1").style.display = "flex";
        document.getElementById("sidebar1").style.transitionTimingFunction = "ease";
    }
    else if (document.getElementById("sidebar1").style.display == "flex") {
        document.getElementById("sidebar1").style.display = "none";
        document.getElementById("sidebar1").style.transitionTimingFunction = "ease";
        
    }
    console.log("abrir", document.getElementById("sidebar1").style.display);
}

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

function flip(e) { 
    let botenv = document.getElementById("enviar")

    console.log(e)
    if (e.srcElement.id == "Nombre") {
        console.log(e.srcElement.value.length)
        if (e.srcElement.value.length < 2 || e.srcElement.value.length > 20) { 
            botenv.disabled = true
            e.srcElement.style.border = "3px solid #ff0202";
        }
        else {
            e.srcElement.style.backgroundColor = "#fff";
            e.srcElement.style.border = "none"
            botenv.disabled = false
        }
    }
    else if (e.srcElement.id == "Apellido") {
        if (e.srcElement.value.length < 2 || e.srcElement.value.length > 20) {
            e.srcElement.style.border = "3px solid #ff0202";
            botenv.disabled = true
        }
        else {
            e.srcElement.style.backgroundColor = "#fff";
            e.srcElement.style.border = "none"
        }
    }
    else if (e.srcElement.id == "mail") {
        console.log(validateEmail(e.srcElement.value))
        if (!validateEmail(e.srcElement.value)) {
            e.srcElement.style.border = "3px solid #ff0202";
            botenv.disabled = true
        }

        else
        {
            e.srcElement.style.backgroundColor = "#fff";
            e.srcElement.style.border = "none"
        }
    }
    else if (e.srcElement.id == "Comentario") {
        if (e.srcElement.value.length < 2 || e.srcElement.value.length > 200) {
            e.srcElement.style.border = "3px solid #ff0202";
        }
        else {
            e.srcElement.style.backgroundColor = "#fff";
            e.srcElement.style.border = "none"
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

