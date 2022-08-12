import React, { useState } from "react";
import { IPropsFilter } from "./interfaces/IPropsFilterForm";
import * as Styles from "./styles";
import { Priority, Status } from "../../../../utils/Enums/EnumPriority";
import { useTask } from "../../../../context/TaskContext";
import SelectInputs from "../../../Select";

const FilterForm: React.FC<IPropsFilter> = ({ isOpen }) => {
  const [priority, setPriority] = useState<number>(Priority.Urgent);
  const [status, setStatus] = useState<number>(Status.inProgress);
  const { getTasks } = useTask();

  async function handleFilter(): Promise<void> {
    await getTasks(priority, status);
  }

  return (
    <Styles.FilterWrapper isOpen={isOpen}>
      <SelectInputs
        state={priority}
        stateController={setPriority}
        typePriority
        isNotCreatingTask
      />
      <SelectInputs
        state={status}
        stateController={setStatus}
        typePriority={false}
        isNotCreatingTask
      />
      <Styles.FilterButton
        bgColor="var(--green)"
        color="white"
        onClick={() => handleFilter()}
      >
        Apply
      </Styles.FilterButton>
    </Styles.FilterWrapper>
  );
};

export default FilterForm;
