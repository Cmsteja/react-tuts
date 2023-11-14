import ChildComponent from "./childComponent";
import PropsComponent from "./propsComponent";


export default function ParentComponent(){
   return(
    <>
    <ChildComponent jsxProp={<PropsComponent/>} text="ParentData" number="123"/>
   
    
    </>
   );
}