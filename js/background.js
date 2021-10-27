const skys=[
    "sky1.jpg",
    "sky2.jpg",
    "sky3.jpg",
    "sky4.jpg",
    "sky5.jpg",
];

const chosenImage = skys[Math.floor(Math.random() * skys.length)];

const bgImage = document.createElement("img");
bgImage.src=`images/${chosenImage}`;

document.body.appendChild(bgImage);