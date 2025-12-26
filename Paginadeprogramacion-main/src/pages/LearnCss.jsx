import React from "react";
import CodeEditor from '../components/CodeEditor';
import ExercisePanel from '../components/ExercisePanel';

export default function LearnCss(){
    return(
        <div>
            <h1>Aprende Css</h1>
            <ExercisePanel language="css"/>
            <CodeEditor language="css"/>
        </div>
    );
}