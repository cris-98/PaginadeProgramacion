import React from "react";
import CodeEditor from '../components/CodeEditor';
import ExercisePanel from '../components/ExercisePanel'

export default function LearnAndroid(){
    return(
        <div>
            <h1>Aprende Android</h1>
            <ExercisePanel language="android"/>
            <CodeEditor language="android"/>
        </div>
    );
}