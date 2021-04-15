    var link = document.querySelector(".button_write");
    var popup = document.querySelector(".modal-write-us");
    var close = document.querySelector(".modal-form-close");
    var mapLink = document.querySelector(".popup_map");
    var mapPopup = document.querySelector(".modal-map");
    var mapClose = document.querySelector(".modal_close");
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-content-show");
    });
    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-content-show");
    });
    mapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-map-show"); 
    });
    mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-map-show");
    });

