import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    emailValid: true,
  });

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({
      ...prev,
      [name]: value.trim() === "",
      ...(name === "email" && {
        emailValid: validateEmail(value),
      }),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
        ...(name === "email" && {
          emailValid: true,
        }),
      }));
    }
  };

  return (
    <section className="py-4">
      <div className="container">
        <h2 className="mb-4 text-center">Contact Me</h2>
        <form noValidate>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name<span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className={`form-control ${
                errors.name ? "is-invalid" : ""
              }`}
              id="name"
              name="name"
              value={formData.name}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.name && (
              <div className="invalid-feedback">Name is required.</div>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email<span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className={`form-control ${
                errors.email || !errors.emailValid ? "is-invalid" : ""
              }`}
              id="email"
              name="email"
              value={formData.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">Email is required.</div>
            )}
            {!errors.email && !errors.emailValid && (
              <div className="invalid-feedback">Enter a valid email.</div>
            )}
          </div>

          {/* Message */}
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message<span className="text-danger">*</span>
            </label>
            <textarea
              className={`form-control ${
                errors.message ? "is-invalid" : ""
              }`}
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onBlur={handleBlur}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">Message is required.</div>
            )}
          </div>

          <button type="submit" className="btn btn-primary" disabled>
            Submit (disabled)
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
