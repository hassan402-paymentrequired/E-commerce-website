import React from 'react'

const Modal = () => {
  return (
    

<>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box bg-white">
    <h3 className="font-bold text-lg">Access Verification</h3>
    <p className="py-4">To access the admin page, please enter the passkey.....</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
</>
  )
}

export default Modal