import React, { useState } from 'react';
import gestionnaireDeDonnees from './gestionnaireDeDonnees';

const ComposantCours = () => {
    const [nomDuCours, setNomDuCours] = useState('');
    const [horaire, setHoraire] = useState('');
    const [cours, setCours] = useState(gestionnaireDeDonnees.obtenirCours());

    // Fonction pour ajouter un nouveau cours
    const ajouterCours = () => {
        if (nomDuCours && horaire) { // Vérifie que les champs ne sont pas vides
            const nouveauCours = { id: Date.now(), name: nomDuCours, time: horaire };
            gestionnaireDeDonnees.ajouterCours(nouveauCours);
            setCours(gestionnaireDeDonnees.obtenirCours());
            setNomDuCours(''); // Réinitialise le champ du nom du cours
            setHoraire(''); // Réinitialise le champ de l'horaire
        }
    };

    // Fonction pour supprimer un cours existant
    const supprimerCours = (courseId) => {
        gestionnaireDeDonnees.supprimerCours(courseId);
        setCours(gestionnaireDeDonnees.obtenirCours());
    };

    return (
        <div>
            <h2>Gestion des cours</h2>
            <input
                type="text"
                placeholder="Nom du cours"
                value={nomDuCours}
                onChange={(e) => setNomDuCours(e.target.value)}
            />
            <input
                type="text"
                placeholder="Horaire"
                value={horaire}
                onChange={(e) => setHoraire(e.target.value)}
            />
            <button onClick={ajouterCours}>Ajouter cours</button>
            <ul>
                {cours.map((course) => (
                    <li key={course.id}>
                        {course.name} - {course.time}
                        <button onClick={() => supprimerCours(course.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComposantCours;
