import ES5Function from "./es5-functions"
import ArrowFunction from "./arrow-functions";
import ImpliedReturn from "./implied-returns";
import FunctionParenthesisAndParameters from "./function-parenthesis-and-parameters";

function WorkingWithFunction() {
  return (
    <div>
      <h3>Working With Functions</h3>
      <ES5Function/>
      <ArrowFunction/>
      <ImpliedReturn/>
      <FunctionParenthesisAndParameters/>
    </div>
  )
}

export default WorkingWithFunction;