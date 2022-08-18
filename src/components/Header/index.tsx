import React, { useState } from "react";
import * as Styles from "./styles";
import { HiFilter } from "react-icons/hi";
import { useTask } from "../../context/TaskContext";
import Button from "../Button";
import Modal from "../Modal";
import CreateTaskModal from "../Modal/Components/CreateTaskModal";
import FilterForm from "./components/FilterForm";
import { AiFillPlusCircle } from "react-icons/ai";
import MobileModal from "./components/MobileModalFilter";
import SearchTask from "../SearchTask";

const Header: React.FC = () => {
  const {
    setOpenCreateModal,
    openCreateModal,
    setDisplayModalMobile,
    displayModalMobile,
  } = useTask();
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  return (
    <Styles.HeaderWrapper>
      <Styles.Header>
        <Styles.HeaderTitle>To-do list</Styles.HeaderTitle>
        <Styles.NavbarSearchWrapper>
          <SearchTask />
          <Styles.ButtonWrapper>
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
          </Styles.ButtonWrapper>
        </Styles.NavbarSearchWrapper>
        <Styles.MobileModalWrapper>
          <Styles.FilterButton
            color="white"
            bgColor="var(--primary-lighter)"
            title=""
            onClick={() => setDisplayModalMobile(!displayModalMobile)}
          >
            <HiFilter />
          </Styles.FilterButton>
          <AiFillPlusCircle
            onClick={() => setOpenCreateModal(!openCreateModal)}
          />
        </Styles.MobileModalWrapper>
        <FilterForm isOpen={openFilter} />
      </Styles.Header>
      <Modal
        headerTitle="Add new tasks"
        isOpen={openCreateModal}
        toggle={setOpenCreateModal}
      >
        <CreateTaskModal />
      </Modal>
      <Modal
        headerTitle="Filter Task"
        isOpen={displayModalMobile}
        toggle={setDisplayModalMobile}
        heightSize="23rem"
      >
        <MobileModal />
      </Modal>
    </Styles.HeaderWrapper>
  );
};

export default Header;
