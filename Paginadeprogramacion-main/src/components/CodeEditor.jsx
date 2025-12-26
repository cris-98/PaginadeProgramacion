import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup'; // HTML
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-perl';
import 'prismjs/components/prism-swift';
import 'prismjs/themes/prism.css';

const languageMap = {
  c: 'c',
  csharp: 'csharp',
  python: 'python',
  java: 'java',
  php: 'php',
  javascript: 'javascript',
  html: 'markup',
  sql: 'sql',
  nosql: 'javascript',
  rust: 'rust',
  perl: 'perl',
  swift: 'swift',
  springboot: 'java',
  chatbot: 'javascript',
  ai: 'python'
};

export default function CodeEditor({ language }) {
  const [code, setCode] = useState('// Escribe tu código aquí');

  const highlighted = (code) =>
    Prism.highlight(code, Prism.languages[languageMap[language] || 'javascript'], languageMap[language] || 'javascript');

  return (
    <Editor
      value={code}
      onValueChange={setCode}
      highlight={highlighted}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
        backgroundColor: '#f5f5f5',
        border: '1px solid #ccc',
        borderRadius: '8px',
        minHeight: '200px'
      }}
    />
  );
}

