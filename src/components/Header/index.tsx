import React from "react";
import * as Styles from "./styles";
import { FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <Styles.HeaderWrapper>
      <Styles.Header>
        <Styles.HeaderTitle>Lista de tarefas</Styles.HeaderTitle>
        <Styles.NavbarSearchWrapper>
          <Styles.NavbarButton>
            <Styles.NavbarSearch placeholder="Pesquise pelo nome" />
            <FaSearch />
          </Styles.NavbarButton>
        </Styles.NavbarSearchWrapper>
      </Styles.Header>
    </Styles.HeaderWrapper>
  );
};

export default Header;
