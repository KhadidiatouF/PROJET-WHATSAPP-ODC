import { conversations, messages, utilisateurs } from "./tab.js";
let contactActif ;
let groupeActif = null;



export function route(page) {
    const pages = document.querySelectorAll('.page')
    pages.forEach(p => {
        p.classList.add('hidden')
        
    });
    document.querySelector(page).classList.remove('hidden')
    document.querySelector(page).classList.add('block')

    
}

export function route2(pg) {
    const pges = document.querySelectorAll('.pg')
    pges.forEach(p => {
        p.classList.add('hidden')
        
    });
    document.querySelector(pg).classList.remove('hidden')
    document.querySelector(pg).classList.add('block')

    
}

export function route3(discuss) {
    const discussions = document.querySelectorAll('.items')
    discussions.forEach(d => {
        d.classList.add('hidden')
        
    });
    document.querySelector(discuss).classList.remove('hidden')
    document.querySelector(discuss).classList.add('block')

    
}


export function creerUser(nom, prenom, numero) {
    return {
        nom:nom,
        prenom:prenom,
       
        numero:numero,
        etat:'Disponible',
        Online:true,
        archive: false,
        login: "contact", 
        mdp: "1234"

    }
    
}

export function ajout(tab, utilisateur) {
    tab.push(utilisateur);
}

export function afficherMessages(conversations) {

    const m = document.getElementById("page1");
    m.innerHTML = ""; 

    if (conversations === null) {
        return
    }
    conversations.forEach(c => {
        // console.log(c.numero);
        
        
        let initial = c.prenom.charAt(0).toUpperCase() +  c.nom.charAt(0).toUpperCase();

        if (c.archive == false) {
            const item = document.createElement("div");
        // item.className = "flex items-center justify-between bg-white p-3 rounded-xl shadow";

        item.innerHTML = `
            <div class="item1 bg-white  flex justify-between w-full h-20 mt-5 rounded-2xl space-y-4 cursor-pointer hover:bg-gray-100">
                    <div class="items-center flex justify-between gap-5">
                      <div class="w-16 h-16  items-center justify-center flex text-white bg-slate-800 flex-row rounded-full"> ${initial}</div>
                       <div class="text-sm">
                            <div class="nom " >${c.nom} ${c.prenom}  </div>
                            <div class="message">
          ${Array.isArray(c.messages) && c.messages.length > 0 ? c.messages[0].contenu : 'Aucun message'}
 </div>

                        </div>

                
                    </div>
                <div class="text-sm mr-0">
                    <div class="text-green-500">00:00</div>
                    <div class="text-xs text-green-500"><i class="fa-solid fa-circle"></i></div>
                </div>
            </div>
        `;

        

        const divClickable = item.querySelector('.item1');

        // console.log(divClickable)
        divClickable.addEventListener('click', () => {
            document.querySelectorAll('.item1').forEach(el => {
                el.classList.remove('selected', 'bg-gray-500');
            });
        
            divClickable.classList.add('selected', 'bg-gray-500');
            divClickable.setAttribute('id', 'selected');

        
            const user = utilisateurs.find(u => 
                u.nom.toLowerCase() === c.nom.toLowerCase() &&
                u.prenom.toLowerCase() === c.prenom.toLowerCase()
            );
        
            const nomComplet = user ? `${user.nom} ${user.prenom}` : `${c.nom} ${c.prenom}`;
            const numero = user ? user.numero : c.numero;
        
            profil(initial, nomComplet, numero);

            contactActif = c;
            afficherConversation(c);  // <-- Affiche la discussion complète dans la zone discussion
        });
        divClickable.setAttribute('numeroUser',c.numero)

        m.appendChild(item);
        }
    });
}   



export function genererNomEtPrenomUnique(nom, prenom, utilisateurs) {
    const nomBase = nom.trim();
    const prenomBase = prenom.trim();
    let compteur = 0;
    let prenomUnique = prenomBase;

    utilisateurs.forEach(user => {
        const nomUser = user.nom.trim();
        const prenomUser = user.prenom.trim();

        if (nomUser === nomBase) {
            if (prenomUser === prenomBase) {
                compteur++;
            } 
            else if (
                prenomUser.startsWith(prenomBase + "(") &&
                prenomUser.endsWith(")")
            ) {
                const entreParentheses = prenomUser.slice(
                    prenomBase.length + 1,  
                    -1                    
                );
                if (!isNaN(entreParentheses)) {
                    compteur++;
                }
            }
        }
    });

    if (compteur > 0) {
        prenomUnique = `${prenomBase}(${compteur})`;
    }

    return { nom: nomBase, prenom: prenomUnique };
}



