//オブジェクトの挙動テスト…
const drinks = [ //ただの配列
    'water', 'cola', 'tea', 'orange juice'
];
const textDrink = document.querySelectorAll('.content-drink');

for (let i = 0; i < drinks.length; i++) {
    const drink = drinks[i];
    const span = textDrink[i].querySelector('span');
    span.textContent = drink;
}

fruits = {　//オブジェクトリテラル
    'apple': 300,
    'banana': 100,
    'orange': 200,
    'peach': 500,
};
//テキストエリアに書き込む
let textArea = "";
const contentFruits = document.querySelector('.content-fruits')
for (const key in fruits) {
    textArea += `<p>${key}の値段は${fruits[key]}円です！</p>`
};
contentFruits.insertAdjacentHTML('beforeend', textArea);

foods = [ //配列に格納したオブジェクト
    {
        name: 'rice',
        price: 300,
        type: '和食',
        img: './img/img1.png',
    },
    {
        name: 'bread',
        price: 200,
        type: '洋食',
        img: './img/img2.png',
    },
    {
        name: 'spagetti',
        price: 400,
        type: 'イタリアン',
        img: './img/img3.png',
    },
    {
        name: 'ramen',
        price: 350,
        type: '中華',
        img: './img/img4.png',
    },
];