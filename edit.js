let x = document.getElementById("one");
let y = document.getElementById("two");
let z = document.getElementById("three");
let w = document.getElementById("four");
function change1() {
    x.src = `images/one${Math.floor(Math.random()*3 + 1)}.png`;
    document.getElementById("display").innerHTML = "";
    for(let i=1; i<=3; i++) {
        if(x.src == `http://127.0.0.1:5500/images/one${i}.png` 
        && y.src == `http://127.0.0.1:5500/images/two${i}.png` 
        && z.src == `http://127.0.0.1:5500/images/three${i}.png` 
        && w.src == `http://127.0.0.1:5500/images/four${i}.png`) {
            document.getElementById("display").innerHTML = "Chúc mừng !!!";
        }
    }
}
function change2() {
    y.src = `images/two${Math.floor(Math.random()*3 + 1)}.png`;
    document.getElementById("display").innerHTML = "";
    for(let i=1; i<=3; i++) {
        if(x.src == `http://127.0.0.1:5500/images/one${i}.png` 
        && y.src == `http://127.0.0.1:5500/images/two${i}.png` 
        && z.src == `http://127.0.0.1:5500/images/three${i}.png` 
        && w.src == `http://127.0.0.1:5500/images/four${i}.png`) {
            document.getElementById("display").innerHTML = "Chúc mừng !!!";
        }
    }
}
function change3() {
    z.src = `images/three${Math.floor(Math.random()*3 + 1)}.png`;
    document.getElementById("display").innerHTML = "";
    for(let i=1; i<=3; i++) {
        if(x.src == `http://127.0.0.1:5500/images/one${i}.png` 
        && y.src == `http://127.0.0.1:5500/images/two${i}.png` 
        && z.src == `http://127.0.0.1:5500/images/three${i}.png` 
        && w.src == `http://127.0.0.1:5500/images/four${i}.png`) {
            document.getElementById("display").innerHTML = "Chúc mừng !!!";
        }
    }
}
function change4() {
    w.src = `images/four${Math.floor(Math.random()*3 + 1)}.png`;
    document.getElementById("display").innerHTML = "";
    for(let i=1; i<=3; i++) {
        if(x.src == `http://127.0.0.1:5500/images/one${i}.png` 
        && y.src == `http://127.0.0.1:5500/images/two${i}.png` 
        && z.src == `http://127.0.0.1:5500/images/three${i}.png` 
        && w.src == `http://127.0.0.1:5500/images/four${i}.png`) {
            document.getElementById("display").innerHTML = "Chúc mừng !!!";
        }
    }
}