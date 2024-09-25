import React, { useState } from 'react';
import '../assets/css/Form.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert('Todos los campos son obligatorios (no pueden estar vacíos)');
    } else if (password.length < 6) {
      alert('El password debe tener al menos 6 caracteres');
    } else if (password !== confirmPassword) {
      alert('El password y la confirmación del password deben ser iguales');
    } else {
      alert('Registro exitoso');
    }
  };

  return (
    <div className='form0'>
    <form className="form" onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirmar contraseña" />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default Register


