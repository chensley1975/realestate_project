document.getElementById("next").addEventListener("click", hideFS);

function hideFS() {
    document.getElementById("second").classList.remove('hide');
    document.getElementById("first").classList.add('hide');
    return false;
}