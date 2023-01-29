$(function() {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

    $(document).on("click", ".hamburger-menu, .hamburger-menu > .wrapper.mobile-menu > a.timess", function () {
        $(this).find('.wrapper.mobile-menu').toggleClass('hidden');
    });

    $(document).on("click", ".trigger-modal", function () {
        $('body').addClass('modal-in');
        $(document).find(`div.modal#${$(this).data("target")}`).addClass('in');
    });

    $(document).on("click", ".overlay, div.modal > div.modal-container > a.times", function () {
        $('body').removeClass('modal-in');
        $(document).find(`div.modal`).removeClass('in');
    });

    $(document).on("input", "input[name=number]", function() {
        $(this).val($(this).val().replace(/\D/g,''))
    });

    $(document).on("submit", "form#reserve-form", function(e) {
        e.preventDefault();
        $('.error').removeClass('error');

        var formData = new FormData($(this)[0]),
            error = false;

        $("input.required").each(function (index, element) {
            var $this = $(element);
            if (!$this.val()) {
                $this.addClass("error");
                error = true;
            };
        });

        if (error) return false;

        $.ajax({
            url: $(this).attr("action"),
            method: $(this).attr("method"),
            dataType: "json",
            data: formData,
            processData: false,
            contentType: false,
            cache: false,
        }).done(function (results) {

        });
    });
});