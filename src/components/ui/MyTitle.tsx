import React, { HTMLAttributes } from "react";

type Props = {
  name: string;
};

const MyTitle: React.FC<Props & HTMLAttributes<HTMLHeadingElement>> = ({
  name,
}) => {
  return (
    <h2 className="text-xl font-semibold dark:text-darkText xs:text-2xl">
      {name}
    </h2>
  );
};

export default MyTitle;
