let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'fish fry',
        image: 'fish fry.jpg',
        price:  50
    },
    {
        id: 2,
        name: 'Biriyani.',
        image: 'biriyani.webp',
        price: 100
    },
    {
        id: 3,
        name: 'Dosa',
        image: 'dosa.avif',
        price: 15
    },
    {
        id: 4,
        name: 'meals',
        image: 'mealse.jpg',
        price: 80
    },
    {
        id: 5,
        name: 'Noodles',
        image: 'noodles.jpg',
        price: 90
    },
    {
        id: 6,
        name: 'Parotta',
        image: 'parotta.webp',
        price: 15
    },
    {
        id: 7,
        name: 'Pasta',
        image: 'pasta.webp',
        price: 80
    },
    {
        id: 8,
        name: 'Pizza',
        image: 'pizza.jpg',
        price: 300
    },
    {
        id: 9,
        name: 'Shawarma',
        image: 'Shawarma.jpg',
        price: 70
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <a href="details.html"><img src="${value.image}"></a>
            <div class="title">${value.name}</div>
            <div class="price"> ₹ ${value.price}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div> ₹ ${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}