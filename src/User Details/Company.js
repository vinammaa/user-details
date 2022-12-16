import React, {useState, useEffect} from "react";

const  Company= () => {
    const [data, setData] = useState([]);
    const FunC = () =>{
    fetch(
"https://fakerapi.it/api/v1/companies?_quantity=1"   )
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
        <h3>Company Details</h3>
      <table className="Table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Vat</th>
            <th>Phone</th>
            <th>Country</th>
            <th>Address</th>
            <th>Website</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.vat}</td>
                <td>{item.phone}</td>
                <td>{item.country}</td>
                <td>Id: {item.addresses.id},
                    Street: {item.addresses.street}, 
                    StreetName: {item.addresses.streetName},
                    BuildingNumber: {item.addresses.BuildingNumber},
                    City: {item.addresses.city},
                    Zipcode: {item.addresses.Zipcode},
                    Country: {item.addresses.country},
                    County Code: {item.addresses.county_code},
                    Latitude: {item.addresses.latitude},
                    Longitude{item.addresses.longitude}
                </td>
                <td>{item.website}</td>
                <td><img src={item.image} id="Image"/></td>

              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
    }
 export default Company;