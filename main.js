let nav = document.querySelector("nav");
window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
        nav.classList.add("bg-dark");
        nav.classList.remove("bg-transparent");
    } else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-dark");
    }
})

window.addEventListener("scroll", function() {
    if (window.scrollY >= 600) {
        document.querySelectorAll(".nav-item a")[0].classList.add("active");
        document.querySelectorAll(".nav-item a")[1].classList.remove("active")
        document.querySelectorAll(".nav-item a")[2].classList.remove("active")
        document.querySelectorAll(".nav-item a")[3].classList.remove("active")
    } else {
        document.querySelectorAll(".nav-item a")[0].classList.remove("active");
    }
    if (this.window.scrollY >= 1300) {
        document.querySelectorAll(".nav-item a")[1].classList.add("active");
        document.querySelectorAll(".nav-item a")[0].classList.remove("active")
        document.querySelectorAll(".nav-item a")[2].classList.remove("active")
        document.querySelectorAll(".nav-item a")[3].classList.remove("active")
    } else {
        document.querySelectorAll(".nav-item a")[1].classList.remove("active");
    }
    if (this.window.scrollY >= 2300) {
        document.querySelectorAll(".nav-item a")[2].classList.add("active");
        document.querySelectorAll(".nav-item a")[0].classList.remove("active")
        document.querySelectorAll(".nav-item a")[1].classList.remove("active")
        document.querySelectorAll(".nav-item a")[3].classList.remove("active")
    } else {
        document.querySelectorAll(".nav-item a")[2].classList.remove("active");
    }
    if (this.window.scrollY >= 3200) {
        document.querySelectorAll(".nav-item a")[3].classList.add("active");
        document.querySelectorAll(".nav-item a")[0].classList.remove("active")
        document.querySelectorAll(".nav-item a")[1].classList.remove("active")
        document.querySelectorAll(".nav-item a")[2].classList.remove("active")
    } else {
        document.querySelectorAll(".nav-item a")[3].classList.remove("active");

    }
})


var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function() { supportsPassive = true; }
    }));
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
for (let i = 0; i < 6; i++) {

    document.querySelectorAll(".card-img")[i].onclick = function() {
        document.querySelectorAll(".product")[i].classList.add("d-block");
        document.querySelectorAll(".product")[i].classList.remove("d-none");
        window.addEventListener("scroll", disableScroll());

    }
    document.querySelectorAll(".close")[i].onclick = function() {
        document.querySelectorAll(".product")[i].classList.add("d-none");
        document.querySelectorAll(".product")[i].classList.remove("d-block");
        window.addEventListener("scroll", enableScroll());
    }
}