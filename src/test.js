import { useParams } from "react-router-dom";
import ParentComponent from "./session-2/parentcomponent";
import FormComponent from "./session-3/formComponent";
import HandleButton from "./session-3/handleButton";
import HandleClickWithParams from "./session-3/handleClickWithParams";
import ControlledForm from "./session-4/controlledForms";
import MyForm from "./session-4/forms";
import ParentComponentStateUp from "./session-4/liftingStateUp";
import List from "./session-4/listsAndKeys";
import UncontrolledForm from "./session-4/uncontrolledForms";
import Example from "./session-5/useState";
import HookEffect from "./session-5/useEffect";
import Counter from "./session-5/useReducer";
import HookCM from "./session-5/useCAM";
import HookContext from "./session-5/useContext";

function Test() {
 let {userName} = useParams();
 console.log(userName);
    return (
      <>
      <div className="App">
        Hello welcome to react series {userName}
      </div>
      <ParentComponent/>
      <HandleButton/>
      <FormComponent/>
      <HandleClickWithParams/>
      <List/>
      <MyForm/>
      <UncontrolledForm/>
      <ControlledForm/>
      <ParentComponentStateUp/>
      <Example/>
      <HookEffect/>
      <Counter/>
      <HookCM/>
      <HookContext/>
      </>
    );
  }
  export default Test;