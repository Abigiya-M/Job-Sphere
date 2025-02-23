import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for your state
interface Job {
  id: string;
  title: string;
  company: string;
  location?: string;
  [key: string]: any;
}

interface UserData {
  name?: string;
  email?: string;
  [key: string]: any;
}

interface SliceState {
  searchValue: string;
  savedJobs: Job[];
  savedJobIds: string[];
  data: UserData;
  auth: boolean;
}

// Fetch data from localStorage safely
const getLocalStorageItem = <T>(key: string, defaultValue: T): T => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : defaultValue;
};

// Initial state with types
const initialState: SliceState = {
  searchValue: "",
  savedJobs: getLocalStorageItem<Job[]>("savedJobs", []),
  savedJobIds: getLocalStorageItem<string[]>("savedJobIds", []),
  data: getLocalStorageItem<UserData>("data", {}),
  auth: getLocalStorageItem<boolean>("logged", false),
};

const slices = createSlice({
  name: "slice",
  initialState,
  reducers: {
    changeSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    addJobs: (state, action: PayloadAction<Job>) => {
      const newJob = action.payload;
      state.savedJobs = [newJob, ...state.savedJobs];
      state.savedJobIds = [...state.savedJobIds, newJob.id];

      localStorage.setItem("savedJobs", JSON.stringify(state.savedJobs));
      localStorage.setItem("savedJobIds", JSON.stringify(state.savedJobIds));
    },
    removeJobs: (state, action: PayloadAction<string>) => {
      const jobIdToRemove = action.payload;
      state.savedJobs = state.savedJobs.filter((job) => job.id !== jobIdToRemove);
      state.savedJobIds = state.savedJobIds.filter((id) => id !== jobIdToRemove);

      localStorage.setItem("savedJobs", JSON.stringify(state.savedJobs));
      localStorage.setItem("savedJobIds", JSON.stringify(state.savedJobIds));
    },
    setData: (state, action: PayloadAction<UserData>) => {
      state.data = action.payload;
      localStorage.setItem("data", JSON.stringify(state.data));
    },
    toggleLogged: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
      localStorage.setItem("logged", JSON.stringify(state.auth));
    },
  },
});

export default slices.reducer;
export const { changeSearchValue, addJobs, removeJobs, setData, toggleLogged } = slices.actions;
