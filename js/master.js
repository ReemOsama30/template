//select landing page element
let landingPage=document.querySelector('.landing_page');

//create array of elements
 let images=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'];

 
//change backgroung image url
setInterval(() => {
    //get random number
    let randomNumber = Math.floor(Math.random() * images.length);
    landingPage.style.backgroundImage = 'url("images/' + images[randomNumber] + '")';

    console.log(randomNumber);
}, 10000);
