import React, { useState } from "react";
import { useTask } from "../../../../context/TaskContext";
import { EnumPriority, EnumStatus } from "../../../../utils/Enums/Enums";
import Button from "../../../Button";
import SearchTask from "../../../SearchTask";
import SelectInputs from "../../../Select";
import * as Styles from "./styles";

const MobileModal: React.FC = () => {
  const { getTasks, setDisplayModalMobile, displayModalMobile } = useTask();
  const [priority, setPriority] = useState<number>(EnumPriority.Urgent);
  const [status, setStatus] = useState<number>(EnumStatus.inProgress);

  async function handleFilter(): Promise<void> {
    await getTasks(priority, status);
    setDisplayModalMobile(!displayModalMobile);
  }

  return (
    <Styles.ModalMobileWrapper>
      <SearchTask isMobile={true} />
      <SelectInputs
        state={priority}
        stateController={setPriority}
        typePriority
        isNotCreatingTask
      />
      <SelectInputs
        state={status}
        stateController={setStatus}
        isNotCreatingTask
      />
      <Styles.FilterButton
        bgColor="var(--green)"
        color="white"
        onClick={() => handleFilter()}
      >
        Apply
      </Styles.FilterButton>
    </Styles.ModalMobileWrapper>
  );
};

export default MobileModal;
