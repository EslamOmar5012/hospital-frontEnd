import { createContext, useCallback, useEffect, useState } from "react";

const ConsultantsContext = createContext();

function ConsultantsProvider({ children }) {
  const [consultants, setConsultants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit] = useState(4);

  const fetchConsultants = useCallback(
    async (page = currentPage) => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(
          `http://127.0.0.1:3000/consultants?page=${page}&limit=${limit}`
        );
        const data = await res.json();

        if (data.status === "success") {
          console.log(data.data.results);
          setConsultants(data.data.results || []);
          setTotal(data.data.total || 0);
          setTotalPages(data.data.totalPageNum || 1);
          setCurrentPage(page);
        } else {
          setError(data.message || "Failed to fetch consultants");
        }
      } catch (err) {
        setError("Error loading consultants: " + err.message);
      } finally {
        setLoading(false);
      }
    },
    [currentPage, limit]
  );

  const addConsultant = async (formData) => {
    try {
      const res = await fetch("http://127.0.0.1:3000/consultants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.status === "success") {
        await fetchConsultants(currentPage);
        return { success: true };
      } else {
        return {
          success: false,
          message: data.message || "Failed to add consultant",
        };
      }
    } catch (err) {
      return {
        success: false,
        message: "Error adding consultant: " + err.message,
      };
    }
  };

  const deleteConsultant = async (id) => {
    try {
      const res = await fetch(`http://127.0.0.1:3000/consultants/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.status === "success") {
        // If deleting the last item on a page (and not on page 1), go to previous page
        if (consultants.length === 1 && currentPage > 1) {
          await fetchConsultants(currentPage - 1);
        } else {
          await fetchConsultants(currentPage);
        }
        return { success: true };
      } else {
        return {
          success: false,
          message: data.message || "Failed to delete consultant",
        };
      }
    } catch (err) {
      return {
        success: false,
        message: "Error deleting consultant: " + err.message,
      };
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      fetchConsultants(page);
    }
  };

  useEffect(() => {
    fetchConsultants(1);
  }, []);

  const value = {
    consultants,
    loading,
    error,
    setError,
    currentPage,
    totalPages,
    total,
    limit,
    addConsultant,
    deleteConsultant,
    goToPage,
    fetchConsultants,
  };

  return (
    <ConsultantsContext.Provider value={value}>
      {children}
    </ConsultantsContext.Provider>
  );
}

export { ConsultantsProvider, ConsultantsContext };
