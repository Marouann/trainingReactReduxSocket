import boules from './boules.js'
import joueurs from './joueurs.js'
import current_player from './current_player.js'
import {combineReducers} from 'redux'

const boulesApp = combineReducers({
    current_player,
    boules,
    joueurs
})

export default boulesApp