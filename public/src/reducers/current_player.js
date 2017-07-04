const current_player = (state={id: 0, pseudo: "Joueur1", points: 0, last_click: 0}, action) => {
    switch (action.type){
        case 'INITIALISER_JEU':
            return action.current_player
        case 'ADD_BOULE':
            return action.current_player
        default:
            return state
    }
}

export default current_player