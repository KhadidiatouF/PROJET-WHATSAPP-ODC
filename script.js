import {route,route2,getCurrentTime, afficherMessagesGroupe,creerUser, ajout, afficherUtilisateurs, creerGroupe,ajoutGroupe,afficherGroupes, afficherContact , archiverContact, afficherContactArchiver, afficherMessages, validerNumero, pasDoublon, genererNomEtPrenomUnique, titreDynamique, profil, envoieMessage,enregistrerMessage, rechercherContacts, afficherFiltre, afficherConversation} from "./components.js";
import {utilisateurs, groupes, conversations} from "./tab.js";
import { loginPage} from "./loginPage.js";


const connexion =  loginPage();

// const body = document.querySelector('.body')
// body.innerHTML=""
// body.appendChild(connexion);


const boutons = document.querySelectorAll('#sidebar button')
const ajoute = document.querySelector('#ajout')
const ajoutGroupeBtn = document.querySelector('#ajouter-groupe');
const nomGroupeInput = document.querySelector('#group-name');
const membresSelect = document.querySelector('#group-members');
const btnIcon =  document.querySelectorAll('#icones button')


const zone = document.querySelector('#discussion'); 

document.querySelector('#envm').addEventListener('click', () => {
    const input = document.querySelector('#ecrireMess');
    const text = input.value.trim();
  
    if (text !== '') {
      const msg = { content: text, heure: getCurrentTime(), envoyeParMoi: true };
      const element = envoieMessage(msg, true);
      zone.appendChild(element);
      input.value = '';
  
      setTimeout(() => {
        const reponse = {
          content: "En tout cas Kadiatou beugouma liiii",  
          heure: getCurrentTime(),
          envoyeParMoi: false
        };
        const reponseElement = envoieMessage(reponse, false);
        zone.appendChild(reponseElement);
  
        zone.scrollTop = zone.scrollHeight;
      }, 1500);
    }
  });
  

const inputSearch = document.querySelector('#recherche');

inputSearch.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const valeur = e.target.value.trim();
    const resultats = rechercherContacts(conversations, valeur);
    afficherFiltre(resultats);
  }
});


  

btnIcon[0].addEventListener('click', ()=> {
    route2(('#pg1'));
})


btnIcon[1].addEventListener('click', ()=> {

    // route(('#page4'))
    archiverContact(conversations); 
    afficherContactArchiver(conversations);
    // afficherMessages(utilisateurs, conversations);

})
btnIcon[2].addEventListener('click', ()=> {
    route(('#page4'));
    // desarchiverContact(utilisateurs);
    
})
btnIcon[3].addEventListener('click', ()=> {
    route2(('#pg4'));
})

const envoyerBtn = document.querySelector('#envm')
envoyerBtn.addEventListener("click", () => {
    const texte = inputMessage.value;
    if (!texte || !groupeActif) return;

    const nouveauMessage = {
        expediteur: monNumero,
        contenu: texte,
        heure: getCurrentTime()
    };

    groupeActif.messages.push(nouveauMessage);
    afficherMessagesGroupe(groupeActif);  // Mise à jour affichage
    inputMessage.value = "";
});



function remplirListeUtilisateurs() {
  membresSelect.innerHTML = utilisateurs.map((u, index) =>
    `<option class=" font-bold text-sm" value="${index}">${u.nom} ${u.prenom}</option>`
  ).join('');
}

// console.log(boutons)

boutons[0].addEventListener('click', ()=> {
    
    route(('#page1'));
    afficherMessages(conversations)
    titreDynamique("Discussions");
    
})


boutons[1].addEventListener('click', ()=> {
    route(('#page2'));
    remplirListeUtilisateurs();  
    afficherUtilisateurs(utilisateurs);
    // afficherGroupes(listeGroupes)
    titreDynamique("Groupe");

    // afficherGroupes(groupes);
})

boutons[2].addEventListener('click', ()=> {
    route(('#page3'));
    afficherContact(utilisateurs);
    titreDynamique("Diffusion");

})

boutons[3].addEventListener('click', ()=> {
    route(('#page4'));
    // afficherMessages(conversations, true)
    // afficherMessageAarchiver(conversations);
    afficherContactArchiver(conversations);
    titreDynamique("Archives");



})


boutons[4].addEventListener('click', ()=> {
    route(('#page5'));
    titreDynamique("Nouveau");

})


ajoute.addEventListener('click', ajoutUtilisateur)

function ajoutUtilisateur() {
    let valide = true;
    const nom = document.querySelector('#nom')
    const prenom = document.querySelector('#prenom')
    const numero = document.querySelector('#num')
    const errorm = document.querySelectorAll('#page5 small')

    const recup1= nom.value.trim();
    const recup2= prenom.value.trim();
    const recup3= numero.value.trim();

    if (recup1 === '' ) {
        valide = false
        errorm[0].textContent='Le champs nom ne peut pas etre vide'
        errorm[0].classList.remove('hidden')
     
    }
    if (recup2 === '') {
        valide = false

        errorm[1].textContent='Le champs prenom ne peut pas etre vide'
        errorm[1].classList.remove('hidden')
    }
    if (recup3 === '') {
        valide = false

        errorm[2].textContent='Le champs numero ne peut pas etre vide'
        errorm[2].classList.remove('hidden')
      
    }if (validerNumero(recup3) == false) {
        valide = false

        errorm[2].textContent='Le numero saisie est invalide'
        errorm[2].classList.remove('hidden')
        
    }if (pasDoublon(utilisateurs, recup3)) {

        valide = false

        errorm[2].textContent='Ce numéro existe déja !'
        errorm[2].classList.remove('hidden')
    }

    
    if(valide){

        // const utilisateur = creerUser(recup1, recup2, recup3);
        const identiteUnique = genererNomEtPrenomUnique(recup1, recup2, utilisateurs);
        const utilisateur = creerUser(identiteUnique.nom, identiteUnique.prenom, recup3);

        ajout(utilisateurs, utilisateur);
        afficherUtilisateurs(utilisateurs); 

        nom.value=''
        prenom.value=''
        numero.value=''

    }

    
}

ajoutGroupeBtn.addEventListener('click', () => {
    const nomGroupe = nomGroupeInput.value.trim();


    if (nomGroupe === '') {
      alert('Ce champs ne doit pas etre vide.');
    }else if(!isNaN(nomGroupe) && nomGroupe !== ''){
        alert('Ce champs doit etre une chaine')
    }else if( nomGroupe.length <2 ){
        alert('Le nom du groupe doit etre superieur ou égal à 5 lettres')
    }else {
        
    const choix = Array.from(membresSelect.selectedOptions);
    if (choix.length === 1) {
        alert("Veuillez sélectionner au moins deux membres.");
        return;
    }

    const membres = choix.map(opt => utilisateurs[opt.value]);

    const groupe = creerGroupe(nomGroupe);
    groupe.membres = membres;

    ajoutGroupe(groupes, groupe);
    afficherGroupes(groupes);

    nomGroupeInput.value = '';
    membresSelect.selectedIndex = -1;
   
      alert('Groupe créé avec succès.');
    }
  });
