var buttonPosition = 0;

function buttonCardOpen(){
    gsap.to('.article', {
        duration: 0.5,
        y: -360,
        delay: 0
    });
    buttonPosition = 1;
    cardsAnimation();
}

function buttonCardClose(){
    gsap.to('.article', {
        duration: 0.5,
        y: 0,
        delay: 0
    });
    buttonPosition = 0;

}

function cardsAnimation(){
    for(x = 1; x <= 5; x++){
        var text = '#card' + x;
        var delay = 0.3;
        console.log(text);
        gsap.from(text, {
            duration: 0.5,
            x: -1000,
            delay: delay
        })
        delay += 0.3;
        console.log(delay);
    }
}


function buttonDown(){
    const cards = document.getElementById('cardsId');
    const headerArticle = document.getElementById('headerArticle');
    const imgButtonId = document.getElementById('imgButtonId');
    if(buttonPosition == 0){
        imgButtonId.style.transform = 'rotate(180deg)';
        buttonCardOpen();
        headerArticle.style.overflow = 'hidden';
        cards.style.display = 'block';
    }
    else{
        imgButtonId.style.transform = 'rotate(0deg)';
        buttonCardClose();
        headerArticle.style.overflow = 'hidden';
        cards.style.display = 'none';
    }

}
