import React from "react";

function CardFooter(props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) {
  return <div className="p-6 pt-0">{props.children}</div>;
}

export default CardFooter;
