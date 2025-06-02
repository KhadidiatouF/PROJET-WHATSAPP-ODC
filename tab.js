

export const utilisateurs = [
    {
        nom:'Khadija',
        prenom:'Fall',
        profil:'Admin',
        numero:'778899000',
        etat:'Disponible',
        Online:true,
        archive: true,
        login: "admin", 
        mdp: "1234",
        role: "admin"


    },
    {
        nom:'Bamba',
        prenom:'ndiaye',
        profil:'membre',
        numero:'75889900',
        etat:'Disponible',
        Online:false,
        archive: false,
        login: "bamba", 
        mdp: "pass123",
         role: "membre" 
        
    },
    {
        nom:'Oumy',
        prenom:'Ndiaye',
        profil:'membre',
        numero:'76889900',
        etat:'Disponible',
        Online:true,
        archive: false,
        login: "oumy", 
        mdp: "pass123",
         role: "membre" 


        
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
        numero: '778899000',
        etat: 'Disponible',
        Online: true,
        archive: false,
       messages : [
          { contenu: "Salut", destinataire: "778899001", envoyeParMoi: true },
          { contenu: "Bonjour", destinataire: "778899000", envoyeParMoi: false },
          { contenu: "Hey", destinataire: "778899001", envoyeParMoi: true }
        ]
        
      },
    {

        id:'2',
        nom:'Oumy',
        prenom:'Ndiaye',
        profil:'fille.jpg',
        numero:'778899001',
        etat:'Disponible',
        Online:true,
        archive: false,
        messages : [
          { contenu: "Salut", destinataire: "778899000", envoyeParMoi: true },
          { contenu: "no def", destinataire: "778899001", envoyeParMoi: false },
          { contenu: "Cool ni silonk", destinataire: "778899000", envoyeParMoi: true }
        ]
        ,
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
        messages : [
          { contenu: "Salut", destinataire: "778899008", envoyeParMoi: true },
          { contenu: "no def", destinataire: "778899007", envoyeParMoi: false },
          { contenu: "Cool ni silonk", destinataire: "778899008", envoyeParMoi: true }
        ]
        

    },
    {

        nom:'Birane',
        prenom:'Wane',
        profil:'fille.jpg',
        numero:'778899009',
        etat:'Disponible',
        Online:true,
        archive: false,
        messages : [
          { contenu: "Ani samay liguey", destinataire: "778899007", envoyeParMoi: false },
          { contenu: "Parégul dé", destinataire: "778899009", envoyeParMoi: true },
          { contenu: "Souba dé dinga yeek", destinataire: "778899007", envoyeParMoi: false }
        ]
        ,
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
