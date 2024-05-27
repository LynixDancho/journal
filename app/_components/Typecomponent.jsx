import {React, useState,useEffect} from "react"
export default function Typecomponent({getTypeResults}){
    const [selectedType, setSelectedType] = useState("");
    const [data, setData] = useState([]);
  
    // Event handler for select change
    const handleTypeChange = (event) => {
      setSelectedType(event.target.value);
    };
  
    // Fetch data when selectedType changes
    useEffect(() => {
        if(selectedType == "Please select"){
            setData(null)
        }

      const fetchData = async () => {
        if (selectedType) {
            console.log(selectedType)
          try {
            const response = await fetch(`http://localhost:1337/api/articles?populate=*&filters[Type][$eq]=${selectedType}`, { cache: 'no-store' });
            const result = await response.json();
            setData(result.data);
            console.log(result.data)
           } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
      };
  
      fetchData();
    }, [selectedType]);
    if(data){
    if (data.length > 0) {
        getTypeResults(data);
    }
}


    return (
        <div className="  w-full">
        <label
          htmlFor="HeadlineAct"
          className="block text-sm font-medium text-gray-900"
        >
          {" "}
          Headliner{" "}
        </label>

        <select
           value={selectedType}
           onChange={handleTypeChange}
          name="HeadlineAct"
          id="HeadlineAct"
          className="mt-1.5 w-full rounded-lg h-9 border-gray-300 text-gray-700 sm:text-sm"
        >
          <option value="Please select">Clear the Types</option>
          <optgroup label="Natural Sciences:">
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>

            <option value="Earth Sciences (Geology, Geophysics, etc.)">
              Earth Sciences (Geology, Geophysics, etc.)
            </option>

            <option value="Environmental Sciences">Environmental Sciences</option>

            <option value="Astronomy and Astrophysics">Astronomy and Astrophysics</option>

            <option value="Physics">Physics</option>
          </optgroup>

          <optgroup label="Mathematics and Computer Science:">
            <option value="Mathematics">Mathematics </option>
            <option value="Computer Science"> Computer Science </option>

            <option value="Statistics"> Statistics </option>
          </optgroup>

          <optgroup label="Engineering and Technology:">
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Electrical Engineering">Electrical Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Aerospace Engineering">Aerospace Engineering</option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Materials Science">Materials Science</option>
          </optgroup>

          <optgroup
            label="Medical and Health Sciences:">
            <option value="Medicine">Medicine</option>
            <option value="Pharmacology">Pharmacology</option>
            <option value="Public Health">Public Health</option>
            <option value="Nursing">Nursing</option>
            <option value="Dentistry">Dentistry</option>
            <option value="Veterinary Science">Veterinary Science</option>
          </optgroup>
        </select>
      </div>

        
    )


}