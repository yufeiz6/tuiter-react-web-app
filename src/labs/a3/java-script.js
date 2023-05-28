import VariablesAndConstants
  from "./variables-and-constants";

import VariableTypes from "./variable-types";
import BooleanVariables from "./boolean-variables";
import IfElse from "./if-else";
import TernaryOperator from "./ternary-operator";
import WorkingWithFunction from "./work-with-fun";
import WorkingWithArrays from "./working-with-arrays";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./spread";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";

function JavaScript() {
  console.log('Hello World!');
  return(
     <div>
        <h1>JavaScript</h1>
        <VariablesAndConstants/>
        <VariableTypes/>
        <BooleanVariables/>
        <IfElse/>
        <TernaryOperator/>
        <WorkingWithFunction/>
        <WorkingWithArrays/>
        <TemplateLiterals/>
        <House/>
        <Spread/>
        <Destructing/>
        <FunctionDestructing/>
     </div>
  );
}
export default JavaScript