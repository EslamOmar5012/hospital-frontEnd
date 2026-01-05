import { Building, Loader2, MapPin, User, X } from "lucide-react";
import { useState } from "react";

function AddNurseModal({ addNurse, setError, showModal, setShowModal }) {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    ward_id: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setSubmitting(true);
    setError("");

    addNurse(formData).then((result) => {
      if (result.success) {
        setShowModal(false);
        setFormData({
          name: "",
          address: "",
          ward_id: "",
        });
      } else {
        setError(result.message);
      }
      setSubmitting(false);
    });
  };

  if (!showModal) return null;

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
      <div className="bg-white shadow-xl rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-gray-200 border-b">
          <h2 className="font-bold text-gray-800 text-xl">Add New Nurse</h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-400 hover:text-gray-600 transition duration-200"
            disabled={submitting}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 font-semibold text-gray-700 text-sm"
            >
              Name
            </label>
            <div className="relative">
              <User className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={submitting}
                className="disabled:bg-gray-100 py-2 pr-3 pl-10 border border-gray-300 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block mb-2 font-semibold text-gray-700 text-sm"
            >
              Address
            </label>
            <div className="relative">
              <MapPin className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                disabled={submitting}
                className="disabled:bg-gray-100 py-2 pr-3 pl-10 border border-gray-300 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="ward_id"
              className="block mb-2 font-semibold text-gray-700 text-sm"
            >
              Ward ID
            </label>
            <div className="relative">
              <Building className="top-1/2 left-3 absolute w-5 h-5 text-gray-400 -translate-y-1/2 transform" />
              <input
                type="number"
                id="ward_id"
                name="ward_id"
                value={formData.ward_id}
                onChange={handleInputChange}
                required
                min="1"
                disabled={submitting}
                className="disabled:bg-gray-100 py-2 pr-3 pl-10 border border-gray-300 focus:border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full disabled:cursor-not-allowed"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowModal(false)}
              disabled={submitting}
              className="hover:bg-gray-50 disabled:opacity-50 px-4 py-2 border border-gray-300 rounded-md font-semibold text-gray-700 transition duration-200 disabled:cursor-not-allowed"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 px-4 py-2 rounded-md font-semibold text-white transition duration-200 disabled:cursor-not-allowed"
            >
              {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
              {submitting ? "Adding..." : "Add Nurse"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNurseModal;
