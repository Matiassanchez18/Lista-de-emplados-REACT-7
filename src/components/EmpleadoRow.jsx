import React from "react";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = () => {
  return (
    <section className="container d-flex flex-column justify-content-center align-items-center col-md-12 col-lg-12 col-sm-12 mt-5">
  <div className=" border p-5">
    <div className="d-flex align-items-center">
      <EmpleadoAvatar />
      <div className="ms-3 ms-5">
        <p className="mb-0">Matias Sanchez</p>
        <div className="d-flex mt-4">
          <p className="mb-0 me-3">Programador</p>
          <p className="mb-0 bg-info text-white ">Business</p>
        </div>
      </div>
    </div>
  </div>

</section>

  );
};

export default EmpleadoRow;
