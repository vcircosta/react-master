import React, { useState } from 'react';
import gestionnaireDeDonnees from './gestionnaireDeDonnees';

const ComposantInscriptions = () => {
    const [nomEtudiant, setNomEtudiant] = useState('');
    const [nomCours, setNomCours] = useState('');
    const [inscriptions, setInscriptions] = useState(gestionnaireDeDonnees.obtenirInscriptions());
    const [erreur, setErreur] = useState('');

    const inscrireEtudiant = () => {
        if (!nomEtudiant || !nomCours) {
            setErreur('Veuillez entrer le nom de l\'étudiant et le nom du cours.');
            return;
        }

        const inscription = {
            id: Date.now(),
            studentName: nomEtudiant,
            courseName: nomCours
        };

        gestionnaireDeDonnees.inscrireEtudiant(inscription);
        setInscriptions(gestionnaireDeDonnees.obtenirInscriptions());
        setNomEtudiant('');
        setNomCours('');
        setErreur('');
    };

    const supprimerInscription = (inscriptionId) => {
        gestionnaireDeDonnees.supprimerInscription(inscriptionId);
        setInscriptions(gestionnaireDeDonnees.obtenirInscriptions());
    };

    return (
        <div>
            <h2>Gestion des inscriptions</h2>
            {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
            <div>
                <input
                    type="text"
                    placeholder="Nom de l'étudiant"
                    value={nomEtudiant}
                    onChange={(e) => setNomEtudiant(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Nom du cours"
                    value={nomCours}
                    onChange={(e) => setNomCours(e.target.value)}
                />
            </div>
            <button onClick={inscrireEtudiant}>Inscrire</button>
            <ul>
                {inscriptions.map((inscription) => (
                    <li key={inscription.id}>
                        {inscription.studentName} - {inscription.courseName}
                        <button onClick={() => supprimerInscription(inscription.id)}>Supprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ComposantInscriptions;
