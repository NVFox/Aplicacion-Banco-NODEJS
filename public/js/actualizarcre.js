$(document).ready(function(){
    $('.btnact').on('click', function(){
        let btn = $('.btnact').index(this);
        let doc = $('.doc').eq(btn);
        let cod = $('.cod').eq(btn);
        let lin = $('.lin').eq(btn);
        let mon = $('.mon').eq(btn);
        let pla = $('.pla').eq(btn);
        let fec = $('.fec').eq(btn);

        let d = doc.val();
        let cd = cod.val();
        let ln = lin.val();
        let m = mon.val();
        let p = pla.val();
        let f = fec.val();

        $.ajax({
            type: "POST",
            url:'/update3',
            data: {
                "CodigoCredito": cd,
                "DocCli": d,
                "CodLinea": ln,
                "MontoPrestado": m,
                "FechaAproba": f,
                "Plazo": p
            }
        })
    })
})