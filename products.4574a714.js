!function(){var e,t;let o;document.querySelectorAll(".drop-down-link");let n=document.querySelector(".mobile-menue-modal__close-button"),l=document.querySelector(".mobile-menu"),s=document.querySelector(".mobile-menue-modal"),c=document.querySelectorAll(".mobile-menue-modal__container__item__link"),i=function(e){"open"===e?(s.classList.remove("pollito"),s.classList.add("mobile-menue-visible")):"close"===e&&(s.classList.remove("mobile-menue-visible"),s.classList.add("pollito"))};l.addEventListener("click",function(){i("open")}),n.addEventListener("click",function(){i("close")}),c.forEach(function(e){e.addEventListener("click",function(){i("close")})}),document.querySelectorAll(".products-section__container__selection__list-container__list-el");let r=document.querySelectorAll(".drop-down-link"),a=document.querySelectorAll(".products-section__container__selection__list-container__list-el"),d=document.querySelectorAll(".products-selector-icon");r.forEach(function(e){e.addEventListener("click",function(e){if(e.target.classList.contains("arrow-icon-products")&!e.target.parentNode.classList.contains("selected-sub-link")){e.target.classList.add("openned");let t=e.target.parentNode.id;document.querySelector(`.${t}-sub-menue`).classList.remove("sub-menue-hidden"),e.target.parentNode.classList.add("selected-sub-link")}else if(e.target.classList.contains("arrow-icon-products")&e.target.parentNode.classList.contains("selected-sub-link")){e.target.classList.remove("openned");let t=e.target.parentNode.id;console.log(t),document.querySelector(`.${t}-sub-menue`).classList.add("sub-menue-hidden"),e.target.parentNode.classList.remove("selected-sub-link")}})}),a.forEach(function(e,t){e.addEventListener("click",function(e){if(e.target.classList.contains("products-selector-icon")||e.target.classList.contains("products-section__container__selection__list-container__list-el")){u();let e=document.querySelector(`.ellipse-${t}`),o=e.parentNode.id;"ellipse-outline"===e.getAttribute("name")?e.setAttribute("name","disc"):e.setAttribute("name","ellipse-outline"),m(o)}})});let u=function(){d.forEach(function(e){e.setAttribute("name","ellipse-outline")})},m=function(e){console.log(`rendering ${e}`)},_=JSON.parse(localStorage.getItem("id"));console.log(_),e=_||0,u(),console.log(e),(o=document.querySelector(`.ellipse-${e}`)).setAttribute("name","disc"),o.parentElement.id,(t=e)>2&&t<8&&(document.querySelector(".forWomen-sub-menue").classList.remove("sub-menue-hidden"),document.querySelector(".arrow-to-collapse").classList.add("openned"),document.getElementById("forWomen").classList.add("selected-sub-link")),localStorage.removeItem("id")}();
//# sourceMappingURL=products.4574a714.js.map
