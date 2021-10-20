$(document).ready(function(){
    $('.btnact').on('click', function(){
        let btn = $('.btnact').index(this);
        let cod = $('.cod').eq(btn);
        let doc = $('.doc').eq(btn);
        let tip = $('.tip').eq(btn);
        let sal = $('.sal').eq(btn);

        let d = doc.val();
        let cd = cod.val();
        let tp = tip.val();
        let s = sal.val();

        $.ajax({
            type: "POST",
            url:'/update4',
            data: {
                "CodCuenta": cd,
                "DocCli": d,
                "TipoCuenta": tp,
                "Saldo": s
            }
        })
    })
})