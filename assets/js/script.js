/* controls */
const next = document.getElementById('next');
const home = document.getElementById('home');
const chapters = document.getElementById('chapters');
const h1 = document.getElementsByTagName('h1');

// go to next chapter...
if (next) {
    
}
if (chapters) {
    chapters.onclick = () => location.replace('./chapters.html');
}
if (home) {
    home.onclick = () => location.replace('./index.html');
}
h1[0].onclick = () => location.replace('./index.html');

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