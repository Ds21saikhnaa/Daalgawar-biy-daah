let hide = document.getElementById('hide');
let navbar = document.getElementById("navbar");
let link = document.querySelectorAll('link')

console.log(link)
function hideMenu() {
    console.log('hello');
    navbar.classList.add('show');
}