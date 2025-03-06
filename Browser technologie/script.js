document.getElementById("yes").addEventListener("change", function() {
    document.getElementById("hidden").style.display = "block";
  });

  document.getElementById("no").addEventListener("change", function() {
    document.getElementById("hidden").style.display = "none";
  });
//Met behulp van chatgpt. Zorgt ervoor dat pas wanneer "Ja" geselecteerd is in de vraag de volgende relevante vragen zichtbaar zijn.

document.getElementById("hidden").style.display = "none";
//Met behulp van Krijn. Zorgt ervoor dat als de JS niet werkt voor welke reden dan ook, dat de vragen standaart zichtbaar zijn. 

