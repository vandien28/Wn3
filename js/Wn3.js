document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelector('#header-scrolls');
    var trangthai="duoi200";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 120){
            if(trangthai == "duoi200")
            {
                trangthai="tren200";
                menu.classList.add('apper-header');
            }
        }
        else{
            if(trangthai=="tren200"){
            menu.classList.remove('apper-header');
            trangthai="duoi200";}
        }
    })
})

// * <------------------------------------------------------------> 


var offset = 500;
var duration = 1;
$(function(){
$(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
        $('.top-up').fadeIn(duration);
    }
    else {
        $('.top-up').fadeOut(duration);
    }
});
$('.top-up').click(function () {
$('body,html').animate({scrollTop: 0}, duration);
    });
});

// * <------------------------------------------------------------> 

var click= document.getElementById('menu-click');
var clicks= document.getElementById('menu-clicks');
    var cart = document.getElementById('cart')
    var cartwrapper = document.getElementById('cart-wrapper')
    var cartclose = document.getElementById('cart-close')
    var header = document.getElementById('header')
    click.onclick = function() {
        cart.style.display='block';
        cartwrapper.style.display='block';
        document.body.style.overflow='hidden';
    }
    cart.onclick = function() {
        cart.style.display='none';
        cartwrapper.style.display='none';
        document.body.style.overflow='visible';
       
    }
    cartclose.onclick = function() {
        cart.style.display='none';
        cartwrapper.style.display='none';
        document.body.style.overflow='visible';
       
    }
    clicks.onclick = function() {
        cart.style.display='block';
        cartwrapper.style.display='block';
        document.body.style.overflow='hidden';

    }
    
// * <------------------------------------------------------------> 
    var chivas = [{ 
        id: 1,
        name: 'Chivas Mizunara',
        price: 1579,
        img: '../img/content/Mizunara.png',
        link:'../Html/Mizunara.html'
    
    },
    { 
        id: 2,
        name: 'Chivas Icon',
        price: 2870,
        img: '../img/content/icon.png',
        link:'../Html/Icon.html'
    
    },
    { 
        id: 3,
        name: 'Chivas Ultis',
        price: 8879,
        img: '../img/content/ultis.png',
        link:'../Html/Ultis.html'
    
    },
    { 
        id: 4,
        name: 'Chivas 18',
        price: 5690,
        img: '../img/content/chivas18.png',
        link:'../Html/Chivas18.html'
    
    },
    { 
        id: 5,
        name: 'Chivas 18 Lisa Limited',
        price: 12390,
        img: '../img/content/chivas18lisa.png',
        link:'../Html/Lisa.html'
    
    },
    { 
        id: 6,
        name: 'Chivas XV',
        price: 10579,
        img: '../img/content/chivasxv.png',
        link:'../Html/ChivasXV.html'
    
    },
    { 
        id: 7,
        name: 'Chivas XV Balmain',
        price: 12300,
        img: '../img/content/balmain.png',
        link:'../Html/Balmain.html'
    
    },
    { 
        id: 8,
        name: 'Chivas XV Balmain Gold',
        price: 15000,
        img: '../img/content/balmaingold.png',
        link:'../Html/Balmaingold.html'
    
    },
    { 
        id: 9,
        name: 'Chivas 12',
        price: 3333,
        img: '../img/content/chivas12.png',
        link:'../Html/Chivas12.html'
    
    },
    { 
        id: 10,
        name: 'Chivas Ultis XX',
        price: 6610,
        img: '../img/content/ultisxx.png',
        link:'../Html/Ultisxx.html'
    
    },
    { 
        id: 11,
        name: 'Chivas 25',
        price: 7790,
        img: '../img/content/chivas25.png',
        link:'../Html/Chivas25.html'
    
    },
    { 
        id: 12,
        name: 'Chivas 13 Tequila Casks',
        price: 4180,
        img: '../img/content/tequila.png',
        link:'../Html/Tequila.html'
    
    },
    { 
        id: 13,
        name: 'Chivas 13 Bourbon Casks',
        price: 2250,
        img: '../img/content/chivastim.png',
        link:'../Html/Bourbon.html'
    
    },
    { 
        id: 14,
        name: 'Chivas 13 Rum Casks',
        price: 3800,
        img: '../img/content/chivasđen.png',
        link:'../Html/Rum.html'
    
    },
    { 
        id: 15,
        name: 'Chivas 13 Rye Casks',
        price: 6340,
        img: '../img/content/chivasxanhd.png',
        link:'../Html/Rye.html'
    
    },
    { 
        id: 16,
        name: 'Chivas 13 Sherry Casks',
        price: 2235,
        img: '../img/content/chivasdo.png',
        link:'../Html/Sherry.html'
    
    }]
    
    
    var Listproduct = document.querySelector(".listproduct")
    chivas.forEach(item=>{
        var newProduct = document.createElement("div")
        newProduct.classList.add('chivas')
        newProduct.classList.add('animate__animated')
        newProduct.classList.add('animate__fadeIn')
        newProduct.innerHTML = `<i class="fa-icon fa-solid fa-magnifying-glass"></i>
        <a href="${item.link}"><img src="${item.img}" alt="" class="chivas-logo"></a>
        <div class="chivas-text">
            <p class="chivas-name">
                <a href="${item.link}" class="chivas-link">${item.name}</a>
                <span class="idproduct" style="display:none;">${item.id}</span>
            </p>
            <div class="chivas-price">
                <span class="price">${item.price.toLocaleString('de-DE')}</span>  
                <span class="price-d">$</span>
                <input type="number" value="1" min="1" max="9999" style="display: none;" class="quantity">
                <div class="chivas-buy">
                    <a  class="buy">Purchase</a> 
                </div>
            </div>
        </div>`
        Listproduct.appendChild(newProduct)
    })
        
