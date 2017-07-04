export function addBoule(couleur){
    return {type: 'ADD_BOULE', couleur: couleur}
}

export function initialiserJeu(current_player, boules, joueurs){
    return {
        type: 'INITIALISER_JEU',
        current_player:current_player,
        boules:boules,
        joueurs:joueurs
    }
}

export function majJoueurs(joueurs){
    return {
        type: 'INITIALISER_JEU',
        joueurs:joueurs
    }
}
