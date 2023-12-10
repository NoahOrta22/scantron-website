import React, { useState } from "react";

export const CreateCoursePage = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: "",
    semester_season: "",
    course_number: "",
    year: "",
    teacher_id: "",
  });

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any action with the form data, such as sending it to a server
    console.log("Form data submitted:", formData);
  };

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="auth-form-container">
      <form className="create-course-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Course name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Adv Computing"
          required
        />

        <label htmlFor="semester_season">Semester/Season:</label>
        <input
          type="text"
          id="semester_season"
          name="semester_season"
          value={formData.semester_season}
          onChange={handleChange}
          placeholder="Fall"
          required
        />

        <label htmlFor="course_number">Course Number:</label>
        <input
          type="text"
          id="course_number"
          name="course_number"
          value={formData.course_number}
          onChange={handleChange}
          placeholder="3013-101"
          required
        />

        <label htmlFor="year">Year:</label>
        <input
          type="text"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="2023"
          required
        />

        <label htmlFor="teacher_id">Teacher ID:</label>
        <input
          type="text"
          id="teacher_id"
          name="teacher_id"
          value={formData.teacher_id}
          onChange={handleChange}
          placeholder="20279999"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
