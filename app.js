
// Requirements
// * Built from "scratch" - check
// * Generate two random passwords when the user clicks the button - check
// * Each password should be 15 charachters long - check

// Level up!
// * Ability to set password length - check
// * Add "copy on click" - check
// * Toggle symbols (and numbers) on/off - check

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById('generate-btn');
let passwordDisplList = document.querySelectorAll('.p');
const symbolsCheckbox = document.getElementById('symbols-checkbox');
let isChecked = true;
const helpText = document.querySelector('.help-text');



symbolsCheckbox.addEventListener('change', function() {
    if (symbolsCheckbox.checked === true) {
        isChecked = true;
    } else {
        isChecked = false;
    }
});


function getRandomNumber(arrayLength) {
    let randomNumber = Math.floor( Math.random() * arrayLength );
    return randomNumber;
};

function generatePassword(length) {
    let newPassword = '';
    let arrayLength = characters.length;

    if (!isChecked) {
        // Om isChecked är false, ändra arrayLength till första tecknet
        arrayLength  = characters.findIndex(element => element === "~");
    } 
                    // Ändra till password length
    for (let i = 0; i < length; i++) {
        let randomIndex = getRandomNumber(arrayLength);
        newPassword += characters[randomIndex];
    }

    return newPassword;
};

// Lägger upp nytt password
generateBtn.addEventListener('click', function() {

    let passwordLength = document.getElementById('length-input').value;
  
    if (passwordLength < 8 || passwordLength > 16) {
        helpText.style.display = 'block';
    } else {
        helpText.style.display = 'none';
        passwordDisplList.forEach(display => {

            display.textContent = generatePassword(passwordLength);
            display.style.padding = '.5rem';
        });
    };
});

// Kopierar password
passwordDisplList.forEach(display => {
    display.addEventListener('click', function() {
        navigator.clipboard.writeText(this.innerHTML);
        this.innerHTML = 'Copied!'
    });
});

