const prices = {
    // Hamburguesas
    "burger_avocado_fresh": "$ 12.000",
    "burger_bbq_onion": "$ 12.500",
    "burger_doble_clasica": "$ 14.000",
    "burger_egg_sunrise": "$ 13.000",
    "burger_mushroom_swiss": "$ 18.000",
    "burger_spicy_jalapeno": "$ 12.500",
    "burger_triple_bacon_crispy": "$ 18.000",

    // Combos
    "combo_clasico_doble_01": "$ 24.000",
    "combo_helado_02": "$ 19.000",
    "combo_triple_bacon_03": "$ 22.000",
    "combo_clasico_04": "$ 18.000",
    "combo_mushrooms_05": "$ 21.000",
    "combo_jalapeño_06": "$ 16.000",
    "combo_egg_07": "$ 16.000"
};

document.addEventListener("DOMContentLoaded", () => {
    const priceElements = document.querySelectorAll('.producto__precio, .h3.text-danger.fw-bold');

    priceElements.forEach(el => {
        const productImg = el.getAttribute('data-product-img');
        if (productImg && prices[productImg]) {
            el.textContent = prices[productImg];
        }
    });
});
