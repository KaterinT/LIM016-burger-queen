/*eslint-disable */
import Swal from 'sweetalert2';
import 'animate.css';

export const ModalNotific = () => {
  Swal.fire({
      icon: 'error',
      title: 'Ups...Nombre de cliente y/o N° de mesa no registrado!',
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

export const ModalNotificOrdenEnviada = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Confirmado con éxito'
  })
}



