let doc = document.getElementById("container");
let h = document.getElementById("h1")

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
        year: "36 years"
    },
    {
        img: "./person-5.jpeg",
        name: 'Lola Gardner ',
        year: "36 years"
    }

]


for (let i = 0; i < arr.length; i++) {
    // console.log(arr)
    doc.innerHTML += ` <p class= "text"> ${ arr[i].name } </p>
    <p class= "text">${arr[i].year}</p>
    <img src=${arr[i].img} id="img">`
}