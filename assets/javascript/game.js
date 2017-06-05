//-------------Game Variable-------------\\
var wins = 0;
var numGuesses = 12; //Number of guesses until hanged
var game = {
        word: getWord(),
        guessedLetters: [],
        numberOfGuesses: numGuesses
    }

//----------Check for Key Press----------\\
document.getElementById("numGuesses").innerHTML = game.numberOfGuesses;
document.onkeyup = function(event) {
    var guess = event.key.toLowerCase();
    checkLetter(guess);
}

function getWord() {
    word = {
        shown: "",
        hidden: "",
        inProgress: "",
        length: 0
    };
    wordBank = ["Abomination","Acolytes","Adam Warlock"  ,"Ahab","Angel" ,"Annihilus"  ,"Ant Man","Apocalypse"  ,"Aquaman" ,"Arcade" ,"Archangel"  ,"Avalanche" ,"Avalon","Avengers"  ,"Azrael" ,"Bane"  ,"Banshee"  ,"Baroness","Batman"  ,"Baxter Stockman"  ,"Bazooka"  ,"Beach Head"  ,"Beast"  ,"Bebop"  ,"Beetle"  ,"Beyonder"  ,"Bionic Commando","Bishop"  ,"Bizarro"  ,"Black Knight"  ,"Black Panther"  ,"Black Widow"  ,"Blade"  ,"Blink"  ,"Blob"  ,"Blood Wraith"  ,"Brainiac"  ,"Brood"  ,"Bullseye"  ,"Caliban"  ,"Callisto"  ,"Calypso"  ,"Cannonball"  ,"Captain Planet" ,"Cardiac"  ,"Carnage"  ,"Catwoman"  ,"Cerise"  ,"Cesspool"  ,"Chameleon"  ,"Cheetah" ,"Clan Destine"  ,"Cloak and Dagger"  ,"Cobra"  ,"Colossus"  ,"Copperhead"  ,"Copycat"  ,"Corsair"  ,"Cyborg"  ,"Cyclops"  ,"Cypher"  ,"Daredevil" ,"Dazzler"  ,"Decepticon"  ,"Devastator"  ,"Diablo"  ,"Doctor Doom"  ,"Doctor Mindbender"  ,"Doctor Octopus"  ,"Doctor Strange"  ,"Domino"  ,"Donatello"  ,"Doomsday"  ,"Doppelganger"  ,"Dreadnought"  ,"Electro"  ,"Elektra"  ,"Enchantress"  ,"Eradicator"  ,"Excalibur"  ,"Exodus"  ,"Falcon"  ,"Fenris"  ,"Feral"  ,"Firefly"  ,"Flash"  ,"Fleet Tracking","Foot Soldier"  ,"Forge"  ,"Four Horsemen of Apocalypse"  ,"Frenzy"  ,"GI Joe"  ,"Galactus"  ,"Galvatron"  ,"Gambit"  ,"Gargoyles","Generation X"  ,"Gideon"  ,"Gladiator"  ,"Goliath","Green Goblin"  ,"Grim Reaper"  ,"Guardian"  ,"Guile","GungHo"  ,"Harley Quinn"  ,"Haven"  ,"Havok"  ,"Hawk"  ,"Hawkeye"  ,"Hellions"  ,"Helspont","Hobogoblin"  ,"Homer Simpson","Hulk"  ,"Huntress"  ,"Husk"  ,"Hydra","Iceman"  ,"Impulse"  ,"Iron Fist"  ,"Jinx"  ,"Joker"  ,"Jubilee"  ,"Juggernaut"  ,"Kingpin"  ,"Kraven"  ,"Lamprey"  ,"Leatherhead"  ,"Leatherneck"  ,"Leech"  ,"Leonardo"  ,"Lilith"  ,"Living Tribunal"  ,"Lizard"  ,"Lobo"  ,"Loki"  ,"Longshot"  ,"Maggott"  ,"Magik"  ,"Magneto"  ,"Mandarin"  ,"Marauders"  ,"Marrow"  ,"Marvel"  ,"Masque"  ,"Mastermind"  ,"Maverick"  ,"Medusa"  ,"Mega Man" ,"Megatron"  ,"Mephisto"  ,"Mercer"  ,"Michaelangelo"  ,"Mimic"  ,"Mirage"  ,"Mister Fantastic"  ,"Mister Freeze"  ,"Mister Hyde"  ,"Mister Sinister"  ,"Mojo"  ,"Mole Man"  ,"Mondo Gecko"  ,"Morbius"  ,"Morg"  ,"Muskrat"  ,"Mutant","Mysterio"  ,"Mystique"  ,"Namor"  ,"Napoleon Bonafrog"  ,"Nebula"  ,"Nightcrawler"  ,"Nimrod"  ,"Nomad"  ,"Northstar"  ,"Nova"  ,"Omega Red"  ,"Onslaught"  ,"Orion"  ,"Panda Khan"  ,"Parasite"  ,"Penance"  ,"Penguin"  ,"Phalanx"  ,"Phoenix"  ,"Poison Ivy","Polaris"  ,"Proteus"  ,"Prowler"  ,"PsycheOut"  ,"Puma"  ,"Punisher"  ,"Pyro"  ,"Quasar"  ,"Quicksilver"  ,"Rage"  ,"Random"  ,"Raphael"  ,"Rat King"  ,"Ravage"  ,"Ray Fillet"  ,"Reavers"  ,"Rhino"  ,"Rictor"  ,"Riddler"  ,"Roadblock"  ,"Robin"  ,"Rogue"  ,"Rumble"  ,"Sabretooth"  ,"Salacious Crumb","Sandman"  ,"Saracen"  ,"Sasquatch"  ,"Sauron"  ,"Savage Land" ,"Scarecrow"  ,"Scarlet Witch"  ,"Scorpion"  ,"Sentinel"  ,"Serpentor"  ,"Shazam"  ,"Shiva"  ,"Shockwave"  ,"Shredder"  ,"Siege"  ,"Silver Samurai"  ,"Silver Surfer"  ,"Siryn"  ,"Slapstick"  ,"Sleepwalker"  ,"SnakeEyes"  ,"Solo"  ,"Spartan","Spawn" ,"Speedball"  ,"SpiderMan"  ,"Spirit"  ,"Steel"  ,"Storm"  ,"Stormtrooper","Stryfe"  ,"Sunspot"  ,"Superman"  ,"Synch","Tempo"  ,"Thanos"  ,"Thing"  ,"Thor"  ,"Thunderbird"  ,"Thunderbolts"  ,"Tick","Toad" ,"Tombstone"  ,"Triceraton"  ,"TwoFace"  ,"Typhoid Mary"  ,"Tyrant"  ,"Ultron"  ,"Union Jack"  ,"Vengeance"  ,"Venom"  ,"Vertigo"  ,"Vindicator"  ,"Violator","Viper"  ,"Vision"  ,"Vulture"  ,"Warpath"  ,"Wasp"  ,"Weapon Omega"  ,"Widget","Wolfsbane","Wolverine"  ,"Wonder Woman"  ,"Wrecker","Zealot"];
    word.shown = wordBank[Math.floor(Math.random() * (wordBank.length-1))]; //Get new string
    word.hidden = drawWord(word.shown); //Draw the underscores
    word.inProgress = word.hidden; //Start the 'in progress' word as the blank version
    word.length = word.shown.length;
    document.getElementById("word").innerHTML = word.hidden.join(" "); //Draw the hidden word in HTML
    return word;
}

 function drawWord(word) {
    var blankWord = [];
    for (var i=0; i<word.length; i++) {
        if (word.charCodeAt(i) === 32)
            blankWord.push("&nbsp");
        else
            blankWord.push('_');
    }
    return blankWord;
}

