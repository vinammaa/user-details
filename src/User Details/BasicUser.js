import { useEffect, useState } from "react";
const BasicUser = () => {
  const [response, setResponse] = useState([]);
  const funC = () => {
    fetch(
      "https://fakerapi.it/api/v1/persons?_quantity=1&amp;_gender=male&amp;_birthday_start=2005-01-01"
    )
      .then(ress => ress.json())
      .then((res) => {setResponse(res.data)

    // .then(() => setData(json));
    console.log(response)
  });
    //.then((json) => console.log(json));
  };
  useEffect(() => {
    funC();
  }, []);
  return (
    <div>
      <h3>Basic User Details</h3>
      <table className="Table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Birthday</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Website</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {response.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.birthday}</td>
                <td>{item.gender}</td>
                <td>Id: {item.address.id},
                    Street: {item.address.street}, 
                    StreetName: {item.address.streetName},
                    BuildingNumber: {item.address.BuildingNumber},
                    City: {item.address.city},
                    Zipcode: {item.address.Zipcode},
                    Country: {item.address.country},
                    County Code: {item.address.county_code},
                    Latitude: {item.address.latitude},
                    Longitude{item.address.longitude}
                </td>
                <td>{item.website}</td>
                <td><img src={item.image} id="Image"/></td>
  
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

 export default BasicUser;

