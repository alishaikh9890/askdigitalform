import React from 'react'


import Button from '@mui/material/Button';
import './Form.css';
import Banner from "./../assets/banner.jpeg";
import QR from "./../assets/QR1.jpeg";
import title from "./../assets/QR-title.jpeg";
import shake from "./../assets/shake.jpeg";
import cash from "./../assets/cash.jpeg";
import dd from "./../assets/dd.jpeg";
import flow from "./../assets/flow1.gif";


import instagram from "./../assets/instagram.jpeg";
import youtube from "./../assets/youtube.jpeg";
import facebook from "./../assets/facebook.jpeg";
import linkedin from "./../assets/linkedin.jpeg";
import whatsapp from "./../assets/whatsapp.jpeg";
import twitter from "./../assets/twitter.jpeg";

import TextField from '@mui/material/TextField';
import { Outlet, Link } from "react-router-dom";

function Form({handleSubmit,companyNameError,companyAddressError,companyMobileError,companyGstError,companyEmailError, companyClientError}) {

var cureruntdate = new Date();
var currentday = cureruntdate.getDate();
var currentmonth = cureruntdate.getMonth()+1;
var currentyear = cureruntdate.getFullYear()

const [day, setDay] = React.useState(currentday+"/"+currentmonth+"/"+currentyear)
 
const [open, setOpen] = React.useState('')

    const [togle, setTogle] = React.useState(false)
    
      const [formData, setFormData] = React.useState( {
          date:day,
         
           company_name:"",
           address:"",
           mobile:"",
           gst:"",
           email:"",
          //  reference:"",
          //  isStatic:"",
          //  isCustom:"",
          //  isCommerce:"",
          //  isFacebook:"",
          //  isLinkedin:"",
          //  isTwitter:"",
          //  isInstagram:"",
          //  isWhatsapp:"",
          //  isBanner:"",
          //  isText:"",
          //  isContext:"",
          //  isMark:"",
          //  isIndia:"",
          //  isCity:"",
          //  isExport:"",
          //  isApp:"",
          //  isDev:"",
          //  isCheque:"",
          //  isNeft:"",
          //  isCash:"",
          //  isDd:"",    
           bank_name:"",
           cheque:"",
           cheque_date:"",
           rupee:"",
           remark:"",
           client_name:"",
           designatio:"",
           payment:""
                });
  
      const handleChange = (e) => {

        let  {name, value, type, checked } = e.target
  
        value = type === "checkbox" ? checked : value;

        if(name === "payment"){
          setFormData((prevFormData) => ({
            ...prevFormData,
            payment:value
          }))
          setOpen(value)
        }

        else {
            setFormData((prevFormData) => ({
          ...prevFormData,
          [name] : value,
        }))
        }
      }
 
    let {company_name, address, mobile, gst, email, reference, isStatic, isCustom, isCommerce, isFacebook, isLinkedin, isTwitter, isInstagram, isWhatsapp, isBanner, isText, isContext, isMark, isIndia, isCity, isExport, isApp, isDev , isCheque, isNeft, isCash, isDd, bank_name, cheque, cheque_date, rupee, remark, client_name, designation, } = formData

    return (
      <div className="Form">
        <div className='header'>
          <img src={Banner} alt='' />
        </div>
        
  {/*/////////////////// FIRST PART OF FORM ///////////////////////////////////////*/}
  
        <div className='first'>
        
          <div>
             <h4>Date: {day}</h4>
          </div>
         
          <div>
            <label>Company Name: <input type="text" placeholder='Enter Company name' name="company_name" value={company_name} onChange={handleChange}  style={companyNameError ? {border:"2px solid red"} : {}}   /></label>
            <label>Address: <input type="text" placeholder='Enter Address' name="address" value={address} onChange={handleChange} style={companyAddressError ? {border:"2px solid red"} : {}}  /></label>
          </div>
        
          <div>
            <label>Mob. No.: <input type="tel" placeholder='Moobile Number' name="mobile" value={mobile} onChange={handleChange} style={companyMobileError ? {border:"2px solid red"} : {}} /></label>
            <label>GST No. : <input type='number' placeholder="gst" name="gst" value={gst} onChange={handleChange} style={companyGstError ? {border:"2px solid red"} : {}} /></label>
         </div>

         <div>
            <label>Email: <input type="email" placeholder='Enter You Email' name="email" value={email}  onChange={handleChange} style={companyEmailError ? {border:"2px solid red"} : {}} /></label>
            <label>Reference Design : <input type="text" placeholder='Enter Reference' name="reference_design" value={reference}  onChange={handleChange}/></label>
         </div>
       </div>
  
        <hr style={{marginTop:"50px"}}/>
  
  {/*/////////////////// SECOND PART OF FORM ///////////////////////////////////////*/}
  
   
        <div className='second'>
          <div>
            <h2>Advertising Packanges</h2>
            <p>Website Development</p>
  
            <div>
              <label className="container"> <input type="checkbox" name="static" value={isStatic} checked={isStatic} onChange={handleChange} /> <span className="checkmark"></span>  Static</label>
              <label className="container"> <input type="checkbox" name="customise" value={isCustom} checked={isCustom} onChange={handleChange} /> <span className="checkmark"></span>  Customise</label>
              <label className="container"> <input type="checkbox" name="e_commerce" value={isCommerce} checked={isCommerce} onChange={handleChange} /> <span className="checkmark"></span>  E-Commerce</label>
            </div>
          </div>
  
  
          <div>
            <h2>Social Media Advertising</h2>
  
            <div>
              <label className="container" > <input   type="checkbox" name="facebook" value={isFacebook} checked={isFacebook} onChange={handleChange} /> <span className="checkmark"></span>  Facebook</label>
              <label className="container" > <input   type="checkbox" name="linkedIn" value={isLinkedin} checked={isLinkedin} onChange={handleChange} />  <span className="checkmark"></span>  Linkedin</label>
              <label className="container" > <input   type="checkbox" name="twitter" value={isTwitter} checked={isTwitter} onChange={handleChange} />  <span className="checkmark"></span>  Twitter</label>
              <label className="container" > <input   type="checkbox" name="instagram" value={isInstagram} checked={isInstagram} onChange={handleChange} />  <span className="checkmark"></span>  Instagram</label>
              <label className="container" > <input   type="checkbox" name="whatsapp" value={isWhatsapp} checked={isWhatsapp} onChange={handleChange} />  <span className="checkmark"></span>  Whatsapp</label>
            </div>
          </div>
  
          <div>
            <h2>Google Advert.</h2>
  
            <div>
              <label className="container" > <input type="checkbox" name="banner_advt" value={isBanner} checked={isBanner} onChange={handleChange} />  <span className="checkmark"></span>  Banner Advt.</label>
              <label className="container" > <input type="checkbox" name="text_advt" value={isText} checked={isText} onChange={handleChange} /> <span className="checkmark"></span>  Text Advt.</label>
              <label className="container" > <input type="checkbox" name="contextual_advt" value={isContext} checked={isContext} onChange={handleChange} />  <span className="checkmark"></span>  Contextual Advt.</label>
              <label className="container" > <input type="checkbox" name="re_marketing"  value={isMark} checked={isMark} onChange={handleChange} /> <span className="checkmark"></span>   Re-Marketing</label>
            </div>
          </div>
  
  
          <div>
            <h2>S.E.O (Search Engine Optimisation)</h2>
  
            <div>
              <label className="container" > <input type="checkbox" name="india"  value={isIndia} checked={isIndia} onChange={handleChange} />  <span className="checkmark"></span>  India</label>
              <label className="container" > <input type="checkbox" name="city_listing"  value={isCity} checked={isCity} onChange={handleChange} />  <span className="checkmark"></span>  City Listing</label>
              <label className="container" > <input type="checkbox" name="export_SEO" value={isExport} checked={isExport} onChange={handleChange}  />  <span className="checkmark"></span>  Export SEO</label>
            </div>
          </div>

  
  {/*
          <div>
            <h2>Mobile Application</h2>
            <label> <input type="checkbox" name="mobile_application" value={isApp} checked={isApp} onChange={handleChange} /> Customize</label>
          </div>
  
          <div>
            <h2>Software Development</h2>
            <label> <input type="checkbox" name="software_development" value={isDev} checked={isDev} onChange={handleChange} /> Customize</label>
          </div>
   */}

        </div>
  
  
        <hr style={{marginTop:"50px"}}/>
  
  {/*/////////////////// THIRD PART OF FORM ///////////////////////////////////////*/}
  
  
    <div className='third'>
          <h2>Mode of Payment</h2>
  
      <div className='pay-button'>                                                    


          <Button className='ment'
            variant="contained"
            color={open === "CHEQUE" ? "success" : "inherit"}
            onClick={() => handleChange({ target: { name: "payment", value: "CHEQUE" } })}
                >
              Cheque
              </Button>

          <Button className='ment'
           variant="contained"  
           color={open === "NEFT" ? "success" : "inherit"}
           onClick={() => handleChange({ target: { name: "payment", value: "NEFT" } })}   
            >
            NEFT
            </Button>
          
           <Button className='ment'
            variant="contained"
            color={open === "CASH" ? "success" : "inherit"}
            onClick={() => handleChange({ target: { name: "payment", value: "CASH" } })}     
              >
              Cash
              </Button>
       
          <Button className='ment'
           variant="contained"    
           color={open === "DD" ? "success" : "inherit"}
           onClick={() => handleChange({ target: { name: "payment", value: "DD" } })}    
           >
           DD
           </Button>
    
          <Button className='ment'
           variant="contained" 
           color={open === "UPI" ? "success" : "inherit"}
           onClick={() => handleChange({ target: { name: "payment", value: "UPI" } })}   
            >
            UPI
            </Button>
     
       </div>
 
          
  {
    open === "CHEQUE" ? (
   
      <div className='check-details'>  
          <div>
              <label>Bank Name : <input type="text" placeholder='Enter Bank Name' name="bank_name" value={bank_name} onChange={handleChange} /></label>
              <label>Cheque Number: <input type="number" placeholder='Enter Cheque Number' name="cheque_number" value={cheque} onChange={handleChange} /></label>
          </div>
          <div>
              <label>Cheque Date : <input type="date" name="cheque_date" value={cheque_date} onChange={handleChange} /></label>
              <label>Amount in Rupees : <input type="text" placeholder='₹₹₹₹₹₹₹₹₹₹ /-' name="rupee" value={rupee} onChange={handleChange} /></label>
          </div>
          <div>
              <label>Remarks : <input type="text" placeholder='Any Other Packeges / Requirements' name="remark" value={remark} onChange={handleChange} /></label>
          </div>
        </div>

         ): open === "NEFT" ? (
          <div className='neft'>
        
          <img src={flow} alt='' />
      </div>
          ) : open ==="CASH" ? (
            <div className='cash'>
              <img  src={shake} alt='' />
              <img src={cash} alt='' />
          </div>
          ) : open === "DD" ? (
            <div className='dd'>
                <img src={dd} alt='' />
            </div>
          ) : open === "UPI" ? (
            <div className='upi'>
              <img src={title} alt='' />
              <img src={QR} alt='' />
            </div>
          ) : (
            <div></div>
          )
        }

      </div>
  
 
        <hr style={{marginTop:"30px", marginBottom:"30px"}}/>
  
  
  {/*/////////////////// FOURTH PART OF FORM ///////////////////////////////////////*/}
      
 
        <div className='fourth'>
          <p><a style={{fontWeight:600}}>Client acknowledgment :</a> I/We have read, understtood and in agreement  with Contract Form terms & condition Printed overleaf and I/We agree and accept to be bound by said terms & conditions.</p>
  
          <div className='terms'>
            <label>Client Name :<input type="text" name="client_name" value={client_name} onChange={handleChange} style={companyClientError ? {border:"2px solid red"} : {}} /></label>
            <label>Designation :<input type="text" name="designation" value={designation} onChange={handleChange} /></label>
          </div>

   {/*
          <div className='sign'>
            <div className='client-sign'>
                    <input type="file"  />
                    <p>Client Signature (With Stamp)</p>
            </div>
            <div className="emp-sign">
              <p>Signature of Employee of </p>
              <label><a style={{fontWeight:700}}>Ask Digital Solutions :</a> <input type="file" /></label>
              <p>Service Mail : info@askdigital.org</p>
            </div>
          </div>  */}
        </div>
      
  
  {/*/////////////////// SUBMIT PART OF FORM ///////////////////////////////////////*/}
 
  <div className='prev-button'>
    <Button variant="contained" color="success" onClick={() => handleSubmit(formData, open)}>Preview</Button>
  </div>

  <div className='footer'>
          <a href='https://www.facebook.com/people/Ask-Digital-Solutions/100083113333301/'><img src={facebook} alt='' /></a>
          <a href='https://www.instagram.com/ask_digital.solution/'>  <img src={instagram} alt='' /></a>
          <a href='https://www.linkedin.com/in/ask-digital-solution/'> <img src={linkedin} alt='' /></a>
          <a href='https://www.youtube.com/channel/UC9dwS-U9WAnvn9z3w6QlAyQ'> <img src={youtube} alt='' /></a>
          <a href='https://wa.me/+9960550864'> <img src={whatsapp} alt='' /></a>
          <a href='https://twitter.com/askdigitalsolu2'> <img src={twitter} alt='' /></a>
  </div>

      </div>
    );
  }

export default Form;