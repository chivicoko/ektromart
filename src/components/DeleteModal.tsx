'use client';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onConfirm, message }) => {

  return (
    isOpen ? (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
        <div className="px-2">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4">{message}</h2>
            <button
              onClick={onConfirm}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Confirm
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default DeleteModal;
