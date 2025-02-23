import React, { ChangeEvent } from "react";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchValue } from "../../features/Slices";
import { RootState } from "../../features/store";
import { Form, InputGroup, Button } from "react-bootstrap";

function Searchbar() {
  const value = useSelector((state: RootState) => state.slice.searchValue);
  const dispatch = useDispatch();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchValue(e.target.value));
  };

  return (
    <Form className="w-100 w-lg-75 mx-auto">
      <InputGroup className="shadow-sm rounded-pill">
        <InputGroup.Text className="bg-white border-0">
          <Search size={16} className="text-secondary" />
        </InputGroup.Text>
        <Form.Control
          type="text"
          value={value}
          onChange={handleSearch}
          placeholder="Job title, Keywords, or Company name | Location"
          className="border-0 text-secondary"
        />
        <Button variant="primary" className="rounded-pill px-3">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
}

export default Searchbar;
