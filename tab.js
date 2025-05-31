export const utilisateurs = [
    {
        nom:'Khadija',
        prenom:'Fall',
        profil:'Admin',
        numero:'778899000',
        etat:'Disponible',
        Online:true,
        archive: true,
        login:"dija1",
        mdp:"password"


    },
    {
        nom:'Bamba',
        prenom:'ndiaye',
        profil:'membre',
        numero:'75889900',
        etat:'Disponible',
        Online:false,
        archive: false,
        login:"bamba1",
        mdp:"password"
        
    },
    {
        nom:'Oumy',
        prenom:'Ndiaye',
        profil:'membre',
        numero:'76889900',
        etat:'Disponible',
        Online:true,
        archive: false,
        login:"oumy1",
        mdp:"password"


        
    },
    {
        nom:'Seynabou',
        prenom:'Diagne',
        profil:'membre',
        numero:'78889900',
        etat:'Disponible',
        Online:false,
        archive: false ,
        login:"nanou1",
        mdp:"password"
    }
]

export const groupes = [
    {
        nom:'Fifa',
        membres:[
            {
                nom:'Khadija',
                prenom:'Fall',
                statut:'Admin',
                numero:'778899000',
                etat:'Disponible',
                messages: [
                    { expediteur: "Khadija", contenu: "Salut la famille", heure: "10:00" },
                  ]
        
        
            },
            { 
                nom:'Seynabou',
                prenom:'Diagne',
                statut:'membre',
                numero:'78889900',
                etat:'Disponible',
                messages: [
                    { expediteur: "Seynabou", contenu: "Salut noleine def", heure: "10:00" },
                  ]            },
            {
                nom:'Oumy',
                prenom:'Ndiaye',
                statut:'membre',
                numero:'76889900',
                etat:'Disponible',
                messages: [
                    { expediteur: "Oumy" , contenu: "Coucou wa mafia bi", heure: "10:00" },
                  ]        
                
            },

        ]
    }
]; 
export const conversations = [
    {
        id: '1',
        nom: 'Khadija',
        prenom: 'Fall',
        profil: 'fille.jpg',
        numero: '77889900',
        etat: 'Disponible',
        Online: true,
        archive: false,
        messages: [
          {
            expediteur: 'moi',
            contenu: 'Wa baxna',
            heure: '14:00',
            lu: true
          },
          {
            destinaire: 'oumy',
            contenu: 'Bonsoir Tonss',
            heure: '14:00',
            lu: true
          }
        ]
      },
    {

        id:'2',
        nom:'Oumy',
        prenom:'Ndiaye',
        profil:'fille.jpg',
        numero:'77889900',
        etat:'Disponible',
        Online:true,
        archive: false,
        messages: [
            {
              destinaire: 'moi',
              contenu: 'No def ioe',
              heure: '14:00',
              lu: true
            }
          ],
         destinaire:''

    },
    {

        nom:'Anna',
        prenom:'Sock',
        profil:'fille.jpg',
        numero:'778899007',
        etat:'Disponible',
        Online:true,
        archive: false,
        messages: [
            {
              destinataire: 'moi',
              contenu: 'Aythia madame',
              heure: '14:00',
              lu: true
            }
          ],

    },
    {

        nom:'Birane',
        prenom:'Wane',
        profil:'fille.jpg',
        numero:'778899009',
        etat:'Disponible',
        Online:true,
        archive: false,
        messages: [
            {
              expediteur: 'moi',
              contenu: 'beugouma li',
              heure: '14:00',
              lu: true
            }
          ],
        expediteur:''

    },
]

export const messages = [
  {
    id: 1,
    content: "Bonsoir madame",
    de: "Khadija",
    à: "moi",
    heure: "2025-05-29T21:30:00Z",
    type: "contact", // ou "groupe", ou "diffusion"
    lu: false 
    
  },
];
