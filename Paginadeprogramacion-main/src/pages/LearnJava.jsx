import React from "react";
import CodeEditor from '../components/CodeEditor';
import ExercisePanel from '../components/ExercisePanel';

export default function LearnJava(){
    return(
        <div>
            <h1>Aprende Java</h1>
            <ExercisePanel language="java"/>
            <CodeEditor language="java"/>
        </div>
    );
}