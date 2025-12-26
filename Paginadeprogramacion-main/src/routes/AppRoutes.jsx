import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import LearnAndroid from '../pages/LearnAndroid';
import LearnC from '../pages/LearnC';
import LearnCSharp from '../pages/LearnCSharp';
import LearnCss from '../pages/LearnCss';
import LearnHtml from '../pages/LearnHtml';
import LearnJava from '../pages/LearnJava';
import LearnPhp from '../pages/LearnPhp';
import LearnPython from '../pages/LearnPython'
import LearnSpringBoot from '../pages/LearnSpringBoot';


export default function AppRoutes(){
    return(
        <BrowserRouter>
        <Route>
        <Route path = "/" element= {<Home/>}/>
        <Route path = "/android" element= {<LearnAndroid/>}/>
        <Route path = "/c" element= {<LearnC/>}/>
        <Route path = "/csharp" element= {<LearnCSharp/>}/>
        <Route path = "/css" element= {<LearnCss/>}/>
        <Route path = "/html" element= {<LearnHtml/>}/>
        <Route path = "/java" element= {<LearnJava/>}/>
        <Route path = "/php" element= {<LearnPhp/>}/>
        <Route path = "/python" element= {<LearnPython/>}/>
        <Route path = "/springboot" element={<LearnSpringBoot/>}/>
        <Route path="/django" element={<LearnDjango />} />
        <Route path="/laravel" element={<LearnLaravel />} />
        <Route path="/aspnet" element={<LearnASPNet />} />
        <Route path="/react-framework" element={<LearnReactFramework />} />
        <Route path="/flask" element={<LearnFlask />} />
        <Route path="/bootstrap" element={<LearnBootstrap />} />
        <Route path="/tailwind" element={<LearnTailwind />} />

        </Route>
        </BrowserRouter>
    );
}