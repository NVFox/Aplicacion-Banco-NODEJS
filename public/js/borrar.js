$(document).ready(function(){
    $('.btneli').on('click', function(){
        let btn = $('.btneli').index(this);
        let doc = $('.doc').eq(btn);

        let d = doc.val();

        $.ajax({
            type: "POST",
            url:'/delete',
            data: {
                "DocCli": d
            }
        })
    })
})