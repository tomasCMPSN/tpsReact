import React, { useState } from 'react';

const Mensaje = () => {
    const [mensaje, setMensaje] = useState("")
    return (
        <div>
            <h1>Hello my friends {mensaje} !</h1>
            <button onClick={() => setMensaje("(from changed state)")}>Click me</button>
        </div>
    );
};

export default Mensaje;