var w;

function startWorker() {
    if (typeof (Worker) !== "undefined") {
        if (typeof (w) == "undefined") {
            w = new Worker("JS/webWorker.js");
        }
        w.onmessage = function (event) {
            document.getElementById("result").innerHTML = event.data;
        };
    }
    else {
        document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
    }
}

function stopWorker() {
    w.terminate();
    w = undefined;
}

let containerNode = document.getElementById("container");
let boxNode = containerNode.childNodes[1];

console.log(containerNode.childNodes);



let pos = 0;

let id1 = setInterval(moveForward, 10);
let id2;

function moveForward() {
    if (pos >= 150) {
        clearInterval(id1);
        id2 = setInterval(moveBackward, 10);
    }
    else {
        pos++;
        boxNode.style.left = pos + "px";
    }
}

function moveBackward() {
    if (pos == 0) {
        clearInterval(id2);
        id1 = setInterval(moveForward, 10);
    }
    else {
        pos--;
        boxNode.style.left = pos + "px";
    }
}

// 563492ad6f9170000100000188ec3fdf224c494b896074ac3d4dac6e

// async function getPic() {
//     // let xhrObject = new XMLHttpRequest();

//     // xhrObject.open("POST", "https://api.pexels.com/v1", true);
//     // xhrObject.setRequestHeader("Authorization", "563492ad6f9170000100000188ec3fdf224c494b896074ac3d4dac6e");
//     // xhrObject.send("search?query=dog");

//     // xhrObject.onreadystatechange = function () {
//     //     if (this.readyState == 4 && this.status == 200) {
//     //         let data = xhrObject.responseText;
//     //         // data = JSON.stringify(data);
//     //         console.left(data);
//     //     }
//     // };

//     let fetchObject = await fetch("https://api.pexels.com/v1/search?query=dog", {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         headers: {
//             'Authorization': '563492ad6f9170000100000188ec3fdf224c494b896074ac3d4dac6e'
//         }
//     });

//     console.log(fetchObject);
// }

// getPic();

// let sliderNode = document.getElementById("slider");
let images = [
    "Images/pic-1.jpg",
    "Images/pic-2.jpg",
    "Images/pic-3.jpg"
];
let num = 0;
// let currentPic = 1;

document.getElementById("slider").src = images[1];

// function prev() {
//     currentPic--;
//     currentPic = currentPic % 3;
//     currentPic = currentPic < 0 ? currentPic + 3 : currentPic;
//     sliderNode.src = `Images/pic-${currentPic + 1}.jpg`;
// }

// function next() {
//     sliderNode.src = `Images/pic-${(currentPic++) % 3 + 1}.jpg`;
// }

function next() {
    let sliderNode = document.getElementById("slider");
    num++;
    if (num >= images.length)
        num = 0;
    sliderNode.src = images[num];
}

function prev() {
    let sliderNode = document.getElementById("slider");
    num--;
    if (num < 0)
        num = images.length - 1;

    sliderNode.src = images[num];
}


let map = new Map();
map.set("first", 100);
map.set("second", 200);
map.set(15, 600);
console.log(map.get("second"));
console.log(map.get(15));
console.log(map.entries());

let set = new Set();
set.add(1);
set.add(1);
set.add(500);
console.log(set.values());

function* idMaker() {
    var index = 0;
    while (true)
        yield index++;
}

var gen = idMaker();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

const myIterator = {
    next: function () {
        console.log("HIIII");
    },
    [Symbol.iterator]: function () {
        return this;
    }
}

myIterator.next();

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(...arr);

const array = ['0', '1', '2', '4', '5', 'a', '9', 'c', '16'];
const my_obj = {
    [Symbol.iterator]: function* () {
        for (let index of array) {
            yield `${index}`;
        }
    }
};

const all = [...my_obj]
    .map(i => parseInt(i, 10))
    .map(Math.sqrt)
    .filter((i) => i < 5)
    .reduce((i, d) => i + d);
console.log(all);





