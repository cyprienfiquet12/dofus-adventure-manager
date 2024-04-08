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
  const className = `relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-96 ${props.className}`;
  return <div className={className}>{props.children}</div>;
}

export default Card;
