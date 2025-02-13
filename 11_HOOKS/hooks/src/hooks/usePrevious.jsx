import { useEffect, useRef, useDebugValue } from "react";

export const usePrevious = (value) => {
  const ref = useRef();

  useDebugValue("Uso do useDebugValue");
  useDebugValue(`Mapendo valor ${value}`);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
