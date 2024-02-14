function unlock() {
    document.getElementById('unlock-label').innerHTML = "unlocked!";
}

function unlockCheck(string) {
    if(string === "Hiro") {
        unlock();
    }
}