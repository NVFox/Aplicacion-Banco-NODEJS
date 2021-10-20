$(document).ready(function(){
    $('.btnact').on('click', function(){
        let btn = $('.btnact').index(this);
        let cod = $('.cod').eq(btn);
        let nom = $('.nom').eq(btn);
        let mon = $('.mon').eq(btn);
        let pla = $('.pla').eq(btn);

        let cd = cod.val();
        let nm = nom.val();
        let m = mon.val();
        let p = pla.val();

        $.ajax({
            type: "POST",
            url:'/update2',
            data: {
                "CodLinea": cd,
                "NomLinea": nm,
                "MontoMaxiCredito": m,
                "PlazoMaxCred": p
            }
        })
    })
})