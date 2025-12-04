/* ============================
   INTERACTIEF CATALOGUS FORMULIER
   ============================ */

// ----------- VELD SELECTORS -----------
const titelInput = document.getElementById("titel");
const auteurInput = document.getElementById("auteur");
const jaarInput = document.getElementById("jaar");
const themaInput = document.getElementById("thema");

const previewTitel = document.getElementById("preview-titel");
const previewAuteur = document.getElementById("preview-auteur");
const previewJaar = document.getElementById("preview-jaar");
const previewTags = document.getElementById("preview-tags");
const previewImages = document.getElementById("preview-images");

const dropArea = document.getElementById("drop-area");
const imageUpload = document.getElementById("image-upload");

const saveBtn = document.getElementById("save-btn");
const cancelBtn = document.getElementById("cancel-btn");


// ----------- LIVE PREVIEW UPDATES -----------
titelInput.addEventListener("input", () => {
    previewTitel.textContent = titelInput.value || "— Geen titel —";
});

auteurInput.addEventListener("input", () => {
    previewAuteur.textContent = auteurInput.value || "— Geen auteur —";
});

jaarInput.addEventListener("input", () => {
    previewJaar.textContent = jaarInput.value || "—";
});


// ----------- THEMA TAGS TOEVOEGEN -----------
themaInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        const value = themaInput.value.trim();
        if (value !== "") {
            addTag(value);
            themaInput.value = "";
        }
    }
});

function addTag(text) {
    const tag = document.createElement("span");
    tag.classList.add("tag");
    tag.textContent = text;

    const removeBtn = document.createElement("span");
    removeBtn.classList.add("remove-tag");
    removeBtn.textContent = "×";
    removeBtn.onclick = () => tag.remove();

    tag.appendChild(removeBtn);
    previewTags.appendChild(tag);
}


// ----------- AFBEELDINGEN UPLOADEN -----------
imageUpload.addEventListener("change", (e) => {
    handleImages(e.target.files);
});

dropArea.addEventListener("click", () => {
    imageUpload.click();
});

function handleImages(files) {
    [...files].forEach((file) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            previewImages.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
}


// ----------- DRAG & DROP FUNCTIONALITEIT -----------
dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.style.backgroundColor = "#eef3ff";
});

dropArea.addEventListener("dragleave", () => {
    dropArea.style.backgroundColor = "#f9f9f9";
});

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    dropArea.style.backgroundColor = "#f9f9f9";
    handleImages(e.dataTransfer.files);
});


// ----------- OPSLAAN KNOP -----------
saveBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Basic check
    if (titelInput.value.trim() === "" || auteurInput.value.trim() === "") {
        alert("Titel en Auteur zijn verplicht.");
        return;
    }

    alert("📚 Boek succesvol toegevoegd aan de catalogus!");
});


// ----------- ANNULEREN KNOP -----------
cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Formulier resetten
    titelInput.value = "";
    auteurInput.value = "";
    jaarInput.value = "";
    themaInput.value = "";
    imageUpload.value = "";

    previewTitel.textContent = "— Geen titel —";
    previewAuteur.textContent = "— Geen auteur —";
    previewJaar.textContent = "—";
    previewTags.innerHTML = "";
    previewImages.innerHTML = "";
});
