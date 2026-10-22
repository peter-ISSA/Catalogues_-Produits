# Nom du Projet
Catalogue de produit : il va nous servir a afficher nos produit sortant de la base de donnés, et à detailler nos produit pour plus d'information


## Technologie Utilisé
-React 18
-vite / Create React App
-TailwindCss
-Daisy UI
-axios

## Lancer le Projet
-Npm run dev
-Npm run server

## Git Flow
Le dépôt est configuré avec Git Flow Next : `main` est la branche de production et `Develop` la branche d'intégration. La configuration partagée se trouve dans `.gitflow`.

Sous Windows, installez la commande avec Winget :
```powershell
winget install --id GitTower.GitFlowNext
```

Exemple pour créer et terminer une fonctionnalité :
```powershell
git flow feature start nom-de-la-fonctionnalite
git flow feature finish nom-de-la-fonctionnalite
```

## Structure du projet
src/
    composant/
        liste_produit.jsx
        detail_produit.jsx

    App.jsx
    Main.jsx

## Auteur
@peter-ISSA
