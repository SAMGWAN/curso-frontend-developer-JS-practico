const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const burggerMenuIcon=document.querySelector('.menu');
const burggerMenu=document.querySelector('.mobile-menu');
const carShopIcon=document.querySelector('.navbar-shopping-cart');
const cardsContainerHTML=document.querySelector('.cards-container');
const shoppingCartContainer=document.querySelector('#shoppingCartContainer');
const productDetail=document.querySelector("#productDetail");
const closeIconProductDetail=document.querySelector(".product-detail-close");

function toggleBurggerMenu(){
    const isOrderCarMenuClosed=shoppingCartContainer.classList.contains('inactive');
    const isProuctDetailClosed=productDetail.classList.contains('inactive');
    if(!isOrderCarMenuClosed || !isProuctDetailClosed){
        shoppingCartContainer.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
    burggerMenu.classList.toggle('inactive');

}
function toggleDesktopMenu(){
    const isOrderCarMenuClosed=shoppingCartContainer.classList.contains('inactive');
    const isProuctDetailClosed=productDetail.classList.contains('inactive');
    if(!isOrderCarMenuClosed || !isProuctDetailClosed){
        shoppingCartContainer.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleShopList(){
    const isMobileMenuClosed=burggerMenu.classList.contains('inactive');
    const isMenuEmailClosed=desktopMenu.classList.contains('inactive');
    const isProuctDetailClosed=productDetail.classList.contains('inactive');
    if(!isMobileMenuClosed || !isMenuEmailClosed || !isProuctDetailClosed){
        burggerMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        productDetail.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}
function openProductAside(){
    const isShoppingCartContainerClosed=shoppingCartContainer.classList.contains('inactive');
    const isMobileMenuClosed=burggerMenu.classList.contains('inactive');
    const isMenuEmailClosed=desktopMenu.classList.contains('inactive');

    if(!isShoppingCartContainerClosed||!isMenuEmailClosed||!isMobileMenuClosed){
        shoppingCartContainer.classList.add('inactive');
                burggerMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    productDetail.classList.remove('inactive');
}
function closeProductAside(){
    productDetail.classList.add('inactive');
}
const productList=[];
productList.push({
    name: 'Bike',
    price: 120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: 320,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
/**Creacion de elementos HTML con JS */
function renderProducts(arrayProducts){
    for(product of arrayProducts){
        /**La propiedad createElement te crear elementos HTML */    
            const productCard=document.createElement('div');
        /**La propiedad add te permita agregar el nombre de clase 
         * a un elemento HTML */    
            productCard.classList.add('product-card');
            
            const productImg=document.createElement('img');
            productImg.setAttribute('src',product.image);
            productImg.addEventListener('click',openProductAside);

            const productInfo=document.createElement('div');
            productInfo.classList.add('product-info');
            
            const productInfoDiv=document.createElement('div');
            productInfoDiv.classList.add('product-info');
        
        /**Agregar un parrafo con JS */    
            const productPrice=document.createElement('p');
        /** Agregar texto dentro del parrafo*/    
            productPrice.innerText='$'+ product.price;
            const productName=document.createElement('p');
            productName.innerText=product.name;
            productInfoDiv.appendChild(productPrice);
            productInfoDiv.appendChild(productName);
        
            const productInfoFigure=document.createElement('figure');
            const productImgCart=document.createElement('img');
        /**Agregar imagen a partir de una ruta */    
            productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        /**Insertar contenido dentro del contenedor padre */    
            
            productInfoFigure.appendChild(productImgCart);
            
            productInfo.appendChild(productInfoDiv);
            productInfo.appendChild(productInfoFigure);
            
            productCard.appendChild(productImg);
            productCard.appendChild(productInfo);
        
            cardsContainerHTML.appendChild(productCard);
        }
}
renderProducts(productList);

closeIconProductDetail.addEventListener('click',closeProductAside);
burggerMenuIcon.addEventListener('click',toggleBurggerMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
carShopIcon.addEventListener('click',toggleShopList);
