import React from "react";

const AvatarSmall = (props: IProps) => {
  return (
    <img alt="avatar" className="rounded-full border-2" src={props.avatar} />
  );
};

interface IProps {
  avatar: string;
}

export default AvatarSmall;
