import React from "react";
import CodeEditor from '../components/CodeEditor';
import ExercisePanel from '../components/ExercisePanel';

export default function LearnPython(){
    return(
        <div>
            <h1>Aprende Python</h1>
            <ExercisePanel language="python"/>
            <CodeEditor language="python"/>
        </div>
    );
}