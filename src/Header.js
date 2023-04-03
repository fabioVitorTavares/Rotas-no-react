import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()

    const sair = () => {
        localStorage.setItem('token', '');
        navigate('/login');
    };

    return (
        <header style={{ backgroundColor: 'blue', color: 'white', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingInline: 50, height: 50, alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold', fontSize: 25 }}>Titulo</span>
            <div style={{cursor: 'pointer'}} onClick={sair}>Sair</div>
        </header>
    );
};

export default Header;