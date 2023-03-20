import React, { useState } from "react";
import swal from "sweetalert";
import { useForm, Controller } from "react-hook-form";

import "./Form.css";

//Form Hilda

const FormValidation = () => {
  const [checkButton, setCheckButton] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const customSubmit = (data) => {
    console.log(data);
    swal("Formulario enviado!", "Validación exitosa", "success");
  };

  return (
    <>
      <div className="form-section" id="form">
        <div className="container-form">
          <form onSubmit={handleSubmit(customSubmit)} className="form-react">
            <h2>Contáctanos</h2>
            <div className="form-control">
              <label>Nombre</label>
              <input
                className="rectangle"
                placeholder="Ingrese nombre"
                type="text"
                {...register("name", {
                  required: true,
                  maxLength: 12,
                })}
              />
              {errors.name?.type === "required" && (
                <small className="fail">El campo no puede estar vacío</small>
              )}
              {errors.name?.type === "maxLength" && (
                <small className="fail">El máximo de caracteres es 12</small>
              )}
            </div>

            <div className="form-control">
              <label>Email</label>
              <input
                className="rectangle"
                placeholder="Ingrese apellido"
                type="text"
                {...register("email", {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                })}
              />
              {errors.email?.type === "required" && (
                <small className="fail">El campo no puede estar vacío</small>
              )}
              {errors.email?.type === "pattern" && (
                <small className="fail">
                  {" "}
                  El correo solo puede contener letras, numeros, puntos, guiones
                  y guion bajo.
                </small>
              )}
            </div>

            <div className="form-control">
              <label>Mensaje</label>
              <input
                className="rectangle message"
                placeholder="Ingrese su mensaje"
                type="text"
                {...register("message", {
                  required: true,
                  minLength: 5,
                  maxLength: 200,
                })}
              />
              {errors.message?.type === "required" && (
                <small className="fail">El campo no puede estar vacío</small>
              )}
              {errors.message?.type === "minLength" && (
                <small className="fail">
                  El mínimo de caracteres debe ser 5
                </small>
              )}
              {errors.message?.type === "maxLength" && (
                <small className="fail">
                  El máximo de caracteres debe ser 200
                </small>
              )}
            </div>

            <div className="form-check form-switch">
              <label>Acepto término y condiciones</label>
              <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...field}
                  />
                )}
              />
              {errors.checkbox?.type === "required" && (
                <small className="fail">
                  <br></br>El campo no puede estar vacío
                </small>
              )}
            </div>

            <div className="form-check">
              <label>
                Acepta si quieres recibir noticias de nuestra Newletters
              </label>
              <Controller
                name="checkbox"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...field}
                  />
                )}
              />
            </div>

            <div className="captcha">
              <div className="spinner">
                <label>
                  <input
                    type="radio"
                    onClick={() => setCheckButton(true)}
                    disabled={checkButton}
                  />
                  <span className="checkmark">
                    <span>&nbsp;</span>
                  </span>
                </label>
                <div className="text">I'm not a robot</div>
                <div className="logo">
                  <img
                    src="https://forum.nox.tv/core/index.php?media/9-recaptcha-png/"
                    alt=""
                  />
                  <p>reCAPTCHA</p>
                  <small>Privacy - Terms</small>
                </div>
              </div>
            </div>

            <div className="form">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormValidation;
