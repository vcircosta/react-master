import React, { useState } from 'react';
import gestionnaireDeDonnees from './gestionnaireDeDonnees';
import './ComposantPlanning.css';

const joursDeLaSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

const ComposantPlanning = () => {
    const [jour, setJour] = useState('Lundi');
    const [heureDebut, setHeureDebut] = useState('');
    const [heureFin, setHeureFin] = useState('');
    const [nomProfesseur, setNomProfesseur] = useState('');
    const [nomCours, setNomCours] = useState('');
    const [planning, setPlanning] = useState(gestionnaireDeDonnees.obtenirPlanning());
    const [erreur, setErreur] = useState('');

    const ajouterEntreePlanning = () => {
        if (!jour || !heureDebut || !heureFin || !nomProfesseur || !nomCours) {
            setErreur('Veuillez remplir tous les champs.');
            return;
        }

        gestionnaireDeDonnees.ajouterEntreePlanning(jour, heureDebut, heureFin, nomProfesseur, nomCours);
        setPlanning(gestionnaireDeDonnees.obtenirPlanning());
        setJour('Lundi');
        setHeureDebut('');
        setHeureFin('');
        setNomProfesseur('');
        setNomCours('');
        setErreur('');
    };

    const obtenirEntreesPourJour = (jour) => {
        return planning.filter(entree => entree.jour === jour);
    };

    const obtenirPlageHoraire = (horaire) => {
        const [heures, minutes] = horaire.split(':').map(Number);
        return heures * 2 + (minutes === 30 ? 1 : 0);
    };

    return (
        <div>
            <h2>Planning des cours</h2>
            {erreur && <p style={{ color: 'red' }}>{erreur}</p>}
            <div>
                <label>
                    Jour:
                    <select value={jour} onChange={(e) => setJour(e.target.value)}>
                        {joursDeLaSemaine.map(j => (
                            <option key={j} value={j}>{j}</option>
                        ))}
                    </select>
                </label>
                <label>
                    Heure de début:
                    <input
                        type="time"
                        value={heureDebut}
                        onChange={(e) => setHeureDebut(e.target.value)}
                    />
                </label>
                <label>
                    Heure de fin:
                    <input
                        type="time"
                        value={heureFin}
                        onChange={(e) => setHeureFin(e.target.value)}
                    />
                </label>
                <label>
                    Nom du professeur:
                    <input
                        type="text"
                        value={nomProfesseur}
                        onChange={(e) => setNomProfesseur(e.target.value)}
                    />
                </label>
                <label>
                    Nom du cours:
                    <input
                        type="text"
                        value={nomCours}
                        onChange={(e) => setNomCours(e.target.value)}
                    />
                </label>
                <button onClick={ajouterEntreePlanning}>Ajouter</button>
            </div>
            <div className="grille-planning">
                {joursDeLaSemaine.map(jour => (
                    <div key={jour} className="colonne-planning">
                        <h3>{jour}</h3>
                        {obtenirEntreesPourJour(jour).map(entree => (
                            <div
                                key={entree.id}
                                className="entree-planning"
                                style={{
                                    backgroundColor: '#ffcccb',
                                    gridRowStart: `${obtenirPlageHoraire(entree.heureDebut) + 1}`,
                                    gridRowEnd: `${obtenirPlageHoraire(entree.heureFin) + 1}`
                                }}
                            >
                                <p>{entree.nomCours}</p>
                                <p>{entree.nomProfesseur}</p>
                                <p>{entree.heureDebut} - {entree.heureFin}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ComposantPlanning;
