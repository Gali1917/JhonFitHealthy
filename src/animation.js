const ul = document.getElementById('listCover');
const cover = document.getElementById('imgCover');

function frame(){
    const animation = ul.animate([
        {transform: "TranslateY(0px)"},
        {transform: "TranslateY(-24px)"}
    ], {
        easing: "Linear",
        iterations: 1,
        duration: 200
    });

    return animation.finished;
}

function disp(){
    frame()
    .then(() =>{
        ul.appendChild(document.getElementsByClassName("list" )[0])
    })
}

setInterval(() => {
    disp()
}, 1000);

function changeCover(){
    const animation = cover.animate([
    ],
    {
        easing: "Linear",
        iterations: 1,
        duration: 200
    });

    return animation.finished;
}
function displayCover(){
    changeCover()
    .then(() => {
        cover.appendChild(document.getElementsByClassName("imgCovers")[0])
    })
}

setInterval(() => {
    displayCover()
}, 3000);