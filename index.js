var Leute = [
"Madison Dorn",
"Obama",
"Die mit Roten Haaren von Scooby Doo",
"Till Lindemann",
"Lins Schwanz",
"Lorenz",
"Rians Fahrrad",
"Money Boy",
"Kippe",
"Lilli",
"Wolfgang Runge",
"Tittenseite auf Facebook",
"Susilive",
"Rian",
"Die Mutter von Lukas Gido",
"Til",
"Schwanzgeile Oma (km entfernt)",
"Isi",
"Ismet",
"Künstler mit Kapitänsmütze",
"Manu",
"Captain Til",
"Käptn Iglo mit Fischstäbchendick",
"Lin",
"Ahoi Brause Typ",
"Regenwurm",
"Ren und Elliot",
"David",
"Baris",
"Ott",
"Dennis Husner",
"Wichsepizza",
"Cocarette",
"Affe",
"Aless Kamalraj",
"Andi Oltean",
"Til wenn er sehr stoned ist",
"Poschi",
"Timi",
"Dinglehopper + Anzinger",
"Julia",
"Oli",
"Wal",
"Miki",
"Miki ohne Miki",
"Chaya von Money Boy, die geshared wird",
"Finn",
"Bonez mc",
"Arschwasser",
"Schober Paul",
"Xaver Knobel",
"Luci mit Bierbauch",
"Jorgus und Lockenstab",
"Steffi",
"Lucis Sackhaare am Kinn",
"Iron Man",
"Subway",
"Xaverstr mit Lemon Haze Snus",
"Arazul und Chaosfloh",
"Finn während Mate da ist",
"Caprisonnenface",
"Heinie Nüchtern",
"Andi gl",
"Lunchi",
"Phineas und Ferb",
"Mate",
"Snegge",
"Manu ohne Bart",
"Sevi Rin am schwitzen",
"Lunch als shaolin mönch",
"Schmeidi",
"Marlene",
"Manu nur mit Schnauzer",
"Danial",
"Kili Bauer",
"Xaverstr",
"Nah bro",
"Tomatolix",
"Auto mit dem Robin gefahren ist",
"Ralfs bekiffte Eltern",
"Negatiiv Og",
"Pumuckl",
"Lillifee",
"Schwalb mit Elfbar",
"Bitte ein Bit",
"Heinies roter Syrup",
"der dummmacher"
];






function rndmNumber(){
    Anzahl = Leute.length;
    var Zahl1, Zahl2, Zahl3; 
    Zahl1 = getRandomInt(Anzahl);
    Zahl2 = getRandomInt(Anzahl);
    Zahl3 = getRandomInt(Anzahl);

    


    console.log(Zahl1, Zahl2, Zahl3);

    
        
    var finaleZahlen = gleicheZahlen(Zahl1, Zahl2, Zahl3);

    console.log(finaleZahlen);

    

    document.getElementById("Person1").innerHTML = Leute[finaleZahlen[0]];
    document.getElementById("Person2").innerHTML = Leute[finaleZahlen[1]];
    document.getElementById("Person3").innerHTML = Leute[finaleZahlen[2]];
    
};



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  };


function gleicheZahlen(Zahl1, Zahl2, Zahl3){
    if(Zahl1 == Zahl2){
       Zahl1 = getRandomInt(Anzahl);
        return gleicheZahlen(Zahl1, Zahl2, Zahl3);
    }
    else if(Zahl2 == Zahl3){
        Zahl2= getRandomInt(Anzahl);
        return gleicheZahlen(Zahl1, Zahl2, Zahl3);
    }
    else if(Zahl1 == Zahl3){
        Zahl3= getRandomInt(Anzahl);
        return gleicheZahlen(Zahl1, Zahl2, Zahl3);
    }
    else{
        return [Zahl1, Zahl2, Zahl3];
        
    }
}