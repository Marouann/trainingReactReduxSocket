import React from 'react'
import Header from './header.js'
import Jeu from './jeu.js'
import Menu from './menu.js'
import ListJoueurs from './listJoueurs'
import addBoule from '../actions.js'

const io = require('socket.io-client')
const socket = io()

function ajouterFile(l,couleur){
    var res = [];
    res[0]=couleur;
    var point=0;
    for(var i=1;i<l.length;i++){
        res[i]=l[i-1];
    }
    if (res[0]===res[1] && res[1]===res[2]){
        res[0]="gris"
        res[1]="gris"
        res[2]="gris"
        point=1;
    }
    return {list: res, point: point}
}

function ajouterPointJoueur(joueur,pt,click){
    return {id: joueur.id, pseudo: joueur.pseudo,points: joueur.points + pt, last_click:click}
}

function ajouterPointJoueurs(joueurs,id,pt){
    var res=[]
    for(var i=0;i<joueurs.length;i++){
        res[i]=joueurs[i]
        if(joueurs[i].id===id){
            res[i].points += pt
        }
    }
    return res
}

class App extends React.Component{
    
    ajouterBoule(couleur){
        var date = new Date()
        var click = date.getTime();
        console.log(click);
        console.log(this.props.store.getState().current_player.last_click);
        var dif = (click - this.props.store.getState().current_player.last_click)/1000
        console.log(dif)
        if (dif > 5){
            var res = ajouterFile(this.props.store.getState().boules,couleur)
            var listboules = res.list
            var pt = res.point
            var players = ajouterPointJoueurs(this.props.store.getState().joueurs,this.props.store.getState().current_player.id,pt)
            var curr_player = ajouterPointJoueur(this.props.store.getState().current_player,pt,click)

            this.props.store.dispatch({type: 'ADD_BOULE', joueurs: players, boules: listboules, current_player: curr_player})
            socket.emit('add_boule',{boules: this.props.store.getState().boules,joueurs: this.props.store.getState().joueurs})
        }
    }

    render(){
        return(
            <div className="container">
                <Header />
                <div className="row">
                {console.log(this.props.store.getState())}
                <Menu joueur={this.props.store.getState().current_player} />
                <Jeu boules={this.props.store.getState().boules}
                addBB={() => this.ajouterBoule('bleu')}
                addBR={() => this.ajouterBoule('rouge')} />
                <ListJoueurs joueurs={this.props.store.getState().joueurs} />
                </div>
            </div>
        )
    }
}

export default App