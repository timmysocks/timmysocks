

$(document).ready(function(){
    //
    // $('.tabs-section .nav-tabs .nav-item .nav-link').click(function(){
    //   setTimeout(function(){
    //     $('.big-box-1').addClass('hover');
    //   },500);
    // });

    $(".btn-arrow-down").click(function() {
    $('html,body').animate({
        scrollTop: $(".tabs-section").offset().top},
        'slow');
    });

    $(".btn-arrow-up").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-shop-carousel").offset().top},
        'slow');
    });

    $(".btn-box").click(function(){
      $(this).closest(".big-box-1").addClass("before-buy");
      $(this).closest(".big-box-1").removeClass("hover");
    });

    $(".btn-modify").click(function(){
      $(this).closest(".big-box-1").removeClass("before-buy");
    });

    //quantity add and remove buttons

    var quantitiy=0;
   $('.btn-plus').click(function(){

        // Get the field name
        var quantity = parseInt($('#quantity').val());

        // If is not undefined

            $('#quantity').val(quantity + 1).change();


            // Increment

    });

     $('.btn-minus').click(function(){

        // Get the field name
        var quantity = parseInt($('#quantity').val());


        // If is not undefined

            // Increment

            if(quantity>1){
            $('#quantity').val(quantity - 1).change();
            }
    });

    //Update the add to cart inputs

    $('#sizeDonut').change(function() {
        $('#size-stabil').val($(this).val());
    });

    $('#quantity').change(function() {
        $('#qty-stabil').val($(this).val());
        $('#price').val($(this).val() * 39);
    });




});
