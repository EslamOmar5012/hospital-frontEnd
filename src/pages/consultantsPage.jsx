import { useState } from "react";
import { useConsultants } from "../hooks/useConsultants";
import AddConsultantModal from "../components/AddConsultantsModal";
import Pagination from "../components/Pagination";
import { AlertCircle, Loader2, Trash2, UserPlus } from "lucide-react";

function ConsultantsPage() {
  const {
    consultants,
    loading,
    error,
    setError,
    deleteConsultant,
    currentPage,
    totalPages,
    goToPage,
    total,
    limit,
    addConsultant,
  } = useConsultants();
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this consultant?")) {
      return;
    }

    const result = await deleteConsultant(id);
    if (!result.success) {
      setError(result.message);
    }
  };

  return (
    <div className="bg-gray-50 py-8 min-h-screen">
      <div className="mx-auto px-4 max-w-7xl container">
        <div className="flex justify-between items-center mb-6">
          <h1 className="font-bold text-gray-800 text-3xl">
            Consultants Management
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold text-white transition duration-200"
          >
            <UserPlus className="w-5 h-5" />
            Add New Consultant
          </button>
        </div>

        {error && (
          <div className="flex items-center gap-2 bg-red-50 mb-4 px-4 py-3 border border-red-200 rounded-lg text-red-700">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-gray-200 border-b">
                  <tr>
                    <th className="px-6 py-3 font-semibold text-gray-600 text-xs text-left uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 font-semibold text-gray-600 text-xs text-left uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 font-semibold text-gray-600 text-xs text-left uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {consultants.length === 0 ? (
                    <tr>
                      <td
                        colSpan="3"
                        className="px-6 py-8 text-gray-500 text-center"
                      >
                        No consultants found
                      </td>
                    </tr>
                  ) : (
                    consultants.map((consultant) => (
                      <tr
                        key={consultant.c_id}
                        className="hover:bg-gray-50 transition duration-150"
                      >
                        <td className="px-6 py-4 text-gray-900 text-sm">
                          {consultant.c_id}
                        </td>
                        <td className="px-6 py-4 font-medium text-gray-900 text-sm">
                          {consultant.c_name}
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <button
                            onClick={() => handleDelete(consultant.c_id)}
                            className="flex items-center gap-1 bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-md font-medium text-white text-sm transition duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              goToPage={goToPage}
              total={total}
              limit={limit}
            />
          </div>
        )}

        <AddConsultantModal
          showModal={showModal}
          setShowModal={setShowModal}
          addConsultant={addConsultant}
          setError={setError}
        />
      </div>
    </div>
  );
}

export default ConsultantsPage;
