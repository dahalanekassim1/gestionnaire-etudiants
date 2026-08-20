var etudiants = [];

const inputNom = document.getElementById('nom')
const inputPrenom = document.getElementById('prenom')
const inputNote = document.getElementById('note');
const valList = document.querySelector('#list');

let cpt = 0;

// Logique et ajout des etudiants 
function AjouterEtudiant() {
    const nom = inputNom.value;
    const prenom = inputPrenom.value;
    const note = inputNote.value;

    const noteNbr = parseFloat(note);

    if (nom.trim() === "" || prenom.trim() === "" || note.trim() === "") {
        alert("Veuillez remplir tous les champs correctement");
    } else if (isNaN(noteNbr) || noteNbr < 0 || noteNbr > 20) {
        alert("Veuillez mettre une note valide entre 0 et 20.");
    }
    else {
        const nouvelEtudiant = {
            nom: nom.trim().toUpperCase(),
            prenom: prenom.trim().toLowerCase(),
            note: noteNbr
        }
        etudiants.push(nouvelEtudiant);

        inputNom.value = "";
        inputPrenom.value = "";
        inputNote.value = "";

        valList.innerHTML = "";

        afficheListe(etudiants);

        compteur();
    }

}

// Affichage des etudiant 
function afficheListe() {
    etudiants.forEach((etudiant) => {

        let a = etudiant.note < 10 ? "recale" : "admis";
        let b = etudiant.note < 10 ? "Recalé" : "Admis";
        let c = etudiant.note < 10 ? `0${etudiant.note}` : `${etudiant.note}`;

        valList.innerHTML += `<table>
        <tr>
            <td>${etudiant.nom} </td>
            <td>${etudiant.prenom}</td>
            <td>${c} </td>
            <td class=${a}> ${b} </td>
        </tr>
        </table>`;
            

        valList.classList.add('list');
    })
}

// Compteur des nbrs des etudiants admis et recalés et calcule de la moyenne de classe 
function compteur() {
    const nbrEtu = document.getElementById('totalEt');
    const moyClasse = document.getElementById('moyClasse');
    const etAdmis = document.getElementById('etAdmis');
    const etRecale = document.getElementById('etRecale');

    let nbrAdmis = 0;
    let nbrRecale = 0;
    let somme = 0;
    let totalEt = 0;
    let totalMoyenne = 0;

    for (let i = 0; i < etudiants.length; i++) {
        somme = somme + etudiants[i].note;

        totalEt++;

        if (etudiants[i].note < 10) {
            nbrRecale++;
        } else {
            nbrAdmis++;
        }
    }

    totalMoyenne = (somme / etudiants.length).toFixed(2);

    nbrEtu.textContent = `${totalEt}`;
    etAdmis.textContent = `${nbrAdmis}`;
    etRecale.textContent = `${nbrRecale}`;

    if (totalEt === 0) {
        moyClasse.textContent = `00:00`;
    }
    else { moyClasse.textContent = `${totalMoyenne}` }

}


