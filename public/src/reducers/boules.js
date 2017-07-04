const initialState = {
    current_player: {id: 0, pseudo: "Joueur1", points: 0},
    boules: ["gris","gris","gris","gris","gris","gris","gris","gris"],
    joueurs: [{id: 0, pseudo: "Joueur1", points: 0},{id: 1, pseudo: "Joueur2", points: 0}]
}

const boules = (state = ["gris","gris","gris","gris","gris","gris","gris","gris"], action) => {
    switch (action.type){
        case 'ADD_BOULE':
            return action.boules;
        case 'INITIALISER_JEU':
            return action.boules;
        default:
            return state
    }
}

export default boules