import Logo from "./Icons";
import List from "./Item";

const Label = [];

for(let i =0; i<12; i++){
  const obj = {
    key: i+1,
    icon : Logo[i] ,
    label : List[i]
  }

  Label.push(obj);
}

export default Label