import React, { useState } from "react";
import * as Styles from "./styles";
import { FaSearch } from "react-icons/fa";
import { HiFilter } from "react-icons/hi";
import { useTask } from "../../context/TaskContext";
import Button from "../Button";
import Modal from "../Modal";
import CreateTaskModal from "../Modal/Components/CreateTaskModal";
import FilterForm from "./components/FilterForm";

const Header: React.FC = () => {
  const { search, setSearch, setOpenCreateModal, openCreateModal } = useTask();
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  return (
    <Styles.HeaderWrapper>
      <Styles.Header>
        <Styles.HeaderTitle>To-do list</Styles.HeaderTitle>
        <Styles.NavbarSearchWrapper>
          <Styles.NavbarButton>
            <Styles.NavbarSearch
              placeholder="Pesquise pelo nome"
              type={"search"}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <FaSearch />
          </Styles.NavbarButton>
          <Button
            title="New task"
            color="white"
            bgColor="var(--primary-lighter)"
            onClick={() => setOpenCreateModal(!openCreateModal)}
          />
          <Styles.FilterButton
            color="white"
            bgColor="var(--primary-lighter)"
            title=""
            onClick={() => setOpenFilter(!openFilter)}
          >
            <HiFilter />
          </Styles.FilterButton>
        </Styles.NavbarSearchWrapper>
        <FilterForm isOpen={openFilter} />
      </Styles.Header>
      <Modal
        headerTitle="Add new tasks"
        isOpen={openCreateModal}
        toggle={setOpenCreateModal}
      >
        <CreateTaskModal />
      </Modal>
    </Styles.HeaderWrapper>
  );
};

export default Header;
