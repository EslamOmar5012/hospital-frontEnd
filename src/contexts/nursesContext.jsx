import { createContext, useEffect, useState } from "react";

// Create Context
const NursesContext = createContext(undefined);

// Context Provider
function NursesProvider({ children }) {
  const [nurses, setNurses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit] = useState(5);

  const fetchNurses = async (page = currentPage) => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch(
        `http://127.0.0.1:3000/nurses?page=${page}&limit=${limit}`
      );
      const data = await res.json();

      if (data.status === "success") {
        setNurses(data.data.results || []);
        setTotal(data.data.total || 0);
        setTotalPages(data.data.totalPageNum || 1);
        setCurrentPage(page);
      } else {
        setError(data.message || "Failed to fetch nurses");
      }
    } catch (err) {
      setError("Error loading nurses: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const addNurse = async (formData) => {
    try {
      const res = await fetch("http://127.0.0.1:3000/nurses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.status === "success") {
        await fetchNurses(currentPage);
        return { success: true };
      } else {
        return {
          success: false,
          message: data.message || "Failed to add nurse",
        };
      }
    } catch (err) {
      return { success: false, message: "Error adding nurse: " + err.message };
    }
  };

  const deleteNurse = async (id) => {
    try {
      const res = await fetch(`http://127.0.0.1:3000/nurses/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.status === "success") {
        // If deleting the last item on a page (and not on page 1), go to previous page
        if (nurses.length === 1 && currentPage > 1) {
          await fetchNurses(currentPage - 1);
        } else {
          await fetchNurses(currentPage);
        }
        return { success: true };
      } else {
        return {
          success: false,
          message: data.message || "Failed to delete nurse",
        };
      }
    } catch (err) {
      return {
        success: false,
        message: "Error deleting nurse: " + err.message,
      };
    }
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      fetchNurses(page);
    }
  };

  useEffect(() => {
    fetchNurses(1);
  }, []);

  const value = {
    nurses,
    loading,
    error,
    setError,
    currentPage,
    totalPages,
    total,
    limit,
    addNurse,
    deleteNurse,
    goToPage,
    fetchNurses,
  };

  return (
    <NursesContext.Provider value={value}>{children}</NursesContext.Provider>
  );
}

export { NursesContext, NursesProvider };
