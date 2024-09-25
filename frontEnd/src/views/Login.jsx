import React, { useContext,useState } from 'react';
import '../assets/css/Form.css';
import { GlobalContext } from '../contexts/GlobalContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const {setAuthEmail} = useContext(GlobalContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let login = {
      email : email,
      password : password,
      token : true,
    }

    setAuthEmail(login);
    localStorage.setItem("tokenfront", "autenticado");
    navigate("/");

  /*  if (!email || !password) {
      alert(' Todos los campos son obligatorios (no pueden estar vacíos)');
    } else if (password.length < 6) {
      alert('El password debe tener al menos 6 caracteres.');
    } else {
      alert('Login Correcto');
    }   */
  };    

  return (
    <div className='form0'>
    <form className="form" onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default Login