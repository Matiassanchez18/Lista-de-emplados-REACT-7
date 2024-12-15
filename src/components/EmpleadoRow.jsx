import React from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";
import "../css/EmpleadoAvatar.css"

const EmpleadoRow = ({arrayEmpleados}) => {
  return (
    <section className="container d-flex flex-column justify-content-center align-items-center col-md-12 col-lg-12 col-sm-12 mt-5">
    {arrayEmpleados.map((empleado, posicion) => (
      <div className="border p-5" key={posicion}> 
        <div className="d-flex align-items-center">
          <EmpleadoAvatar />
          <div className="ms-3 ms-5">
            <p className="mb-0">{empleado.fullname}</p> 
            <div className="d-flex mt-4">
              <p className="mb-0 me-3  uppercase-text">{empleado.titulo}</p>
              <p className="mb-0 bg-info text-white">Business</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </section>
  

  );
};

export default EmpleadoRow;
