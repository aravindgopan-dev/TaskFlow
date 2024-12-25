import React from 'react';

type Props = {
  name: string;
  buttonComponent?: JSX.Element;
  isSmallerText?: boolean;
};

const Header = ({ name, buttonComponent, isSmallerText }: Props) => {
  return (
    <div className="mb-5 flex w-full justify-between items-center">
      <h1
        className={`${isSmallerText ? 'text-lg' : 'text-2xl'} font-semibold dark:text-white whitespace-nowrap flex items-center`}
      >
        {name}
        {buttonComponent && <button className="ml-2">{buttonComponent}</button>}
      </h1>
    </div>
  );
};



export default Header;
