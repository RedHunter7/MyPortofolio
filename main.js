var headerBg = document.getElementById('bg');
var scrollCurve = document.querySelector('.curveImg');

window.addEventListener('scroll' , function () {
    headerBg.style.opacity = 1 - +window.pageYOffset/550+'';
    headerBg.style.top = +window.pageYOffset+'px';
    headerBg.style.backgroundPositionY = - +window.pageYOffset/2+'px';

    var value = 1 + window.scrollY/-1100;
    scrollCurve.style.transform = 'scaleY(' + value + ')';
})

var menu = document.getElementById('menu');
menu.addEventListener('click' , openMenu);
var nav = document.getElementById('nav');
nav.style.visibility = 'hidden';
function openMenu() {
    if (nav.style.visibility == 'hidden') {
        nav.style.visibility = 'visible';
        nav.style.opacity = '0.8';
        document.getElementById('fa').innerHTML = '&#xf00d;';
        menu.style.color = 'red';
        menu.style.border = '2px solid red';
        menu.addEventListener('mouseover' , function() {
            menu.style.color = '#f5f7fa';
        });
        menu.addEventListener('mouseout', function() {
            menu.style.color = 'red';
        })
        menu.classList.add('active');
    } else if (nav.style.visibility == 'visible') {
        nav.style.opacity = '0';
        nav.style.visibility = 'hidden';
        menu.style.color = '#007EA7';
        document.getElementById('fa').innerHTML = '&#xf0c9;';
        menu.style.border = '2px solid #007EA7';
        menu.addEventListener('mouseover' , function() {
            menu.style.color = '#f5f7fa';
        });
        menu.addEventListener('mouseout', function() {
            menu.style.color = '#007EA7';
        })
        menu.classList.remove('active');
    }
}

document.getElementById('home').addEventListener('mouseover',function() {
    changeColorBg('linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%)')
});

document.getElementById('home').addEventListener('mouseout',function() {
    changeColorBg('linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)');
});

document.getElementById('about').addEventListener('mouseover',function() {
    changeColorBg('linear-gradient(to top, #c79081 0%, #dfa579 100%)')
});

document.getElementById('about').addEventListener('mouseout',function() {
    changeColorBg('linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)');
});

document.getElementById('services').addEventListener('mouseover',function() {
    changeColorBg('linear-gradient(to top, #0ba360 0%, #3cba92 100%)')
});

document.getElementById('services').addEventListener('mouseout',function() {
    changeColorBg('linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)');
});

function changeColorBg(color) {
    nav.style.background = color;
}

var interval = setInterval(clock, 1000);

function clock() {
    var hours = document.getElementById('hour');
    var minutes = document.getElementById('minute');
    var seconds = document.getElementById('second');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

var blur = document.getElementById('blur');
var modal = document.getElementById('modal');

document.getElementById('zoom').addEventListener('click', function() {
    blur.classList.toggle('blur');
    modal.classList.toggle('active');
    modal.classList.remove('zoomOut')
    modal.classList.add('zoomIn')
});

document.getElementById('close').addEventListener('click', function () {
    blur.classList.toggle('blur');
    modal.classList.remove('zoomIn')
    modal.classList.add('zoomOut');
    modal.classList.toggle('active');
});
