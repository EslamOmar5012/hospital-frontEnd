import { useState, useEffect } from "react";
import { Table, Button, Modal, Form, Alert, Spinner } from "react-bootstrap";
import styles from "../styles/staffPage.module.css";

function ConsultantsPage() {
  const [consultants, setConsultants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    experience: "",
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchConsultants();
  }, []);

  const fetchConsultants = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://127.0.0.1:3000/consultants");
      const data = await res.json();

      if (data.status === "success") {
        setConsultants(data.data || []);
      } else {
        setError(data.message || "Failed to fetch consultants");
      }
    } catch (err) {
      setError("Error loading consultants: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("http://127.0.0.1:3000/consultants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.status === "success") {
        setShowModal(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          specialization: "",
          experience: "",
        });
        fetchConsultants();
      } else {
        setError(data.message || "Failed to add consultant");
      }
    } catch (err) {
      setError("Error adding consultant: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this consultant?")) {
      return;
    }

    try {
      const res = await fetch(`http://127.0.0.1:3000/consultants/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (data.status === "success") {
        fetchConsultants();
      } else {
        setError(data.message || "Failed to delete consultant");
      }
    } catch (err) {
      setError("Error deleting consultant: " + err.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className="py-4 container">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h1>Consultants Management</h1>
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Add New Consultant
          </Button>
        </div>

        {error && <Alert variant="danger">{error}</Alert>}

        {loading ? (
          <div className="py-5 text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Specialization</th>
                <th>Experience</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {consultants.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center">
                    No consultants found
                  </td>
                </tr>
              ) : (
                consultants.map((consultant, index) => (
                  <tr key={consultant.id || index}>
                    <td>{index + 1}</td>
                    <td>{consultant.name}</td>
                    <td>{consultant.email}</td>
                    <td>{consultant.phone}</td>
                    <td>{consultant.specialization}</td>
                    <td>{consultant.experience} years</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(consultant.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        )}

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Consultant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={submitting}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={submitting}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  disabled={submitting}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Specialization</Form.Label>
                <Form.Control
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  required
                  disabled={submitting}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Experience (years)</Form.Label>
                <Form.Control
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  min="0"
                  disabled={submitting}
                />
              </Form.Group>

              <div className="d-flex justify-content-end gap-2">
                <Button
                  variant="secondary"
                  onClick={() => setShowModal(false)}
                  disabled={submitting}
                >
                  Cancel
                </Button>
                <Button variant="primary" type="submit" disabled={submitting}>
                  {submitting ? "Adding..." : "Add Consultant"}
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default ConsultantsPage;