export function afficherUtilisateurs(utilisateurs) {
    const listeU = document.getElementById("liste-utilisateurs");
    afficherConversation

    // listeU.innerHTML = ""; 

    utilisateurs.forEach(user => {
        const item = document.createElement("div");
        item.className = "flex items-center justify-between bg-white p-3 rounded-xl shadow";

        item.innerHTML = `
            <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-gray-400 rounded-full"><img src="profil.jpeg" alt="Profil" class="profil-img" /></div>
                <div class="text-sm">
                    <div class="font-bold">${user.nom} ${user.prenom}</div>
                    <div class="text-gray-600">${user.numero}</div>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-circle text-green-500 text-xs"></i>
            </div>
        `;

        listeU.appendChild(item);
    });
}


export function afficherFiltre(conversations ) {
    const contacts = document.getElementById("page1");
    // console.log(contacts)
    contacts.innerHTML = ""; 



    conversations.forEach(conv => {
    let initial = conv.prenom.charAt(0).toUpperCase() +  conv.nom.charAt(0).toUpperCase();

        // if (user.archive === false) {
            const c = document.createElement("div");
        // c.className = "flex items-center justify-between bg-white p-3 rounded-xl shadow";

        c.innerHTML = `
              <div class="item1 bg-white  flex justify-between w-full h-20 mt-5 rounded-2xl space-y-4 cursor-pointer hover:bg-gray-100">
                    <div class="items-center flex justify-between gap-5">
                      <div class="w-16 h-16  items-center justify-center flex text-white bg-slate-800 flex-row rounded-full"> ${initial}</div>
                       <div class="text-sm">
                            <div class="nom " >${conv.nom} ${conv.prenom}  </div>
                            <div class="message">${conv.messages[0].contenu} </div>

                        </div>

                
                    </div>
                <div class="text-sm mr-0">
                    <div class="text-green-500">00:00</div>
                    <div class="text-xs text-green-500"><i class="fa-solid fa-circle"></i></div>
                </div>
            </div>
        `;

        contacts.appendChild(c);
        }
    // }
    );
}


export function afficherContact(utilisateurs ) {
    const contacts = document.getElementById("page3");
    // console.log(contacts)
    contacts.innerHTML = ""; 


    utilisateurs.forEach(user => {
        // if (user.archive === false) {
            const c = document.createElement("div");
        // c.className = "flex items-center justify-between bg-white p-3 rounded-xl shadow";

        c.innerHTML = `
             <div class=" bg-[#F9F7F5] border-b-4 border-r-4 border-[#DED9C2] flex justify-between w-full h-20 mt-5 rounded-2xl space-y-4 cursor-pointer hover:bg-gray-400">
                    <div class="items-center flex justify-between ml-0">
                      <div class="w-16 h-16"></div>
                       <div class="text-xm">
                            <div class = "nom">${user.nom} ${user.prenom} - ${user.numero}</div>

                        </div>

                    </div>
                  
                    <div class="text-sm mr-10" >
                     
                        <input type="checkbox" class="w-5 h-5 diffusion-check" data-numero="${user.numero}">


                    </div>

                </div>
        `;

        contacts.appendChild(c);
        }
    // }
    );
}

export function creerGroupe(nomG, nom, prenom,numero) {
    return {
        nom: nomG,
        membres: [
            {
                nom:nom,
                prenom:prenom,
                role:'Admin',
                numero:numero,
                etat:'Disponible',
                Online:true,
                archive: true        
            },
        ] 
    };
}



