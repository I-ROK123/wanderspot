const toggleButton= document.grtElementByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})
