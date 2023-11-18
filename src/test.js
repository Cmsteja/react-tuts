import ParentComponent from "./session-2/parentcomponent";
import FormComponent from "./session-3/formComponent";
import HandleButton from "./session-3/handleButton";
import HandleClickWithParams from "./session-3/handleClickWithParams";
import ControlledForm from "./session-4/controlledForms";
import MyForm from "./session-4/forms";
import ParentComponentStateUp from "./session-4/liftingStateUp";
import List from "./session-4/listsAndKeys";
import UncontrolledForm from "./session-4/uncontrolledForms";

function Test() {
    return (
      <>
      <div className="App">
        Hello welcome to react series hi
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
      </>
    );
  }
  export default Test;