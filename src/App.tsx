import { useState } from "react";
import MyNavbar from "./components/Navbar";
import Background from "./components/Background";
import SearchBar from "./components/Searchbar";
import SavedJobs from "./components/Savedjobs";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <MyNavbar />
      <Background />
      <SearchBar />
      <SavedJobs />
    </div>
  );
}

export default App;
