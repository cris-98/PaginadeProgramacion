import React from "react";
import CodeEditor from '../components/CodeEditor';
import ExercisePanel from '../components/ExercisePanel';

export default function LearnCSharp(){
    return(
        <div>
            <h1>Aprende CSharp</h1>
            <ExercisePanel language="csharp"/>
            <CodeEditor language="csharp"/>
        </div>
    );
}