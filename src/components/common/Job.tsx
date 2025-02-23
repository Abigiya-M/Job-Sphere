import { Bookmark, BookmarkCheck, Share2 } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../features/store";
import React from "react";

interface JobProps {
  logo: string;
  title: string;
  company: string;
  description: string;
  type: string;
  salary: string;
  id: string;
  small?: boolean;
  onHandleAddToSaveJobs: (job: {
    logo: string;
    title: string;
    company: string;
    description: string;
    type: string;
    salary: string;
    id: string;
  }) => void;
}

const Job: React.FC<JobProps> = ({
  logo,
  title,
  company,
  description,
  type,
  salary,
  onHandleAddToSaveJobs,
  id,
  small = false,
}) => {
  const navigate = useNavigate();
  const savedIds = useSelector((state: RootState) => state.slice.savedJobIds);

  const handleDescription = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    navigate(`/description/${id}`);
  };

  return (
    <div
      onClick={handleDescription}
      className="card border rounded shadow-sm p-3 position-relative cursor-pointer"
      style={{ maxWidth: "95%" }}
    >
      <div className="d-flex gap-3 align-items-start">
        {/* Company Logo */}
        <img
          src={logo}
          alt="company logo"
          className="img-fluid"
          style={{ width: "40px" }}
        />

        {/* Job Info */}
        <div className="d-flex flex-column">
          <h2 className={`fw-bold text-dark ${small ? "fs-6" : "fs-4"}`}>
            {title}
          </h2>
          <p className={`text-muted ${small ? "fs-6" : "fs-5"}`}>{company}</p>

          {/* Job Type & Salary */}
          <div className="d-flex gap-2">
            <span className="badge bg-secondary">{type}</span>
            <span className="badge bg-secondary">{salary}</span>
          </div>

          {/* Job Description */}
          <p className="text-muted small">{description}</p>
        </div>
      </div>

      {/* Save & Share Buttons */}
      <div className="position-absolute top-0 end-0 mt-3 me-3 d-flex gap-3">
        <button
          className="btn btn-light border-0"
          onClick={(e) => {
            e.stopPropagation();
            onHandleAddToSaveJobs({
              logo,
              title,
              company,
              description,
              type,
              salary,
              id,
            });
          }}
        >
          {savedIds.includes(id) ? (
            <BookmarkCheck size={24} className="text-success" />
          ) : (
            <Bookmark size={24} />
          )}
        </button>
        <button
          className="btn btn-light border-0"
          onClick={(e) => e.stopPropagation()}
        >
          <Share2 size={24} />
        </button>
      </div>
    </div>
  );
};

export default Job;
