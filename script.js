const products = [
    { name: "Agha Noor", img: "../productDetails/aghaNoor.jpg", description: "Pure cotton Lawn suit Long 2.04 top Cotton dupatta 2.02mtr", price: 750, variations: [] },
    { name: "Banarsi print", img: "../productDetails/banarsi.jpg", description: "Banarasi print suit 2 mt top 2.50 mt bottom,2 mt dupatta", price: 500, variations: ['Red', 'Pink', 'Sea green'] },
    { name: "Chicken lakhnavi", img: "../productDetails/chickenLakhnavi.jpg", description: "Pure cotton chicken work Full lakhnavi work suit Heavy cutwork Dupatta", price: 1000, variations: ['Peach', 'Pink', 'Yellow', 'Green'] },
    { name: "cotton Namazi Dupatta", img: "../productDetails/cotton Namazi Dupatta.jpg", description: "Printed cotton suitPrinted bottom Printed pure cotton dupatta", price: 550, variations: ['Peach', 'Pink', 'Yellow', 'Blue'] },
    { name: "Fox georgette multi sequence ", img: "../productDetails/Fox georgette multi sequence.jpg", description: "Multi sequence work suit Heavy border daman Stylish bottom suit Heavy dupatta", price: 1200, variations: ['Grey', 'Pink', 'Yellow', 'grape green'] },
    { name: "Georgette suits(boutique collections)", img: "../productDetails/Georgette suits(boutique collections).jpg", description: "Geogette sequence suit Designer embroidery suit", price: 850, variations: ['Peach', 'Yellow', 'Pink', 'Sea green'] },
    { name: "Patch lawn suit", img: "../productDetails/patchLawn.jpg", description: "Pure lawn cotton suit Fancy embroidery with patch  Cotton dupatta", price: 1000, variations: ['Blue', 'Yellow', 'Sea green', 'Black'] },
    { name: "Party wear gowns", img: "../productDetails/Party wear gowns.jpg", description: "Net fabric with heavy embroidery Santoon lining", price: 800, variations: ['Royal Blue', 'Pista green'] },
    { name: "Gun gun collection", img: "../productDetails/Gun gun collection.jpg", description: "", price: 500, variations: ['Tomato Red', 'Pink', 'Turmeric Yellow', 'Green'] },
    { name: "Jamm cotton suit", img: "../productDetails/jamm cotton suit.jpg", description: "Pure jamm cotton with hand embroidery 2mt top 2.5mt botton Embroidered dupatta", price: 525, variations: ['Red', 'Orange', 'Yellow', 'Green'] },
    { name: "Lehanga", img: "../productDetails/Lehanga.jpg", description: "net fabric lehanga with heavy embroidery design bell lace heavy dupatta,adjustable blouse with latkan and doori", price: 1000, variations: ['Green'] },
    { name: "Mumtaz Suit", img: "../productDetails/Mumtaz Suit.png", description: "Very Famous suit", price: 650, variations: [] },
    { name: "South cotton", img: "../productDetails/south cotton.jpg", description: "Print cotton bottom Print Dupatta", price: 750, variations: ['Purple','Orange'] }
    ]
const reviews = [
    { author: 'Ishpreet Kaur', review: 'Discount Queen ek nayi soch ke sath kaam kar rahi hai, baki koi website community ke liye kaam nahi karti hai. yahan mujhe discount bhi milta hai aur good feel bhi donate karne ka..' },
    { author: 'Sakshi Sharma', review: 'Mujhe Kapde lene ka bahut craze hai, mei trend mei bane rahna pasand karti huu, Isiliye Mene Discount Queen ko Ek chance diya aur mei shock ho gayi ki "I am getting 75% discount " aur mei ek good cause ke liye bhi support kar rahi hu. Good Bless You! Discount Queen' },
    { author: 'Saira khatoon', review: 'I just loved the idea of donating a share of profits to poor students. As a social activist, I can totally relate with their idea of empowering with Discounts because in Our society Discounts are stereotyped with women. Above all their Collections are Fresh, trendy and available at Discount' }
];
const bsImage = document.querySelector('.bsImage');
const productDescription = document.querySelector('.productDescription');
const reviewCard=document.querySelector('.reviewCard')
const rightBtn = document.getElementById('rightButton')
// const bs1=document.getElementById('bs1');
// const BSSection=document.getElementsByClassName('topAlert');
// now change the inner content of bsImage on clicking any button
const leftBtn = document.getElementById('leftButton')
leftBtn.style.display = 'none';
let current = 1;
let previous = 0;
let next = 2;

function changeBsImage() {
    // change image
    bsImage.innerHTML = `<a href="#" class="afterNavbarLink"><img src="${products[current].img}" alt="${products[current].description}"></a>`;
    productDescription.innerHTML =
        `<p id="pName"> <em><strong>Name:</strong>${products[current].name}</em></p>
    <p id="pDescription"><em><strong>Description:</strong>${products[current].description}</em></p>
    <p id="pPrice"><em><strong>Price:</strong>₹${products[current].price}</em></p>`;
}
changeBsImage();
function leftMovement() {
    if (previous > 0) {
        next = current;
        current = previous--;
        // previous--;
        rightBtn.style.display = 'block'
        changeBsImage();
    }
    else {
        leftBtn.style.display = 'none';
    }
}
function rightMovement() {
    if (next < products.length) {
        previous = current;
        current = next++;
        leftBtn.style.display = 'block'
        changeBsImage();
    } else {
        rightBtn.style.display = 'none';
    }
}
leftBtn.addEventListener('click', () => {
    leftMovement();
})
rightBtn.addEventListener('click', () => {
    rightMovement();
})
function autoMovement() {
    // for continous cyclic movement of products
    if (current < products.length - 1) {
        rightMovement()
    } else {
        // re-Initialise the variables
        previous = -1;
        current = 0;
        next = 1;
        leftMovement()
    }
}
// for product display automation
const productTimer=setInterval(autoMovement, 5000);
// for changing review cards automatically
let reviewPos=0;
function changeReview() {
    if (reviewPos<reviews.length-1) {
        reviewPos++;
    } else {
        // re-initialise the cards
        reviewPos=0;
    }
    reviewCard.innerHTML=`<i class="fas fa-quote-left"></i>
    <p>${reviews[reviewPos].review}</p>
    <h5>-${reviews[reviewPos].author}</h5>`;
}
changeReview()
const reviewTimer=setInterval(changeReview,5000);
// to do--> move products smoothly,improve colour,whatsApp component
// using searchBars,El means element
const searchEl=document.querySelector('#searchItem')
// console.log(searchEl.value)
// searchEl.value='jiji'
function searchCheck(){
    let currentText=searchEl.value.toLowerCase()
    console.log('working',currentText)
    products.forEach(product => {
        // to match the pattern
        let productName=product.name.toLowerCase();
        if (!(productName).includes(currentText,0)) {
            // console.log("sorry, doesn't exists");
            searchEl.value="sorry, doesn't exists"
        } else {
            // prevent default behaviour on submit
            // move to that specific product
            searchEl.value="Yes, we have that!";
        }
    });
}
