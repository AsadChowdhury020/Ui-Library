function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      
      <div className="bg-white p-6 rounded-2xl shadow-xl w-87 animate-scaleIn">
        
        <h3 className="text-lg font-semibold mb-3">
          Confirmation
        </h3>

        <div className="text-sm text-gray-600 mb-4">
          {children}
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1 text-gray-600 hover:text-black"
          >
            Cancel
          </button>

          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-1 rounded"
          >
            OK
          </button>
        </div>

      </div>
    </div>
  );
}

export default Modal;