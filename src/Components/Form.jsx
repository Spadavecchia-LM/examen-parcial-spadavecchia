import React from "react";
import { useState } from "react";
import {
  formInput,
  formContainer,
  formBtn,
  title,
} from "../Styles/App.module.css";
import Card from "./Card";

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    rol: "",
  });
  const [usuarioValidado, setUsuarioValidado] = useState(false);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const roles = [
    { id: 1, name: "Backend Developer" },
    { id: 2, name: "Frontend Developer" },
    { id: 3, name: "DevOps" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      usuario.nombre.trim().length > 3 &&
      usuario.apellido.trim().length > 6 &&
      usuario.rol != ""
    ) {
      setUsuarioValidado(true);
    } else {
      setMostrarMensaje(true);
    }

  };
  const handleNombreOnChange = (e) => {
    setUsuario({ ...usuario, nombre: e.target.value });
  };
  const handleApellidoOnChange = (e) => {
    setUsuario({ ...usuario, apellido: e.target.value });
  };
  const handleEmailOnChange = (e) => {
    setUsuario({ ...usuario, email: e.target.value });
  };
  const handleRolOnChange = (e) => {
    setUsuario({ ...usuario, rol: e.target.value });
  };

  return (
    <>
      {!usuarioValidado ? (
        <form className={formContainer} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            className={formInput}
            onChange={handleNombreOnChange}
          />
          <input
            type="text"
            placeholder="Apellido"
            className={formInput}
            onChange={handleApellidoOnChange}
          />
          <input
            type="email"
            placeholder="example@example.com"
            className={formInput}
            onChange={handleEmailOnChange}
          />
          <label htmlFor="rol" className={title}>
            ¿Que Rol tiene?
          </label>
          <select
            name="rol"
            id="rol"
            value={usuario.rol}
            onChange={handleRolOnChange}
          >
            <option selected disabled value="">
              seleccione un rol
            </option>
            {roles.map((rol) => {
              return (
                <option key={rol.id} value={rol.name}>
                  {rol.name}
                </option>
              );
            })}
          </select>
          {!usuarioValidado && mostrarMensaje && (
            <span style={{ color: "red" }}>
              hay datos erroneos, por favor chequear. Nombre y apellido tiene
              que ser mayor a 3 y tiene que seleccionar un rol valido
            </span>
          )}
          <button className={formBtn}>Registrarse</button>
        </form>
      ) : (
        <Card usuario={usuario} />
      )}
    </>
  );
};

export default Form;
