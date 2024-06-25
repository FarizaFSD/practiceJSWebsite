const urunList = () => {
    let alan = document.getElementById('alan');
    alan.innerHTML = ''
    let container = document.createElement('div');
    container.classList = 'container';
    let row = document.createElement('div')
    row.classList = 'row'

    urunler.forEach(element => {
        let urunDiv = document.createElement('div')
        urunDiv.classList = 'card col-lg-4'
        urunDiv.innerHTML = `
            <img src="${element.gorsel}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 onclick="urunDetay(${element.id})" class="card-title">${element.ad}</h5>
                <p class="card-text">${element.aciklama}</p>
                <b>${element.fiyat}</b>
            </div>
        `
        row.appendChild(urunDiv)
    });

    let h1 = document.createElement('h1')
    h1.innerHTML = 'Ürünler'
    container.appendChild(h1)

    container.appendChild(row);
    alan.appendChild(container)
}
