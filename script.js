const angpao = document.getElementById("angpao");
const popup = document.getElementById("popup");
const tutupBtn = document.getElementById("tutupBtn");

angpao.addEventListener("click", () => {
    popup.style.display = "flex";
});

tutupBtn.addEventListener("click", () => {
    popup.style.display = "none";
});
