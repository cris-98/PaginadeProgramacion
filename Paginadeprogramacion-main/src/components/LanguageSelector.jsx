import React from "react";
import { useNavigate } from "react-router-dom";

const languages = {
  c: "C",
  csharp: "C#",
  python: "Python",
  java: "Java",
  php: "PHP",
  android: "Android (Java / Kotlin)",
  javascript: "JavaScript",
  html: "HTML",
  sql: "SQL",
  nosql: "NoSQL (MongoDB)",
  rust: "Rust",
  perl: "Perl",
  swift: "Swift",
  springboot: "Spring Boot",
  chatbot: "Chatbot",
  ia: "Inteligencia Artificial",
};

export default function LanguageSelector() {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const lang = e.target.value;
    if (lang) navigate(`/${lang}`);
  };

  return (
    <select className="form-select mb-3" onChange={handleChange} defaultValue="">
      <option value="" disabled>
        Selecciona un lenguaje
      </option>

      {Object.entries(languages).map(([key, name]) => (
        <option key={key} value={key}>
          {name}
        </option>
      ))}
    </select>
  );
}
