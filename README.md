# trainingReactReduxSocket
OPA assez simple pour s'entraîner à manipuler ReactJs, Redux et Socket.io.

Lancer npm install, puis node app.js dans le dossier racine.

Le cahier des charges du jeu codé est le suivant :
- Une zone de jeu, partagée entre tous les joueurs, où s'afficheront des boules rouges et bleues l'une à la suite de l'autre
- Une zone de contrôle ou seront disposés un bouton pour ajouter une boule rouge et un autre pour ajouter une boule bleue dans la zone.
- Une dernière zone où sera affichée la liste des joueurs connectées ainsi que leur nombre de points

Règles du jeu :
- Un joueur a 3 actions possibles : ajouter une boule rouge, ajouter une boule bleue ou retirer une boule.
- Un joueur doit attendre 5 secondes entre deux actions.
- Un joueur remporte 1 point lorsqu'il ajoute une boule et que les 3 précédentes sont de la même couleur. Elles deviennent ensuite grises.

Il n'y a pas de limite en nombre de joueurs, ni en temps de jeu !
Pour se connecter il suffit d'ouvrir la page

Règles qu'il reste à implémenter

- Cliquer sur une boule la fera disparaître en temps réel de la zone de jeu.
