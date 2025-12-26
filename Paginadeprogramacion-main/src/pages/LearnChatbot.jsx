import React from 'react';
import CodeEditor from '../components/CodeEditor';
import ExercisePanel from '../components/ExercisePanel';

export default function LearnChatbot() {
  return (
    <div>
      <h1>Programación de Chatbots</h1>
      <ExercisePanel language="chatbot" />
      <CodeEditor language="javascript" />
    </div>
  );
}
