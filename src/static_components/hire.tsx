import { useState, type FormEvent } from "react";

export default function HireMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const validate = () => {
    const newErrors = { ...errors };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9\-+()\s]{7,20}$/;

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Invalid phone number.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.values(newErrors).every((val) => val === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    alert("Message sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="hire" className="w-full py-16 px-4 bg-transparent text-white">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Hire Me</h2>
        <p className="text-gray-300">
          Want to book me for a show, event, or collaboration? Let’s make it happen.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-12 max-w-xl mx-auto space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full bg-white/5 text-white px-4 py-3 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.firstName && "ring-2 ring-red-500"
              }`}
            />
            {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>}
          </div>

          <div>
            <input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full bg-white/5 text-white px-4 py-3 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.lastName && "ring-2 ring-red-500"
              }`}
            />
            {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-white/5 text-white px-4 py-3 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.email && "ring-2 ring-red-500"
            }`}
          />
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div>
          <input
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full bg-white/5 text-white px-4 py-3 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.phone && "ring-2 ring-red-500"
            }`}
          />
          {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Tell me what you have in mind..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`w-full bg-white/5 text-white px-4 py-3 rounded-md placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.message && "ring-2 ring-red-500"
            }`}
          />
          {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-md transition cursor-pointer"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}