import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComposantTableauDeBord from './components/ComposantTableauDeBord';
import ComposantEtudiants from './components/ComposantEtudiants';
import ComposantCours from './components/ComposantCours';
import ComposantProfesseurs from './components/ComposantProfesseurs';
import ComposantInscriptions from './components/ComposantInscriptions';
import ComposantPlanning from './components/ComposantPlanning';

function App() {
    return (
        <Router>
            <Routes>
                {/* Redirection par défaut vers le tableau de bord */}
                <Route path="/" element={<ComposantTableauDeBord />} />
                <Route path="/dashboard" element={<ComposantTableauDeBord />} />
                <Route path="/students" element={<ComposantEtudiants />} />
                <Route path="/courses" element={<ComposantCours />} />
                <Route path="/teachers" element={<ComposantProfesseurs />} />
                <Route path="/enrollments" element={<ComposantInscriptions />} />
                <Route path="/schedule" element={<ComposantPlanning />} />
            </Routes>
        </Router>
    );
}

export default App;
