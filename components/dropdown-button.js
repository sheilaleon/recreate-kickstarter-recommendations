import React from 'react';
import DropdownIcon from './icons/dropdown';

const DropdownButton = props => (
  <button
    className="flex items-center justify-between m-2 lg:mx-4 lg:my-2 border border-gray-100 shadow-md bg-white pl-4 pr-3 py-3 text-lg font-light tracking-wide text-gray-600"
    type="button"
  >
    <span>{props.label}</span>
    <DropdownIcon />
  </button>
);

DropdownButton.defaultProps = {
  label: '',
};

export default DropdownButton;
