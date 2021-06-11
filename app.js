const cards = document.querySelectorAll(".card");
const closeCard = document.querySelectorAll(".close-card");

for (const card of cards) {
    card.addEventListener("click", () => {
        const active = document.querySelector(".card-active");
        card.classList.toggle("card-active");
        if (active) {
            active.classList.remove("card-active");
        }
        cards.forEach((ecard) => {
            const active = document.querySelector(".card-active");
            if (!ecard.classList.contains("active")) {
                ecard.classList.add("unselect");
            }
            if (!active) {
                ecard.classList.remove("unselect");
            }
        });

        card.classList.remove("unselect");
    });
}
