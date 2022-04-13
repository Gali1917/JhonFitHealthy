function menu(){
    const menu = document.getElementById("menu");
    (menu.style.display == "block")
    ? menu.style.display = "none"
    : menu.style.display = "block";
    animationMenu();

}
        
function animationMenu(){
    gsap.to('.menuLoad li', {
        duration: 1.5,
        x: '-200',
        ease: 'bounce',
    });

}
