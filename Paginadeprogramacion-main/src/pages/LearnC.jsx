import React from "react";
import CodeEditor from '../components/CodeEditor';
import ExercisePanel from '../components/ExercisePanel';

export default function LearnC(){
    return(
        <div>
            <h1>Aprende C</h1>
            <ExercisePanel language="c"/>
            <CodeEditor language="c"/>
        </div>
    );
}