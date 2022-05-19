//parameters to use
//using the getElement to bring out the functionality of the parameter

let sizePicker = document.getElementById('sizePicker');
let pixelCanvas = document.getElementById("pixelCanvas");
let submit = document.getElementById('submit');

//call to prevent Default from running while running code
 function createGrid(event) {
    event.preventDefault();
    clearGrid();
    let height = document.getElementById('inputHeight');
    let width = document.getElementById('inputWidth');
    makeGrid(height, width);
};

//function command to makeGrid
function makeGrid(height, width) {
    //for loops used to createGrid
    for (let j=1; j<=height.value; j++) {
        const tr =document.createElement('tr')
        tr.setAttribute('id', 'table' + j)
    pixelCanvas.appendChild(tr);
        for (let k=1; k<=width.value; k++) {
            const td =document.createElement('td')
            document.getElementById('table'+ j).appendChild(td);
           
    }
    }

    };
 //add event listener to listen for the submit call
    submit.addEventListener('click', createGrid)

//function call to clear existing grid
function clearGrid() {
     while (pixelCanvas.firstChild) {
         pixelCanvas.removeChild(pixelCanvas.firstChild);
}
};

//to add color to the Grid
//METHOD 1
const td =document.createElement('td')

td.addEventListener("click", function addColor() {
    let sizeColor = document.getElementById('colorPicker').value;
    td.style.backgroundColor = sizeColor;

}
);

//METHOD 2
    //const td =document.createElement('td')

//td.addEventListener('click', function addColor() {
//let sizeColor = document.getElementById('colorPicker').value;
//tableData.style.backgroundColor = sizeColor;
    //if (td.attr("style")) {
    //td.removeAttr("style")
   // } else {
    //td.attr("style", 'background-color:' + sizeColor);
       // }
  // });
   