const shirtContainer = document.getElementById("shirt-container");
const shirtItems = [
    {
        image: './assets/img/Tshirt01.jpg',
        name: 'Áo Marvel Big Logo',    
        price: '299.000đ',
        desc: 'Áo thun, oversize, màu đen, size M/L/XL',
        no: 0
    },
    {
        image: './assets/img/Tshirt02.jpg',
        name: 'Áo thun Marvel Captain America',    
        price: '299.000đ',
        desc: 'Áo thun, oversize, màu xanh than, size M/L/XL',
        no: 1
    },
    {
        image: './assets/img/Tshirt03.jpg',
        name: 'Áo thun Marvel Big Logo Hulk',    
        price: '299.000đ',
        desc: 'Áo thun, oversize, màu xanh lam, size M/L/XL',
        no: 2
    },
    {
        image: './assets/img/Tshirt04.jpg',
        name: 'Áo thun Marvel Thor Mjolnir',    
        price: '299.000đ',
        desc: 'Áo thun, oversize, màu trắng, size M/L/XL',
        no: 3
    }
]

// Print list of item 
for (const shirtItem of shirtItems) {
    const shirtItemDiv = document.createElement('div');
    shirtItemDiv.classList.add('shirt-item');
    shirtItemDiv.innerHTML = `
        <div class="shirt-item__imgContainer"><img src="${shirtItem.image}" alt="${shirtItem.name}"></div>
        <h1 class="shirt-item__name">${shirtItem.name}</h1>
        <p class="shirt-item__price">${shirtItem.price}</p>
        <p class="shirt-item__desc">${shirtItem.desc}</p>
        <button class="shirt-item__buyBtn">Mua hàng</button>
    `;
    shirtContainer.appendChild(shirtItemDiv);
}