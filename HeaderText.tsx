import React from "react";

const HeaderText = (props: IProps) => {
  return (
    <div>
      <h2 className="text-4xl font-light">{props.title}</h2>

      {props.subtitle && (
        <h3 className="text-sm font-light">{props.subtitle}</h3>
      )}
    </div>
  );
};

interface IProps {
  title: string;
  subtitle?: string;
}

export default HeaderText;
