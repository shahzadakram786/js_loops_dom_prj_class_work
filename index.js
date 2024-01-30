let doc = document.getElementById("container");
let h = document.getElementById("h1")
let doc2 = document.getElementById("container2");


let arr = [{
        img: "./person-1.jpeg",
        name: "Bertie Yates",
        year: "29 years"
    },
    {
        img: "./person-2.jpeg",
        name: 'Herster Hogan',
        year: "32 years"
    },
    {
        img: "./person-3.jpeg",
        name: 'Larry Little',
        year: "36 years"
    },
    {
        img: "./person-4.jpeg",
        name: 'Sean Walsh',
        year: "34 years"
    },
    {
        img: "./person-5.jpeg",
        name: 'Lola Gardner ',
        year: "29 years"
    }, {
        img: "./person-5.jpeg",
        name: 'Lola Gardner ',
        year: "29 years"
    },
    {
        img: "./person-5.jpeg",
        name: 'Lola Gardner ',
        year: "29 years"
    },
    {
        img: "./person-5.jpeg",
        name: 'Lola Gardner ',
        year: "29 years"
    },
    {
        img: "./person-5.jpeg",
        name: 'Lola Gardner ',
        year: "29 years"
    }



]
doc.innerHTML = `<h3 id="h1">${arr.length} Birthdays Today</h3>`;



for (let i = 0; i < arr.length; i++) {

    doc.innerHTML += `
    
    <div id= "divjs"> 
    <img src=${arr[i].img} id="img">
    <div id="divjs2">
    <h5 class= "text"> ${arr[i].name } </h5>
    <p class= "text">${arr[i].year}</p>
    </div>
    </div>
    `
}

doc.innerHTML += `<button id="clrbtn">Clear All</button>`;

let btnclear = document.getElementById("clrbtn");


btnclear.addEventListener('click', () => {;
    arr = [];
    doc.innerHTML = `<h3 id="h1">${arr.length} Birthdays Today</h3> <i id="icon" class = "fa-solid fa-arrows-rotate"> </i>`;
    doc.style.height = "20vh";
    doc.innerHTML += `<button id="clrbtn">Back</button>`;
    // doc.style.margintop = "20px";





})