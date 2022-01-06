console.log("Hello world");

//check for jquery

$(function(){
    console.log("Hello jquery"); 
});

//hide e show paineis de login ou register

    let loginMenu = $("#loginBoxes");
    let registerMenu = $("#registerBoxes");
    let logButton = $("#lgBar");
    let logButton2 = $("#scdLogin a");
    let regButton = $("#rgBar");
    let regButton2 = $("#scdRegister a");
    let logNreg = $("#logNreg");
    let logNregBtns = $("#logNregBtns");
    let loginLabel = $("#lgLbl");
    let regLabel = $("#rgLbl");
    let panelBar = $("#bar");

    loginMenu.hide();
    registerMenu.hide(); //pag inicia com os paineis escondidos

    loginLabel.addClass("labelIsActive");
    logButton.addClass("barIsActive"); //pag inicia com login selecionado

    logButton.on('click', function(){
        registerMenu.hide();
        loginMenu.show();
        logNreg.css("bottom", "0");
        logNregBtns.css("top", "40%");
        loginLabel.addClass("labelIsActive");
        logButton.addClass("barIsActive");
        regLabel.removeClass("labelIsActive");
        regButton.removeClass("barIsActive");
    });

    loginLabel.on('click', function(){
        registerMenu.hide();
        loginMenu.show();
        logNreg.css("bottom", "0");
        logNregBtns.css("top", "40%");
        loginLabel.addClass("labelIsActive");
        logButton.addClass("barIsActive");
        regLabel.removeClass("labelIsActive");
        regButton.removeClass("barIsActive");
    });

    logButton2.on('click', function(){
        registerMenu.hide();
        loginMenu.show();
        loginLabel.addClass("labelIsActive");
        logButton.addClass("barIsActive");
        regLabel.removeClass("labelIsActive");
        regButton.removeClass("barIsActive");
    });

    regButton.on('click', function(){
        loginMenu.hide();
        registerMenu.show();
        logNreg.css("bottom", "0");
        logNregBtns.css("top", "40%");
        loginLabel.removeClass("labelIsActive");
        logButton.removeClass("barIsActive");
        regLabel.addClass("labelIsActive");
        regButton.addClass("barIsActive");
    });

    regLabel.on('click', function(){
        loginMenu.hide();
        registerMenu.show();
        logNreg.css("bottom", "0");
        logNregBtns.css("top", "40%");
        loginLabel.removeClass("labelIsActive");
        logButton.removeClass("barIsActive");
        regLabel.addClass("labelIsActive");
        regButton.addClass("barIsActive");
    });

    regButton2.on('click', function(){
        loginMenu.hide();
        registerMenu.show();
        regLabel.addClass("labelIsActive");
        regButton.addClass("barIsActive");
        loginLabel.removeClass("labelIsActive");
        logButton.removeClass("barIsActive");
    });

    panelBar.on('click', function(){
        logNreg.css("bottom", "-68%");
        logNregBtns.css("top", "86%");
    })

//guardar username do login no LocalStorage

function saveLogRegData(){
    let conteudo = $("[id=username]").val();
    console.log("O valor é:", conteudo);

    localStorage.setItem('Username', conteudo);
}

let logSubmit = $("#submit");

logSubmit.on('click', function(){
    saveLogRegData();
});
