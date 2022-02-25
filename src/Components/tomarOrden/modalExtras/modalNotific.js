import Swal from 'sweetalert2';
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
      title: 'Oops...Nombre de cliente y/o mesa vacios!',
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
      title: 'Oops...Orden vacio!',
      text: 'Por favor,intenta nuevamente',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
  })
}


