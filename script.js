import {route,route2,getCurrentTime, afficherMessagesGroupe,creerUser, ajout, afficherUtilisateurs, creerGroupe,ajoutGroupe,afficherGroupes, afficherContact , archiverContact, afficherContactArchiver, afficherMessages, validerNumero, pasDoublon, genererNomEtPrenomUnique, titreDynamique, profil, envoieMessage,enregistrerMessage, rechercherContacts, afficherFiltre, afficherConversation, supprimerDiscussion} from "./components.js";
import {utilisateurs, groupes, conversations} from "./tab.js";
import { loginPage} from "./loginPage.js";
// document.body.appendChild(loginPage());


let contactActif = null;
let groupeActif = null;
let userLogin = loginPage()

if (userLogin === null) {
    // return  
}else{
   accueil()   
}


// loginPage(accueil);
// console.log(document.querySelector('#envm'))

function accueil() {
const boutons = document.querySelectorAll('#sidebar button')
const ajoute = document.querySelector('#ajout')
const ajoutee = document.querySelector('#ajoutt')

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



// document.querySelector('#envm').addEventListener('click', () => {
//   const input = document.querySelector('#ecrireMess');
//   const text = input.value.trim();
//   const currentPage = document.querySelector('.page.active'); // Ajoute une classe 'active' à la page affichée
//   const zone = document.querySelector('#discussion');

//   if (text === '') return;

//   if (currentPage && currentPage.id === 'page3') {
//     // MODE DIFFUSION
//     const checkboxes = document.querySelectorAll('.diffusion-check:checked');
//     checkboxes.forEach(checkbox => {
//       const numero = checkbox.dataset.numero;
//       const msg = {
//         content: text,
//         heure: getCurrentTime(),
//         envoyeParMoi: true,
//         destinataire: numero
//       };
//       const element = envoieMessage(msg, true);
//       zone.appendChild(element);
//     });

//     input.value = '';
//     zone.scrollTop = zone.scrollHeight;

//   } else {
//     // AUTRE MODE (normal ou groupe)
//     const msg = { content: text, heure: getCurrentTime(), envoyeParMoi: true };
//     const element = envoieMessage(msg, true);
//     zone.appendChild(element);
//     input.value = '';

//     setTimeout(() => {
//       const reponse = {
//         content: "En tout cas Kadiatou beugouma liiii",  
//         heure: getCurrentTime(),
//         envoyeParMoi: false
//       };
//       const reponseElement = envoieMessage(reponse, false);
//       zone.appendChild(reponseElement);
//       zone.scrollTop = zone.scrollHeight;
//     }, 1500);
//   }
// });

  

const inputSearch = document.querySelector('#recherche');

inputSearch.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const valeur = e.target.value.trim();
    const resultats = rechercherContacts(conversations, valeur);
    afficherFiltre(resultats);
  }
});


  

btnIcon[0].addEventListener('click', ()=> {
    // route2(('#pg1'));
    const numero = document.querySelectorAll('[numeroUser]')
    supprimerDiscussion(numero)
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
    // route2(('#pg4'));
})



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
    titreDynamique("Groupe");
    afficherMessagesGroupe(groupes);
    // afficherGroupes(groupes); //quand je decommente les groupes dans tab.js apparaissent mais le formulaire d'ajout saute
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
    // afficherUtilisateurs(utilisateurs); 
    titreDynamique("Nouveau");


})

boutons[5].addEventListener('click', ()=> {
    loginPage();

})


ajoutee.addEventListener('click', ajoutUtilisateur)

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
        errorm.forEach(element => {
            element.classList.add('hidden')
            
        });
        nom.value=''
        prenom.value=''
        numero.value=''

    }

    
}

ajoutGroupeBtn.addEventListener('click', () => {
    const nomGroupe = nomGroupeInput.value.trim();
    const errorgrp = document.querySelector('#page2 small');
    console.log(errorgrp)
    // Reset des classes de couleur
    errorgrp.classList.remove('text-red-600', 'text-green-600');
    errorgrp.classList.remove('hidden');

    if (nomGroupe === '') {
        errorgrp.textContent = 'Ce champ ne doit pas être vide.';
        errorgrp.classList.add('text-red-600');

    } else if (!isNaN(nomGroupe)) {
        errorgrp.textContent = 'Ce champ doit être une chaîne.';
        errorgrp.classList.add('text-red-600');

    } else if (nomGroupe.length < 2) {
        errorgrp.textContent = 'Le nom du groupe doit être supérieur ou égal à 5 lettres.';
        errorgrp.classList.add('text-red-600');

    } else {
        const choix = Array.from(membresSelect.selectedOptions);
        if (choix.length < 2) {
            errorgrp.textContent = 'Veuillez sélectionner au moins deux membres.';
            errorgrp.classList.add('text-red-600');
            return;
        }

        const membres = choix.map(opt => utilisateurs[opt.value]);
        const groupe = creerGroupe(nomGroupe);
        groupe.membres = membres;

        ajoutGroupe(groupes, groupe);
        afficherGroupes(groupes);

        nomGroupeInput.value = '';
        membresSelect.selectedIndex = -1;

        errorgrp.textContent = 'Groupe créé avec succès !';
        errorgrp.classList.add('text-green-600');
    }
});


}

