import Swal from 'sweetalert2'
function Alert(props) {
    Swal.fire({
    
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    return;
}

export default Alert;