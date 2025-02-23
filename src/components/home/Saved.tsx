import { useSelector } from "react-redux";
import SavedJob from "./Savedjobs";
import { RootState } from "../../features/store";
import { Container, Card } from "react-bootstrap";
import React from "react";

// Define Job type
interface JobType {
  id: string;
  title: string;
  company: string;
  logo?: string;
  description: string;
  type: string;
  salary: string;
}

export default function Saved() {
  const jobs: JobType[] = useSelector(
    (state: RootState) => state.slice.savedJobs
  ); // Updated reference
  const loggedin: boolean = useSelector((state: RootState) => state.auth.auth);

  return (
    <Container className="d-none d-lg-flex flex-column align-items-center gap-3 w-100">
      {loggedin ? (
        <Card className="border border-secondary-subtle rounded-3 p-3 w-75">
          <Card.Title className="text-center text-dark fw-bold">
            Saved Jobs
          </Card.Title>
          <Card.Body className="overflow-auto" style={{ maxHeight: "300px" }}>
            {jobs.length === 0 ? (
              <p className="text-muted text-center">No saved jobs yet.</p>
            ) : (
              jobs.map((job) => <SavedJob {...job} key={job.id} />)
            )}
          </Card.Body>
        </Card>
      ) : (
        <Card className="border border-secondary-subtle rounded-3 p-3 w-75 text-center">
          Please Sign up or login to save jobs
        </Card>
      )}
    </Container>
  );
}