export function ajoutGroupe(listeGroupes, groupe) {
    listeGroupes.push(groupe);
}
function preparerFormulaireAjoutMembre(groupe, index, utilisateurs) {
    const page2 = document.getElementById('page2');
    const inputNomGroupe = document.getElementById('group-name');
    const selectMembres = document.getElementById('group-members');
    const bouton = document.getElementById('ajouter-groupe');

    // Affiche le formulaire
    page2.classList.remove('hidden');

    // Préremplit et désactive le champ nom
    inputNomGroupe.value = groupe.nom;
    inputNomGroupe.disabled = true;

    // Vide et remplit le select avec les utilisateurs non-membres
    selectMembres.innerHTML = '';
    const nonMembres = utilisateurs.filter(u => !groupe.membres.some(m => m.numero === u.numero));
    nonMembres.forEach(user => {
        const opt = document.createElement("option");
        opt.value = user.numero;
        opt.textContent = `${user.nom} ${user.prenom}`;
        selectMembres.appendChild(opt);
    });

    // Change le texte du bouton
    bouton.textContent = 'Ajouter Membre';

    // Nettoie tout ancien listener
    const nouveauBtn = bouton.cloneNode(true);
    bouton.parentNode.replaceChild(nouveauBtn, bouton);

    nouveauBtn.addEventListener('click', () => {
        const selectedOptions = Array.from(selectMembres.selectedOptions);
        selectedOptions.forEach(option => {
            const numero = option.value;
            const utilisateur = utilisateurs.find(u => u.numero === numero);
            if (utilisateur && !groupe.membres.some(m => m.numero === numero)) {
                groupe.membres.push(utilisateur);
            }
        });

        inputNomGroupe.disabled = false;
        nouveauBtn.textContent = 'Créer le Groupe';
        page2.classList.add('hidden');
        afficherGroupes(listeGroupes);
    });
}


export function afficherGroupes(listeGroupes) {
    const groupCible = document.querySelector('.group1');
    groupCible.innerHTML = ''; 

    listeGroupes.forEach((groupe, index) => {
        const div = document.createElement('div');

        div.innerHTML = `
            <div class="group1 bg-white flex justify-between w-full h-[6.5rem] mt-5 rounded-2xl space-y-4 cursor-pointer hover:bg-gray-400 relative">
                <div class="items-center flex justify-between gap-5">
                    <div class="w-16 h-16 ml-5 flex bg-gray-600 text-white items-center justify-center rounded-full">G</div>
                    <div class="text-sm">
                        <div class="font-bold">${groupe.nom}</div>
                        <div class="font-bold">
                            ${groupe.membres.map(m => `${m.nom} ${m.prenom}`).join(', ')}
                        </div>
                    </div>
                </div>
                <div class="text-sm mr-4 text-right">
                    <div class="text-green-500">12:00</div>
                    <div class="text-xs text-green-500"><i class="fa-solid fa-circle"></i></div>
                    <button class="ajout-membre-btn text-blue-600 underline text-xl mt-1"><i class="fa-solid fa-users-line"></i></button>
                </div>  
            </div>
        `;

        // 📌 Événement : clique sur le groupe pour voir les messages
        div.querySelector('.group1').addEventListener("click", () => {
            groupeActif = groupe;
            afficherMessagesGroupe(groupe);  
        });

        // 📌 Événement : clique sur le bouton "Ajouter membre"
        div.querySelector('.ajout-membre-btn').addEventListener('click', (e) => {
            e.stopPropagation(); // évite que le clic ouvre les messages du groupe

           
            preparerFormulaireAjoutMembre(groupe, index, utilisateurs);
        });

        groupCible.appendChild(div);
    });
}



// export function afficherGroupes(listeGroupes) {
//     const groupCible = document.querySelector('.group1');
//     groupCible.innerHTML = ''; 


//     listeGroupes.forEach((groupe) => {

//     // let initials = groupe.nomG.charAt(0).toUpperCase() 

//         // console.log(groupe.nomG);
        
//         const div = document.createElement('div');
//         // <div  class="font-bold"> ${groupe.membres[0].nom}  ${groupe.membres[1].nom} </div>

