function Modal({open, onClose}) {

    if (!open) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-md">
                <h2 className="text-2xl mb-4 text-black" >¡Gracias por tu interés!</h2>
                <p className="mb-4 text-black">Nos pondremos en contacto contigo lo más pronto posible!</p>
                <button onClick={onClose} className="bg-red-700 hover:bg-red-900 text-white rounded-xl p-2">Cerrar</button>
            </div>
        </div>
    );    
}

export default Modal;