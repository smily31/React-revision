// import './App.css'
import ClassClick from './components/ClassClick'
import ClassMsg from './components/ClassMsg'
import Counter from './components/Counter'
import EventBind from './components/EventBind'
import FormComponent from './components/FormComponent'
import FunctionClick from './components/FunctionClick'
import  Greet  from './components/Greet'   // named import
import LifeCycleA from './components/LifeCycleA'
import NameList from './components/NameList'
import ParentComponent from './components/ParentComponent'
import UserGreet from './components/UserGreet'
import Welcome from './components/Welcome'

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
      <LifeCycleA/>
    </>
  )
}

export default App
