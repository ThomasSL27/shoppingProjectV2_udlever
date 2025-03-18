// State
let watches;
const productsEl = document.querySelector(".products")

// Hent data om ure
fetch("./assets/js/watchesJson.json")

// Hvis det lykkedes, konvertere til js-object
.then(res => res.json())
.then(data => {
    // Gemme data i watches-variablen
    watches = data;
    // Kalde en funktion der skal opdatere grænsefladen
    updateProducts();
})

// Hvis det IKKE lykkes, udskriv fejlbesked
.catch(err => {
    alert("Du er vel nok træls")
})

function updateProducts(){
    watches.watches.forEach(watch => {
    productsEl.innerHTML += `
        <article class="product">
            <h3 class="product-title">${watch.name}</h3>
            <img src="./assets/img/${watch.imgUrl}" alt="${watch.name}" />
            <p class="product-description">
            ${watch.description}
            </p>
            <p class="product-price">${watch.price + "$ CAD"}</p>
            <button>
              Tilføj til kurv <i class="fa-solid fa-cart-plus"></i>
            </button>
          </article>
    `
    })
}
