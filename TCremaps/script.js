// XRemover ECU Hesaplama Aracı Ayarları
window.$ecu = {
    lang: "tr",
    width: "100%",
    BackgroundColor: "#323a4e", // Tuning hesaplama arkaplanına yakın bir renk
    BoxColor: "#323a4e",
    FontColor: "#ffffff",
    ButtonColor: "#cbab51", // Altın rengi
    ButtonFontColor: "#1a1a24",
    APIID: "" // Kendi API ID'nizi buraya girin
};

(function() {
    var d = document;
    var s = d.createElement("script");
    // Harici ECU hesaplama aracı scriptini yükle
    s.src = "https://xremover.net/calculator/ecuob.js?_=" + new Date().getTime();
    s.async = 1;
    d.body.appendChild(s);
})();

document.addEventListener('DOMContentLoaded', function() {
    // Sayfa yüklendiğinde çalışacak ek kodlar buraya gelebilir.
    // Örneğin, statik sonuçları gizleme/gösterme:
    // document.getElementById('static-results').style.display = 'block';
});