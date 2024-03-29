export interface Advise {
  id?: number;
  advice?: string;
}

export type AppContextType = {
  getAdvice: () => void;
  setAdviceMsg: React.Dispatch<React.SetStateAction<Advise>>;
  adviceMsg: Advise;
};