//         // div.innerHTML = `<h4>Groupe ${index + 1} : ${groupe.nom}</h4><ul>${groupe.membres.map(m => `<li>${m.nom} ${m.prenom}</li>`).join('')}</ul>`;
//         div.innerHTML= `
//                 <div class="group1 bg-white flex justify-between w-full h-[5rem] mt-5  rounded-2xl space-y-4 cursor-pointer hover:bg-gray-400">
//                     <div class="items-center flex justify-between gap-5 ">
//                       <div class="w-16 h-16 ml-5 flex  bg-gray-600 text-white flex-row  items-center justify-center rounded-full">   </div>
//                       <div class="text-sm ">
//                         <div  class="font-bold"> ${groupe.nom} </div>
//                         <div  class="font-bold"> ${groupe.membres[0].nom}   ${groupe.membres[0].prenom},  ${groupe.membres[1].nom} ${groupe.membres[1].prenom} </div>
//                       </div>

//                     </div>
                  
//                     <div class="text-sm mr-0" >
//                         <div class="text-green-500">12:00</div>
//                         <div class=" text-xs text-green-500 "><i class="fa-solid fa-circle"></i></div>
//                     </div>  

//                 </div>
                             
//                 `
//                 div.addEventListener("click", () => {
//                     groupeActif = groupe;
//                     afficherMessagesGroupe(groupe);  
//                 });
//         groupCible.appendChild(div);
//     });
//     // ajoutGroupe(listeGroupes)
// }

export function afficherMessagesGroupe(groupe) {
    const container = document.getElementById("discussion");
    container.innerHTML = "";
    

    if (!groupe || !Array.isArray(groupe.membres)) {
        container.textContent = "Aucun membre dans ce groupe.";
        return;
    }

    let messages = [];

    groupe.membres.forEach(membre => {
        const nomExpediteur = `${membre.nom} ${membre.prenom}`;
        const messagesMembre = membre.messages || [];

        messagesMembre.forEach(msg => {
            messages.push({
                expediteur: nomExpediteur,
                contenu: msg.contenu,
                heure: msg.heure
            });
        });
    });

    messages.sort((a, b) => a.heure.localeCompare(b.heure));

    messages.forEach(msg => {
        const div = document.createElement("div");
        div.className = "message w-80 h-20 ml-5  bg-gray-200 p-2 mt-20 rounded";

        div.innerHTML = `
            <div class="font-semibold text-sm">${msg.expediteur}</div>
            <div class="text-base">${msg.contenu}</div>
            <div class="text-xs text-right text-gray-600">${msg.heure}</div>
        `;

        container.appendChild(div);
    });
}

// export function afficherMessagesGroupe(groupe) {
//     const container = document.getElementById("discussion");
//     container.innerHTML = "";

//     // Fusionner tous les messages de tous les membres
    
//     const tousLesMessages = groupe.membres.flatMap(m => 

        
//         (m.messages || []).map(msg => ({
//             expediteur: msg.expediteur || `${m.nom} ${m.prenom}`,
//             contenu: msg.contenu,
//             heure: msg.heure
//         }))
//     );

//     // Trier les messages par heure si besoin (simple tri alphabétique ici)
//     tousLesMessages.sort((a, b) => a.heure.localeCompare(b.heure));

//     // Affichage
//     tousLesMessages.forEach(msg => {
//         const estMoi = msg.expediteur === "Moi"; // à adapter si tu veux comparer par numéro
//         const div = envoieMessage(
//             { content: msg.contenu, heure: msg.heure }, 
//             estMoi
//         );
//         container.appendChild(div);
//     });
// }

export function envoyerMessageGroupe(messageTexte, groupe) {
    const heure = getCurrentTime(); // une fonction pour l'heure au format hh:mm

    groupe.membres.forEach(membre => {
        if (!membre.messages) membre.messages = [];
        membre.messages.push({
            expediteur: "Moi",  // ou le nom réel si besoin
            contenu: messageTexte,
            heure: heure
        });
    });

    afficherMessagesGroupe(groupe);
}




export function ajouterMembreDansGroupe(groupes, groupeNom, utilisateur) {
    const groupe = groupes.find(g => g.nom === groupeNom);
    if (groupe) {
        groupe.membres.push(utilisateur);
    }
}


//FOONCTION A MODIFIER POUR     ARCHIVER DESARCCHIVER

