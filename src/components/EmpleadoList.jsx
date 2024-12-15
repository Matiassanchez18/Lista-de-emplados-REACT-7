import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import EmpleadoRow from "./EmpleadoRow";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm } from "react-hook-form";

const EmpleadoList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [arrayEmpleados, setarrayEmpleados] = useState([]);
  const [contadorID, setContadorId] = useState(0);

  const enviadoForm = (data) => {
    const existeEmpleado = arrayEmpleados.some(
      (empleado) => empleado.fullname === data.fullname.trim()
    );

    if (existeEmpleado) {
      alert("El empleado ya existe");
    } else {
      // Agregar un objeto con fullname y titulo al array
      const nuevoID = contadorID;
      setarrayEmpleados([
        ...arrayEmpleados,
        {
          id: nuevoID,
          fullname: data.fullname.trim(),
          titulo: data.titulo.trim(),
          departamento: data.departamento.trim(),
          foto: data.foto.trim(),
        },
      ]);

      setContadorId(contadorID + 1);
      console.log(arrayEmpleados);
    }
  };

  return (
    <section>
      <article className="container mb-4">
        <h1 className="text-center mt-4">Lista empleados</h1>
        <Button
          variant="primary "
          className=" mx-auto p-1 d-flex mt-3"
          onClick={handleShow}
        >
          Agregar empleado
        </Button>

        {/* modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Formulario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="" onSubmit={handleSubmit(enviadoForm)}>
              <Form.Text className="text-danger">
                {errors.fullname?.message}
              </Form.Text>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Nombre y apellido"
                  type="text"
                  aria-describedby="basic-addon1"
                  {...register("fullname", {
                    required: "Este campo es obligatorio",
                    minLength: {
                      value: 3,
                      message: "El minimo de caracteres es de 3",
                    },
                    maxLength: {
                      value: 50,
                      message: "El maximo de caracteres permitido es de 50",
                    },
                  })}
                />
              </InputGroup>

              <Form.Text className="text-danger">
                {errors.titulo?.message}
              </Form.Text>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="titulo ej: CEO, CMO, CFO."
                  aria-describedby="basic-addon2"
                  {...register("titulo", {
                    required: "Este campo es obligatorio",
                    minLength: {
                      value: 3,
                      message: "El minimo de caracteres es de 3",
                    },
                    maxLength: {
                      value: 5,
                      message: "El maximo de caracteres permitido es de 5",
                    },
                  })}
                />
              </InputGroup>


              <Form.Text className="text-danger">{errors.departamento?.message}</Form.Text>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Departamento ej: business, programador, marketing."
                  aria-describedby="basic-addon2"
                  {...register("departamento", {
                    required: "Este campo es obligatorio",
                    minLength: {
                      value: 4,
                      message: "El minimo de caracteres es de 4",
                    },
                    maxLength: {
                      value: 12,
                      message: "El maximo de caracteres permitido es de 12",
                    },
                  })}
                />
              </InputGroup>

              <Form.Text className="text-danger">{errors.foto?.message}</Form.Text>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="ingrese su foto"
                  type="url"
                  {...register("foto", {
                    required: "Este campo es obligatorio",
                  })}
                />
              </InputGroup>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </article>

      <EmpleadoRow></EmpleadoRow>
    </section>
  );
};

export default EmpleadoList;
