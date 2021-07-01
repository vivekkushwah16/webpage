import React from "react";
const ame="Hello sir,"
const headig={
  textAlign:"center",
  color: "blueviolet",
  textTransform: "capitalize",
  fontWeight: "bold",
  fontFamily: "'Itim', cursive"
};
function Head(){
    return  <h1 style={headig}>{ame}</h1>
}
export default Head