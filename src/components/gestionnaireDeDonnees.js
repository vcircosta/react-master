class GestionnaireDeDonnees {
    constructor() {
        this.etudiants = [];
        this.cours = [];
        this.professeurs = [];
        this.inscriptions = [];
        this.planning = [];
    }

    // Gestion des étudiants
    ajouterEtudiant(etudiant) {
        this.etudiants.push(etudiant);
    }

    supprimerEtudiant(etudiantId) {
        this.etudiants = this.etudiants.filter(etudiant => etudiant.id !== etudiantId);
    }

    obtenirEtudiants() {
        return this.etudiants;
    }

    // Gestion des cours
    ajouterCours(cours) {
        this.cours.push(cours);
    }

    supprimerCours(coursId) {
        this.cours = this.cours.filter(cours => cours.id !== coursId);
    }

    obtenirCours() {
        return this.cours;
    }

    // Gestion des professeurs
    ajouterProfesseur(professeur) {
        this.professeurs.push(professeur);
    }

    supprimerProfesseur(professeurId) {
        this.professeurs = this.professeurs.filter(professeur => professeur.id !== professeurId);
    }

    obtenirProfesseurs() {
        return this.professeurs;
    }

    // Gestion des inscriptions
    inscrireEtudiant(inscription) {
        this.inscriptions.push(inscription);
    }

    supprimerInscription(inscriptionId) {
        this.inscriptions = this.inscriptions.filter(inscription => inscription.id !== inscriptionId);
    }

    obtenirInscriptions() {
        return this.inscriptions;
    }

    // Gestion du planning
    ajouterEntreePlanning(jour, heureDebut, heureFin, nomProfesseur, nomCours) {
        this.planning.push({
            id: Date.now(),
            jour,
            heureDebut,
            heureFin,
            nomProfesseur,
            nomCours
        });
    }

    obtenirPlanning() {
        return this.planning;
    }
}

const gestionnaireDeDonnees = new GestionnaireDeDonnees();

export default gestionnaireDeDonnees;
