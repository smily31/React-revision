// import './App.css'
import ClassClick from "./components/ClassClick";
import ClassMsg from "./components/ClassMsg";
import ClickCount from "./components/ClickCount";
import ClickCounterTwo from "./components/ClickCounterTwo";
import ComponentC from "./components/ComponentC";
import Counter from "./components/Counter";
import CounterRender from "./components/CounterRender";
import ErrorBoundary from "./components/ErrorBoundary";
import EventBind from "./components/EventBind";
import FRParentInput from "./components/FRParentInput";
import FocusInput from "./components/FocusInput";
import FormComponent from "./components/FormComponent";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet"; // named import
import Hero from "./components/Hero";
import HoverCount from "./components/HoverCount";
import HoverCounterTwo from "./components/HoverCounterTwo";
import LifeCycleA from "./components/LifeCycleA";
import NameList from "./components/NameList";
import ParentComp from "./components/ParentComp";
import ParentComponent from "./components/ParentComponent";
import PortalDemo from "./components/PortalDemo";
import RefsComp from "./components/RefsComp";
import User from "./components/User";
import { UserProvider } from "./components/UserContext";
import UserGreet from "./components/UserGreet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      {/* <Greet name="ritika"/>
      <Greet name="ritu">
        <p>This is children prop</p>
      </Greet>
      <Greet name="Soldier">
        <button>Take Action</button>
      </Greet>
      <Welcome name="ritika"/>
      <Welcome name="asha">
        <p>this is mom</p>
      </Welcome>      
      <Welcome name="rajesh"/>
      <ClassMsg/>
      <Counter/>
      <FunctionClick/>
      <ClassClick/>
      <EventBind/>
      <ParentComponent/>
      <UserGreet/> */}
      {/* <NameList/> */}
      {/* <FormComponent/> */}
      {/* <LifeCycleA/> */}
      {/* <ParentComp/> */}
      {/* <RefsComp/> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}
      {/* <PortalDemo/> */}
      {/* <ErrorBoundary>
        <Hero hero="batman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero hero="ironman"/>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero hero="joker"/>
      </ErrorBoundary> */}
      {/* <ClickCount name="ritika"/>
      <HoverCount/> */}
      {/* <ClickCounterTwo/>
      <HoverCounterTwo/>
      <User render={(isLoggedIn) => isLoggedIn ? 'ritika' : 'Guest'}/> */}

      {/*using props.children method*/}
      {/* <CounterRender>  
        {(count, incrementCounter) => (
          <ClickCounterTwo count={count} incrementCounter={incrementCounter} />
        )}
      </CounterRender>
      <CounterRender>
        {(count, incrementCounter) => (
          <HoverCounterTwo count={count} incrementCounter={incrementCounter} />
        )}
      </CounterRender> */}
      {/* first way using render prop */}
      {/* <CounterRender
        render={(count, incrementCounter) => (
          <HoverCounterTwo count={count} incrementCounter={incrementCounter} />
        )}
      /> */}

      {/* Providing a context value */}
      <UserProvider value='Ritika'>
        <ComponentC/>
      </UserProvider>
    </>
  );
}

export default App;
