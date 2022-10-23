var parentContainer = document.getElementById("parentContainer");
createGrid(16,16);

function createGrid(c,r){
    var columns = c;
    var rows = r;
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
}

function getVariable(){
    var newColumn = window.prompt("size?");
    createGrid(newColumn, newColumn);
}

var btn = document.getElementById("resetBtn").addEventListener("click", function() {
    getVariable();
});

