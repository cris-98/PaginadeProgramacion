import React from "react";
import CodeEditor from '../components/CodeEditor';
import ExercisePanel from '../components/ExercisePanel';

export default function LearnHtml(){
    return(
        <div>
            <h1>Aprende Html</h1>
            <ExercisePanel language ="html"/>
            <CodeEditor language="html"/>
        </div>
    );
}