import React from 'react';
import "../css/EmpleadoAvatar.css"

const EmpleadoAvatar = ({empleado}) => {
    return (
        <div>
            <img src={empleado.foto} className="Imagen" alt={empleado.fullname} />
        </div>
    );
};

export default EmpleadoAvatar;