export function archiverContact(utilisateurs){
    // console.log(elements)
    
    const elements = document.querySelectorAll('.selected');
    
    elements.forEach(element => {

        const nom = element.querySelector('.nom');
        // const input = element.querySelector('input');
        // console.log(input)
        
            
            utilisateurs.forEach(utilisateur => {
                let nom_complet = `${utilisateur.nom} ${utilisateur.prenom}`;
                
                if (nom_complet == nom.textContent.trim()) { 
                    
                    if (utilisateur.archive == true) {
                        
                        utilisateur.archive = false;
                    }else{
                        utilisateur.archive = true;

                    }                 
                    
                }
            });
        
    });

    afficherMessages(conversations);

    
    
}
export function profil(initiales, nomComplet, numero) {
    const profilDiv = document.querySelector('.profil');
    const nomDiv = document.querySelector('.nom-profil');
    const numeroDiv = document.querySelector('.numero-profil');

    if (profilDiv) profilDiv.textContent = initiales;
    if (nomDiv) nomDiv.textContent = nomComplet;
    if (numeroDiv) numeroDiv.textContent = numero;
}




export function titreDynamique(titre) {
    const h2 = document.querySelector('.titrH')
    if (h2) {
        h2.textContent = titre.toUpperCase();
    }
    
}



export function afficherContactArchiver(conversations){
    const m = document.getElementById("page4");
    
    m.innerHTML = ""; 

    conversations.forEach(c => {
        let initial = c.prenom.charAt(0).toUpperCase() +  c.nom.charAt(0).toUpperCase();

        if (c.archive == true) {
            const item = document.createElement("div");
        // item.className = "flex items-center justify-between bg-white p-3 rounded-xl shadow";

        item.innerHTML = `
            <div class="item1 bg-white  flex justify-between w-full h-20 mt-5 rounded-2xl space-y-4 cursor-pointer hover:bg-gray-100">
                    <div class="items-center flex justify-between gap-5">
                      <div class="w-16 h-16  items-center justify-center flex text-white bg-slate-800 flex-row rounded-full"> ${initial}</div>
                       <div class="text-sm">
                            <div class="nom " >${c.nom} ${c.prenom}  </div>
                            <div class="message">${c.messages[0].contenu} </div>

                        </div>

                
                    </div>
                <div class="text-sm mr-0">
                    <div class="text-green-500">00:00</div>
                    <div class="text-xs text-green-500"><i class="fa-solid fa-circle"></i></div>
                </div>
            </div>
        `;

        const divClickable = item.querySelector('.item1');
        divClickable.addEventListener('click', ()=>[
            divClickable.classList.toggle('selected'),
            divClickable.classList.toggle('bg-gray-500')

        ])


        m.appendChild(item);
        }
    });
    
    
}

export function validerNumero(numero) {
    const regex = /^\+?[1-9]\d{7,14}$/;
    return regex.test(numero);
}

export function pasDoublon(utilisateurs, numero) {
    for (const utilisateur of utilisateurs) {
        if (utilisateur.numero == numero) {
            return true;
        }

    }
    return false;
    
}
export function envoieMessage(message, deMoi = true) {
    const divParent = document.createElement("div");
    divParent.className = `flex ${deMoi ? 'justify-end' : 'justify-start'} mt-10`;
    divParent.id = deMoi ? 'expediteur' : 'destinataire';
  
    const heure = message.heure || getCurrentTime();
    const texte = message.content || '';
    
  
    divParent.innerHTML = `
      <div class="text-black justify-between w-80 gap-5 h-20 
        ${deMoi ? 'bg-[#45CA42] rounded-s-xl rounded-tr-xl mr-3' : 'bg-[#E5E5EA] rounded-e-xl rounded-tl-xl ml-3'}
        flex items-center mt-10">
        <div class="text-xl font-medium ml-2 break-words overflow-hidden w-full">      
            ${texte}
        </div>
        <div class="inline-flex gap-4">
          <div class="text-black">${heure}</div>
          <i class="fa-solid fa-check"></i>
        </div>
      </div>
    `;
  
    return divParent;
  }

export function afficherDiscussion(conversations) {
    const discussion = document.getElementById('discussion');
    discussion.innerHTML = ''; // Vider la discussion
  
    conversations.messages.forEach(message => {
      const divMessage = envoieMessage({
        content: message.contenu,
        heure: message.heure,
        lu: message.lu
      }, message.expediteur === 'moi');
  
      discussion.appendChild(divMessage);
    });
}
  

