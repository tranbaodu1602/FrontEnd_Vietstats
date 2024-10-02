import React, { useState } from "react";
import "./LangugeMenu.css";
import En from "../../assets/images/LanguageMenu/En.jpg";
import Vn from "../../assets/images/LanguageMenu/VN.webp";
import Hsl from "../../assets/images/LanguageMenu/HSL.png";

interface Language {
  code: string;
  label: string;
  flag: string;
}

const languages: Language[] = [
  { code: "EN", label: "English", flag: En },
  { code: "HSL", label: "한국어", flag: Hsl },
  { code: "VN", label: "Tiếng Việt", flag: Vn },
];
const LanguageMenu = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages[0]
  ); // Mặc định là Tiếng Anh
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <div className="selected-language" onClick={toggleMenu}>
        <span className="flag">
          <img src={selectedLanguage.flag} alt="" className="flagImg" />
        </span>
        <span className="language-code">{selectedLanguage.code}</span>
        <span className="arrow">▼</span>
      </div>
      {isOpen && (
        <div className="submenu">
          {languages.map((language) => (
            <div
              key={language.code}
              className={`menu-item ${
                selectedLanguage.code === language.code ? "active" : ""
              }`}
              onClick={() => handleLanguageChange(language)}
            >
              {language.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default LanguageMenu;
