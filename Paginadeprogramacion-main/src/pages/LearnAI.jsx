import React from 'react';
import CodeEditor from '../components/CodeEditor';
import ExercisePanel from '../components/ExercisePanel';

export default function LearnAI() {
  return (
    <div>
      <h1>Programación para Inteligencia Artificial</h1>
      <ExercisePanel language="ai" />
      <CodeEditor language="python" />
    </div>
  );
}
