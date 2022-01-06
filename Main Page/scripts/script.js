console.log("Hello world");

//check for jquery
$(document).ready(function () {
    init();
});

function init() {
    console.log("Hello jquery");

    //ler nome do login guardado no LocalStorage e colocá-lo no "hello.(NOME)" do header
    function readName() {
        console.log("a ler o username");
        let name = localStorage.getItem('Username');
        console.log(name);

        let headerName;
        headerName = $(`<span>
                        ${name}
                        </span>
                    `);

        console.log(headerName);

        $('#username').append(headerName);
    }

    readName();

    //abrir e fechar menu hamburger 
    let hamburger = $("#hamburger");
    let nav = $("nav");
    let navUl = $("nav ul");
    let navTopics = $("nav li");
    let close = $("#close");
    let loadPanel = $("#loadSec");

    //menu hamburguer aparece escondido quando pagina abre
    nav.hide();
    loadPanel.hide();


    //botão hamburguer quando clicado
    hamburger.on('click', function () {
        nav.css("width", "100%");
        nav.css("height", "100%");
        navUl.css("width", "275px");
        navTopics.css("display", "block");
        nav.show();
    });

    close.on('click', function () {
        nav.hide();
    });

    //abrir painel "where am I going"
    let slidePanel = $("#slidePanel");
    let arrowDown = $("#arrowDown");
    let arrowUp = $("#arrowUp");

    arrowUp.hide();

    //botão da seta abre e fecha o painel slide

    arrowDown.on('click', function () {
        slidePanel.css("top", "0");
        arrowDown.hide();
        arrowUp.show();
    });

    arrowUp.on('click', function () {
        slidePanel.css("top", "-210px");
        arrowUp.hide();
        arrowDown.show();
    });

    //fechar paineis mood e places

    let moodOutTab = $("#moodOutTab");
    let moodSlide = $("#moodSlidePanel");
    let placesOutTab = $("#placesOutTab");
    let placesSlide = $("#placesSlidePanel");

    moodSlide.hide();

    //painel "how was my mood?"
    //botão da seta abre e fecha o painel slide
    let arrowUp2 = $("#arrowUp2");
    let arrowDown2 = $("#arrowDown2");

    arrowUp2.hide();

    arrowDown2.on('click', function () {
        moodSlide.show();
        moodSlide.css("top", "15%");
        arrowDown2.hide();
        arrowUp2.show();
    });

    arrowUp2.on('click', function () {
        moodSlide.css("top", "-100%");
        arrowUp2.hide();
        arrowDown2.show();
    });

    //painel unsafe places
    //botão da seta abre e fecha o painel slide
    let arrowUp3 = $("#arrowUp3");
    let arrowDown3 = $("#arrowDown3");

    arrowUp3.hide();

    arrowDown3.on('click', function () {
        placesSlide.show();
        placesSlide.css("top", "146px");
        arrowDown3.hide();
        arrowUp3.show();
    });

    arrowUp3.on('click', function () {
        placesSlide.css("top", "0px");
        arrowUp3.hide();
        arrowDown3.show();
    });


    //RODAPÉ
    let placesIsOpen = false;

    let goingBtn = $("#goingBtn");

    let moodBtn = $("#moodBtn");

    let placesBtn = $("#placesBtn");

    let goingOutTab = $("#outTab");

    goingBtn.addClass("goingBtnActive");

    goingBtn.on('click', function () {
        goingBtn.addClass("goingBtnActive");
        moodBtn.removeClass("moodBtnActive");
        placesBtn.removeClass("placesBtnActive");
        moodOutTab.css("left", "100%");
        goingOutTab.css("left", "0");
        slidePanel.css("left", "0");
        moodSlide.css("left", "100%");
        placesOutTab.css("left", "200%");
        placesSlide.css("left", "200%");
        placesIsOpen = false;
        console.log("placesIsOpen" + placesIsOpen);
    });

    moodBtn.on('click', function () {
        moodBtn.addClass("moodBtnActive");
        goingBtn.removeClass("goingBtnActive");
        placesBtn.removeClass("placesBtnActive");
        moodOutTab.show();
        moodOutTab.css("left", "0");
        goingOutTab.css("left", "-100%");
        slidePanel.css("left", "-100%");
        moodSlide.css("left", "0");
        placesOutTab.css("left", "100%");
        placesSlide.css("left", "100%");
        placesIsOpen = false;
        console.log("placesIsOpen" + placesIsOpen);
        storageMoodPins();
    });

    placesBtn.on('click', function () {
        placesBtn.addClass("placesBtnActive");
        goingBtn.removeClass("goingBtnActive");
        moodBtn.removeClass("moodBtnActive");
        placesOutTab.show();
        placesOutTab.css("left", "0");
        placesSlide.css("left", "0");
        goingOutTab.css("left", "-200%");
        slidePanel.css("left", "-200%");
        moodOutTab.css("left", "-100%");
        moodSlide.css("left", "-100%");
        storageMarkers();
        placesIsOpen = true;
        console.log("placesIsOpen" + placesIsOpen);
    });


    //feedback a utilizadora do filtro escolhido (fica branco quando clicado e retira a classe "selected filter" aos outros)

    let homeButton = $("#home");
    let workButton = $("#work");
    let aptsButton = $("#appointments");
    let lsrButton = $("#leisure");
    let erndsButton = $("#errands");
    let otherButton = $("#other");


    homeButton.on('click', function () {
        homeButton.toggleClass("selectedFilter");
        workButton.removeClass("selectedFilter");
        aptsButton.removeClass("selectedFilter");
        lsrButton.removeClass("selectedFilter");
        erndsButton.removeClass("selectedFilter");
        otherButton.removeClass("selectedFilter");
    });

    workButton.on('click', function () {
        workButton.toggleClass("selectedFilter");
        aptsButton.removeClass("selectedFilter");
        lsrButton.removeClass("selectedFilter");
        erndsButton.removeClass("selectedFilter");
        otherButton.removeClass("selectedFilter");
        homeButton.removeClass("selectedFilter");
    });

    aptsButton.on('click', function () {
        aptsButton.toggleClass("selectedFilter");
        workButton.removeClass("selectedFilter");
        lsrButton.removeClass("selectedFilter");
        erndsButton.removeClass("selectedFilter");
        otherButton.removeClass("selectedFilter");
        homeButton.removeClass("selectedFilter");
    });

    lsrButton.on('click', function () {
        lsrButton.toggleClass("selectedFilter");
        aptsButton.removeClass("selectedFilter");
        workButton.removeClass("selectedFilter");
        erndsButton.removeClass("selectedFilter");
        otherButton.removeClass("selectedFilter");
        homeButton.removeClass("selectedFilter");
    });

    erndsButton.on('click', function () {
        erndsButton.toggleClass("selectedFilter");
        aptsButton.removeClass("selectedFilter");
        lsrButton.removeClass("selectedFilter");
        workButton.removeClass("selectedFilter");
        otherButton.removeClass("selectedFilter");
        homeButton.removeClass("selectedFilter");
    });

    otherButton.on('click', function () {
        otherButton.toggleClass("selectedFilter");
        aptsButton.removeClass("selectedFilter");
        lsrButton.removeClass("selectedFilter");
        erndsButton.removeClass("selectedFilter");
        workButton.removeClass("selectedFilter");
        homeButton.removeClass("selectedFilter");
    });


    //botão go
    let go = $("#go");

    go.on('click', function () {


        if ($("#filters").children().hasClass('selectedFilter')) { //se há um filtro selecionado, então executa

            $(".selectedFilter").siblings().hide();
            $(".selectedFilter").css("top", "10px");
            $(".selectedFilter").css("background-color", "#F2F2F2");
            placesSlide.hide();
            $("#routeOptns").hide();
            slidePanel.css("height", "120px");
            $("#outTab").hide();
            loadPanel.show();
            geocode();


        } else {
            console.log("select filter and enter addresses"); //senão não avança, precisa de filtro selecionado (e idealmente moradas)
        }

    });

    // painel de loading durante percurso

    let cancel = $("#close2");

    cancel.on('click', function () {
        loadPanel.hide();
        $("#routeOptns").fadeIn(2000);
        $("#outTab").show();
        $(".selectedFilter").siblings().show();
        $(".selectedFilter").css("top", "0px");
        $(".selectedFilter").css("background-color", "#6BDF9C");
        $(".selectedFilter").removeClass("selectedFilter");
        slidePanel.css("height", "210px");

    })

    //botão "finished" quando pressionado
    let finished = $("#finished");

    finished.on('click', function () {
        moodBtn.addClass("moodBtnActive"); //avança para o painel "mood"
        goingBtn.removeClass("goingBtnActive");
        placesBtn.removeClass("placesBtnActive");
        moodOutTab.show();
        moodOutTab.css("left", "0");
        slidePanel.css("left", "-100%");
        moodSlide.css("left", "0");
        placesIsOpen = false;
        console.log("placesIsOpen" + placesIsOpen);
        storageMoodPins(); //mostra os pinos de mood no mapa de logs anteriores
    });

    //painel "mood"
    let angryChar = $('img[alt="angry mood character"]');
    let sadChar = $('img[alt="sad mood character"]');
    let okayChar = $('img[alt="okay mood character"]');
    let goodChar = $('img[alt="good mood character"]');
    let greatChar = $('img[alt="great mood character"]');


    //mudar mood da boneca com o slider

    angryChar.hide();
    sadChar.hide();
    okayChar.show();
    goodChar.hide();
    greatChar.hide();


    $('.slider').on('change input', function () {
        let rangePoint = $('.slider').val();
        let moodLabel = $("#moodChange");

        console.log('slideMood is running');

        switch (rangePoint) {
            case '1':
                moodLabel.html("angry");

                angryChar.show();
                sadChar.hide();
                okayChar.hide();
                goodChar.hide();
                greatChar.hide();

                break;

            case '2':
                moodLabel.html("sad");

                angryChar.hide();
                sadChar.show();
                okayChar.hide();
                goodChar.hide();
                greatChar.hide();

                break;

            case '3':
                moodLabel.html("okay");

                angryChar.hide();
                sadChar.hide();
                okayChar.show();
                goodChar.hide();
                greatChar.hide();

                break;

            case '4':
                moodLabel.html("good");

                angryChar.hide();
                sadChar.hide();
                okayChar.hide();
                goodChar.show();
                greatChar.hide();

                break;

            case '5':
                moodLabel.html("great");

                angryChar.hide();
                sadChar.hide();
                okayChar.hide();
                goodChar.hide();
                greatChar.show();

                break;

            default:
                console.log('mood slider is not in use');

        }
    });

    //submeter o input do painel mood
    let submitMood = $("#submitMood"); //botão submit do painel mood
    let moodPin;

    submitMood.on('click', function () {
        moodSlide.css("top", "-100%");
        arrowUp2.hide();
        arrowDown2.show();
        pinMood();
    });

    function pinMood() {
        //gravar filtro do painel going
        let savedFilter = $(".selectedFilter").text();
        console.log("o filtro é " + savedFilter);

        localStorage.setItem('filters', savedFilter);

        //gravar mood do slide
        let selectedMood = $("#moodChange").text();
        console.log("o mood é " + selectedMood);

        localStorage.setItem('moods', selectedMood);

        //diferenciar o icone do pino dependendo do mood
        //por pino no local de destino do painel going
        //marker com popup com o filtro e mood
        let moodMarker = L.marker();

        switch (selectedMood) {

            case "angry":
                moodMarker
                    .setIcon(angryIcon)
                    .setLatLng(destMarker.getLatLng())
                    .addTo(mymap)
                    .bindPopup(`
                        <div id="scdCustomPopup"> 
                            <p id="popupFilter">${savedFilter}</p> 
                            <p id="pMoodTxt">on my way I felt...</p>
                            <h2 id="selMoodPopup">${selectedMood}</h2>
                        </div>`)
                    .openPopup();
                break;

            case "sad":
                moodMarker
                    .setIcon(sadIcon)
                    .setLatLng(destMarker.getLatLng())
                    .addTo(mymap)
                    .bindPopup(`
                        <div class="customPopup"> 
                            <p id="popupFilter">${savedFilter}</p> 
                            <p id="pMoodTxt">on my way I felt...</p>
                            <h2 id="selMoodPopup">${selectedMood}</h2>
                        </div>`)
                    .openPopup();

                break;

            case "okay":
                moodMarker
                    .setIcon(okayIcon)
                    .setLatLng(destMarker.getLatLng())
                    .addTo(mymap)
                    .bindPopup(`
                        <div class="customPopup"> 
                            <p id="popupFilter">${savedFilter}</p> 
                            <p id="pMoodTxt">on my way I felt...</p>
                            <h2 id="selMoodPopup">${selectedMood}</h2>
                        </div>`)
                    .openPopup();

                break;

            case "good":
                moodMarker
                    .setIcon(goodIcon)
                    .setLatLng(destMarker.getLatLng())
                    .addTo(mymap)
                    .bindPopup(`
                        <div class="customPopup"> 
                            <p id="popupFilter">${savedFilter}</p> 
                            <p id="pMoodTxt">on my way I felt...</p>
                            <h2 id="selMoodPopup">${selectedMood}</h2>
                        </div>`)
                    .openPopup();

                break;

            case "great":
                moodMarker
                    .setIcon(greatIcon)
                    .setLatLng(destMarker.getLatLng())
                    .addTo(mymap)
                    .bindPopup(`
                        <div class="customPopup"> 
                            <p id="popupFilter">${savedFilter}</p> 
                            <p id="pMoodTxt">on my way I felt...</p>
                            <h2 id="selMoodPopup">${selectedMood}</h2>
                        </div>`)
                    .openPopup();

            default:
                console.log("something went wrong");
        }

        moodPin = {
            filter: savedFilter,
            location: destMarker.getLatLng(),
            mood: selectedMood
        };

        //criar uma lista de objetos (para onde vao os moodPin)
        let moodsList;

        //verifica se já existe gaveta na local storage

        if (localStorage.getItem('moodPins') != null) { //se não for null
            //ler o localstorage_string
            let JSONmoods = localStorage.getItem('moodPins'); //vai buscar o texto da gaveta markers
            //transforma o mega string numa variável
            moodsList = JSON.parse(JSONmoods); //não esquecer que esta variável é um array de objetos
        } else {
            moodsList = []; //precisamos de criar esta lista para a pôr na memória (array vazio)
        }

        //quer exista, quer esteja vazia, acrescenta um moodPin novo ao fim à lista (ao fim do array)
        moodsList.push(moodPin);

        //Transformar 'moodsList' em JSON e em texto. Prepara para gravar a lista de novo
        let JSONmoods = JSON.stringify(moodsList);

        //grava
        localStorage.setItem('moodPins', JSONmoods);

    };

    //Guardar os pins de mood na local storage para sessões seguintes
    //objeto composto por coordenadas de destino, filtro de work, leisure, etc., e mood da utilizadora

    //funçao que cria pinos de mood guardados na local storage (pinos de sessoes anteriores)

    function storageMoodPins() {
        let moodsList;

        if (localStorage.getItem('moodPins') == null) {
            console.log('no saved markers');
        } else {
            let JSONmoods = localStorage.getItem('moodPins');
            moodsList = JSON.parse(JSONmoods);

            //para cada objeto guardado na local storage, cria um pino com as coordenadas, a personagem de mood e o popup de texto
            moodsList.forEach(function (moodPin) {
                let storageMoodPin = L.marker();

                switch (moodPin.mood) {

                    case "angry":
                        storageMoodPin
                            .setIcon(angryIcon)
                            .setLatLng(moodPin.location)
                            .bindPopup(`
                            <div class="customPopup"> 
                                <p id="popupFilter">${moodPin.filter}</p> 
                                <p id="pMoodTxt">on my way I felt...</p>
                                <h2 id="selMoodPopup">${moodPin.mood}</h2>
                            </div>`)
                            .addTo(mymap)
                            .openPopup();
                        break;

                    case "sad":
                        storageMoodPin
                            .setIcon(sadIcon)
                            .setLatLng(moodPin.location)
                            .bindPopup(`
                            <div class="customPopup"> 
                                <p id="popupFilter">${moodPin.filter}</p> 
                                <p id="pMoodTxt">on my way I felt...</p>
                                <h2 id="selMoodPopup">${moodPin.mood}</h2>
                            </div>`)
                            .addTo(mymap)
                            .openPopup();
                        break;


                    case "okay":
                        storageMoodPin
                            .setIcon(okayIcon)
                            .setLatLng(moodPin.location)
                            .bindPopup(`
                            <div class="customPopup"> 
                                <p id="popupFilter">${moodPin.filter}</p> 
                                <p id="pMoodTxt">on my way I felt...</p>
                                <h2 id="selMoodPopup">${moodPin.mood}</h2>
                            </div>`)
                            .addTo(mymap)
                            .openPopup();
                        break;

                    case "good":
                        storageMoodPin
                            .setIcon(goodIcon)
                            .setLatLng(moodPin.location)
                            .bindPopup(`
                            <div class="customPopup"> 
                                <p id="popupFilter">${moodPin.filter}</p> 
                                <p id="pMoodTxt">on my way I felt...</p>
                                <h2 id="selMoodPopup">${moodPin.mood}</h2>
                            </div>`)
                            .addTo(mymap)
                            .openPopup();
                        break;

                    case "great":
                        storageMoodPin
                            .setIcon(greatIcon)
                            .setLatLng(moodPin.location)
                            .bindPopup(`
                            <div class="customPopup"> 
                                <p id="popupFilter">${moodPin.filter}</p> 
                                <p id="pMoodTxt">on my way I felt...</p>
                                <h2 id="selMoodPopup">${moodPin.mood}</h2>
                            </div>`)
                            .addTo(mymap)
                            .openPopup();

                    default:
                        console.log("something went wrong");
                }

               
            });

        }

    };




    //!!MAPA!!

    // Criar o mapa 
    // Definir visualizaçao inicial do mapa

    const mymap = L.map('map').setView([41.15, -8.6], 13);

    //Restringir zoom in e zoom out
    mymap.options.minZoom = 3;
    mymap.options.maxZoom = 18;

    //Arranjar map tiles do OpenStreetMap e adicioná-los ao mapa
    const attribution =
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl, { attribution });
    tiles.addTo(mymap);

    //personalizar pinos (markers)
    //pino de partida
    let startIcon = L.icon({
        iconUrl: "./images/startIcon.svg",

        iconSize: [30, 30], // size of the icon
        iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    //pino de destino
    let destIcon = L.icon({
        iconUrl: "./images/destinationIcn.svg",

        iconSize: [40, 40], // size of the icon
        iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -47] // point from which the popup should open relative to the iconAnchor
    });

    //pino de unsafe place
    let unsafeIcon = L.icon({
        iconUrl: "./images/unsafepin.svg",
        iconSize: [40, 40], // size of the icon
        iconAnchor: [20, 40], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -47] // point from which the popup should open relative to the iconAnchor

    });

    //PINOS DE MOOD
    //pino de mood angry
    let angryIcon = L.icon({
        iconUrl: "./images/angryRed.png",
        iconSize: [60, 60], // size of the icon
        iconAnchor: [30, 50], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor

    });

    //pino de mood sad
    let sadIcon = L.icon({
        iconUrl: "./images/sadBlue.png",
        iconSize: [60, 60], // size of the icon
        iconAnchor: [30, 50], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor

    });

    //pino de mood okay
    let okayIcon = L.icon({
        iconUrl: "./images/okayYellow.png",
        iconSize: [60, 60], // size of the icon
        iconAnchor: [30, 50], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor

    });

    let goodIcon = L.icon({
        iconUrl: "./images/goodGreen.png",
        iconSize: [60, 60], // size of the icon
        iconAnchor: [30, 50], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor

    });

    let greatIcon = L.icon({
        iconUrl: "./images/greatPurple.png",
        iconSize: [60, 60], // size of the icon
        iconAnchor: [30, 50], // point of the icon which will correspond to marker's location
        popupAnchor: [0, -50] // point from which the popup should open relative to the iconAnchor

    });


    //ativar a colocaçao do pino de unsafe places somente no painel "places"

    function placeUnsafe() {
        if ($("footer button:nth-last-of-type(1)").hasClass('placesBtnActive')) {
            mymap.on('click', onMapClick2);
            console.log("adding unsafe place");
        } else {
            console.log("not on places panel");
            mymap.off('click');
        }
    };


    //guardar experiencias das utlizadoras na LocalStorage
    function saveExperience() {
        let conteudo = $("#experience").val(); //ir buscar texto do input
        console.log("O valor é:", conteudo);

        localStorage.setItem('posts', conteudo); //guardar texto do input na gaveta 'posts' da localStorage
    }

    let sendBtn = $("#send");

    sendBtn.on('click', function () {
        saveExperience();
        readExperience();
        placeUnsafe();
    });

    //por texto das experiências das utilizadoras nos popups do mapa
    let experience;

    function readExperience() {
        console.log("a ler o username");
        experience = localStorage.getItem('posts');
        console.log(`esta e a experience:` + experience);
    };

    //clicar no mapa e criar pino de destino na localizaçao clicada

    let scdMarker = L.marker();
    let pinnedExp;


    function onMapClick2(e) {
        scdMarker
            .setIcon(unsafeIcon)
            .setLatLng(e.latlng)
            .addTo(mymap)
            .bindPopup(`<div class="customPopup"><p>${experience}</p></div>`, {
                maxWidth: 180,
                maxHeight: 100
            })
            .openPopup();

        //objeto que guarda experiencia vinculada a coordenadas

        pinnedExp = {
            location: e.latlng,
            popupTxt: experience
        };

        console.log("current pinnedExp" + pinnedExp.location + pinnedExp.popupTxt);

        //criar uma lista de objetos (para onde vao os pinnedExp)
        let markersList;

        //...mas é preciso ver se existe gaveta

        if (localStorage.getItem('markers') != null) { //se não for null
            //ler o localstorage_string
            let JSONmarkers = localStorage.getItem('markers'); //vai buscar o texto da gaveta markers
            //transforma o mega string numa variável
            markersList = JSON.parse(JSONmarkers); //não esquecer que esta variável é um array de objetos
        } else {
            markersList = []; //precisamos de criar esta lista para a pôr na memória (array vazio)
        }
        //quer exista, quer esteja vazia, acrescenta um post novo ao fim à lista (ao fim do array)
        markersList.push(pinnedExp);

        //Transformar 'markersList' em JSON e em texto. Prepara para gravar a lista de novo
        let JSONmarkers = JSON.stringify(markersList);

        //grava
        localStorage.setItem('markers', JSONmarkers);
    }

    //funçao que cria pinos guardados na local storage (pinos de sessoes anteriores)

    let stgMarkersLayer = L.layerGroup();


    function storageMarkers() {
        let markersList;

        if (localStorage.getItem('markers') == null) {
            console.log('no saved markers');
        } else {
            let JSONmarkers = localStorage.getItem('markers');
            markersList = JSON.parse(JSONmarkers);

            //para cada par de objetos guardados na local storage, cria um pino com as coordenadas e o popup de texto
            markersList.forEach(function (pinnedExp) {
                let storagePin = L.marker();

                storagePin
                    .setIcon(unsafeIcon)
                    .setLatLng(pinnedExp.location)
                    .bindPopup(`<div class="customPopup"><p>${pinnedExp.popupTxt}</p></div>`, {
                        maxWidth: 180,
                        maxHeight: 100
                    })
                    .openPopup();

                stgMarkersLayer
                    .addLayer(storagePin)
                    .addTo(mymap)
            });

        }

    };


    // GEOCODE

    let startMarker = L.marker();
    let destMarker = L.marker();
    let startInput;
    let endInput;


    function geocode() {

        startInput = $("[id=startingPt]").val();
        endInput = $("[id=destination]").val();

        if (startInput !== '' && endInput !== '') { //se os inputs das moradas estão preenchidos, então executa...

            //LOCALIZAÇÃO DE INICIO
            axios.get('https://maps.googleapis.com/maps/api/geocode/json', {

                params: {
                    address: startInput,
                    key: 'AIzaSyAu7iYG0PKizzu3uFr4Vkpt2cgSZo5TIV0'
                }
            })
                .then(function (response) {

                    //Log full response
                    console.log(response);

                    //Formatetd address
                    let formattedAddress = response.data.results[0].formatted_address;

                    console.log(formattedAddress);

                    //Geometry
                    latStart = response.data.results[0].geometry.location.lat;
                    lngStart = response.data.results[0].geometry.location.lng;
                    latlngStart = [latStart, lngStart];

                    console.log(latStart);
                    console.log(lngStart);
                    console.log(latlngStart);

                    //Create starting point marker on map

                    startMarker
                        .setIcon(startIcon)
                        .setLatLng(latlngStart)
                        .addTo(mymap);

                })

            //LOCALIZAÇAO DE DESTINO
            axios.get('https://maps.googleapis.com/maps/api/geocode/json', {

                params: {
                    address: endInput,
                    key: 'AIzaSyAu7iYG0PKizzu3uFr4Vkpt2cgSZo5TIV0'
                }
            })
                .then(function (response) {

                    //Log full response
                    console.log(response);

                    //Formatetd address
                    let formattedAddress = response.data.results[0].formatted_address;

                    console.log(formattedAddress);

                    //Geometry
                    latEnd = response.data.results[0].geometry.location.lat;
                    lngEnd = response.data.results[0].geometry.location.lng;
                    latlngEnd = [latEnd, lngEnd];

                    console.log(latEnd);
                    console.log(lngEnd);
                    console.log(latlngEnd);

                    //Create destination point marker on map

                    destMarker
                        .setIcon(destIcon)
                        .setLatLng(latlngEnd)
                        .addTo(mymap);


                    let group = new L.featureGroup([startMarker, destMarker]);

                    resizeMap(group);

                })

                .catch(function (error) {
                    console.log(error);
                });

            

        } else {
            console.log("cant advance")
        };
    };

    //definir visualizaçao do mapa de acordo com os pontos do percurso (faz máximo zoom possível com os dois pontos visiveis)
    function resizeMap(_g) {
        mymap.fitBounds(_g.getBounds(), { padding: [100, 100] });

    };

}


