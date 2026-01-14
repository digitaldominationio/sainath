import { useState } from "react";
import Button from "../common/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("📤 Sending data:", formData);

      const response = await fetch("https://at.ddmn.in/webhook/sainath-cnt-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("📊 Response status:", response.status);
      const responseText = await response.text();
      console.log("📄 Response body:", responseText);

      if (response.ok) {
        alert("Thank you! We have received your message.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(`Server returned ${response.status}: ${responseText}`);
      }
    } catch (error) {
      console.error("❌ Form submission error:", error);
      alert("Sorry, there was an error submitting your message. Please check console for details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 rounded-xl shadow bg-white space-y-5"
    >
      <div>
        <label className="font-medium">Name</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mt-1 focus:outline-teal-600"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mt-1 focus:outline-teal-600"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="font-medium">Message</label>
        <textarea
          name="message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mt-1 focus:outline-teal-600"
          placeholder="Write your message..."
        ></textarea>
      </div>

      <Button text={isSubmitting ? "Sending..." : "Send Message"} disabled={isSubmitting} />
    </form>
  );
}