// * <------------------------------------------------------------> 



function addcart() {
    var product = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
    var ulcontent = []
    product.map((innerHTML,index)=>{
        ulcontent += `<ul class="widget-product">
            <li class="widget-products">
                <a href=""><img src="${innerHTML.img}" alt="" class="widget-product-img"></a>
                <button class="btn-widget"><i  class="widget-product-icon fa-solid fa-xmark" onclick="deletecart(${index})"></i></button>
                <a href="" class="widget-product-text">${innerHTML.name}</a>
                <span class="amount">
                    <span class="amount-price" type ="number">${(innerHTML.price)}</span>
                    <span class="amount-price-d">$</span>
                    <i class="x-icon fa-solid fa-xmark"></i>
                    <input class="input-value" type="number" value="${innerHTML.quantity}" min="1" step="1" max="9999">
                </span>
            </li>
        </ul>`;
    }) 
    document.getElementById("widget").innerHTML = ulcontent
    var  cartitem = document.querySelectorAll(".widget-product")
    for(var i=0;i<cartitem.length;i++) {
        var footercart = document.querySelector(".footer-cart") 
        var carttext = document.querySelector(".cart-text")  
            if(cartitem[i]) { 
                footercart.style.display = "block"
                carttext.style.display = "none"
            }
    }
   carttotal()
}        

function carttotal() {
    var  cartitem = document.querySelectorAll(".widget-product")
    var totalB = 0
    for(var i=0;i<cartitem.length;i++) {
        var inputValue = cartitem[i].querySelector(".input-value").value
        var productprice = cartitem[i].querySelector(".amount-price").innerText
        totalA = inputValue*productprice*1000
        totalB = totalB + totalA
    }
    var carttotalA = document.querySelector(".provisional-price") 
    totalC = totalB.toLocaleString('de-DE')
    carttotalA.innerHTML = totalC
    var carttotalD = document.querySelector(".cart-price")
    var carttotalE = document.querySelector(".cart-prices")
    carttotalD.innerHTML = totalC
    carttotalE.innerHTML = totalC
    if(totalC == 0) {
        var footercart = document.querySelector(".footer-cart") 
        var carttext = document.querySelector(".cart-text") 
            footercart.style.display = "none"
            carttext.style.display = "block"
    }
}

function deletecart(index) {
    var product = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
    product.splice(index,1)
    localStorage.setItem("product",JSON.stringify(product))
    addcart()
}

