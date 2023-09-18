import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";

function Patient(){

const handleSubmit = () => {

}
/*
if ('geolocation' in navigator) {
  // Konum hizmeti mevcut

  // Konum verilerini alma
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(position);
    },
    (error) => {
      console.error('Konum verileri alınamadı:', error);
    }
  );
} else {
  console.error('Tarayıcınız konum hizmetini desteklemiyor.');
}
fetch yöntemi
*/

    const [error,setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [patientList, setPatinetList] = useState([]);


    useEffect(() => {
    
    fetch("http://localhost:8082/patient")
    .then(res => res.json())
    .then(
        (result) => {
            setIsLoaded(true);
            setPatinetList(result);
        },
    
        (error) => {
            //error oluşursa
            setIsLoaded(true);
            setError(error);
        }
        )
    },[])

if(error){
    return <div> Error !!!</div>;
} else if(!isLoaded){
    return <div> Loading...</div>
}else{
    return(
        <ul>
            {patientList.map(patient =>(
                <li>
                {patient.name} {patient.address} {patient.phoneNumber}
                </li>
            ))}
        </ul> 
    );
}


}
//dışarıdan çağırmak için 
export default Patient;