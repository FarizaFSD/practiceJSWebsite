window.onload = () => anasayfa();

let alan = document.getElementById("alan");

const anasayfa = () => {
  alan.innerHTML = `
     <div class="container">
            <h1>Anasayfa</h1>
            <img height="250" src="https://www.davidjones.com/images/assetimages/2022/ss/wk20/Shoes-Bags/bag/instore1.jpg" alt="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi dolorem vitae, rem reprehenderit est accusantium accusamus. Voluptatum cupiditate ullam nobis voluptates itaque repudiandae nulla? Laudantium sint nesciunt saepe hic? </p>
        </div>
    `;
};

const hakkimizda = () => {
  alan.innerHTML = `
     <div class="container">
            <h1>Hakkımızda</h1>
            <p>Hakkımızda sayfası. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi dolorem vitae, rem reprehenderit est accusantium accusamus. Voluptatum cupiditate ullam nobis voluptates itaque repudiandae nulla? Laudantium sint nesciunt saepe hic? </p>
        </div>
    `;
};

const iletisim = () => {
  alan.innerHTML = `
     <div class="container">
            <h1>İletişim</h1>
            <p>İletişim sayfası. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste animi dolorem vitae, rem reprehenderit est accusantium accusamus. Voluptatum cupiditate ullam nobis voluptates itaque repudiandae nulla? Laudantium sint nesciunt saepe hic? </p>
        </div>
    `;
};

const urunDetay = (id) => {
  let urun = urunler.find((data) => data.id == id);

  alan.innerHTML = `
        <div class="container">
        <div class="row">
        <div class="col-lg-6">
        <img height="250" src="${urun.gorsel}">
        </div>
        <div class="col-lg-6">
            <h2>${urun.ad}</h2>
        <p>${urun.aciklama}</p>
        <p>${urun.fiyat}</p>
        </div>
        </div>
        </div>
    `;
};
