const initialState = {
    current_player: {id: 0, pseudo: "Joueur1", points: 0},
    boules: ["gris","gris","gris","gris","gris","gris","gris","gris"],
    joueurs: [{id: 0, pseudo: "Joueur1", points: 0},{id: 1, pseudo: "Joueur2", points: 0}]
}

const joueurs = (state =[], action) => {
    switch (action.type){
        case 'INITIALISER_JEU':
            return action.joueurs
        case 'MAJ_JOUEURS':
            return action.joueurs
        case 'ADD_BOULES':
            return action.boules
        default:
            return state
    }
}

export default joueurs