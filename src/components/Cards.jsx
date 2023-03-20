import React, { useEffect, useState } from "react";
import './Cards.css';


function Cards() {
   
    const [repo, setRepo] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/apiproyecto/list')
        .then(response => response.json())
   
        .then(repo =>
            setRepo(repo) )// Establece el valor de 'repo' primero
             // Puedes dejar esto aquí si quieres, pero no es necesari)
        .then(repo => console.log(repo))
        .catch(error => console.error(error));
       
    }, []);
   
    return(
        <>
            <div className="container containerCard">
            <div className="Cards">
            {repo.map(int => {
                return(
                    <div className="cardProyect col card shadow-sm">
                        <div key={int.id}>
                            <h2>{int.nombre}</h2>
                      
                             <img src={int.imagen} alt={int.nombre} />
                        </div>
                     </div>
                     
                   
                )
            })}
            </div>
            </div>
        </>
    );
   

    // useEffect(() => {
    // fetch('http://127.0.0.1:8000/apiportfolio/list')
    // .then(response => response.json())
    // .then(repo => console.log(repo))
    // .then(repo => setRepo(repo))
    // .catch(error => console.error(error));
    // }, []);


    // return(
    //     <div>

    //         {repo.map(int =>{
    //             return(
    //             <div key={int.id}>
    //                 <h2>{int.name}</h2>
    //                 <p>{int.description}</p>
    //             </div>
    //         )})}
    //     </div>
    // );
}


export default Cards