
let chapter = 1;
let number = 0;
let playerInputNumber = 0;
let showInput = false;

const numberAndTimerContainer = document.querySelector('.numberAndTimer');
const userInputContainer = document.querySelector('.inputArea');
const numberText = document.querySelector('.number');
const textbox = document.querySelector('.textbox');
const submitBtn = document.querySelector('.btnSendUserInput');

submitBtn.addEventListener('click', () => {
    if(textbox.value != '' || textbox.value != null){
        if(textbox.value == number){
            chapter++;
            alert('Gj');
            userInputContainer.style.display = 'none';
            numberAndTimerContainer.style.display = 'flex';
            textbox.value = '';
            playGame();
        }
        else{
            alert('Wrong');
            chapter = 1;
            userInputContainer.style.display = 'none';
            numberAndTimerContainer.style.display = 'flex';
            textbox.value = '';
            playGame();
        }
    }
    else{
        alert('Cannot be empty !!!')
    }
});


function playGame(){
    generateRandomNumber(chapter);
    decreaseProgress();
}

playGame();

function generateRandomNumber(digit){
    let min = Math.pow(10, digit - 1);
    let max = Math.pow(10, digit) - 1;
    number = Math.floor(Math.random() * (max - min + 1)) + min;
    numberText.textContent = number;
}

function decreaseProgress() {
    var progressBar = document.querySelector(".progressbar");
    progressBar.value = 100;
    var value = progressBar.value;

    // 50 ms aralıklarla ilerleme çubuğunun değerini 1 azalt
    var interval = setInterval(function() {
        if (value > 0) {
            value--;
            progressBar.value = value;
        } else {
            clearInterval(interval); // Değer 0 olduğunda intervali durdur
            showInput = true;
            numberAndTimerContainer.style.display = 'none';
            userInputContainer.style.display = 'flex';
        }
    }, 40); // Her 50 milisaniyede bir çalışır
}


