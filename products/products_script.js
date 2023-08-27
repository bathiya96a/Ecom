// function loadingGallery() {
    
    const gallery = document.getElementById("gallery");

    const products = [
        {
            ahref:"#", 
            imageUrl:"../assets/products/bg2.jpg",
            title:"Lorem Ipsum2",
            discount:"Discounts",
            iconID:"addtowish2",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, maiores?",
            button1:"Add to Cart",
            button2:"Buy"
        },
        {
            ahref:"#", 
            imageUrl:"../assets/products/bg3.jpg",
            title:"Lorem Ipsum3",
            discount:"Discounts",
            iconID:"addtowish3",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, maiores?",
            button1:"Add to Cart",
            button2:"Buy"
        },
        {
            ahref:"#", 
            imageUrl:"../assets/products/bg4.jpg",
            title:"Lorem Ipsum4",
            discount:"Discounts",
            iconID:"addtowish4",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, maiores?",
            button1:"Add to Cart",
            button2:"Buy"
        },
        {
            ahref:"#", 
            imageUrl:"../assets/products/bg5.jpg",
            title:"Lorem Ipsum5",
            discount:"Discounts",
            iconID:"addtowish5",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, maiores?",
            button1:"Add to Cart",
            button2:"Buy"
        },
        {
            ahref:"#", 
            imageUrl:"../assets/products/bg6.jpg",
            title:"Lorem Ipsum6",
            discount:"Discounts",
            iconID:"addtowish6",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, maiores?",
            button1:"Add to Cart",
            button2:"Buy"
        },
        {
            ahref:"#", 
            imageUrl:"../assets/products/bg7.jpg",
            title:"Lorem Ipsum7",
            discount:"Discounts",
            iconID:"addtowish7",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, maiores?",
            button1:"Add to Cart",
            button2:"Buy"
        },
        {
            ahref:"#", 
            imageUrl:"../assets/products/bg8.jpg",
            title:"Lorem Ipsum8",
            discount:"Discounts",
            iconID:"addtowish8",
            description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, maiores?",
            button1:"Add to Cart",
            button2:"Buy"
        }
    ]

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");

        const a_link = document.createElement("a");
        a_link.href = product.ahref;
        a_link.classList.add("a_link");
        card.appendChild(a_link);

        const img = document.createElement("img");
        img.src = product.imageUrl;
        a_link.appendChild(img);

        const carddtls = document.createElement("div");
        carddtls.classList.add("card-details");
        card.appendChild(carddtls);

        const cardheader = document.createElement("div");
        cardheader.classList.add("card-header");
        carddtls.appendChild(cardheader);

        const title = document.createElement("h3");
        title.textContent = product.title;
        // h3.classList.add("card-details");
        cardheader.appendChild(title);

        const discount = document.createElement("p");
        discount.textContent = product.discount;
        // discount.classList.add("card-header");
        cardheader.appendChild(discount);

        const iconheart = document.createElement("i");
        iconheart.classList.add("fa-regular");
        iconheart.classList.add("fa-heart");
        iconheart.style = "color:#f8b7b7";
        iconheart.id = product.iconID;
        // iconheart.addEventListener(onclick(addtowishlist(product.iconID)));
        // alert(iconheart.id);
        cardheader.appendChild(iconheart);

        iconheart.addEventListener('click', () => {
            addtowishlist(iconheart.id);
        })

        const content = document.createElement("div");
        content.classList.add("card-content");
        carddtls.appendChild(content);

        const description = document.createElement("p");
        description.textContent = product.description;
        content.appendChild(description);

        const addtocart = document.createElement("button");
        addtocart.classList.add("addtocartbtn");
        addtocart.textContent = product.button1;
        content.appendChild(addtocart);

        const buy = document.createElement("button");
        buy.classList.add("buybtn");
        buy.textContent = product.button2;
        content.appendChild(buy);

        gallery.appendChild(card);
    })

    iconheart.addEventListener = onclick(addtowishlist(iconheart.id));
// }

