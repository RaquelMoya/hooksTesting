import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { HooksApp } from './HooksApp'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import './index.css'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { Layout } from './05-useLayoutEffect/Layout'
import { Memorize } from './06-memos/Memorize'
import { MemoHook } from './06-memos/MemoHook'
import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
import { TodoApp } from './08-Reducer/TodoApp'
import './08-Reducer/intro-reducer'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    {
        <MainApp/>
    }
    </ BrowserRouter>
)
