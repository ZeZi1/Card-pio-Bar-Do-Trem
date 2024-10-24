const menuItems = [
    { nome: "Cerveja Brahma Duplo Malte/Chopp (600ml)", preco: 12.00, categoria: "Cervejas" },
    { nome: "Skol Puro Malte/Pilsen (600ml)", preco: 12.00, categoria: "Cervejas" },
    { nome: "Amstel (600ml)", preco: 14.00, categoria: "Cervejas" },
    { nome: "Stella Artois (600ml)", preco: 18.00, categoria: "Cervejas" },
    { nome: "Original (600ml)", preco: 15.00, categoria: "Cervejas" },
    { nome: "Heineken (600ml)", preco: 18.00, categoria: "Cervejas" },
    { nome: "Heineken Long Neck", preco: 12.00, categoria: "Cervejas" },
    { nome: "Caipirinha", preco: 15.00, categoria: "Drinks e Shots" },
    { nome: "Caipirosca", preco: 15.00, categoria: "Drinks e Shots" },
    { nome: "Caipifruta", preco: 18.00, categoria: "Drinks e Shots" },
    { nome: "Cachaça Normal", preco: 10.00, categoria: "Drinks e Shots" },
    { nome: "Cachaça Especial", preco: 15.00, categoria: "Drinks e Shots" },
    { nome: "Campari", preco: 15.00, categoria: "Drinks e Shots" },
    { nome: "Pastel do Boteco de camarão com jambú", preco: 45.00, categoria: "Tira Gosto" },
    { nome: "Filé com Fritas", preco: 65.00, categoria: "Tira Gosto" },
    { nome: "Calabresa Acebolada", preco: 25.00, categoria: "Tira Gosto" },
    { nome: "Batata Frita", preco: 25.00, categoria: "Tira Gosto" },
    { nome: "Mujica", preco: 18.00, categoria: "Tira Gosto" },
    { nome: "Tabúa de Frios", preco: 45.00, categoria: "Tira Gosto" },
    { nome: "Refrigerante (lata)", preco: 6.00, categoria: "Bebidas" },
    { nome: "Água Mineral (com ou sem gás)", preco: 5.00, categoria: "Bebidas" },
    { nome: "H2O", preco: 6.00, categoria: "Bebidas" },
    { nome: "Energético", preco: 18.00, categoria: "Bebidas" },
    { nome: "Halls", preco: 3.00, categoria: "Bomboniere" },
    { nome: "Bala de Fruta", preco: 0.25, categoria: "Bomboniere" }
];

const menuDiv = document.getElementById('menu');

menuItems.forEach(item => {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menu-item');

    menuItemDiv.innerHTML = `
        <h3>${item.nome}</h3>
        <p>Categoria: ${item.categoria}</p>
        <span>R$ ${item.preco.toFixed(2)}</span>
    `;

    menuDiv.appendChild(menuItemDiv);
});
