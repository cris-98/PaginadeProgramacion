import React from "react";
import CodeEditor from '../components/CodeEditor';
import ExercisePanel from '../components/ExercisePanel';

export default function LearnPhp(){
    return(
        <div>
            <h1>Aprende PHP</h1>
            <ExercisePanel languaje="php"/>
            <CodeEditor languaje="php"/>
        </div>
    );
}