import React from 'react';
import Yo from "./belen.jpg";

function Main() {
  return (
    <>
      <div class="container  px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      
      <div class="col-10 col-sm-8 col-lg-6">
      <img src={Yo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">Belén Zumalacarregui</h1>
        <p class="lead">Soy una desarrolladora web o frontend con más de 10 años de experiencia en el sector, y estoy apasionada por las nuevas tecnologías y los desafíos que ofrece el mundo digital.
</p>
<p class="lead">
Como desarrolladora, me apasiona trabajar en proyectos que requieren creatividad e innovación. Me gusta encontrar soluciones técnicas para problemas complejos y lograr resultados que superen las expectativas del cliente. También soy una gran defensora del trabajo en equipo, considero que trabajar en colaboración permite la creación de soluciones más eficientes y eficaces.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">CONTRATAME</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">CONTACTAME</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Main
