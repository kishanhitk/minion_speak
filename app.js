var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler() {
    console.log("error occured ", error);
    alert("Something went wrong. Try again after some time");
}

function clickHandler() {

    var inputText = txtInput.value;
    btnTranslate.textContent = "Translating......";
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
        .finally(() =>
            btnTranslate.textContent = "Translate"
        );

};

btnTranslate.addEventListener("click", clickHandler);