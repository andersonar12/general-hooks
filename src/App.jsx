import CounterApp from "./components/1 - useState/CounterApp.jsx";
import { CustomHook } from "./components/1 - useState/CustomHook.jsx";
import { FormWithCustomHook } from "./components/2 - useEffect/FormWithCustomHook.jsx";
import { MultipleCustomHooks } from "./components/3 - examples/MultipleCustomHooks.jsx";
import { FocusScreen } from "./components/4 - useRef/FocusScreen.jsx";
import { RealExampleRef } from "./components/4 - useRef/RealExampleRef.jsx";
import { LayoutEffect } from "./components/5 - useLayoutEffect/LayoutEffect.jsx";
import { CallbackHook } from "./components/6 - memos/CallbackHook.jsx";
import { MemoHook } from "./components/6 - memos/MemoHook.jsx";
import { Memorize } from "./components/6 - memos/Memorize.jsx";
import { Padre } from "./components/7 - tarea-memo/Padre.jsx";
import { TodoApp } from "./components/8 - useReducer/TodoApp.jsx";
// import { SimpleForm } from "./components/2 - useEffect/SimpleForm.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h1 className="text-decoration-underline">
              <strong>useState</strong>
            </h1>
            <CounterApp />
            <hr />
            <CustomHook />
            <hr />
            <h1 className="text-decoration-underline">
              <strong>useEffect</strong>
            </h1>
            {/* <SimpleForm /> */}
            <FormWithCustomHook />
            <hr />
            <h1 className="text-decoration-underline">
              <strong>MultipleCustomHooks</strong>
            </h1>
            <MultipleCustomHooks />
            <hr />
            <h1 className="text-decoration-underline">
              <strong>useRef</strong>
            </h1>
            <FocusScreen />
            <RealExampleRef />
            <hr />
            <h1 className="text-decoration-underline">
              <strong>useLayoutEffect</strong>
            </h1>
            <LayoutEffect />
            <hr />
            <h1 className="text-decoration-underline">
              <strong>React.memo()</strong>
            </h1>
            <Memorize />
            <MemoHook />
            <CallbackHook />
            <hr />
            <h1 className="text-decoration-underline">
              <strong>Tarea Memo</strong>
            </h1>
            <Padre />
            <hr />
            <h1 className="text-decoration-underline">
              <strong>useReducer</strong>
            </h1>
            <TodoApp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
