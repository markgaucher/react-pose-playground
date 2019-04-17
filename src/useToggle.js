import { useState } from "react";

const useToggle = (defaultValue = false) => {
  const [active, setActive] = useState(defaultValue);
  const onClick = () => {
    setActive(!active);
  };
  return [active, onClick];
};

export default useToggle;
