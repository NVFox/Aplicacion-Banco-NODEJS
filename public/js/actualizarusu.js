$(document).ready(function(){
    $('.btnact').on('click', function(){
        let btn = $('.btnact').index(this);
        let doc = $('.doc').eq(btn);
        let nom = $('.nom').eq(btn);
        let cla = $('.cla').eq(btn);
        let rol = $('.rol').eq(btn);
        let est = $('.est').eq(btn);
        let img = $('.img').eq(btn);

        let d = doc.val();
        let n = nom.val();
        let cl = cla.val();
        let r = rol.val();
        let e = est.val();
        let i = img.val();

        $.ajax({
            type: "POST",
            url:'/update6',
            data: {
                "DocCli": d,
                "NomUsu": n,
                "Clave": cl,
                "Rol": r,
                "Estado": e,
                "Imagen": i
            }
        })
    })
})