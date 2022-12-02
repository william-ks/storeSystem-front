import { useContext } from "react";
import GeneralContext from "../context/GeneralProvider";

export default function useGeneral() {
  return useContext(GeneralContext);
}
