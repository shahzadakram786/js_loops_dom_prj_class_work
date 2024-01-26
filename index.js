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
    }



]
doc.innerHTML = `<h3 id="h1">${arr.length} Birthdays Today</h3>`;

// let h3 = document.getElementById("h3")

for (let i = 0; i < arr.length; i++) {
    // doc2.style.display = "none"
    // console.log(arr
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
// 
let btnclear = document.getElementById("clrbtn");


btnclear.addEventListener('click', () => {
    // arr.clear;
    // doc2.style.display =
    // doc.style.display = "none";
    // arr[i].splice(0, null);

    // arr.length = 0;
    // or
    arr = "";
    doc.innerHTML = `<h3 id="h1">${arr.length} Birthdays Today</h3>`;
    doc.style.height = "20vh";



    // doc2.innerHTML += `
    // <div class = "containerjs3">
    // <h3 id="h1">${arr.length = 0} Birthdays Today</h3>

    // </div>
    // `

    // doc.style.display = ""

})