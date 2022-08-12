import React, { useEffect, useState } from "react";
import * as Styles from "./styles";
import { BiTask, BiTaskX } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { useTask } from "../../context/TaskContext";
import { Status } from "../../utils/Enums/EnumPriority";

const Summary: React.FC = () => {
  const [total, setTotal] = useState<number>(0);
  const [inProgress, setInProgress] = useState<number>(0);
  const [done, setDone] = useState<number>(0);
  const { tasks } = useTask();

  const totalFilter = () => {
    setTotal(tasks.length);
  };

  const inProgressFilter = () => {
    const inProgressTasks = tasks.filter(
      (item) => item.status === Status.inProgress
    );
    setInProgress(inProgressTasks.length);
  };

  const doneFilter = () => {
    const doneTasks = tasks.filter((item) => item.status === Status.Done);
    setDone(doneTasks.length);
  };

  useEffect(() => {
    totalFilter();
    inProgressFilter();
    doneFilter();
  }, [tasks]);

  const summaryBanners = [
    {
      title: "Total tasks",
      textColor: "var(--text)",
      bgColor: "white",
      icon: <BsListTask />,
      iconColor: "var(--text)",
      state: total,
    },
    {
      title: "In Progress",
      textColor: "white",
      bgColor: "var(--red)",
      icon: <BiTaskX />,
      iconColor: "white",
      state: inProgress,
    },
    {
      title: "Done",
      textColor: "white",
      bgColor: "var(--green)",
      icon: <BiTask />,
      iconColor: "white",
      state: done,
    },
  ];

  return (
    <Styles.SummaryWrapper>
      {summaryBanners.map((item, index) => {
        return (
          <Styles.SummaryContainer
            key={index}
            bgColor={item.bgColor}
            color={item.textColor}
          >
            <Styles.SummaryHeader iconColor={item.iconColor}>
              <Styles.SummaryHeaderTitle>
                {item.title}
              </Styles.SummaryHeaderTitle>
              {item.icon}
            </Styles.SummaryHeader>
            <Styles.SummaryQuantity>{item.state} </Styles.SummaryQuantity>
          </Styles.SummaryContainer>
        );
      })}
    </Styles.SummaryWrapper>
  );
};

export default Summary;
