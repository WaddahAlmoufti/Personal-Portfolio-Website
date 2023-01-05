let button = document.getElementById("ham");
let nav = document.getElementById("list");
button.addEventListener('click', toggle);

function toggle (){
    nav.classList.toggle('show');
}

