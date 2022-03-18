products = [{
    name: "Agha Noor", img: "../productDetails/aghaNoor.jpg", description: "Pure cotton Lawn suit Long 2.04 top Cotton dupatta 2.02mtr",price:750,variations:[]},
    {name: "Banarsi print", img: "../productDetails/banarsi.jpg",description:"Banarasi print suit 2 mt top 2.50 mt bottom,2 mt dupatta",price:500,variations:['Red','Pink','Sea green']},
    {name: "Chicken lakhnavi", img: "../productDetails/chickenLakhnavi.jpg",description:"Pure cotton chicken work Full lakhnavi work suit Heavy cutwork Dupatta",price:1000,variations:['Peach','Pink','Yellow','Green']},
    {name: "cotton Namazi Dupatta", img: "../productDetails/cotton Namazi Dupatta.jpg",description:"Printed cotton suitPrinted bottom Printed pure cotton dupatta",price:550,variations:['Peach','Pink','Yellow','Blue']},
    {name: "Fox georgette multi sequence ", img: "../productDetails/Fox georgette multi sequence .jpg",description:"Multi sequence work suit Heavy border daman Stylish bottom suit Heavy dupatta",price:1200,variations:['Grey','Pink','Yellow','grape green']},
    {name: "Georgette suits(boutique collections)", img: "../productDetails/Georgette suits(boutique collections).jpg",description:"Geogette sequence suit Designer embroidery suit",price:850,variations:['Peach','Yellow','Pink','Sea green']},
    {name: "Patch lawn suit", img: "../productDetails/Patch lawn suit.jpg",description:"Pure lawn cotton suit Fancy embroidery with patch  Cotton dupatta",price:1000,variations:['Blue','Yellow','Sea green','Black']},
    {name: "Party wear gowns", img: "../productDetails/Party wear gowns.jpg",description:"Net fabric with heavy embroidery Santoon lining",price:800,variations:['Royal Blue','Pista green']},
    {name: "Gun gun collection", img: "../productDetails/Gun gun collection.jpg",description:"Banarasi print suit 2 mt top 2.50 mt bottom,2 mt dupatta",price:500,variations:['Tomato Red','Pink','Turmeric Yellow','Green']},
]
const bsImage=document.getElementsByClassName('bsImage')
const BSSection=document.getElementsByClassName('topAlert').innerHTML
// const rightBtn=document.getElementById('rightButton')
// now change the inner content of bsImage on clicking any button
let current=1;
let previous=0;
let next=2;
// const leftBtn=Btn[0]
console.log(BSSection)
// console.log(bsImage.innerHTML)
// function changeBsImage(){
//     // change image
//     console.log(products.length)
// }

// leftBtn[1].addEventListener('click',()=>{
//     if (previous>0) {
//         previous--;
//         changeBsImage();
//     }
// })
// rightBtn.addEventListener('click',()=>{
//     if (next<products.length-1) {
//         next++;
//         changeBsImage();
//     }
// })