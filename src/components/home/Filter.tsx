import React from "react";
import { Form, Container } from "react-bootstrap";

function Filter() {
  return (
    <Container fluid className="p-3 border rounded bg-light">
      <h2 className="text-primary mb-3">Filter</h2>

      {/* Date Posted */}
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">Date Posted</Form.Label>
        <Form.Select>
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="last-7-days">Last 7 Days</option>
          <option value="last-30-days">Last 30 Days</option>
        </Form.Select>
      </Form.Group>

      {/* Job Type */}
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">Job Type</Form.Label>
        {["Full Time", "Part Time", "Internship", "Contract", "Volunteer"].map(
          (jobType) => (
            <Form.Check
              key={jobType}
              type="checkbox"
              label={jobType}
              className="mb-2"
            />
          )
        )}
      </Form.Group>

      {/* Experience Level */}
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">Experience Level</Form.Label>
        <Form.Select>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="expert">Expert</option>
        </Form.Select>
      </Form.Group>

      {/* Currency */}
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">Currency</Form.Label>
        <Form.Select>
          <option value="dollar">Dollar</option>
          <option value="pound">Pound</option>
          <option value="birr">Birr</option>
          <option value="dirham">Dirham</option>
        </Form.Select>
      </Form.Group>
    </Container>
  );
}

export default Filter;
