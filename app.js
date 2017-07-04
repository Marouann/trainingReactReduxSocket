var express = require('express')

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.get('*', function (req, res) {
    res.render("index");
});

var id = 1;

var server = app.listen(3000);
var io = require('socket.io')(server);
var ent = require('ent');

var boules= ["gris","gris","gris","gris","gris","gris","gris","gris"];
var joueurs= [];

function retirerJoueur(joueurs,id){
  var res = [];
  for (var i=0;i<joueurs.length;i++){
    if (joueurs[i].id != id){
      res.push(joueurs[i])
    }
  }
  return res
}

var date = new Date()

server.listen(3000);
io.on('connection', (socket) => {
  socket.current_player = {id:id, pseudo: "joueur"+id, points:0, last_click: date.getTime()}
  id++;
  joueurs.push(socket.current_player);
  socket.emit('nouveau_joueur',{current_player: socket.current_player, boules:boules, joueurs:joueurs, last_clik: socket.current_player.last_click});
  socket.broadcast.emit('maj_joueurs',{joueurs:joueurs})
  socket.on('add_boule', function(data){
    boules=data.boules
    joueurs=data.joueurs
    socket.broadcast.emit('maj_joueurs',{joueurs: data.joueurs})
  })

  socket.on('disconnect', () => {
    joueurs=retirerJoueur(joueurs,socket.current_player.id)
    socket.broadcast.emit('maj_joueurs',{joueurs:joueurs})
  });
});