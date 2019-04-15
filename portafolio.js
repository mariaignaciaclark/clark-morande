// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos=[
{
    figure: "media/foto-01.jpg",
    title: "Individuales",
    about: "Decorando tus mesas de verano",
}, {
    figure: "media/foto-02.jpg",
    title: "Manteles",
    about: "Hechos a medida especialmente para tu casa",
}, {
    figure: "media/foto-03.jpg",
    title: "Servilletas",
    about: "Útiles & versátiles para todo",
}, {
    figure: "media/foto-04.jpg",
    title: "Cojines",
    about: "Decorando tus rincones",
}, {
    figure: "media/foto-05.jpg",
    title: "Pareos",
    about: "Ideales para tu look playero",
}, {
    figure: "media/foto-06.jpg",
    title: "Delantales",
    about: "Protegiendo tu ropa con estilo",
}, {
    figure: "media/foto-07.jpg",
    title: "Regalos",
    about: "Regala y sorprende",
}, {
    figure: "media/foto-08.jpg",
    title: "Nuestras telas",
    about: "100% lino",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});