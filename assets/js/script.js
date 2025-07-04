/* navigation controls */
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const home = document.getElementById('home');
const chapters = document.getElementById('chapters');

// go to next chapter
const nextChapter = {
    '': './chapter1.html',
    'index': './chapter1.html',
    'chapter1': './chapter2.html',
    'chapter2': './chapter3.html',
    'chapter3': './chapter4.html',
    'chapter4': './chapter5.html'
}

const previousChapter = {
    'chapter2': './chapter1.html',
    'chapter3': './chapter2.html',
    'chapter4': './chapter3.html',
    'chapter5': './chapter4.html'
}

let pageName = location.pathname.slice(1).replace('.html', '');
console.log('page name: ' + pageName);

if (next) next.onclick = () => openNextChapter(pageName);
if (previous) previous.onclick = () => openPrevChapter(pageName);

const openNextChapter = curr => window.location = nextChapter[curr];
const openPrevChapter = curr => window.location = previousChapter[curr];

//other navigation
if (chapters) {
    chapters.onclick = () => window.location = './chapters.html';
}
if (home) {
    home.onclick = () => window.location = './index.html';
}
document.getElementById('logo').onclick = () => window.location = './index.html';

/* chapters - show transcript */
const popups = document.getElementsByClassName('popup');
const pops = document.getElementsByClassName('pop');
const poppies = document.getElementsByClassName('poppy');
const arrows = document.getElementsByClassName('arrow');

for (let i = 0; i < popups.length; i++) {
    let pop = pops[i];
    if (pop) {
        pop.onclick = () => {
            toggle(poppies[i]);
            toggleArrow(arrows[i]);
        }
    }
}

const toggle = item => {
    if (item.classList.contains('shown'))
        item.classList.remove('shown');
    else item.classList.add('shown');
}

const toggleArrow = item => {
    if (item.innerHTML == '⇒')
        item.innerHTML = '&dArr;';
    else item.innerHTML = '⇒';
}

/*=== show map ===*/
const overlay = document.getElementById('overlay');
const showButton = document.getElementById('show-map');
const closeMap = document.getElementById('close');
const mapContainer = document.getElementById('map-container');
let mapShown = false;

const toggleOverlay = () => {
    const main = document.getElementsByTagName('main')[0];
    if (main.classList.contains('overlay')) main.classList.remove('overlay');
    else main.classList.add('overlay');
}

const toggleShowMap = () => {
    if (mapShown) {
        showButton.innerHTML = 'Show map';
        toggle(mapContainer);
        toggle(overlay);
        toggleOverlay();
        document.documentElement.style.overflow = 'scroll';
        mapShown = false;
    } else {
        showButton.innerHTML = 'Hide map';
        toggle(mapContainer);
        toggle(overlay);
        toggleOverlay();
        document.documentElement.style.overflow = 'hidden';
        mapShown = true;
    }
}

if (showButton) showButton.onclick = toggleShowMap;
if (closeMap) closeMap.onclick = toggleShowMap;