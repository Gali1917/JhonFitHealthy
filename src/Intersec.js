const card = document.getElementById("skills");

const uploadCard = () => {
    console.log('prueba');
}

const scoop = new IntersectionObserver(uploadCard, {
    root: null,
    rooMargin: '0px',
    threshold: 1.0
});


scoop.observe(card);