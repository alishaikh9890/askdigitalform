import React from 'react'
import "./Display.css"
import { Outlet, Link } from "react-router-dom";
import emailjs from 'emailjs-com';
import Button from '@mui/material/Button';
import Banner from "../assets/banner.jpeg"
import { Route, Routes, useNavigate } from "react-router-dom";
import instagram from "./../assets/instagram.jpeg";
import youtube from "./../assets/youtube.jpeg";
import facebook from "./../assets/facebook.jpeg";
import linkedin from "./../assets/linkedin.jpeg";
import whatsapp from "./../assets/whatsapp.jpeg";
import twitter from "./../assets/twitter.jpeg";

function Display({data}) {
  const navigate = useNavigate();

    const handleMail = () => {

        const emailParams = {
            to_email: 'info@askdigital.org', // Fixed recipient email
            to_name:data.company_name,
            sender_email:data.email, // Dynamic sender's email
            cc_to: data.email, // Send a copy to the sender
            
            date: data.date,

            company_name: data.company_name,

            address:data.address,
            
            mobile:data.mobile,
            
            email:data.email,

            gst:data.gst,
            
            reference_design:data.reference_design,

            web_type1: (data.static ? "Static, " : "" ),
            web_type2: (data.customise ? "Customise, " : ""),
            web_type3 : (data.e_commerce ?  "E-Commerce, " : ""),

            social1: (data.facebook ? "Facebook, " : "") , 
            social2: (data.linkedIn ? "LinkedIn, " : ""),
            social3: (data.twitter ? "Twitter, " : ""),
            social4: (data.instagram ? "Instagram, " : ""),
            social5: (data.whatsapp ?  "Whatsapp." : "") ,
            
            google1: (data.banner_advt ? "Banner Advt. " : "" ),
            google2: (data.text_advt ? "Text Advt. " : "" ),
            google3: (data.contextual_advt ? "Contextual Advt., " : "") ,
            google4: (data.re_marketing ?  "Re-Marketing, " : "") ,
            
            seo1: (data.india ? "India, " : ""),
            seo2: (data.city_listing ? "City Listing, " : ""),
            seo3: (data.export_SEO ?  "Export SEO, " : ""),
            
            // custom1: (data.mobile_application ? "Mobile Application, " : ""),
            // custom2: (data.software_development ?  "Software Development, " : "" ),
            pay:data.payment,
            
            bank_name:data.bank_name,
                        
            cheque_number:data.cheque_number,
                        
            rupee:data.rupee,
                        
            remark:data.remark,
                        
            client_name:data.client_name,

            designation:data.designation,

            from_name: "Ask Digital Solutions",
          };

          emailjs
          .send(
            'service_4qjnozo',
            'template_wwchvab',
            emailParams,
            'WXUJELhiAK_vxfNVh'
          )
          .then((response) => {
            console.log('Email sent successfully', response);
          })
          .catch((error) => {
            console.error('Error sending email', error);
          });

 navigate("/success");
    }

  return (
    <div className='Display'>
 <div className='header'>
    <img src={Banner} alt='' />
 </div>
    <h1>Preview Form</h1>
    <div className='details'>

    <h4 style={{display:"flex", flexDirection:"row-reverse", marginRight:"5%"}}>Date:{data.date}</h4>

        <table>

        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
           
            <tbody>

            {data.company_name !== "" ? (    <tr>  <td>Company Name </td> <td>:</td> <td>{data.company_name}</td>  </tr>) : ("")} 

            {data.address !== "" ? (     <tr>  <td>Address </td> <td>:</td> <td>{data.address}</td>  </tr>) : ("")} 
                
                <tr>  <td>Mobile No. </td> <td>:</td> <td>{data.mobile}</td>  </tr>
                
                <tr>  <td>Email Address </td> <td>:</td> <td>{data.email}</td>  </tr>
                
                <tr>  <td>Reference Design </td> <td>:</td> <td>{data.reference_design}</td>  </tr>

                <tr>  <td>Website Type</td>  <td>:</td> <td>{data.static ? "Static, " : ""} {data.customise ? "Customise, " : ""}  {data.e_commerce ?  "E-Commerce, " : ""} </td>  </tr>

                <tr>  <td>Social Media</td>  <td>:</td> <td>{data.facebook ? "Facebook, " : ""} {data.linkedIn ? "LinkedIn, " : ""}  {data.twitter ? "Twitter, " : ""} {data.instagram ? "Instagram, " : ""} {data.whatsapp ?  "Whatsapp." : "" }</td>  </tr>
                
                <tr>  <td>Google Advert.</td>  <td>:</td> <td>{data.banner_advt ? "Banner Advt. " : ""} {data.text_advt ? "Text Advt. " : ""}  {data.contextual_advt ? "Contextual Advt., " : ""} {data.re_marketing ?  "Re-Marketing, " : ""} </td>  </tr>
                
                <tr>  <td>S.E.O</td>  <td>:</td> <td>{data.india ? "India, " : ""} {data.city_listing ? "City Listing, " : ""}  {data.export_SEO ?  "Export SEO, " : ""} </td>  </tr>
                
                {/* 
                    <tr>  <td>Customizations</td>  <td>:</td> <td>{data.mobile_application ? "Mobile Application, " : ""} {data.software_development ?  "Software Development, " : ""}  </td>  </tr> 
                */} 
                
                <tr>  <td>Mode of Payment</td> <td>:</td>  <td>{data.payment}</td>  </tr>
                
                {
                   data.payment == "CHEQUE" ? (
                    <tr>  <td>Bank Name</td>  <td>:</td> <td>{data.bank_name}</td>  </tr>
                    ) : (<tr></tr>) 
                }    
                { 
                     data.payment == "CHEQUE" ? (
                    <tr>  <td>Cheque No.</td>  <td>:</td> <td>{data.cheque_number}</td>  </tr>
                    ) : (<tr></tr>) 
                }
                {  
                      data.payment == "CHEQUE" ? (
                    <tr>  <td>Rupees</td>  <td>:</td> <td>{data.rupee}</td>  </tr>
                    ) : (<tr></tr>) 
                }
                { 
                      data.payment == "CHEQUE" ? (
                    <tr>  <td>Remarks</td>  <td>:</td> <td>{data.remark}</td>  </tr>
                    ) : (<tr></tr>)
                }

                <tr>  <td>Client Name</td>  <td>:</td> <td>{data.client_name}</td>  </tr>

                <tr>  <td>Designation</td>  <td>:</td> <td>{data.designation}</td>  </tr>
             </tbody>
        </table>

        <div className='buttons'>  
          <Link to="/">
            <Button variant="contained" color="success" >Edit Form</Button>
          </Link>
          <Button variant="contained" color="success" onClick={handleMail}>Submit</Button>
        </div>
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
  )
}

export default Display