function joincart() {
    var product = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
    var yield = []
    product.map((innerHTML,index)=>{
        yield += `<tr class="cart-item" >
            <td class="product-remove"><i class="remove fa-solid fa-xmark" onclick="removechivas(${index})"></i></td>
            <td class="product-img">
                <img class="primg" src="${innerHTML.img}" style="width: 75px; height:100px;" alt="" >
            </td>
            <td class="product-name" data-title="Product">
                <a href="" class="chivas-names abc"><span class ="chivas-name">${innerHTML.name}</span></a>
            </td>
            <td class="product-price" data-title="Price">
                <span class="price-text" type="number">${innerHTML.price}</span>
                <span class="price-d">$</span>
            </td>
            <td class="product-quantity" data-title="amount">
                <div class="quantity-add">
                    <input type="button" value="-" class="add is-form">
                    <input aria-label="quantity" type="number" class="number" step="1" min="1" max="9999" value="${innerHTML.quantity}" title="SL" inputmode="numeric">
                    <input type="button" value="+" class="apart is-form">
                </div> 
            </td>
            <td class="product-subtotal" data-title="provisinal">
                <span class="price-texts">${(innerHTML.price*innerHTML.quantity*1000).toLocaleString('de-DE')}</span>
                <span class="price-d">$</span>
            </td>
        </tr>`
    }) 
    
    document.getElementById("contain-product").innerHTML = yield
    var  cartitems = document.querySelectorAll(".cart-item")
    for(var i=0;i<cartitems.length;i++) {
        var back = document.querySelector(".content-text") 
        var payment = document.querySelector("#content-product")  
            if(cartitems[i]) { 
                payment.style.display = "block"
                back.style.display = "none"
            } 
    }
    inputalter()
    total()
    provisional()
}

function inputalter() {
    const add = document.querySelectorAll(".add") 
        add.forEach(function(b,index) {
            b.addEventListener("click",function(event) {
                var b1 = event.target
                var b2 = b1.parentElement
                var b3 = b2.querySelector(".number").value
                    b4 = parseInt(b3)-1
                var b5 = b2.querySelector(".number")
                b5.value = b4    
                
            })
        })
    const apart = document.querySelectorAll(".apart") 
        apart.forEach(function(c,index) {
            c.addEventListener("click",function(event) {
                var c1 = event.target
                var c2 = c1.parentElement
                var c3 = c2.querySelector(".number").value
                    c4 = parseInt(c3)+1;
                var c5 = c2.querySelector(".number")
                c5.value = c4    
                
            })
        })
}

function provisional() {
    var product = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
    const chivasproduct = document.querySelectorAll(".is-form")
        chivasproduct.forEach(function(d,index) {
            d.addEventListener("click",function(event){
                var d1 = event.target
                var d2 = d1.parentElement.parentElement.parentElement
                var d3 = d2.querySelector(".number").value
                var d4 = d2.querySelector(".price-text").innerText
                var d5 = d2.querySelector(".price-texts").innerText
                var d6 = d2.querySelector(".chivas-name").innerHTML
                var d7 = d2.querySelector(".primg").src
                m = d3*d4*1000
                n = m.toLocaleString('de-DE')
                d5 = n
                var d8 = d2.querySelector(".price-texts")
                d8.innerHTML = d5
                var m1 = document.querySelector(".provisional").innerText
                m1 = d8.innerText
                total()
                product[product.findIndex(c=>c.name==d6)] = {
                    name: d6,
                    img: d7,
                    price: d4,
                    quantity: d3
                }
                localStorage.setItem("product",JSON.stringify(product))
                addcart()
                joincart()
            })
        })

}

