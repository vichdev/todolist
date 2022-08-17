import React from "react";
import { FaCheckCircle, FaFlag, FaMinusCircle } from "react-icons/fa";
import { EnumPriority, EnumStatus } from "../../utils/Enums/Enums";
import { IPropsSelect } from "./interfaces/IPropsSelect";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { BsFilterCircleFill } from "react-icons/bs";

const SelectInputs: React.FC<IPropsSelect> = ({
  typePriority,
  state,
  stateController,
  isNotCreatingTask,
}) => {
  return (
    <>
      {typePriority ? (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Priority</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state}
            label="Priority"
            onChange={(e) => {
              stateController(e.target.value as number);
            }}
          >
            <MenuItem value={EnumPriority.Urgent}>
              <FaFlag color="var(--red-flag)" style={{ marginRight: "1rem" }} />
              Urgent
            </MenuItem>
            <MenuItem value={EnumPriority.High}>
              <FaFlag
                color="var(--yellow-flag)"
                style={{ marginRight: "1rem" }}
              />
              High
            </MenuItem>
            <MenuItem value={EnumPriority.Normal}>
              <FaFlag
                color="var(--blue-flag)"
                style={{ marginRight: "1rem" }}
              />
              Normal
            </MenuItem>
            {isNotCreatingTask ? (
              <MenuItem value={""}>
                <FaFlag
                  color="var(--gray-border)"
                  style={{ marginRight: "1rem" }}
                />
                None
              </MenuItem>
            ) : (
              ""
            )}
          </Select>
        </FormControl>
      ) : (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state}
            label="Priority"
            onChange={(e) => {
              stateController(e.target.value as number);
            }}
          >
            <MenuItem value={EnumStatus.inProgress}>
              <FaMinusCircle
                color="red"
                title="In progress"
                style={{ marginRight: "1rem" }}
              />
              In Progress
            </MenuItem>
            <MenuItem value={EnumStatus.Done}>
              <FaCheckCircle
                color="green"
                title="Done"
                style={{ marginRight: "1rem" }}
              />
              Done
            </MenuItem>
            {isNotCreatingTask ? (
              <MenuItem value={""}>
                <BsFilterCircleFill
                  color="var(--gray-border)"
                  style={{ marginRight: "1rem" }}
                />
                None
              </MenuItem>
            ) : (
              ""
            )}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default SelectInputs;
