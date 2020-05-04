import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

export default function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        const response = await api.post('projects', {
            title: `new project ${new Date()}`,
            owner: 'Luiz Doreto',
        });

        const project = response.data;

        setProjects([...projects, project]);
    }

    return (
        <>
            <Header title="Projects">
                <ul>
                    {projects.map(p => <li key={p.id}>{p.title}</li>)}
                </ul>
            </Header>

            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}