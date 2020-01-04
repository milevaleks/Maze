let template = document.getElementById("app");
let animations = document.getElementById("animations");
let button = document.getElementById("simple1");
const gifface = "facetest.gif";

let maze = 
[
    ['*', '*', '*', '*', '*', '*', '*'],
    ['*', 's', '*', '*', '*', '*', '*'],
    ['*', ' ', '*', '*', '*', ' ', '*'],
    ['*', ' ', '*', '*', '*', ' ', '*'],
    ['*', ' ', ' ', ' ', ' ', ' ', '*'],
    ['*', '*', '*', ' ', '*', '*', '*'],
    ['*', '*', '*', ' ', '*', '*', '*'],
    ['*', ' ', ' ', ' ', '*', '*', '*'],
    ['*', ' ', '*', '*', '*', '*', '*'],
];
let size = 50;
let height = maze.length;
let width = maze[0].length;

let visited = [];
for (let i =0;i<visited.lenght;i++){
    visited[i] = new Array(maze[0].lenght)
    for (let j =0;i<visited.lenght;j++){
    }
}
function findStarrowtion(maze){
    for (let row = 0; row < maze.length; row++) {
       for (let col = 0; col < maze[0].length; col++) {
           if (maze [row ] [col] == 's'){
               return {row, col}
           }		
       }	 
   }
}
let canvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
canvas.setAttribute('width', width*size);
canvas.setAttribute('height',height*size);

let appendEllement = (canvas, node, maze) => {
    let colors = {
        "*":"black",
        " ":"orange",
        "s":"red"
    };
    let blockRef = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
        blockRef.setAttribute('height', size)
        blockRef.setAttribute('width', size)
        blockRef.setAttribute('x', node.x*size)
        blockRef.setAttribute('y', node.y*size)
        blockRef.setAttribute('fill', colors[maze[node.y][node.x]])
        canvas.appendChild(blockRef)
}

maze.map((row, y, arr) => {
    row.map((col ,x ) => {
        appendEllement(canvas, {x,y}, maze);
    })
})

template.appendChild(canvas);

let start = {row:0, col:0};

let que = [start]

while (que.length > 0){
    let element = que.shift();
    if(visited[element.row+1, element.col] != false &&  maze[element.row+1, element.col] != 1){
        que.push({row:element.row+1, col:element.col});
        visited[element.row+1][element.col];
    }
    
    if(visited[element.row-1, element.col] != false &&  maze[element.row-1, element.col] != 1){
        que.push({row:element.row-1, col:element.col});
        visited[element.row-1][element.col];
    }
    
    if(visited[element.row, element.col+1] != false &&  maze[element.row, element.col+1] != 1){
        que.push({row:element.row,  col:element.col+1});
        visited[element.row][element.col+1];
    }
    
    if(visited[element.row, element.col-1] != false &&  maze[element.row+1, element.col-1] != 1){
        que.push({row:element.row, col:element.col-1},);
        visited[element.row][element.col-1];
    }
}