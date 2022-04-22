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
        gsap.from(text, {
            duration: 0.5,
            x: -1000,
            delay: delay
        })
        delay += 0.3;
    }
}

function tipos(title, textP){
    const medidas = document.getElementById('medidasId');
    const h = document.getElementById('textH3');
    const p = document.getElementById('textP');

    medidas.style.display = 'block';

    h.textContent = title;
    p.textContent = textP;

    gsap.to('.article', {
        duration: 0.5,
        y: -1000,
        delay: 0
    })
}

function card1(){
    
    const title = 'Antropometricas';
    const textP = 'Las medidas antropométricas son la talla, el peso y los perímetros corporales. Estas medidas son imprescindibles para un técnico en dietética.';
    tipos(title, textP);
}

function card2(){

    const title = 'Adipometricas';
    const textP = 'Un dato importante a conocer es si tenemos grasa, cuanta tenemos, si es buena o mala, o si por el contrario tenemos otros factores a tener en cuenta como la retención de liquidos. Para ello usamos el plicómetro o adipómetro, uno de los mejores accesorios para conocer dicho dato.';
    tipos(title, textP);

}
function closeButton(){
    console.log('prueba');
    gsap.to('.article', {
        duration: 0.5,
        y: -360,
        delay: 0
    });
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
