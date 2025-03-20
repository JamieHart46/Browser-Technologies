// Verborgen tweede deel pagina 1
document.getElementById("yes").addEventListener("change", function() {
  document.getElementById("partner-echtgenoot").hidden = false;
});

document.getElementById("no").addEventListener("change", function() {
  document.getElementById("partner-echtgenoot").hidden = true;
});
//Met behulp van chatgpt. Zorgt ervoor dat pas wanneer "Ja" geselecteerd is in de vraag de volgende relevante vragen zichtbaar zijn.

document.getElementById("partner-echtgenoot").hidden = true;
//Met behulp van Krijn. Zorgt ervoor dat als de JS niet werkt voor welke reden dan ook, dat de vragen standaard zichtbaar zijn. 

document.getElementById("kind-ja").addEventListener("change", function() {
  document.getElementById("overledene-kinderen").hidden = false;
});

document.getElementById("kind-nee").addEventListener("change", function() {
  document.getElementById("overledene-kinderen").hidden = true;
});

document.getElementById("overledene-kinderen").hidden = true;


// info notaris hidden
document.getElementById("wel-testament").addEventListener("change", function() {
  document.getElementById("info-notaris").hidden = false;
});

document.getElementById("geen-testament").addEventListener("change", function() {
  document.getElementById("info-notaris").hidden = true;
});

document.getElementById("info-notaris").hidden = true;


if ('localStorage' in window && 'FormData' in window && 'querySelector' in document) {
// Tijdens het laden van de pagina: gedaan
// Check of er iets in localStorage staat, zo ja: gedaan
// Gebruik JSON.parse() op dat object gedaan



  // Local Storage
  document.querySelector('form').addEventListener('focusout', function() {
    // Pak van dit formulier (this) de formulierdata (met new FormData)
    let formData = new FormData(this)

    let temporaryObject = {}
    // Sla dat op in localStorage
    for (const keyValue of formData.entries()) {
      temporaryObject[keyValue[0]] = keyValue[1]
    }
    console.log(temporaryObject)
    // console.log(JSON.stringify(temporaryObject))

    // Sla dat laatste op in localStorage..
    localStorage['mijn-form'] = JSON.stringify(temporaryObject)
  });


  console.log(localStorage['mijn-form'])

  if (localStorage.getItem("mijn-form")) {
      const storedData = JSON.parse(localStorage.getItem("mijn-form"));
      
      for (const key in storedData) {

          const inputField = document.querySelector(`[name=${key}]`);
          
          if (inputField) {

              if (inputField.type === "text" || inputField.type === "number" || inputField.type === "date") {
              inputField.value = storedData[key];
              }
              
              if (inputField.type === "radio") {
                var input = document.querySelector(`[name=${key}][value=${storedData[key]}]`)
                if (input) {
                  input.setAttribute ("checked", "checked")
                } 

                console.log((`[name=${key}][value=${storedData[key]}]`))

                if (storedData.partner === "yes") {
                  document.getElementById("partner-echtgenoot").hidden = false;
                }

                else if (storedData.partner === "no") {
                  document.getElementById("partner-echtgenoot").hidden = true;
                }
                // Als de value uit de stored data de value "yes" heeft, dan is hidden= false voor de 
                // tweede fieldset en wordt die gedisplayed als de pagina ingeladen wordt.

                // maar als de value die eruit komt "no" is, dan blijft ie verborgen als de pagina ingeladen wordt. 
              }

              if (storedData.kinderen === "yes") {
                document.getElementById("overledene-kinderen").hidden = false;
                
              }

              else if (storedData.notaris === "no") {
                document.getElementById("overledene-kinderen").hidden = true;
              }


              if (storedData.notaris === "yes") {
                document.getElementById("info-notaris").hidden = false;
                
              }

              else if (storedData.notaris === "no") {
                document.getElementById("info-notaris").hidden = true;
              }
            }
      }


  };

}



// Hoe werkt het op files en op radio buttons?

// Op files is het niet mogelijk om een bestand in localStorage op te slaan en terug te halen uit localStorage.



// Voor elke 'key' van dat object, vul de waarde terug in het formulier in. (Werkt nu niet voor radio en files?)