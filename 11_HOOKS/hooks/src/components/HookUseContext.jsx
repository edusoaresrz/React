import { createContext } from "react";
import PropTypes from "prop-types";

export const SomeContext = createContext();

export const HookUseContext = ({ children }) => {
  const contextValue = "testing context";

  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  );
};

HookUseContext.propTypes = {
  children: PropTypes.node,
};
