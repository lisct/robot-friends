import React from "react";

type Props = {
  children?: JSX.Element;
};

const Scroll = (props: Props) => (
  <div
    style={{ overflowY: "scroll", border: "1px solid black", height: "800px" }}
  >
    {props.children}
  </div>
);

export default Scroll;
