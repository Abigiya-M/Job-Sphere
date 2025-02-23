import React from "react";
import { X } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeJobs } from "../../features/Slices";
import { Card, Button, Badge } from "react-bootstrap";

// Define props type
interface SavedJobProps {
  id: string;
  title: string;
  company: string;
  description: string;
  type: string;
  salary: string;
}

const SavedJob: React.FC<SavedJobProps> = ({
  id,
  title,
  company,
  description,
  type,
  salary,
}) => {
  const dispatch = useDispatch();

  const removeSavedJob = (job_id: string) => {
    dispatch(removeJobs(job_id));
  };

  return (
    <Card className="shadow-sm border rounded p-3 position-relative">
      {/* Close button */}
      <Button
        variant="light"
        className="position-absolute top-0 end-0 m-2 btn-close"
        onClick={() => removeSavedJob(id)}
      >
        <X size={18} />
      </Button>

      <Card.Body>
        <Card.Title className="text-dark fs-6 fw-bold">{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{company}</Card.Subtitle>

        {/* Job type & salary badges */}
        <div className="d-flex gap-2 mb-2">
          <Badge bg="secondary">{type}</Badge>
          <Badge bg="secondary">{salary}</Badge>
        </div>

        <Card.Text className="text-muted small">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SavedJob;
