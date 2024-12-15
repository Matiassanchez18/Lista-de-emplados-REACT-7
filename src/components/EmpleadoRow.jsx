import React from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";
import "../css/EmpleadoAvatar.css";

const EmpleadoRow = ({ arrayEmpleados }) => {
  return (
    <section className="container d-flex flex-column justify-content-center align-items-center mt-5">
      {arrayEmpleados.map((empleado, posicion) => (
        <div className="border p-5 w-50 mb-4" key={posicion}>
          <div className="row">
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <EmpleadoAvatar empleado={empleado} />
            </div>

            <div className="col-12 col-md-8 mt-3 mt-md-0">
              <p className="mb-0">{empleado.fullname}</p>
              <div className="d-flex flex-column flex-md-row mt-4">
                <p className="mb-0 me-3 uppercase-text text-cener">
                  {empleado.titulo}
                </p>

                <p className="mb-0 bg-info text-white w-50 w-md-auto">
                  {empleado.departamento}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default EmpleadoRow;
