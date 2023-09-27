// variables
let tabContent = document.querySelector(".tab-content");
var main = document.querySelector(".main");
let dizi = ["Lorem ipsum fashion female top", "Lorem ipsum fashion jacket", "Lorem ipsum kids eight", "Lorem ipsum jacket", "Lorem ipsum kids six", "Lorem ipsum fashion female coat", "Lorem ipsum kids seven", "Lorem ipsum jacket"];

let fiyat = ["€35", "€26", "€26", "€19", "€19", "€33", "€33", "€11"];
var totalPrice = 0;


function createCard() {
    for (let i = 0; i < dizi.length; i++) {
        let card = document.createElement("div");
        card.classList = "card";
        tabContent.appendChild(card);

        let cardImg = document.createElement("div");
        cardImg.classList = "card-img";
        card.appendChild(cardImg);

        let img = document.createElement("img");
        img.src = `./img/${i}.jpg`;
        cardImg.appendChild(img);

        let buyBox = document.createElement("div");
        buyBox.classList = "buy-box";
        card.appendChild(buyBox);


        let buyBoxHeart = document.createElement("i");
        buyBoxHeart.classList = "fa-solid fa-heart";
        buyBox.appendChild(buyBoxHeart);

        let yazi = document.createElement("p");
        yazi.classList = "yazi";
        yazi.innerText = "BUY NOW";
        yazi.setAttribute("clicked", "false");
        buyBox.appendChild(yazi);

        let buyBoxLook = document.createElement("i");
        buyBoxLook.classList = "fa-solid fa-eye";
        buyBox.appendChild(buyBoxLook);


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


}
function createShoppingBox() {
    let shoppingBox = document.createElement("div");
    shoppingBox.classList = "shoppingBox";

    main.appendChild(shoppingBox);

    let shoppingBoxTop = document.createElement("div");
    shoppingBoxTop.classList = "shoppingBox-top";
    shoppingBox.appendChild(shoppingBoxTop);

    let shoppingCartText = document.createElement("h5");
    shoppingCartText.classList = "shopping-cart-text";
    shoppingCartText.innerText = "Shopping Cart";
    shoppingBoxTop.appendChild(shoppingCartText);

    let closeBtn = document.createElement("a");
    closeBtn.classList = "close-btn";
    shoppingBoxTop.appendChild(closeBtn);

    let closeIcon = document.createElement("i");
    closeIcon.classList = "fas fa-close";
    closeBtn.appendChild(closeIcon);

    closeIcon.addEventListener("click", () => {
        shoppingBox.classList.toggle("anim")
    });

    let shoppingBoxContainer = document.createElement("div");
    shoppingBoxContainer.classList = "shoppingBoxContainer";
    shoppingBox.appendChild(shoppingBoxContainer);

    let shoppingBoxBottom = document.createElement("div");
    shoppingBoxBottom.classList = "shoppingBox-bottom";
    shoppingBox.appendChild(shoppingBoxBottom);

    let total = document.createElement("div");
    total.classList = "total";
    shoppingBoxBottom.appendChild(total);

    let totalTitle = document.createElement("div");
    totalTitle.classList = "total-title";
    totalTitle.innerText = "Subtotal:"
    total.appendChild(totalTitle);

    let totalValue = document.createElement("span");
    totalValue.classList = "total-value";
    totalValue.innerText = totalPrice;
    total.appendChild(totalValue);

    let btnClear = document.createElement("button");
    btnClear.classList = "btn-clear";
    btnClear.innerText = "CLEAR";
    shoppingBoxBottom.appendChild(btnClear);

    document.querySelector(".shoppingIcon").addEventListener("click", () => {
        shoppingBox.classList.toggle("anim")
    });
}

function createShoppingItem(item) {


}

function calcTotal(){
    let prices = document.querySelectorAll(".cart-left-info-price");
    let totalValue = document.querySelector(".total-value");
    let total = 0;
    prices.forEach(price => {
       
        let newPrice = Number(price.innerText.replace("€", "")); // Convert to a number

        total += newPrice; // Add the newPrice to the total

    });
    console.log(total);
    totalValue.innerText = "€"+ total;
}


createCard();
createShoppingBox();

// yazı click event(ürünü sepete ekleme kısmı)
let yazilar = document.querySelectorAll(".yazi");
let totalCartItem = 0;

yazilar.forEach(yazi => {
    var quantity;
    var cartLeftInfoPrice;
    var price;
    var count;
 
    let shoppingItem = document.querySelector(".shopping-item");
    shoppingItem.innerText = totalCartItem;

    
    yazi.addEventListener("click",(e)=>{
        totalCartItem += 1;
        shoppingItem.innerText = totalCartItem;

        if (e.target.getAttribute("clicked")=="false") {
            count = 1;
            let shoppingBoxCenter = document.createElement("div");
            shoppingBoxCenter.classList = "shoppingBox-center";
            document.querySelector(".shoppingBoxContainer").appendChild(shoppingBoxCenter);
        
            let cartListItem = document.createElement("li");
            cartListItem.classList = "cart-list-item";
            shoppingBoxCenter.appendChild(cartListItem);
        
            let cartLeft = document.createElement("div");
            cartLeft.classList = "cart-left";
            cartListItem.appendChild(cartLeft);
        
            let cartLeftImg = document.createElement("img");
            cartLeftImg.classList = "cart-left-img";
            cartLeftImg.src = e.target.parentElement.parentElement.children[0].children[0].src;
            cartLeft.appendChild(cartLeftImg);
        
            let cartLeftInfo = document.createElement("div");
            cartLeftInfo.classList = "cart-left-info";
            cartLeft.appendChild(cartLeftInfo);
        
            let cartLeftInfoTitle = document.createElement("p");
            cartLeftInfoTitle.innerText = e.target.parentElement.parentElement.children[2].children[0].children[0].innerText;
            cartLeftInfoTitle.classList = "cart-left-info-title";
            cartLeftInfo.appendChild(cartLeftInfoTitle);
        
            cartLeftInfoPrice = document.createElement("span");
            cartLeftInfoPrice.classList = "cart-left-info-price";
            price = e.target.parentElement.parentElement.children[2].children[2].innerText.replace("€", "");
            cartLeftInfoPrice.innerText = "€" + price * count;
            cartLeftInfo.appendChild(cartLeftInfoPrice);
        
            let cartRight = document.createElement("div");
            cartRight.classList = "cart-right";
            shoppingBoxCenter.appendChild(cartRight);
        
            let cartRightQuantity = document.createElement("div");
            cartRightQuantity.classList = "cart-right-quantity";
            cartRight.appendChild(cartRightQuantity);
        
        
            let quantityMinus = document.createElement("button");
            quantityMinus.classList = "quantity-minus";
            cartRightQuantity.appendChild(quantityMinus);
        
        
            quantity = document.createElement("span");
            quantity.classList = "quantity";
            quantity.innerText = count;
            cartRightQuantity.appendChild(quantity);
            // counter azaltma
            quantityMinus.addEventListener("click", (e) => {
                if (count > 1) {
                    count -= 1;
                    quantity.innerText = count;
                    cartLeftInfoPrice.innerText = "€" + price * count;
                    calcTotal()
                    totalCartItem -= 1;
                    shoppingItem.innerText = totalCartItem;
                }
            });
        
            let minusIcon = document.createElement("i");
            minusIcon.classList = "fas fa-minus";
            quantityMinus.appendChild(minusIcon);
        
            let quantityPlus = document.createElement("button");
            quantityPlus.classList = "quantity-plus";
            cartRightQuantity.appendChild(quantityPlus);
            // counter arttırma
            quantityPlus.addEventListener("click", () => {
                count += 1;
                quantity.innerText = count;
                cartLeftInfoPrice.innerText = "€" + price * count;
                calcTotal()
                totalCartItem += 1;
                shoppingItem.innerText = totalCartItem;
            });
        
            let plusIcon = document.createElement("i");
            plusIcon.classList = "fas fa-plus";
            quantityPlus.appendChild(plusIcon);
        
            let cartRightRemove = document.createElement("div");
            cartRightRemove.classList = "cart-right-remove";
            cartRight.appendChild(cartRightRemove);
        
            let cartRemoveBtn = document.createElement("button");
            cartRemoveBtn.classList = "cart-remove-btn";
            cartRightRemove.appendChild(cartRemoveBtn);

            cartRemoveBtn.addEventListener("click", ()=>{
                shoppingBoxCenter.remove();
                calcTotal()
                sayi -= 1;
                shoppingItem.innerText = sayi;
            })
        
            let removeIcon = document.createElement("i");
            removeIcon.classList = "fas fa-trash";
            cartRemoveBtn.appendChild(removeIcon);
    
            calcTotal()

            e.target.setAttribute("clicked", "true")
        }else{
            count += 1;
            quantity.innerText = count;
            cartLeftInfoPrice.innerText = "€" + price * count;
            calcTotal()
        }
    })
})




