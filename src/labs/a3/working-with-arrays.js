import ArrayIndexAndLength from "./array-index-and-length";
import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays";
import ForLoop from "./for-loops";
import MapFunction from "./map-function";
import JsonStringfy from "./json-stringify";
import Find from "./find-function";
import Findindex from "./findindex";
import FilterFunction from "./filter-function";

function WorkingWithArrays() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ['string1', 'string2'];
  
  let variableArray1 = [
     functionScoped,   blockScoped,
     constant1,        numberArray1,   stringArray1
  ];
  return(
   <div>
    <h2>Working with Arrays</h2>
    numberArray1 = {numberArray1}<br/>
    stringArray1 = {stringArray1}<br/>
    variableArray1 = {variableArray1}
    <ArrayIndexAndLength/>
    <AddingAndRemovingDataToFromArrays/>
    <ForLoop/>
    <MapFunction/>
    <JsonStringfy/>
    <Find/>
    <Findindex/>
    <FilterFunction/>
   </div>
  );
}
export default WorkingWithArrays;