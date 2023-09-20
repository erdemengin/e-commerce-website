let tabContent = document.querySelector(".tab-content");

let dizi = ["Lorem ipsum fashion female top","Lorem ipsum fashion jacket","Lorem ipsum kids eight","Lorem ipsum jacket","Lorem ipsum kids six","Lorem ipsum fashion female coat","Lorem ipsum kids seven","Lorem ipsum jacket"];

let fiyat = ["€35.6","€26.87","€26.87","€19.85","€19.85","€33.3","€33.3","€11.2"];

for (let i = 0; i < 8; i++) {
    let card = document.createElement("div");
    card.classList = "card";
    tabContent.appendChild(card);
    
    let cardImg = document.createElement("div");
    cardImg.classList = "card-img";
    card.appendChild(cardImg);
    
    let img = document.createElement("img");
    img.src = `./img/${i}.jpg`;
    cardImg.appendChild(img);
    
    let cardBottom = document.createElement("div");
    cardBottom.classList = "card-bottom";
    card.appendChild(cardBottom);
    
    let h3 = document.createElement("h3");
    h3.classList = "h3";
    cardBottom.appendChild(h3);
    
    let a = document.createElement("a");
    a.classList = "a";
    h3.appendChild(a);
    a.innerText = dizi[i];
        
    let cardStar = document.createElement("div");
    cardStar.classList = "card-star";
    cardBottom.appendChild(cardStar);
    
    for (let j = 0; j < 5; j++) {
        let icon = document.createElement("i");
        icon.classList = "fas fa-star";
        cardStar.appendChild(icon);    
    }
    
    let cardPrice = document.createElement("span");
    cardPrice.classList = "card-price";
    cardBottom.appendChild(cardPrice);
    cardPrice.innerText = fiyat[i];
}
