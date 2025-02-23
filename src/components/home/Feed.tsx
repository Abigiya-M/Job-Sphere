import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJobs, removeJobs } from "../../features/Slices";
import { useGetJobsQuery } from "../../features/Api";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Loading from "../common/Loading";
import { Button, Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import Job from "../common/Job";
import { RootState } from "../../features/store";
import NoResult from "../common/Noresualt";

// Job type definition
interface JobType {
  id: string;
  title: string;
  logo: string;
  company: string;
  description: string;
  type: string;
  salary: string;
}

function Feed() {
  const dispatch = useDispatch();
  const searchValue = useSelector(
    (state: RootState) => state.slice.searchValue
  );
  const savedIds = useSelector((state: RootState) => state.slice.savedJobIds);
  const loggedIn = useSelector((state: RootState) => state.slice.auth);

  const [page, setPage] = useState<number>(1);
  const limit = 10;

  const {
    data,
    isFetching: loading,
    error,
  } = useGetJobsQuery({
    page,
    limit,
    search: searchValue,
  });

  const jobs: JobType[] = data?.jobs || [];

  const handleClick = (increase: boolean) => {
    setPage((prevPage) =>
      increase ? prevPage + 1 : Math.max(1, prevPage - 1)
    );
  };

  const addToSaveJobs = (job: JobType) => {
    if (!loggedIn) {
      alert("Please login to save jobs");
    } else if (!savedIds.includes(job.id)) {
      dispatch(addJobs(job));
    } else {
      dispatch(removeJobs(job.id));
    }
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status" />
        <p className="mt-2">Loading...</p>
      </Container>
    );
  }

  if (error) {
    return <Alert variant="danger">Error: {(error as Error).message}</Alert>;
  }

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col lg={8} className="overflow-auto">
          <div className="d-flex flex-column gap-3">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <Job
                  key={job.id}
                  title={job.title}
                  logo={job.logo}
                  company={job.company}
                  description={job.description}
                  type={job.type}
                  salary={job.salary}
                  id={job.id}
                  onHandleAddToSaveJobs={addToSaveJobs}
                  small={false}
                />
              ))
            ) : (
              <NoResult />
            )}
          </div>

          {/* Pagination Controls */}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <Button
              variant="primary"
              onClick={() => handleClick(false)}
              disabled={page === 1}
            >
              <ArrowLeft size={20} /> Previous
            </Button>

            <p className="mb-0 fw-bold">Page {page}</p>

            <Button variant="primary" onClick={() => handleClick(true)}>
              Next <ArrowRight size={20} />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Feed;
