const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");
const card4 = document.getElementById("card4");
const card5 = document.getElementById("card5");
const card6 = document.getElementById("card6");
const card7 = document.getElementById("card7");



const uploadCard = (input, scoop) => {
    input.forEach((input) => {
        if(input.isIntersecting){
            input.target.classList.add('visible');
        }
    });
}

const scoop = new IntersectionObserver(uploadCard, {
    root: null,
    rooMargin: 0,
    threshold: 1.0
});


scoop.observe(card1);
scoop.observe(card2);
scoop.observe(card3);
scoop.observe(card4);
scoop.observe(card5);
scoop.observe(card6);
scoop.observe(card7);

