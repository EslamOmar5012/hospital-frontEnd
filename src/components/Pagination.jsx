import { ChevronLeft, ChevronRight } from "lucide-react";

// Pagination Component
function Pagination({ currentPage, totalPages, goToPage, total, limit }) {
  const startItem = (currentPage - 1) * limit + 1;
  const endItem = Math.min(currentPage * limit, total);

  return (
    <div className="flex justify-between items-center bg-gray-50 px-6 py-4 border-gray-200 border-t">
      <div className="text-gray-600 text-sm">
        Showing <span className="font-medium">{startItem}</span> to{" "}
        <span className="font-medium">{endItem}</span> of{" "}
        <span className="font-medium">{total}</span> results
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            goToPage(currentPage - 1);
          }}
          disabled={currentPage === 1}
          className="flex items-center gap-1 hover:bg-gray-100 disabled:opacity-50 px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm transition duration-200 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        <div className="flex gap-1">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={(e) => {
                e.preventDefault();
                goToPage(page);
              }}
              className={`px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 hover:bg-gray-100 disabled:opacity-50 px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm transition duration-200 disabled:cursor-not-allowed"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
