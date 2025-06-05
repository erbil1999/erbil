const restaurants = [
    {id:1, name:"Pizza House", image:"https://via.placeholder.com/200x120?text=Pizza"},
    {id:2, name:"Burger King", image:"https://via.placeholder.com/200x120?text=Burger"},
    {id:3, name:"Sushi Time", image:"https://via.placeholder.com/200x120?text=Sushi"},
    {id:4, name:"Kebapçı", image:"https://via.placeholder.com/200x120?text=Kebap"}
];

function renderList(items){
    const container = document.getElementById('restaurant-list');
    container.innerHTML = '';
    items.forEach(r => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${r.image}" alt="${r.name}">
            <div class="info">
                <h4>${r.name}</h4>
            </div>`;
        container.appendChild(card);
    });
}

document.getElementById('search').addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    const filtered = restaurants.filter(r => r.name.toLowerCase().includes(q));
    renderList(filtered);
});

renderList(restaurants);
