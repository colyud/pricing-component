const cards = document.querySelectorAll(".card");
const closeCard = document.querySelectorAll(".close-card");
const buttons = document.querySelectorAll("button");
const form = document.querySelector(".form-container");
const planName = document.querySelector(".plan-name");
const planPrice = document.querySelector(".price");
const submitBtn = document.querySelector(".submit");
const img = document.querySelector(".img");

for (const card of cards) {
    card.addEventListener("click", () => {
        const select = document.querySelector(".select");
        card.classList.toggle("select");
        if (select) {
            select.classList.remove("select");
        }
        cards.forEach((ecard) => {
            const select = document.querySelector(".select");
            if (!ecard.classList.contains("select")) {
                ecard.classList.add("unselect");
            }
            if (!select) {
                ecard.classList.remove("unselect");
            }
        });

        card.classList.remove("unselect");
    });
}
for (const button of buttons) {
    button.addEventListener("click", (e) => {
        e.stopPropagation();
        console.log(e.target.parentElement.children[1].innerText);
        const parentCard = e.target.parentElement;
        const plan = parentCard.children[0].innerText;
        const price = parentCard.children[1].innerText;
        form.style.opacity = 1;
        form.style.visibility = "visible";
        planName.textContent = plan;
        planPrice.textContent = price;
        img.style.opacity = 0;
        img.style.visibility = "hidden";
    });
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    setTimeout(() => {
        form.style.opacity = 0;
        form.style.visibility = "hidden";
    }, 1000);
    img.style.opacity = 1;
    img.style.visibility = "visible";
});
