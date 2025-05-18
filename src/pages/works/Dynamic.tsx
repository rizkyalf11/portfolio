import React from "react";
import allworks from "@/works/allworks.json";
import WorkPage from "@/components/ui/WorkPage";

type Props = {
  name: string | null;
};

const DynamicWork: React.FC<Props> = ({ name }) => {
  const work = allworks.data.find((item) => item.webname === name);
  if (!work) {
    return;
  }
  return <WorkPage work={work} />;
};

export default DynamicWork;
