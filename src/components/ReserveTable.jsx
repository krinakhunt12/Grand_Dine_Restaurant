import { useState } from "react";
import { CheckCircle } from "lucide-react"; // Using lucide icons for success feedback

const ReserveTable = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    datetime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.datetime) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: "", email: "", datetime: "" });
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-2xl relative animate-fadeIn">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl"
          onClick={onClose}
          aria-label="Close reservation form"
        >
          ✕
        </button>

        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="w-full">
            <h2 className="text-3xl font-extrabold text-yellow-600 mb-2 text-center lg:text-left">
              {submitted ? "Thank You!" : "Reserve Your Table"}
            </h2>
            <p className="text-gray-500 text-center lg:text-left mb-6">
              {submitted
                ? "Your reservation was submitted successfully."
                : "We’ll make sure your table is ready when you arrive."}
            </p>

            {submitted ? (
              <div className="flex justify-center items-center py-10">
                <CheckCircle className="text-green-500 w-16 h-16 animate-pulse" />
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-gray-300 p-3 pl-4 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 p-3 pl-4 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date & Time
                  </label>
                  <input
                    name="datetime"
                    value={formData.datetime}
                    onChange={handleChange}
                    type="datetime-local"
                    className="w-full border border-gray-300 p-3 pl-4 rounded-md focus:ring-2 focus:ring-yellow-400 focus:outline-none transition"
                  />
                  <p className="text-xs text-gray-400 mt-1">Please select a date and time for your reservation.</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white font-semibold py-3 rounded-full hover:bg-yellow-600 transition duration-200"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>

          <div className="hidden lg:block w-full">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
              alt="Restaurant Table"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveTable;
