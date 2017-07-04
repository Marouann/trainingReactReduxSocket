import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/app';
import { createStore } from 'redux'
import boulesApp from './src/reducers/reducer.js'

const io = require('socket.io-client')
const socket = io()

socket.on('nouveau_joueur',function(data){
    store.dispatch({type:'INITIALISER_JEU',current_player: data.current_player, boules:data.boules, joueurs:data.joueurs})
})
socket.on('maj_joueurs', function(data){
    store.dispatch({type: 'MAJ_JOUEURS', joueurs: data.joueurs})
})


var store = createStore(boulesApp)

console.log(store)


const render = () => ReactDOM.render(<App store={store} socket={socket} />, document.getElementById('app'))

render()
store.subscribe(render)