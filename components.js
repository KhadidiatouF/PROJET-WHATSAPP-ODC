import { conversations, utilisateurs } from "./tab.js";

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
        profil:'fille.jpg',
        numero:numero,
        etat:'Disponible',
        Online:true,
        archive: false

    }
    
}

export function ajout(tab, utilisateur) {
    tab.push(utilisateur);
}

export function afficherMessages(conversations) {
    const m = document.getElementById("page1");
    m.innerHTML = ""; 

    conversations.forEach(c => {
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
                            <div class="message">${c.message} </div>

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
                            <div class = "nom">${user.nom} ${user.prenom}</div>

                        </div>

                    </div>
                  
                    <div class="text-sm mr-10" >
                        <input type="checkbox" class="w-5 h-5">

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
                profil:'Admin',
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


export function afficherGroupes(listeGroupes) {
    const groupCible = document.querySelector('#page2');
    groupCible.innerHTML = ''; 

    listeGroupes.forEach((groupe) => {
        const div = document.createElement('div');
        // <div  class="font-bold"> ${groupe.membres[0].nom}  ${groupe.membres[1].nom} </div>

        // div.innerHTML = `<h4>Groupe ${index + 1} : ${groupe.nom}</h4><ul>${groupe.membres.map(m => `<li>${m.nom} ${m.prenom}</li>`).join('')}</ul>`;
        div.innerHTML= `
                <div class="group1 bg-white flex justify-between w-full h-20 mt-5  rounded-2xl space-y-4 cursor-pointer hover:bg-gray-400">
                    <div class="items-center flex justify-between gap-5">
                      <div class="w-16 h-16 ml-5 flex  flex-row rounded-full">  <img src="profil.jpeg" alt=""> </div>
                      <div class="text-sm">
                        <div  class="font-bold"> ${groupe.nom} </div>
                      </div>

                    </div>
                  
                    <div class="text-sm mr-0" >
                        <div class="text-green-500">12:00</div>
                        <div class=" text-xs text-green-500 "><i class="fa-solid fa-circle"></i></div>
                    </div>

                </div>`
        groupCible.appendChild(div);
    });
    // ajoutGroupe(listeGroupes)
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


export function profil(utilisateurs) {
    const p = document.getElementById(".profil");
    p.innerHTML = ""; 

    utilisateurs.forEach(c => {
        let initial = c.prenom.charAt(0).toUpperCase() +  c.nom.charAt(0).toUpperCase();

            const profil = document.createElement("div");

        item.innerHTML = `
            <div class="profil bg-gray-600 w-[45px] h-[45px] rounded-[50%] ml-[10px] mt-[4px]">${initial}</div>

        `;
        const clic = item.querySelector('.profil');
        clic.addEventListener('click', ()=>[
            clic.classList.toggle('selected'),
            clic.classList.toggle('bg-gray-500')

        ])

       


        p.appendChild(profil);
        
    });
    
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
                            <div class="message">${c.message} </div>

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

