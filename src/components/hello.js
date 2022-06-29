import React from "react";


const Hello=()=>{
    // return(
    //     <div>
    //         <h1>Yamate Kudesai</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id:'hello',className:'mate'},
        React.createElement('h1',null,"oi oi oi"));

}
export default Hello