const container = document.querySelector(".divContainer");
const newBut = document.querySelector(".new");
let numbers;
const resetBut = document.querySelector(".reset");

while(true){
    numbers = +(prompt("Enter the number of columns and rows: "));
    if (numbers > 100){
        alert("Error! Your number is more than 100")
    } else {
        break;
    }
}
makeGrid();

newBut.addEventListener("click", () => {
    while(true){
        numbers = +(prompt("Enter the number of columns and rows: "));
        if (numbers > 100){
            alert("Error! Your number is more than 100")
        } else {
            break;
        }
    }
    const boxes = document.querySelectorAll(".boxContainer");
    boxes.forEach((boxe) => {
        container.removeChild(boxe);
    })
    makeGrid();

})

function makeGrid(){
    let nums = numbers;

    for(let i = 0; i < nums ; ++i){
        const boxContainer = document.createElement("div");
        boxContainer.setAttribute("class", "boxContainer");
        for(let j = 0 ; j < nums ; ++j){
            const box = document.createElement("div");
            box.setAttribute("class", "box");
            box.addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = randomColor();
            })
            boxContainer.appendChild(box);
        }
        container.appendChild(boxContainer);
    }
}

function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

resetBut.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".boxContainer");
    boxes.forEach((boxe) => {
        container.removeChild(boxe);
    })
    makeGrid();
})
