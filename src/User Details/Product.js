import React, {useState, useEffect} from "react";

const  Product= () => {
    const [data, setData] = useState([]);
    const FunC = () =>{
    fetch("https://fakerapi.it/api/v1/products?_quantity=3&amp;_taxes=1&amp;_categories_type=uuid")
      .then(dataa => dataa.json())
      .then((dataa) => {setData(dataa.data)
    console.log(data)
  });
}
  useEffect(()=>{
    FunC();
  },[])
  return (
    <div>
        <h3>Product Details</h3>
      <table className="Table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Ean</th>
            <th>Upc</th>
            <th>Image</th>
            <th>Images</th>
            <th>net_price</th>
            <th>taxes</th>
            <th>price</th>
            <th>categories</th>
            <th>tags</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.ean}</td>
                <td>{item.upc}</td>
                <td><img src={item.image} width="50" height="50"></img></td>
                <td>{item.images.map((item,index) => {
     return(
                        <>
    <p key={index}><b>Title:</b>{item.title}</p>
    <p key={index}><b>description:</b>{item.description}</p>
    <p key={index}><img src={item.url} width="50" height="50"></img></p>
                </>
                )}
)}</td>
                <td>{item.net_price}</td>
                <td>{item.taxes}</td>
                <td>{item.price} </td>
                <td>{item.categories} </td>
                <td>{item.tags.map((item,index) => 
                   <p key={index}>{item}</p>
)}
</td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
    }
 export default Product;