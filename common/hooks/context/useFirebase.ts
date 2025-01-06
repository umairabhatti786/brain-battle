// Hook to access Firebase context
import { useContext } from "react";
import {FirebaseContext} from "../../providers/FirebaseProvider";

export const useFirebase = () => {
    const context = useContext(FirebaseContext);
    console.log('context in use firebase', context)
    if (!context) {
      throw new Error("useFirebase must be used within a FirebaseProvider");
    }
    return context;
  };
  