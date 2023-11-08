import React from "react"
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Display from "./Components/Display";
import Form from "./Components/Form"
import Success from "./Components/Success";




function App() {
  const navigate = useNavigate();

  const [companyNameError, setCompanyNameError] = React.useState(false)
  const [companyAddressError, setCompanyAddressError] = React.useState(false)
  const [companyMobileError, setCompanyMobileError] = React.useState(false)
  const [companyEmailError, setCompanyEmailError] = React.useState(false)
  const [companyGstError, setCompanyGstError] = React.useState(false)
  const [companyClientError, setCompanyClientError] = React.useState(false)

  const [data, setData] = React.useState({})
  
  const handleSubmit = (formData,open) => {
    
   if(formData.company_name.trim() == "") {
   
    setCompanyNameError(true)
  }
  else {
    setCompanyNameError(false)
  }

    if(formData.address.trim() == "") {
   
    setCompanyAddressError(true)
  }
  else {
    setCompanyAddressError(false)
  }

   if(formData.mobile.trim() == "") {
   
    setCompanyMobileError(true)
  }
  else {
    setCompanyMobileError(false)
  }

   if(formData.email.trim() == "") {
   
    setCompanyEmailError(true)
  }
  else {
    setCompanyEmailError(false)
  }
  
  if(formData.gst.trim() == "") {
   
    setCompanyGstError(true)
  }
  else {
    setCompanyGstError(false)
  }

   if(formData.client_name.trim() == "") {
   
    setCompanyClientError(true)
  }
  else {
    setCompanyClientError(false)
  }

   if (formData.company_name.trim() !== ""
  &&
   formData.address.trim() !== ""
   &&
   formData.mobile.trim() !== ""
   && 
   formData.email.trim() !== ""
   &&
   formData.gst.trim() !== ""
   &&
   formData.client_name.trim() !== ""
   ) 
 {
   setData(formData)
   navigate("/display");
 } else {
  alert("Please Fill the Detials")
 }
  }
  
  return (
    <div className="App">
      <Routes>
        <Route  path="/" element={
          <Form handleSubmit={handleSubmit} 
                companyNameError={companyNameError}
                companyAddressError={companyAddressError}
                companyMobileError={companyMobileError}
                companyGstError={companyGstError}
                companyEmailError={companyEmailError}
                companyClientError={companyClientError}
                 />
        } />
        <Route path="/display" element={<Display data = {data}/>}/>
        <Route path="/success" element={<Success/>}/>
      </Routes>
      {/*
        */ }
    </div>
  )
}

export default App;

