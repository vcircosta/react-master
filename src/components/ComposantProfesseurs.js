import React, { useState } from 'react';
import gestionnaireDeDonnees from './gestionnaireDeDonnees';

const ComposantProfesseurs = () => {
    const [nomProfesseur, setNomProfesseur] = useState('');
    const [nomMatiere, setNomMatiere] = useState('');
    const [professeurs, setProfesseurs] = useState(gestionnaireDeDonnees.obtenirProfesseurs());

    const ajouterProfesseur = () => {
        if (!nomProfesseur || !nomMatiere) {
            alert('Veuillez entrer le nom du professeur et le nom de la matière.');
            return;
        }
        const nouveauProfesseur = { id: Date.now(), name: nomProfesseur, matiere: nomMatiere };
        gestionnaireDeDonnees.ajouterProfesseur(nouveauProfesseur);
        setProfesseurs(gestionnaireDeDonnees.obtenirProfesseurs());
        setNomProfesseur('');
        setNomMatiere('');
    };

    const supprimerProfesseur = (professeurId) => {
        gestionnaireDeDonnees.supprimerProfesseur(professeurId);
        setProfesseurs(gestionnaireDeDonnees.obtenirProfesseurs());
    };

    return (
        <div>
            <h2>Gestion des professeurs</h2>
            <input
                type="text"
                placeholder="Nom du professeur"
                value={nomProfesseur}
                onChange={(e) => setNomProfesseur(e.target.value)}
            />
            <input
                type="text"
                placeholder="Nom de la matière"
                value={nomMatiere}
                onChange={(e) => setNomMatiere(e.target.value)}
            />
            <button onClick={ajouterProfesseur}>Ajouter professeur</button>
            <ul>
                {professeurs.map((professeur) => (
                    <li key={professeur.id}>
                        {professeur.name} - {professeur.matiere}
                        <button onClick={() => supprimerProfesseur(professeur.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComposantProfesseurs;

