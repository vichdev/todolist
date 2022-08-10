import React from "react";
import * as Styles from "./styles";
import { FaSearch } from "react-icons/fa";
import { useTask } from "../../context/TaskContext";
import Button from "../Button";
import Modal from "../Modal";

const Header: React.FC = () => {
  const { search, setSearch, setOpenModal } = useTask();
  return (
    <Styles.HeaderWrapper>
      <Styles.Header>
        <Styles.HeaderTitle>Lista de tarefas</Styles.HeaderTitle>
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
            onClick={() => {
              setOpenModal(true);
            }}
          />
        </Styles.NavbarSearchWrapper>
      </Styles.Header>
      <Modal headerTitle="Add new tasks">
        <div></div>
      </Modal>
    </Styles.HeaderWrapper>
  );
};

export default Header;
