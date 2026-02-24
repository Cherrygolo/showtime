# Showtime

Showtime est une application web développée avec Angular qui permet de visualiser des posts photo. Ce projet utilise Angular CLI pour la gestion de l'application et inclut des fonctionnalités de routage ainsi qu'une gestion des erreurs.

## Table des matières

- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Tests](#tests)

## Fonctionnalités

- Page d'accueil par défaut avec une navigation fluide
- Affichage des posts photo avec routage dynamique
- Gestion des erreurs 404 pour les pages non trouvées
- Architecture modulaire permettant une extensibilité facile

## Technologies utilisées

- **Angular CLI** (version 21.1.4)
- **TypeScript**
- **HTML**
- **SCSS**
- **Vitest** pour les tests unitaires

## Installation

Pour installer le projet, clonez le dépôt et installez les dépendances :

```bash
git clone https://github.com/Cherrygolo/showtime.git
cd showtime
npm install
```

## Utilisation

Pour démarrer l'application en mode développement, exécutez :

```bash
ng serve
```

L'application sera accessible à l'adresse `http://localhost:4200/`.

## Tests

Les tests unitaires et de bout en bout sont prévus pour ce projet afin d'assurer la qualité du code et la stabilité des fonctionnalités.  

⚠️ Note : Les tests ne sont pas encore implémentés. Cette section sera mise à jour prochainement.

Lorsque les tests seront disponibles, vous pourrez les exécuter avec les commandes suivantes :

- Tests unitaires (Vitest) :  
```bash
npm run test
```

- Tests de bout en bout :
```bash
npm run e2e
```