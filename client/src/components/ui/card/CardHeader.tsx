import React from "react";

function CardHeader(props: {
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
  const className = `relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-lg -mt-6 mb-4 grid h-28 place-items-center ${props.className}`;
  return <div className={className}>{props.children}</div>;
}

export default CardHeader;
