import ParentComponent from "./session-2/parentcomponent";
import FormComponent from "./session-3/formComponent";
import HandleButton from "./session-3/handleButton";
import HandleClickWithParams from "./session-3/handleClickWithParams";

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
      </>
    );
  }
  export default Test;