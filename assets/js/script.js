const next = document.getElementById('next');
const home = document.getElementById('home');
const chapters = document.getElementById('chapters');
const h1 = document.getElementsByTagName('h1');

// go to next chapter...
if (chapters) {
    chapters.onclick = () => location.replace('./chapters.html');
}
if (home) {
    home.onclick = () => location.replace('./index.html');
}
h1[0].onclick = () => location.replace('./index.html');