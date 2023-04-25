// this hook would provide us with our userState for easy import

import { useContext } from "react";
import { UserContext } from "./UserContext";

// hooks should always start with small letter, camelCase useState etc etc
export function useAuth() {
  return useContext(UserContext);
}
