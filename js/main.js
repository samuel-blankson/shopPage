$(document).ready(function(){
    $('#button-create-item').on('click',function(){
        let name = $('#input-create-item').val();
        $('#input-create-item').val('');

        let html = '';
        html += '<div class="item">';
        html += '<div class="name">'+name+'</div>';
    html +='<img src="assets/pic.jpg"></img>';
    html += '<div class="description">Lorem ipsum dolor sit amet consectetur  adipisicing elit. </div>';
    html +=    '<div class="price">488</div>';
    html +=  ' <button  class="item-add">Add to cart</button>';
    html += '<button class="item-remove">Remove</button>';
    html +=   '<br/>';
    html +=  ' <a href="#" class="more-info-link">more info</a>';
    html +=   ' <div class="more-info">Lorem ipsum dolor sit</div>';
    html +=' </div>';


    $('#container').prepend(html);

    $('#container').on('click','.item-remove',function(){
        $(this).parent().remove();
    });

    $('#container').on('click','.more-info-link',function(event){
        event.preventDefault();

        $(this).parent().find('.more-info').slideToggle('slow');
        $(this)
        .animate({"opacitty":0.5 ,"margin-left":10},'fast')
        .animate({"opacitty":1.0, "margin-left":0},'fast');
    });


    });
});