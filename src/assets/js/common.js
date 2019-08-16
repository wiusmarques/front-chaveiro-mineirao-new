
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
window.onload = "mySwiper()";

var prevScrollpos = window.pageYOffset;

document.getElementsByClassName("header-company")[0].onmouseover = function () {
    document.getElementsByClassName('header')[0].style.top = "0"
};

window.onscroll = function () {
    if (window.scrollY > 80) {
        document.getElementsByClassName('header')[0].style.top = "-80px"
    } else {
        document.getElementsByClassName('header')[0].style.top = "0"
    }
}



document.getElementById("modal-whatsapp-close").onclick = function (e) {
    if (!document.getElementById('modal_whatsapp').contains(e.target)) {
       // element.removeClass("modal-whatsapp-close", "d-block");
        element.addClass("modal-whatsapp-close", "hide");
    }

};


document.getElementById("modal-contact-close").onclick = function (e) {
    if (!document.getElementById('modal_contact').contains(e.target)) {
        element.addClass("modal-contact-close", "hide");
    }

};

var btnWhatsapp = document.getElementsByClassName("whatsapp-button-action");

for(let btn of btnWhatsapp){
    btn.onclick = function(e){
        element.removeClass("modal-whatsapp-close", "invisible");
        element.removeClass("modal-whatsapp-close", "hide");
    }
}

var btnContact = document.getElementsByClassName("modal-contact-action");

for(let btn of btnContact){
    btn.onclick = function(e){
        element.removeClass("modal-contact-close", "invisible");
        element.removeClass("modal-contact-close", "hide");
    }
}

var closeContactModal = document.getElementsByClassName("modal-contact-close");

for(let btn of closeContactModal){
    btn.onclick = function(e){
        element.addClass("modal-contact-close", "hide");
    }
}



document.getElementById('button-whatsapp-close').onclick = function(e){
    element.addClass("modal-whatsapp-close", "hide");
}


var element = {
    
    addClass: function (element_id, class_name) {
        var el = document.getElementById(element_id);
        el.classList.add(class_name);
    },

    findClass: function(element_id, class_name){
        var e = document.getElementById(element_id);
        return e.classList.contains('modal_whatsapp-background');
    },

    removeClass: function(element_id, class_name){
        var e = document.getElementById(element_id);
        e.classList.remove(class_name);
    }
}