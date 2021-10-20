$(document).ready(function(){
    $('.btneli').on('click', function(){
        let btn = $('.btneli').index(this);
        let cod = $('.cod').eq(btn);

        let cd = cod.val();

        $.ajax({
            type: "POST",
            url:'/delete3',
            data: {
                "CodigoCredito": cd
            }
        })
    })
})