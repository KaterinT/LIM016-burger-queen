import Swal from 'sweetalert2';
import { useState } from "react";
import 'animate.css';
// export const ModalNotific = () => {
//   return (
//     <div className="modalBackground">
//       <div className="modalContainer">
//         <button>x</button>
//           <h1>Ups!</h1>
//         <div className="body"></div>
//           <p>Nombre y/o número de Cliente están vacios, por favor intenta nuevamente.</p>
//         <div className="footer">
//           <button>
//             OK|
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }


export const ModalNotific = () => {
  Swal.fire({
      icon: 'error',
      title: 'Ups...Nombre de cliente y/o mesa vacios!',
      text: 'Por favor,intenta nuevamente',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
  })
}

export const ModalNotificOrdenVacio = () => {
  Swal.fire({
      icon: 'error',
      title: 'Ups...Orden vacio!',
      text: 'Por favor,intenta nuevamente',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
  })
}

  // /* inputOptions can be an object or Promise */
  // const inputOptions = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve({
  //       'Res': 'Res',
  //       'Pollo': 'Pollo',
  //       'Vegana': 'Vegana'
  //     })
  //   }, 1000)
  // })

  // const { value: tipoRelleno } = await Swal.fire({
  //   title: 'Opciones de hamburguesa',
  //   input: 'radio',
  //   inputOptions: inputOptions,
  //   inputValidator: (value) => {
  //     if (!value) {
  //       return 'You need to choose something!'
  //     }
  //   }
  // })
  
  // export const ModalNotificacion = ({confirmarModal}) => {
  //   const [burger,setBurger] =useState('');
  //   if (tipoRelleno) {

  //     Swal.fire({ html: `You selected: ${tipoRelleno}` });
  //     confirmarModal([burger])
  //     setBurger(tipoRelleno);
  //   }
  // }  




