import { Box, Button,  Typography } from '@mui/material'
import React, { useState } from 'react'
import login from './Images/Rectangle 15.png'
import logo from './Images/logo.png'
import exo from './Images/Frame 45 2.png'
import LanguageIcon from '@mui/icons-material/Language';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Alert from '@mui/material/Alert';
export default function Login() {
const [email , setEmail]=useState('')
const [password, setPassword] = useState('')
const[error1 , setError1] = useState(false)
const[emailerror , setEmailerror] = useState(false)
const[passerror , setPasserror] = useState(false)
const[success , setSuccess] = useState(false)
// const[errormessage , setErrormessage] = useState('')
const[button , setButton] = useState(false)
const changeemail = (e)=>{
   setEmail(e.target.value)
}
const changepass = (e)=>{
    setPassword(e.target.value)
 }

const[values , setValues] = useState({
    email:'' , 
    password:'',
})


const submit = () => {
    if (!email || !password) {
      setError1(true);
      setTimeout(() => {
        setError1(false);
      }, 2000);
    } else if (!validateEmail(email)) {
      setEmailerror(true);
      setTimeout(() => {
        setEmailerror(false);
      }, 2000);
    } else if (password.length <= 6) {
      setPasserror(true);
      setTimeout(() => {
        setPasserror(false);
      }, 2000);
    } else {
      setSuccess(true);
      setValues({
        email:email,
        password:password,
      })
      setButton(true)
      setTimeout(() => {
        setSuccess(false);
        setButton(false)
      }, 2000);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
console.log(values)
  return (
    <>
    <Box sx={{background:"#fff" ,  height:{lg:"100vh" , xs:"auto" , xl:"100vh"}, display:"flex" ,flexDirection:"column"  , alignItems:"center !important"  , gap:{sm:"40px" , xs:"0px"} , justifyContent: error1 || success || emailerror || passerror ? 'start' : 'center' }}>
   {
    error1 &&
        <Alert severity="error" sx={{ borderRadius:"0px" , alignSelf:"flex-end"}}>Please Fill the Fields...</Alert>
   }{
     success &&
     <Alert  severity="success" sx={{ borderRadius:"0px" , alignSelf:"flex-end" }}>Login Successfully 😎</Alert>
   }
     {emailerror &&  <Alert severity="warning" sx={{ borderRadius:"0px" , alignSelf:"flex-end"}}>Enter a valid email address</Alert>}
     {passerror &&   <Alert severity="warning" sx={{ borderRadius:"0px" , alignSelf:"flex-end"}}>Password must be greater</Alert>}
       <Box sx={{width:{lg:"87%" , xs:"auto" , xl:"70%"},margin:{lg:"0" , xs:"1.5em 1.5em"},minWidth:"300px", height:{lg:"550px" , xs:"auto"}, boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)" , border: "2px solid rgba(255, 255, 255, 0.06)" , display:"flex" , flexWrap:{lg:"nowrap" , xs:"wrap"} , justifyContent:"center" ,alignItems:"center" ,padding:{lg:"0" , xs:"0.5em 0.5em"}}}>
       <Box sx={{ width: "55%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
  <div style={{ position: "relative" }}>
    <img src={login} alt="" width={500} style={{ alignSelf: { sm: "center", xs: "start" } }} className='img1' />
    <Box sx={{ position: "absolute", top: "10%", left:{sm:"8%" ,xs:"11%"}, transform: "translate(-50%, -50%)" , color:"whitesmoke" }}>
     <img src={exo} alt="" width={50} />
    </Box>
    <Box sx={{ position: "absolute", top: "50%", left: "35%", transform: "translate(-50%, -50%)"  }}>
     <Typography sx={{fontSize:{sm:"30px" , xs:"24px"}, fontWeight:"700" , color:"#fff"}}>100% Uptime😎 </Typography>
     <Typography sx={{fontSize:{sm:"25px" , xs:"24px"}, fontWeight:"500", color:"#BFBFBF"}}>Zero Infrastructure Management</Typography> 
     <Box sx={{display:"flex" , marginTop:"0.7em" , gap:"5px" , alignItems:"center"}}>
        <Box sx={{width:"20px" , height:"6px" , background:"#fff" , borderRadius:"74px"}}></Box>
        <Box sx={{background:"rgba(255, 255, 255, 0.31)" , width:"4.87px" , height:"5.49px" , borderRadius:"50%"}}></Box>
        <Box sx={{background:"rgba(255, 255, 255, 0.31)" , width:"4.87px" , height:"5.49px" , borderRadius:"50%"}}></Box>
     </Box>
    </Box>
    <Box sx={{ position: "absolute", bottom: "2%", left:{sm:"12.5%" , xs:"17.5%"}, transform: "translate(-50%, -50%)"  }}>
    <Box sx={{display:"flex"  , gap:"2px", alignItems:"center"}}>
       <LanguageIcon sx={{color:"#bfbfbf" , transform:"Scale(0.8)"}}/>
       <Typography sx={{fontSize:{sm:"12px" , xs:"12px"}, fontWeight:"400", color:"#BFBFBF"}}>aesthisia.com</Typography> 
        </Box>
        </Box>
        <Box sx={{ position: "absolute", bottom: "0.7%", right:{sm:"0%" , xs:"-4%"}, transform: "translate(-50%, -50%)"  }}>
       <LinkedInIcon sx={{color:"#bfbfbf" , transform:"Scale(0.8)"}}/>
       <FacebookOutlinedIcon sx={{color:"#bfbfbf" , transform:"Scale(0.8)"}}/>
       <InstagramIcon sx={{color:"#bfbfbf" , transform:"Scale(0.8)"}}/>
            </Box>
  </div>
</Box>
              <Box sx={{width:{lg:"50%" , md:"500px", xs:"100%"} ,height:"100%" , display:"flex" , flexDirection:"column" , padding:{lg:"0em",xs:"1em 2em"} , gap:"7px", justifyContent:"center" , alignItems:"center"}}>
                <Box sx={{display:"flex" , justifyContent:"center" , alignItems:"center"  , flexDirection:"column" }}>
               <img src={logo} alt="" width={40} />
                <Typography sx={{fontSize:{sm:"34px" , xs:"26px"} , alignSelf:"center" , fontWeight:"500"}} className='body1'>Welcome <span style={{color:"#08A593"}}>Back!</span> </Typography>
                <Typography sx={{fontSize:{sm:"15px" , xs:"14px"} , alignSelf:"center" , color:"#667085", fontWeight:"400" }} className='body1'>Glad to see you, Again!</Typography>
                </Box>
                  <Box sx={{ display:"flex" , flexDirection:"column" , gap:"px", width:{lg:"340px" , xs:"100%"} , marginTop:"1.5em"}}>
                    <input type="email" name="email" id="" placeholder='Enter your email' required value={email} onChange={changeemail} style={{border:" 1px solid #464660" , borderRadius:"10px" , height:"45px" , width:"100%" , alignSelf:"center" , opacity:"0.45"}} />
                    <input type="password" name="password" id="" placeholder='Enter your password' required value={password} onChange={changepass} style={{border:" 1px solid #464660" , borderRadius:"10px" , height:"45px" , width:"100%" , alignSelf:"center" , opacity:"0.45" , marginTop:"1.5em"}}  />
                    <Typography sx={{alignSelf:"end",  color:"#667085", fontWeight:"400", fontSize:"13px" }}>Forgot Password?</Typography>
                    </Box>
                    <Box sx={{ display:"flex" , flexDirection:"column" , gap:"52px", width:{sm:"360px" , xs:"100%"}}}>
                    {
        button ? (  <Button variant='contained' disabled sx={{background:'#020100' , color:"#fff !important" , fontWeight:"700 !important" , width:"100%" , height:"3.5em" , alignSelf:"center" , marginTop:"2.2em" , boxShadow:" 0px 20px 32px rgba(2, 1, 0, 0.42)", borderRadius:"10px", textTransform:"none"}} onClick={submit} className='body1'>Log-in</Button>)
        :
        (  <Button variant='contained' sx={{background:'#020100 !important' , color:"#fff !important" , fontWeight:"700 !important" , width:"100%" , height:"3.5em", alignSelf:"center" , marginTop:"2.2em" , boxShadow:" 0px 20px 32px rgba(2, 1, 0, 0.42)", borderRadius:"10px" , textTransform:"none"}} onClick={submit} className='body1'>Log In</Button>)
    }

                  <Typography sx={{alignSelf:"center" , color:"#667085", fontWeight:"400", fontSize:{sm:"14px" , xs:"13px"} }} className='body1'>Don’t have an account yet? <span style={{color:"#08a593"}}>Sign Up </span> </Typography>
                  </Box>
              </Box>
       </Box>
    </Box>
    </>
  )
}
