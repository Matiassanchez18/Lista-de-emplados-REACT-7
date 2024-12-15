import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';


const EmpleadoList = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
      <section className="container mb-4">
       <h1 className="text-center mt-4">Lista empleados</h1>  
       <Button variant="primary " className=" mx-auto p-1 d-flex mt-3" onClick={handleShow}>Agregar empleado</Button>
      
      
       {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </section>
    </section>
    
  );
};

export default EmpleadoList;
