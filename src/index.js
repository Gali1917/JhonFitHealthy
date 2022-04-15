function menu(){
    const menu = document.getElementById("menu");
    (menu.style.display == "block")
    ? menu.style.display = "none"
    : menu.style.display = "block";
    animationMenu();

}
        
function animationMenu(){
    const width = window.innerWidth - 132;
    gsap.to('.menuLoad li', {
        duration: 1.5,
        x: -width,
        ease: 'bounce',
    });

}