export function getCurrentTime() {
    const date = new Date();
    return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
  }
  

export function rechercherContacts(utilisateurs, valeur) {
    const val = valeur.trim().toLowerCase();
  
    if (val === '*') {
      return [...utilisateurs].sort((a, b) => a.nom.localeCompare(b.nom));
    }
  
    if (val === '') {
      return [];
    }
  
    return utilisateurs.filter(user =>
      user.nom.toLowerCase().includes(val) ||
      user.numero.includes(val)
    );
}

  export function enregistrerMessage(msg) {
    messages.push(msg);
  }

//   export function afficherConversation(numero) {
//     const zoneDiscussion = document.getElementById("discussion");
//     zoneDiscussion.innerHTML = "";

//     const conv = conversations.find(c => c.numero === numero);
//     if (!conv) {
//         zoneDiscussion.innerHTML = "<p>Aucune conversation trouvée</p>";
//         return;
//     }

//     const titre = document.createElement("h3");
//     titre.textContent = `${conv.nom} ${conv.prenom}`;
//     zoneDiscussion.appendChild(titre);

//     conv.messages.forEach(msg => {
//         const messageEl = document.createElement("div");
//         messageEl.className = msg.expediteur === "moi" ? "text-right" : "text-left";
//         messageEl.innerHTML = `
//             <p><strong>${msg.expediteur || msg.destinataire}</strong> : ${msg.contenu}</p>
//             <small>${msg.heure}</small>
//         `;
//         zoneDiscussion.appendChild(messageEl);
//     });
// }

export function afficherConversation(conversation) {
    const container = document.getElementById("discussion");
    container.innerHTML = "";

    if (!conversation || !conversation.messages || conversation.messages.length === 0) {
        container.innerHTML = "<p>Aucune conversation</p>";
        return;
    }

    conversation.messages.forEach(msg => {
    
        const deMoi = msg.envoyeParMoi === true;

        const messagePourAffichage = {
            content: msg.contenu || msg.content || '',
            heure: msg.heure || '',
        };

        const messageDiv = envoieMessage(messagePourAffichage, deMoi);
        container.appendChild(messageDiv);
    });

    container.scrollTop = container.scrollHeight;
}

export function genererMessageAutomatik(nom) {
    const reponses = [
      
      "Beugouma louy dokh kassé !.",
      "lI ma beug moy mouy dokh si samay contrainte",
      "Dou manguiii wax rek ? wa baxna ba lundi",
      "ayyy thiouné ngéné !",
      "Gni parégoul sama liguey 6em",
      "loléne ma yorel ?"
    ];
  
    const index = Math.floor(Math.random() * reponses.length);
    return reponses[index];
}


export function supprimerDiscussion(numero) {
    numero.forEach(element => {
    const numb = element.getAttribute('numeroUser')

            // console.log(element)
        if (element.getAttribute('id') === 'selected' ) {
            // console.log(numero)
            const user = conversations.find(c=>c.numero === numb)
            // console.log(user);
            user.messages=[]
            // console.log(user);
            afficherConversation(conversations)        }
        
    });

    

} 

export function envoyerMessageDiffusion(message, numeros, zoneDiscussion) {
    numeros.forEach(numero => {
        const msg = {
            content: message,
            heure: getCurrentTime(),
            envoyeParMoi: true,
            destinataire: numero
        };
        const element = envoieMessage(msg, true); // Cette fonction doit créer le bloc message
        zoneDiscussion.appendChild(element);
    });

    zoneDiscussion.scrollTop = zoneDiscussion.scrollHeight;
}



// export function supprimerDiscussion(numero) {
//   conversations = conversations.filter(msg =>
//     msg.destinataire !== numero && msg.expediteur !== numero
//   );

//   const zone = document.querySelector('#discussion');
//   const contactActif = document.querySelector('.'); 

//   if (contactActif && contactActif.dataset.numero === numero) {
//     zone.innerHTML = '<p class="text-gray-400 text-center">Aucune discussion</p>';
//   }

// }
