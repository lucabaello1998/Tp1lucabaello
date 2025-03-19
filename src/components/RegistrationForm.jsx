import { useState } from 'react';
import '../styles/RegistrationForm.css';

function FormularioRegistro() {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    password: '',
    confirmarPassword: ''
  });

  const [enFoco, setEnFoco] = useState({
    nombre: false,
    apellido: false,
    email: false,
    telefono: false,
    password: false,
    confirmarPassword: false
  });
  
  const [mostrarPassword, setMostrarPassword] = useState({
    password: false,
    confirmarPassword: false
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value
    });
  };

  const manejarFoco = (e) => {
    const { name } = e.target;
    setEnFoco({
      ...enFoco,
      [name]: true
    });
  };

  const manejarBlur = (e) => {
    const { name } = e.target;
    if (!datos[name]) {
      setEnFoco({
        ...enFoco,
        [name]: false
      });
    }
  };

  const alternarMostrarPassword = (campo) => {
    setMostrarPassword({
      ...mostrarPassword,
      [campo]: !mostrarPassword[campo]
    });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', datos);
  };

  return (
    <div className="registro-contenedor">
      <h2>Registro de Usuario</h2>
      <form onSubmit={manejarEnvio} className="formulario-registro">
        <div className="fila-campos">
          <div className="grupo-campo">
            <label htmlFor="nombre" className={enFoco.nombre ? 'activo' : ''}>Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={datos.nombre}
              onChange={manejarCambio}
              onFocus={manejarFoco}
              onBlur={manejarBlur}
              placeholder="Juan"
              required
            />
          </div>
          
          <div className="grupo-campo">
            <label htmlFor="apellido" className={enFoco.apellido ? 'activo' : ''}>Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={datos.apellido}
              onChange={manejarCambio}
              onFocus={manejarFoco}
              onBlur={manejarBlur}
              placeholder="Pérez"
              required
            />
          </div>
        </div>
        
        <div className="grupo-campo">
          <label htmlFor="email" className={enFoco.email ? 'activo' : ''}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={datos.email}
            onChange={manejarCambio}
            onFocus={manejarFoco}
            onBlur={manejarBlur}
            placeholder="ejemplo@correo.com"
            required
          />
        </div>
        
        <div className="grupo-campo">
          <label htmlFor="telefono" className={enFoco.telefono ? 'activo' : ''}>Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={datos.telefono}
            onChange={manejarCambio}
            onFocus={manejarFoco}
            onBlur={manejarBlur}
            placeholder="11 2345-6789"
            required
          />
        </div>
        
        <div className="grupo-campo">
          <label htmlFor="password" className={enFoco.password ? 'activo' : ''}>Contraseña</label>
          <div className="campo-password">
            <input
              type={mostrarPassword.password ? "text" : "password"}
              id="password"
              name="password"
              value={datos.password}
              onChange={manejarCambio}
              onFocus={manejarFoco}
              onBlur={manejarBlur}
              placeholder="Min. 8 caracteres"
              required
            />
            <button 
              type="button" 
              className="boton-mostrar-password" 
              onClick={() => alternarMostrarPassword('password')}
              aria-label={mostrarPassword.password ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {mostrarPassword.password ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        <div className="grupo-campo">
          <label htmlFor="confirmarPassword" className={enFoco.confirmarPassword ? 'activo' : ''}>Confirmar Contraseña</label>
          <div className="campo-password">
            <input
              type={mostrarPassword.confirmarPassword ? "text" : "password"}
              id="confirmarPassword"
              name="confirmarPassword"
              value={datos.confirmarPassword}
              onChange={manejarCambio}
              onFocus={manejarFoco}
              onBlur={manejarBlur}
              placeholder="Repite tu contraseña"
              required
            />
            <button 
              type="button" 
              className="boton-mostrar-password" 
              onClick={() => alternarMostrarPassword('confirmarPassword')}
              aria-label={mostrarPassword.confirmarPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              {mostrarPassword.confirmarPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                  <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                  <path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        <button type="submit" className="boton-enviar">Registrarse</button>
      </form>
    </div>
  );
}

export default FormularioRegistro;
