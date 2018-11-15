var potentialPostalCodes = ["231", "0186", "35012", "7011","01304"];

for (var k = 0; k < potentialPostalCodes.length; k++) {
if (potentialPostalCodes[k].length === 4) {
console.log("Følgende nummer kvalifiserer som et postnummer: " + potentialPostalCodes[k]); 
   } else {
    console.log("Følgende nummer kvalifiserer ikke som et postnummer: " + potentialPostalCodes[k]);
   }
};

/*

Oppgaven spesifiserte at man skal lage en kode ut av datasettet i første linje, hvor alle kvalifiserte postnumrene fikk en sann verdi, og de ukvalifiserte endte opp med usann verdi.

For denne oppgaven valgte jeg en for-loop istedenfor en while-loop, fordi loopen skal kjøre gjennom alle elementene til arrayet, og hente ut verdien sann/ usann. Løkken starter med en ny variabel kalt K, som jeg setter til verdien 0. Deretter så skal løkken kjøre så lenge den er mindre enn lengden av arryet til variabelen potentialPostalCodes. k++ sier at for hver gang loopen har kjørt en gang, så pluss den på 1, og da kjører den på nytt, så fremt at k (som nå er 1), ikke er større enn potentialPostalCodes.

If else, brukes når vi skal finne ut om en betingelse er sann eller usann. Her er betingelsen at hvis lengden av indexet i arrayet til variablen potentialPostalCodes er lik 4, når variabelen k får samme verdi som index-plassen, så blir betingelsen sann, hvis ikke så blir betingelsen usann.

Når betingelsen får en verdi, så blir den console.loget til consolevinduet, og loopen kjøres på nytt.

*/