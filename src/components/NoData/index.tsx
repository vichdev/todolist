import React from "react";
import noData from "../../assets/noData.jpg";

import * as Styles from "./styles";

const NoData: React.FC = () => {
  return (
    <Styles.NoDataWrapper>
      <Styles.NoDataTitle> No tasks found. </Styles.NoDataTitle>
      <Styles.NoDataImage
        src={noData}
        alt="Não foi encontrado nenhuma tarefa."
      />
      <Styles.NoDataCopyright href="http://www.freepik.com">
        Designed by slidesgo / Freepik
      </Styles.NoDataCopyright>
    </Styles.NoDataWrapper>
  );
};

export default NoData;
