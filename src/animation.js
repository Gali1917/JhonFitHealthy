const ul = document.getElementById('listCover');


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
    .then((resolve) =>{
        console.log(resolve);
        ul.appendChild(document.getElementsByClassName("list" )[0])
    })
}

setInterval(() => {
    disp();
}, 1000);

