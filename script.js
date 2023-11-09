var addToCartButtons=document.querySelectorAll(".thumb-content #btn1");
var div1 = document.getElementById("div1");
var producttitle=document.querySelectorAll(".thumb-content .product-title")
var btn1=document.querySelector("#showPrice")
var productdetails=document.querySelector(".details")
var divtotal=document.querySelector(".details #divtotal")
var spantotal=document.querySelector("#spantotal")
var total=0;
console.log(producttitle[1])


addToCartButtons.forEach(function(button,index) {
    button.addEventListener("click", function() {
        total += +(button.getAttribute("price"));
  
        div1.innerHTML += producttitle[index].textContent + " " + (button.getAttribute("price"))+"$" + "<hr>";
        if (div1.innerHTML !== "") {
            productdetails.style.display = "block";
            btn1.style.display = "block";
            spantotal.innerHTML=total+"$"

        }
    });
});
btn1.onclick=function(){
    divtotal.style.display="block"
    spantotal.innerHTML=total+"$"
}

