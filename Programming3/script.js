var matrix = [];
matrix = fillMatrix(20,30)

 var n=20;

 var m=30;

function fillMatrix(n,m){
var matrix = [];
for(var i=0;i<n;i++)
{
    matrix.push([])
    for(var j=0;j<m;j++){
        matrix[i].push(Math.floor(Math.random() * 7))
    }

}

 return matrix;
}


var side = 50;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var mardArr = [];
var robotArr=[];



function setup() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            }
            else if (matrix[y][x] == 2) {
                var xt = new Xotaker(x, y)
                xotakerArr.push(xt)
            }
            else if (matrix[y][x] == 4) {
                var mard = new Mard(x, y)
                mardArr.push(mard)
            }
            else if (matrix[y][x] == 5) {
                var robot = new Robot(x, y)
                robotArr.push(robot)
            }
            else if (matrix[y][x] == 3) {
                var gsh = new Gishatich(x, y)
                gishatichArr.push(gsh)
            }
           
           
        }
    }

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
}




function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("white");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }

            rect(x * side, y * side, side, side)

            
        }
    }


    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }

    for (var i in gishatichArr) {
        gishatichArr[i].eat2()
        gishatichArr[i].move2()
        gishatichArr[i].mult2()
        gishatichArr[i].die2()
       
    }
    for (var i in mardArr) {
        mardArr[i].eat3()
        mardArr[i].move3()
        mardArr[i].mult3()
        mardArr[i].die3()
       
    }
    for (var i in robotArr) {
        robotArr[i].eat4()
        robotArr[i].move4()
        robotArr[i].mult4()
        robotArr[i].die4()
       
    }

   
}
