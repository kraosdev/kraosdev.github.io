const navbar = document.querySelector('.navbarKraosBg');

navbar.classList.add('transparent');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('transparent');
  } else {
    navbar.classList.add('transparent');
    navbar.classList.remove('scrolled');
  }
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      //const offset = 200;
      const offset = navbar.offsetHeight;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});


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