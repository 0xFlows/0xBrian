function unlock() {
    document.getElementById('unlock-label').innerHTML = "unlocked!";
}

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', unlockCheck);
function unlockCheck(string) {
    if(string === "Hiro") {
        unlock();
    }
}