function total() {
    var  chivasproduct = document.querySelectorAll(".cart-item")
    var totalpr = 0
    for(var i=0;i<chivasproduct.length;i++) {
        var numbervalue = chivasproduct[i].querySelector(".number").value
        var chivasmoney = chivasproduct[i].querySelector(".price-text").innerHTML
        money = numbervalue*chivasmoney*1000
        totalpr = totalpr + money
    }
    totalprs = totalpr.toLocaleString('de-DE')
    var scrollprice = document.querySelector(".cart-price")
        scrollprice.innerHTML = totalprs
    var matheadprice = document.querySelector(".cart-prices")
        matheadprice.innerHTML=totalprs
    var chivaspro = document.querySelector(".provisional")
        chivaspro.innerHTML = totalprs
    var chivaspros = document.querySelector(".provisionals")
        chivaspros.innerHTML = totalprs   
    var back = document.querySelector(".content-text") 
    var payment = document.querySelector("#content-product")  
    if(totalprs == 0) {
        payment.style.display = "none"
        back.style.display = "block"
    }
 }



function removechivas(index) {
    var product = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : [];
    product.splice(index,1)
    localStorage.setItem("product",JSON.stringify(product))
    joincart()   
}


// * <------------------------------------------------------------> 

function clickdesc() {
    desc = document.querySelector(".describe").style.display = "block";
    rev = document.querySelector(".review").style.display = "none";  
    textdr = document.querySelector(".text-dr").style.color = "rgb(0 0 0/90%)";
    textdrs = document.querySelector(".text-drs").style.color = "rgb(0 0 0/50%)";
    line = document.querySelector(".line").style.opacity = "1";
    lines = document.querySelector(".lines").style.opacity = "0";
}


function clickrev() {
    desc = document.querySelector(".describe").style.display = "none";
    rev = document.querySelector(".review").style.display = "block";  
    textdr = document.querySelector(".text-dr").style.color = "rgb(0 0 0/50%)";
    textdrs = document.querySelector(".text-drs").style.color = "rgb(0 0 0/90%)";
    lines = document.querySelector(".lines").style.opacity = "1";
    line = document.querySelector(".line").style.opacity = "0";
}



//  * <------------------------------------------------->


function clickchangepass() {
    var changepass = document.querySelector(".text-check-acc").style.display = "block"
    var change1 = document.querySelector(".clickchange").style.display = "none"
    var change2 = document.querySelector(".changetext").style.display = "block"
}

//  * <------------------------------------------------->

function savepass() {
    var changecomplete = document.querySelector(".changecomplete").style.display = "block"
    var text1 = document.querySelector(".old").style.display = "none"
    var text2 = document.querySelector(".new").style.display = "none"
    var text3 = document.querySelector(".enter").style.display = "none"
    var btn = document.querySelector(".changebtn").style.display = "none"
}

//  * <------------------------------------------------->

function closepass() {
    var changepass = document.querySelector(".text-check-acc").style.display = "none"
    var change1 = document.querySelector(".clickchange").style.display = "block"
    var change2 = document.querySelector(".changetext").style.display = "none"
    var changecomplete1 = document.querySelector(".changecomplete").style.display = "none"
}

//  * <------------------------------------------------->

function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}

//  * <------------------------------------------------->


var inputName = document.querySelector(".search")
    inputName.addEventListener('input',function(event){
        let txtSearch = event.target.value.trim().toLowerCase()
        let ListproductDom = document.querySelectorAll('.chivas')
        ListproductDom.forEach(item=>{
            if(item.innerText.toLowerCase().includes(txtSearch)) {
                item.classList.remove('hide')
            } else {
                item.classList.add('hide')
            }
        })
})

var inputNames = document.querySelector(".searchs")
    inputNames.addEventListener('input',function(event){
        let txtSearchs = event.target.value.trim().toLowerCase()
        let ListproductDoms = document.querySelectorAll('.chivas')
        ListproductDoms.forEach(item=>{
            if(item.innerText.toLowerCase().includes(txtSearchs)) {
                item.classList.remove('hide')
            } else {
                item.classList.add('hide')
            }
        })
})


//  * <----------------------------------------------------->
function nosearch() {
    let nosearch1 = document.getElementById("small")
    let nosearch2 = document.getElementById("great")
    nosmall = nosearch1.value
    nogreat = nosearch2.value
    if(nosmall === '' || nogreat === '') {
        let ListPriceDoms = document.querySelectorAll('.price')
            ListPriceDoms.forEach(item=>{
                if(parseInt(item.innerText*1000) <= nogreat && nosmall === '') {
                    item.parentElement.parentElement.parentElement.classList.remove('hide')
                } if(parseInt(item.innerText*1000) >= nosmall && nogreat === '') {
                    item.parentElement.parentElement.parentElement.classList.remove('hide')
                }
            })
    } 
}

