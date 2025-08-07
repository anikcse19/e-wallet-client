// JoinOfferModal.jsx

import { useForm } from 'react-hook-form';

const JoinOfferModal = ({ isOpen, onClose, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
    onClose();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-[95%] max-w-md rounded-lg shadow-lg p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4">Join Offer</h2>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-800 mb-1">Amount</label>
            <input
              {...register("amount", { required: "Amount is required" })}
              type="number"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            {errors.amount && (
              <p className="text-red-500 text-sm">{errors.amount.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-pink-600 text-white text-sm font-medium px-3 py-2 rounded hover:bg-pink-700"
          >
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinOfferModal;