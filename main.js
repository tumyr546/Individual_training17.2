const text = document.querySelector("#new-text");
const button = document.querySelector("#button");

button.textContent = text.textContent;

const img = document.querySelector(".img");

img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJyJDfSfgEHE_dEMN00VDDFv2UsvaHCohwP53nMdl1fQ&s=10";

const imge = document.createElement("img");

const link = document.querySelector("#Link");
const imgs = document.querySelector("#images");
link.href = "https://www.youtube.com/";
imgs.alt = "Опис цього зображення";

const firstItem = document.querySelector("#list li");
firstItem.textContent = "Змінений перший елемент";
