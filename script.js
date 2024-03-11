let numbers = 16;
const newBut = document.querySelector(".new");

makeGrid(numbers);

newBut.addEventListener("click", (e) => {
    let newNumb = prompt("Enter the number of rows and columns: ");
    numbers = +(newNumb);
    makeGrid(numbers);
})

function makeGrid(number){
    let length = (840 - number)/number;


}