
var parentContainer = document.getElementById("parentContainer");
var columns = 16;
var rows = 16;

var grid = document.createElement('div');
grid.className = 'grid';
for (var i = 0; i < columns; ++i) {
    var column = document.createElement('div'); // create column
    column.className = 'column';
    for (var j = 0; j < rows; ++j) {
        var row = document.createElement('div'); // create row
        row.className = 'row';
        row.textContent = i + '-' +j; // set text
        column.appendChild(row); // append row in column
    }
    grid.appendChild(column); // append column inside grid
}
parentContainer.appendChild(grid);

/* Set up a “hover” effect so that the grid divs change color when your mouse passes over them, 
leaving a (pixelated) trail through your grid like a pen would.
Hint: “Hovering” is what happens when your mouse enters a div and ends when
 your mouse leaves it. You can set up event listeners for either of those events as a 
 starting point. There are multiple ways to change the color of the divs, including:
adding a new class to the div. changing the div’s background color using JavaScript.*/