var searchprice = document.querySelector(".btn-search") 
    searchprice.onclick = function() {
        let sp1 = document.getElementById("small")
        let sp2 = document.getElementById("great")
        small = sp1.value
        great = sp2.value
        if(small === '' && great === '') {
            let ListPriceDom = document.querySelectorAll('.price')
                ListPriceDom.forEach(item=>{
                    item.parentElement.parentElement.parentElement.classList.remove('hide')
                })
        } else {
            let ListPriceDom = document.querySelectorAll('.price')
                ListPriceDom.forEach(item=>{
                if(parseInt(item.innerText*1000) >= small && parseInt(item.innerText*1000) <= great ) {
                    item.parentElement.parentElement.parentElement.classList.remove('hide')
                } else {
                    item.parentElement.parentElement.parentElement.classList.add('hide')
                    
                }
        })
    } 
}

//  * <----------------------------------------------------->




function option(obj) {
    var value = obj.value
    if(value === 'menu_order') {
        var ListProductDom = document.querySelectorAll(".chivas") 
            for(var i=0;i<ListProductDom.length;i++) {
                for(var j=0;j<ListProductDom.length;j++) {
                    if(parseInt(ListProductDom[i].querySelector(".idproduct").innerText) < parseInt(ListProductDom[j].querySelector(".idproduct").innerText)) {
                        temp = ListProductDom[i].innerHTML
                        ListProductDom[i].innerHTML = ListProductDom[j].innerHTML
                        ListProductDom[j].innerHTML = temp
                    }
                }
            }
        
    } else if(value === 'namea-z') {
        var ListProductDom = document.querySelectorAll(".chivas") 
            for(var i=0;i<ListProductDom.length;i++) {
                for(var j=0;j<ListProductDom.length;j++) {
                    if(ListProductDom[i].querySelector(".chivas-link").innerText < ListProductDom[j].querySelector(".chivas-link").innerText) {
                        temp = ListProductDom[i].innerHTML
                        ListProductDom[i].innerHTML = ListProductDom[j].innerHTML
                        ListProductDom[j].innerHTML = temp
                    }
                }
            }
    } else if(value === 'namez-a') {
        var ListProductDom = document.querySelectorAll(".chivas") 
            for(var i=0;i<ListProductDom.length;i++) {
                for(var j=0;j<ListProductDom.length;j++) {
                    if(ListProductDom[i].querySelector(".chivas-link").innerText > ListProductDom[j].querySelector(".chivas-link").innerText) {
                        temp = ListProductDom[i].innerHTML
                        ListProductDom[i].innerHTML = ListProductDom[j].innerHTML
                        ListProductDom[j].innerHTML = temp
                    }
                }
            }
    } else if(value === 'price') {
        var ListProductDom = document.querySelectorAll(".chivas") 
            for(var i=0;i<ListProductDom.length;i++) {
                for(var j=0;j<ListProductDom.length;j++) {
                    if(parseInt(ListProductDom[i].querySelector(".price").innerText*1000) < parseInt(ListProductDom[j].querySelector(".price").innerText*1000)) {
                        temp = ListProductDom[i].innerHTML
                        ListProductDom[i].innerHTML = ListProductDom[j].innerHTML
                        ListProductDom[j].innerHTML = temp
                    }
                }
            }
    } else if(value ==='price-desc') {
        var ListProductDom = document.querySelectorAll(".chivas") 
            for(var i=0;i<ListProductDom.length;i++) {
                for(var j=0;j<ListProductDom.length;j++) {
                    if(parseInt(ListProductDom[i].querySelector(".price").innerText*1000) > parseInt(ListProductDom[j].querySelector(".price").innerText*1000)) {
                        temp = ListProductDom[i].innerHTML
                        ListProductDom[i].innerHTML = ListProductDom[j].innerHTML
                        ListProductDom[j].innerHTML = temp
                    }
                }
            }
    }
}


