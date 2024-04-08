import React from "react";

function Card(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
  className: string | undefined;
}) {
  const className = `p-6 flex flex-col ${props.className}`;
  return <div className={className}>{props.children}</div>;
}

export default Card;
