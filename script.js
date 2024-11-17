const whiskeyData = [
    // 위스키 데이터
    {
        category: '싱글몰트',
        items: [
            {
                name: '글렌피딕 12년',
                price: '80,000원',
                description: '스펙트럼이 넓고 밸런스가 좋은 스코틀랜드 위스키',
                image: 'https://dominicafoodreview.com/day/672a30183217566395f2db4c/0.jpg'
            },
            {
                name: '발베니 12년',
                price: '100,000원',
                description: '달콤한 과일 향과 부드러운 맛',
                image: 'https://dominicafoodreview.com/day/672a30288b606d7347e5cca5/0.jpg'
            },
            // ... 더 많은 싱글몰트 위스키 추가
        ]
    },
    {
        category: '블렌디드',
        items: [
            {
                name: '조니워커 블랙 라벨',
                price: '60,000원',
                description: '스모키하고 묵직한 풍미',
                image: 'https://dominicafoodreview.com/day/672a2fd78b606d7347e5cc8b/0.jpg'
            },
            {
                name: '발렌타인 12년',
                price: '50,000원',
                description: '과일 향과 꽃 향이 조화롭게 어우러진 부드러운 위스키',
                image: 'https://dominicafoodreview.com/day/672a32178b606d7347e5ccf9/0.jpg'
            },
            // ... 더 많은 블렌디드 위스키 추가
        ]
    },
    {
        category: '버번',
        items: [
            {
                name: '잭 다니엘',
                price: '60,000원',
                description: '스모키하고 묵직한 풍미',
                image: 'https://dominicafoodreview.com/day/672a303c8b606d7347e5ccab/0.jpg'
            },
            {
                name: '짐빔',
                price: '50,000원',
                description: '달콤하고 부드러운 버번 위스키',
                image: 'https://dominicafoodreview.com/day/672a30323217566395f2db52/0.jpg'
            },
            // ... 더 많은 블렌디드 위스키 추가
        ]
    },
    // ... 다른 카테고리 (아일랜드 위스키, 일본 위스키 등) 추가
];

const menuContainer = document.querySelector('.menu-container');
const categoryNav = document.querySelector('.category-nav');
const menuItems = document.querySelector('.menu-items');

// 카테고리 버튼 생성 함수
function createCategoryButton(category) {
    const button = document.createElement('button');
    button.textContent = category;
    button.addEventListener('click', () => {
        showMenuItems(whiskeyData.find(item => item.category === category).items);
    });
    categoryNav.appendChild(button);
}

// 메뉴 아이템 생성 함수
function createMenuItem(item) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>${item.price}</p>
      <p>${item.description}</p>
    `;
    menuItems.appendChild(menuItem);
}

// 초기화 시 모든 카테고리 버튼 생성 및 첫 번째 카테고리 메뉴 표시
whiskeyData.forEach(category => {
    createCategoryButton(category.category);
});
showMenuItems(whiskeyData[0].items);

// 선택한 카테고리에 해당하는 메뉴 아이템 표시 함수
function showMenuItems(items) {
    menuItems.innerHTML = '';
    items.forEach(item => {
        createMenuItem(item);
    });
}
