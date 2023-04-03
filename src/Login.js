import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('token', '123');
    navigate('/inicio');
    // Faça aqui a validação do login e senha e redirecione para a próxima página
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <label htmlFor="username">Login</label>
        <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;