import { useEffect, useState } from "react";

export default function useFetchJobs(page, limit) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://joblisting-rd8f.onrender.com/api/jobs?page=${page}&limit=${limit}`
        );
        if (!response.ok) throw new Error("Failed to fetch jobs");
        const result = await response.json();
        setJobs(result.jobs || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, limit]);

  return { jobs, loading, error };
}