import React from "react";
import CodeEditor from '../components/CodeEditor';
import ExercisePanel from '../components/ExercisePanel';

export default function LearnSpringBoot(){
    return(
        <div>
            <h1>Aprende Spring Boot</h1>
            <ExercisePanel language="springboot"/>
            <CodeEditor language="java"/>
        </div>
    );
}