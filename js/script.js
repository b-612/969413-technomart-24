window.addEventListener("load", function(){
  if (typeof(document.querySelector(".overlay")) != "undefined" && document.querySelector(".overlay") != null){
    var overlay = document.querySelector(".overlay");
  }

  if (typeof(document.querySelectorAll(".modal-close")) != "undefined" && document.querySelectorAll(".modal-close") != null){
    var close = document.querySelectorAll(".modal-close");
  }

  if (typeof(document.querySelector(".contacts__link")) != "undefined" && document.querySelector(".contacts__link") != null){
    var link = document.querySelector(".contacts__link");
    var button = document.querySelector(".contacts__map");
    var popup = document.querySelector(".modal-write");
    var map = document.querySelector(".modal-map");

    link.onclick = function(event){
      event.preventDefault();
      popup.classList.add("modal-show");
      overlay.classList.add("modal-show");
    };

    button.onclick = function(event){
      event.preventDefault();
      overlay.classList.add("modal-show");
      map.classList.add("modal-show");
    }

    for (var i = 0; i < close.length; i++){
      close[i].onclick = function(event){
        popup.classList.remove("modal-show");
        map.classList.remove("modal-show");
        overlay.classList.remove("modal-show");
      }
    }

    document.addEventListener("keydown", function(event){
      if (event.keyCode === 27){
        overlay.classList.remove("modal-show");
        popup.classList.remove("modal-show");
        map.classList.remove("modal-show");
      }
    });

    overlay.onclick = function(){
      this.classList.remove("modal-show");
      popup.classList.remove("modal-show");
      map.classList.remove("modal-show");
    }
  }

  if (typeof(document.querySelector(".modal-order")) != "undefined" && document.querySelector(".modal-order") != null){
    var order = document.querySelectorAll(".btn--buy");
    var orderPopup = document.querySelector(".modal-order");

    for (var i = 0; i < order.length; i++){
      order[i].onclick = function(event){
        event.preventDefault();
        orderPopup.classList.add("modal-show");
        overlay.classList.add("modal-show");
      }
    }

    for (var i = 0; i < close.length; i++){
      close[i].onclick = function(event){
        orderPopup.classList.remove("modal-show");
        overlay.classList.remove("modal-show");
      }
    }

    overlay.onclick = function(){
      this.classList.remove("modal-show");
      orderPopup.classList.remove("modal-show");
    }

    document.addEventListener("keydown", function(event){
      if (event.keyCode === 27){
        overlay.classList.remove("modal-show");
        orderPopup.classList.remove("modal-show");
      }
    });
  }
});
