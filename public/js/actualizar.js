$(document).ready(function(){
    $('.btnact').on('click', function(){
        let btn = $('.btnact').index(this);
        let doc = $('.doc').eq(btn);
        let nom = $('.nom').eq(btn);
        let ape = $('.ape').eq(btn);
        let cor = $('.cor').eq(btn);
        let cel = $('.cel').eq(btn);
        let sex = $('.sex').eq(btn);
        let fec = $('.fec').eq(btn);

        let d = doc.val();
        let n = nom.val();
        let a = ape.val();
        let cr = cor.val();
        let ce = cel.val();
        let s = sex.val();
        let f = fec.val();

        $.ajax({
            type: "POST",
            url:'/update',
            data: {
                "DocCli": d,
                "NomCli": n,
                "ApeCli": a,
                "CorreoCli": cr,
                "CelularCli": ce,
                "SexoCli": s,
                "FechaNacCli": f
            }
        })
    })
})