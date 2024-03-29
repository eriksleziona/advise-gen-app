import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
  useContext,
} from "react";
import { AppContextType } from "./Context.Types";
import axios from "axios";

const advice_url = "https://api.adviceslip.com/advice";

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  const [adviceMsg, setAdviceMsg] = useState({});

  const getAdvice = async () => {
    const advice = (await axios.get(advice_url)).data;
    setAdviceMsg(advice.slip);
  };

  useEffect(() => {
    getAdvice();
  }, []);

  console.log(adviceMsg);

  return (
    <AppContext.Provider
      value={{
        getAdvice,
        setAdviceMsg,
        adviceMsg,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
