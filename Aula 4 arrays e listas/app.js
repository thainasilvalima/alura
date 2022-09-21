var listaImagens = [
    "https://i.pinimg.com/originals/f2/f1/6c/f2f16cde5a8c9f54a3abea4fea6a755a.jpg",
    "https://cdn2.albumoftheyear.org/375x/album/321369-boombayah.jpg",
    "http://pm1.narvii.com/6944/27d8c665dd00307ffaf4bb67477abbd48091c9e8r1-850-850v2_uhq.jpg",
    "https://i.pinimg.com/564x/2a/b9/46/2ab94676fbb1849a12d2c40ca9f1474b.jpg",
    "https://i.pinimg.com/originals/c0/29/a3/c029a317ba21dd99e67072655767fda6.jpg",
    "https://i.discogs.com/S31ygrZdJLu51Ykxk-J3ak-LtQCiEAO85MfzB2TZVec/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEyNDMw/MDA2LTE1OTQ2Njg2/NzktOTY0OC5wbmc.jpeg",
    "https://i1.sndcdn.com/artworks-kTy5lmlySVGxMyUP-zDGmDA-t500x500.jpg",
    "https://s2.glbimg.com/B4cE_WuruMeT7Tni5y5xfjdXcwE=/0x0:1080x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/z/a/RB7iEpTJO283AkV8RNnQ/299363471-146651431030727-2839295398682356308-n.jpg",
    "https://i1.sndcdn.com/artworks-0XYYCYyuCXKnaUdE-dJnKbA-t500x500.jpg"];

var musica = ["https://www.youtube.com/watch?v=dISNgvVpWlo",//whistle
"https://www.youtube.com/watch?v=bwmSjveL3Lc",//boombayah
"https://www.youtube.com/watch?v=Amq-qlqbjYA",//as if it's your last
"https://www.youtube.com/watch?v=ioNng23DkIM",// how you like that
"https://www.youtube.com/watch?v=2S24-y0Ij3Y",// kill this love
"https://www.youtube.com/watch?v=IHNzOHi8sJs",//dududududud
"https://www.youtube.com/watch?v=gU2HqP4NxUs",//pretty savage
"https://www.youtube.com/watch?v=gQlMMD8auMs",//pink venom
"https://www.youtube.com/watch?v=POe9SOEKotk" ];//shut down


var nomeAlbuns = ["Whistle","Boombayah!!", "As if it's Your Last", "How You Like That!","Kill this Love","Du-duh Du-duh Du"," Pretty Savage", "Pink Venom", "Shut Down"];

for(var i = 0; i < listaImagens.length; i++){
  var $exibir = document.querySelector('.nomeAlbuns'),

    HTMLNovo = "<div><a href=" + musica[i] + "class=nomeAlbuns target=_blank>" +"<img class=grid-5 src=" + listaImagens[i] +"><p class=titulo>" + nomeAlbuns[i] + "</p></div>";
 
   $exibir.insertAdjacentHTML('beforeend', HTMLNovo);  
}
function mudaTema() {
  document.body.classList.toggle("dark");
}