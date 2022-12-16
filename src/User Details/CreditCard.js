import React, {useState, useEffect} from "react";

const  CreditCard= () => {
    const [data, setData] = useState([]);
    const FunC = () =>{
    fetch(
"https://fakerapi.it/api/v1/credit_cards?_quantity=1"  )
      .then(dataa => dataa.json())
      .then((datas) => {setData(datas.data)
    console.log(data)
  });
}
  useEffect(()=>{
    FunC();
  },[])
  return (
    <div>
        <h3>CreditCard Information</h3>
      <table className="Table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Number</th>
            <th>Expiration</th>
            <th>Owner</th>
        </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.type}</td>
                <td>{item.number}</td>
                <td>{item.expiration}</td>
                <td>{item.owner}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
    }
 export default CreditCard;