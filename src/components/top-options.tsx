import { ReactNode } from "react";
import LanguageSelect from "./atoms/language-select";

interface Props {
  children: ReactNode;
}

const Component = ({ children }: Props) => {
  return (
    <>
      <div className="w-full flex justify-end space-x-4 py-6 pr-6">
        <LanguageSelect></LanguageSelect>
        {children}
      </div>
    </>
  );
};

export default Component;
