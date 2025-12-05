/* ============================
   INTERACTIEF CATALOGUS FORMULIER
   ============================ */

// ----------- VELD SELECTORS -----------
// -----------------------------
// INPUTS
// -----------------------------
const titelInput = document.querySelector("#titel");
const auteurInput = document.querySelector("#auteur");
const jaarInput = document.querySelector("#jaar");
const themaInput = document.querySelector("#themas");

// -----------------------------
// PREVIEW ELEMENTEN
// -----------------------------
const previewTitel = document.querySelector("#preview-titel");
const previewAuteur = document.querySelector("#preview-auteur");
const previewJaar = document.querySelector("#preview-jaar");
const previewTags = document.querySelector("#preview-themas");

// -----------------------------
// CATALOGUS & BUTTONS
// -----------------------------
const catalogSection = document.querySelector(".catalog");
const saveBtn = document.querySelector(".save-btn");
const cancelBtn = document.querySelector("#resetBtn");

// -----------------------------
// FUNCTIE: UPDATE LIVE PREVIEW
// -----------------------------
function updatePreview() {
    previewTitel.textContent = "Titel: " + titelInput.value;
    previewAuteur.textContent = "Auteur: " + auteurInput.value;
    previewJaar.textContent = "Jaar: " + jaarInput.value;
    previewTags.textContent = "Thema's: " + themaInput.value;
}

// Event listeners voor live preview tijdens typen
titelInput.addEventListener("input", updatePreview);
auteurInput.addEventListener("input", updatePreview);
jaarInput.addEventListener("input", updatePreview);
themaInput.addEventListener("input", updatePreview);

// -----------------------------
// FUNCTIE: RESET FORM EN PREVIEW
// -----------------------------
function resetForm() {
    titelInput.value = "";
    auteurInput.value = "";
    jaarInput.value = "";
    themaInput.value = "";
    updatePreview();
}

// Annuleer knop
cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    resetForm();
});

// -----------------------------
// FUNCTIE: TOEVOEGEN AAN CATALOGUS
// -----------------------------
saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Controleer verplichte velden
    if (!titelInput.value || !auteurInput.value) {
        alert("Vul minimaal titel en auteur in!");
        return;
    }

    // Maak nieuwe book-card
    const bookCard = document.createElement("article");
    bookCard.classList.add("book-card");

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = titelInput.value;

    const author = document.createElement("p");
    author.classList.add("author");
    author.textContent = `Auteur: ${auteurInput.value}`;

    const year = document.createElement("p");
    year.classList.add("description");
    year.textContent = jaarInput.value ? `Jaar: ${jaarInput.value}` : "";

    const tags = document.createElement("p");
    tags.classList.add("tags");
    tags.textContent = themaInput.value ? `Thema's: ${themaInput.value}` : "";

    bookCard.appendChild(figcaption);
    bookCard.appendChild(author);
    if (jaarInput.value) bookCard.appendChild(year);
    if (themaInput.value) bookCard.appendChild(tags);

    catalogSection.appendChild(bookCard);

    // Reset form na opslaan
    resetForm();
});


