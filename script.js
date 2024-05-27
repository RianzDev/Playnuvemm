

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelector('.images');

let index = 0;

function toggleBox() {
    var box = document.getElementById("boxContent");

    if (box.style.display === "none") {
        box.style.display = "block";
        document.getElementById("toggleButton").textContent = "Fechar Caixa";
    } else {
        box.style.display = "none";
        document.getElementById("toggleButton").textContent = "Abrir Caixa";
    }


document.getElementById("toggleButton").addEventListener("click", toggleBox);

nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.children.length;
    updateGallery();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.children.length) % images.children.length;
    updateGallery();
});

function updateGallery() {
    const offset = -index * images.children[0].offsetWidth;
    images.style.transform = `translateX(${offset}px)`;
}
<nav>
    
	<ul>
        
		<li><a href="index.html">Início</a></li>
		<li><a href="produtos.html">Produtos</a></li>
		<li><a href="carrinho.html">Carrinho</a></li>
		<li><a href="contato.html">Contato</a></li>
		
	</ul>
</nav>
