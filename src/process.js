function buttonCard(){
    const height = window.innerHeight - 280;
    gsap.to('.article', {
        duration: 0.5,
        y: -height,
        delay: 0
    });
}

function buttonDown(){
    const cards = document.getElementById('cardsId');
    const headerArticle = document.getElementById('headerArticle');
    const imgButtonId = document.getElementById('imgButtonId');
    imgButtonId.style.transform = 'rotate(180deg)';
    buttonCard();
    headerArticle.style.overflow = 'hidden';
    cards.style.display = 'block';

}
