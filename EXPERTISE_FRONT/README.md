## DOSSIER D'ARGUMENTATION - Groupe 17
#### Personnes notées sur le front
- Fiona Roux
- Quentin Monteferrario


### Choix argumentés entre les solutions SVG, Canvas, webGL ou...
Compte tenu du design à intégrer, nous avons décidé de ne pas implanter de technologies front lourdes ou coûteuses en performance comme WebGL ou canvas.  
La quasi totalité du site a donc été réalisé uniquement avec React et des SVG. Nous avons choisi ces derniers pour leur modularité, leur légèreté, leur qualité à n'importe quelle échelle et leur simplicité de mise en place.  
En effet, chaque icône de sport et de famille de sport avait un code couleur à respecter avec un état actif (sélectionné) ou non, il fallait donc pouvoir modifier ces propriétés facilement et sans perdre en performance. De même pour toutes les autres icônes du site et notamment du dashboard que je souhaiterai pouvoir animer dans un second temps.  
Pour la mise en place des SVG, j'ai utilisé un petit outil CLI nommée **SVG-inliner** qui m'a permis de faire de chaque SVG un composant facilement intégrable.
Enfin pour la carte, notre principale datavisualisation, il fallait pouvoir manipuler chaque arrondissement individuellement, ainsi la carte a été transformé en un tableau de path avec un id pour chacun d'entre eux. Cette technique nous a permis de modulariser notre code et de pouvoir faire descendre les bonnes données dans chaque composant du dashboard et de les mettre à jour quasi instantanément.  
Pour ce qui est de l'écriture du code, nous avons décidé de mettre en pratique les dernières fonctionnalités de React, à savoir les *functional components* et les *hooks*.  
#### Liens :
https://github.com/cuginoAle/svg-inliner

### Choix argumentés des librairies externes utilisées
Nous avons fait le choix de n'utiliser qu'une seule librairie externe : **Nivo**. Celle-ci nous a permis de générer des graphiques dynamiques pour les données du dashboard.  
Performante, régulièrement mise à jour et puissante, cette librairie aurait pu être davantage utilisée mais nous nous sommes rendu compte que nos données ne rendaient pas toujours pertinents certains graphiques (notamment pour la répartition des espaces verts beaucoup trop hétérogène).  
Au final, seuls 2 graphiques ont été générés, ce qui ne justifie pas le choix d'importer une telle librairie.
Avec du recul, je pense qu'une librairie plus petite aurait largement été suffisante.
#### Liens :
https://nivo.rocks/ 