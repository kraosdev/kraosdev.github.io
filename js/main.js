function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var kraosImage = document.querySelector('#kraos-image');
function setRandomAnimationTransform() {

    var rndIntX = getRndInteger(48, 53);
    var xLast = window.getComputedStyle(kraosImage).getPropertyValue('--animation-kraos-x');
    xLast = xLast.replace("%", "");
    while (xLast == rndIntX) {
        rndIntX = getRndInteger(48, 53);
    }
    rndIntX = rndIntX + '%';
    xLast = xLast + '%';

    var rndIntY = getRndInteger(-5, 1);
    var yLast = window.getComputedStyle(kraosImage).getPropertyValue('--animation-kraos-y');
    yLast = yLast.replace("%", "");
    while (yLast == rndIntY) {
        rndIntY = getRndInteger(-5, 1);
    }
    rndIntY = rndIntY + '%';
    yLast = yLast + '%';

    //console.log("El ultimo: " + xLast + " el nuevo: " + rndIntX);

    kraosImage.style.setProperty('--animation-kraos-x-last', xLast);
    kraosImage.style.setProperty('--animation-kraos-x', rndIntX);
    kraosImage.style.setProperty('--animation-kraos-y-last', yLast);
    kraosImage.style.setProperty('--animation-kraos-y', rndIntY);
}

kraosImage.addEventListener("animationiteration", setRandomAnimationTransform);