import { useContext } from "react";
import { contextLanguage } from "../context/context-language";

const SelectLanguage = () => {
  const {handleLanguage} = useContext(contextLanguage);
  return (
    <select
      name="language"
      id="language"
      onChange={handleLanguage}
    >
      <option value="en-EN">English</option>
      <option value="es-ES">Spanish</option>
      <option value="fr-FR">French</option>
    </select>
  );
};

export default SelectLanguage;