/*Erros em que reparamos ou features que gostávamos de incluir com mais tempo

- Não conseguimos integrar o 3Dcanvas do spline por causa do erro cross origin. O objeto 3d, quando inserido no código da aplicação, não rodava no espaço, ficando só uma imagem estática. Por isso, optamos por inserir um elemento img com a imgem do objeto modelado. O ideal seria resolver o problema do spline e ter o objeto 3d com todas as suas funcionalidades.

- No painel "going", idealmente só se poderia avançar para o botão "go!" se as moradas de partida e chegada estivessem preenchidas.

- Idealmente, cada conjunto de pinos só seria visível no painel correspondente. Ou seja, os pinos de partida e chegada só seriam visíveis no painel "going", os pinos de mood só seriam visíveis no painel "mood", e os pinos de unsafe places só seriam visíveis no painel "places";

- Como a função storageMarkers() cria, na sessão seguinte, todos os pinos de unsafe places guardados na localStorage, existe um erro que acontece se a utilizadora, ao criar o pino no painel "places", clicar várias vezes no mapa e fôr mudando o pino de sítio. Cada vez que se clica no mapa, depois de escrever o input "write your experience" e de se clicar em "create pin", as coordenadas do click e o texto do input são guardados dentro de um objeto na localStorage. Isto acontece porque a função que cria uma lista de objetos e coloca objetos novos (com coordenadas e texto) nessa lista está dentro da função onMapClick2(), que é acionada sempre que se clica no mapa depois de pressionar o botão "create pin". Este erro seria resolvido se as linhas de código que criam a lista do localStorage e inserem lá os objetos estivessem dentro de outra função, que poderia ser a função on('click') de um novo botão chamado "set pin". Assim só a localização final do pino é que seria guardado na localStorage, e não existiria o erro de, na sessão seguinte, haver imensos pinos em localizações diferentes com o mesmo texto de popup.

*/
 