function checkLetter(guess) {
    if (guess.match(/^[a-z]$/)) {  //If a letter...

        var inWord = false;

        for (var i=0; i<word.length; i++) {
            if (guess === word.shown.toLowerCase().charAt(i)) { //If guess is right
                word.hidden[i] = word.shown.charAt(i);
                inWord = true;
                letterTrue(guess);
            } else if ((i == word.length-1) && inWord === false) //Else if guess is wrong
                letterFalse(guess);
        }
        //Update word and guesses
        document.getElementById("word").innerHTML = word.hidden.join(" ");
        document.getElementById("numGuesses").innerHTML = game.numberOfGuesses;
    }
}

function letterTrue() {
    var unknownRemaining = 0;
    for(var i=0; i<game.word.length; i++) {
        if (game.word.hidden[i] === '_')
            unknownRemaining++;
    }
    if (unknownRemaining === 0) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        game = {
            word: getWord(),
            guessedLetters: [],
            numberOfGuesses: numGuesses
        }
        document.getElementById("guessedLetters").innerHTML = "None";
        document.getElementById("hangman").src = "assets/images/hangman_0.png";
    }
}

function letterFalse(guess) {
    //If NOT already guessed the incorrect letter...
    guessed = false;
    for (var i=0; i<game.guessedLetters.length; i++) {
        if (guess === game.guessedLetters[i])
            guessed = true;
    }
    if (guessed === false) { //Then take away a guess, add to guessed letter array and update html text
        game.numberOfGuesses--;
        game.guessedLetters.push(guess);
        document.getElementById("guessedLetters").innerHTML = game.guessedLetters;
        document.getElementById("hangman").src = "assets/images/hangman_" + (12 - game.numberOfGuesses) + ".png" 
    }
    
    //If out of guesses, reset the game
    if (game.numberOfGuesses === 0) {
        game = {
            word: getWord(),
            guessedLetters: [],
            numberOfGuesses: numGuesses
        }
        document.getElementById("guessedLetters").innerHTML = "None";
        document.getElementById("hangman").src = "assets/images/hangman_0.png";
    }
}

function stringify(input) {
    return toString(input);
}

