import { useState } from "react";
import Button from "../common/Button";

export default function VolunteerForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    interest: "",
    availability: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Volunteer Form →", form);
    alert("Thank you for volunteering! We will contact you soon.");

    setForm({
      name: "",
      phone: "",
      interest: "",
      availability: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 rounded-xl shadow bg-white space-y-5"
    >
      <div>
        <label className="font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mt-1 focus:outline-teal-600"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="font-medium">Phone Number</label>
        <input
          type="tel"
          name="phone"
          required
          value={form.phone}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mt-1 focus:outline-teal-600"
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label className="font-medium">Area of Interest</label>
        <select
          name="interest"
          required
          value={form.interest}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mt-1 focus:outline-teal-600"
        >
          <option value="">Select an option</option>
          <option>Child Welfare</option>
          <option>Environment</option>
          <option>Farmer Support</option>
          <option>Education</option>
          <option>Humanitarian Work</option>
        </select>
      </div>

      <div>
        <label className="font-medium">Availability</label>
        <input
          type="text"
          name="availability"
          required
          value={form.availability}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg mt-1 focus:outline-teal-600"
          placeholder="E.g. Weekends, Anytime, 2 days/week"
        />
      </div>

      <Button text="Submit Application" />
    </form>
  );
}
