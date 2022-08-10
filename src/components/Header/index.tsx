import React from "react";
import * as Styles from "./styles";
import { FaSearch } from "react-icons/fa";
import { useTask } from "../../context/TaskContext";
import Button from "../Button";

const Header: React.FC = () => {
  const { search, setSearch } = useTask();
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
          <Button title="Adicionar" color="white" bgColor="black" />
        </Styles.NavbarSearchWrapper>
      </Styles.Header>
    </Styles.HeaderWrapper>
  );
};

export default Header;
