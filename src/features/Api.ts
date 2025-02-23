import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define Job type
interface Job {
  id: string;
  title: string;
  logo: string;
  company: string;
  description: string;
  type: string;
  salary: string;
}

// Define response types
interface JobListResponse {
  jobs: Job[];
  totalPages: number;
}

interface JobDetailResponse extends Job {}

// Create API slice
const Api = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://joblisting-rd8f.onrender.com/api/jobs",
  }),
  
  endpoints: (builder) => ({
    getJobs: builder.query<JobListResponse, { page: number; limit: number; search?: string; company?: string }>({
      query: ({ page, limit, search = "", company = "" }) => {
        const queryParams = new URLSearchParams({
          page: page.toString(),
          limit: limit.toString(),
          search,
          company,
        }).toString();
        return `?${queryParams}`;
      },
    }),
    getJobDetail: builder.query<JobDetailResponse, string>({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetJobsQuery, useGetJobDetailQuery } = Api;
export default Api;
