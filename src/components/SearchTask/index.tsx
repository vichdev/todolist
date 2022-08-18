import React from "react";
import { FaSearch } from "react-icons/fa";
import { useTask } from "../../context/TaskContext";
import * as Styles from "./styles";

interface IPropsSearchTask {
  isMobile?: boolean;
}

const SearchTask: React.FC<IPropsSearchTask> = ({ isMobile }) => {
  const { search, setSearch } = useTask();

  return (
    <Styles.SearchWrapper>
      <Styles.NavbarSearch
        isMobile={isMobile}
        placeholder="Search by name"
        type={"search"}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <FaSearch />
    </Styles.SearchWrapper>
  );
};

export default SearchTask;
