import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = { nombre: "", apellido: "", dni: "", email: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!values.nombre) {
      errors.nombre = "El nombre es requerido";
    }
    if (!values.apellido) {
      errors.apellido = "El apellido es requerido";
    }
    if (!values.email) {
      errors.email = "El email es requerido";
    } else if (!regex.test(values.email)) {
      errors.email = "Email no válido";
    }
    if (!values.dni) {
      errors.dni = "El dni es requerido";
    } else if (values.dni.length != 8) {
      errors.dni = "el dni tiene que ser de 8 dígitos";
    }

    return errors;
  };

  return (
    <div>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Datos enviados.</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
      <form onSubmit={handleSubmit}>
        <h1>Formulario</h1>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formValues.nombre}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.nombre}</p>
        <div>
          <label>Apellido</label>
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formValues.apellido}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.apellido}</p>
        <div>
          <label>DNI</label>
          <input
            type="number"
            name="dni"
            placeholder="DNI"
            value={formValues.dni}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.dni}</p>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
          />
        </div>
        <p>{formErrors.email}</p>
        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
