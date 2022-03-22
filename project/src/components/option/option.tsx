type OptionProps = {
  isActive: boolean,
  value: string,
  handleOptionClick: () => void,
}

function Option({isActive, value, handleOptionClick}:OptionProps):JSX.Element {
  return (
    <li
      className={`places__option ${isActive ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={handleOptionClick}
    >
      {value}
    </li>);
}

export default Option;
