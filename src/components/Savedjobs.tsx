import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const SavedJobs: React.FC = () => {
  const savedJobs = [
    { title: "UI/UX Designer", company: "Barone LLC", salary: "$200-$800" },
    { title: "UI/UX Designer", company: "Acme Co.", salary: "$200-$800" },
    {
      title: "UI/UX Designer",
      company: "Big Kahuna Burger Ltd.",
      salary: "$200-$800",
    },
    {
      title: "UI/UX Designer",
      company: "Bifftoc Enterprises Ltd.",
      salary: "$200-$800",
    },
  ];

  return (
    <Card className="shadow-sm" style={{ width: "100%", maxWidth: "300px" }}>
      <Card.Header className="bg-white fw-bold text-center">
        Saved Jobs
      </Card.Header>
      <ListGroup variant="flush">
        {savedJobs.map((job, index) => (
          <ListGroup.Item
            key={index}
            className="d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{job.title}</strong> <br />
              <small>{job.company}</small>
            </div>
            <span className="text-muted">{job.salary}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default SavedJobs;
