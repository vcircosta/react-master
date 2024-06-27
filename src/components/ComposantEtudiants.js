import React, { useState } from 'react';
import gestionnaireDeDonnees from './gestionnaireDeDonnees';

const ComposantEtudiants = () => {
    const [nom, setNom] = useState('');
    const [age, setAge] = useState('');
    const [etudiants, setEtudiants] = useState(gestionnaireDeDonnees.obtenirEtudiants());

    const ajouterEtudiant = () => {
        const nouvelEtudiant = { id: Date.now(), name: nom, age };
        gestionnaireDeDonnees.ajouterEtudiant(nouvelEtudiant);
        setEtudiants(gestionnaireDeDonnees.obtenirEtudiants());
        setNom('');
        setAge('');
    };

    const supprimerEtudiant = (etudiantId) => {
        gestionnaireDeDonnees.supprimerEtudiant(etudiantId);
        setEtudiants(gestionnaireDeDonnees.obtenirEtudiants());
    };

    return (
        <div>
            <h2>Gestion des étudiants</h2>
            <input
                type="text"
                placeholder="Nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
            />
            <input
                type="text"
                placeholder="Prénom"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button onClick={ajouterEtudiant}>Ajouter étudiant</button>
            <ul>
                {etudiants.map((etudiant) => (
                    <li key={etudiant.id}>
                        {etudiant.name} - {etudiant.age} ans
                        <button onClick={() => supprimerEtudiant(etudiant.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComposantEtudiants;
ComposantEtudiants