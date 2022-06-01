import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SplashPage from "../pages/public/splash";
import BridgePage from "../pages/public/bridge";
import LandingPage from "../pages/public/landing";
import LoginPage from "../pages/public/login";
import SignupPage from "../pages/public/signup";
import SendEmail from "../pages/public/sendEmailOpt";
import Otp from "../pages/public/otp";
import ConfirmPassword from "../pages/public/confirmPassword";
import ForgotSuccess from "../pages/public/forgotSuccess";
import AccountVerify from "../pages/public/accountVerify";
import StartInfo from "../pages/private/landing";
import EmailPhoneOtp from '../pages/public/emailPhoneOtp'
import EmailPhoneVerify from '../pages/public/emailPhoneVerify'

import JobRole from '../pages/private/jobRole'
import JobTitle from '../pages/private/jobTitle'
import ChooseIndustry from '../pages/private/chooseIndustry'
import EducationLevel from '../pages/private/educationLevel'
import SkillLevel from '../pages/private/skillLevel'
import Location from '../pages/private/location'
import CompanySize from '../pages/private/companySize'
import Salary from '../pages/private/salary'
import RoleStepComplete from '../pages/private/roleStepComplete'

import SkillStep1 from '../pages/private/skillStep1'
import SkillStep2 from '../pages/private/skillStep2'
import SoftSkillStep1 from '../pages/private/softSkillStep1'
import SoftSkillStep2 from '../pages/private/softSkillStep2'
import HardStepOne from '../pages/private/hardStep1'
import HardStepTwo from '../pages/private/hardStep2'
import HardStepThree from '../pages/private/hardStep3'
import HardStepFour from '../pages/private/hardStep4'
import HardStepFive from '../pages/private/hardStep5'
import UploadVideo from '../pages/private/uploadVideo'
import ProfileComplete from '../pages/private/profileComplete'
import ProfileCompleteCongrats from '../pages/private/profileCompleteCongrats'
import EnhanceProfile from '../pages/private/enhanceProfile'
import PaymentMethod from '../pages/private/paymentMethod'
import AddCard from '../pages/private/addCard'
import PurchaseMethod from '../pages/private/purchaseMethod'
import PurchaseComplete from '../pages/private/purchaseComplete'
import {useSelector} from 'react-redux'



function Routers() {
  const userData = useSelector(state => state.UserAuth);
  const [isLogin, setIsLogin] = useState(userData.isLogin);
 
 
  // const userData = useSelector(state => state.UserAuth);
  // const isAuth = userData.isLogin;
  // console.log('sjfhaksjfhksahf -------', userData);
  console.log('get user update state -------', isLogin);

useEffect(()=>{
  // setIsLogin(userData.isLogin)
},[])



  const PublicRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/bridge" element={<BridgePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/sendEmail" element={<SendEmail />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/cmnPassword" element={<ConfirmPassword />} />
        <Route path="/forgotSuccess" element={<ForgotSuccess />} />
        <Route path="/accountVerify" element={<AccountVerify />} />
        <Route path="/emailPhoneVerify" element={<EmailPhoneVerify />} />
        <Route path="/emailPhoneOtp" element={<EmailPhoneOtp />} />

        {/* "/emailPhoneVerify/emailPhoneOtp */}
        {/* <Route
          path="/profile"
          element={isAuth ? <Profile /> : <Navigate to="/login" replace />}
        /> */}
      </Routes>
    );
  };

const PrivateRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<StartInfo />} />
        <Route path="/jobRole" element={<JobRole />} />
        <Route path="/jobTitle" element={<JobTitle />} />
        <Route path="/chooseIndustry" element={<ChooseIndustry />} />
        <Route path="/educationLevel" element={<EducationLevel />} />
        <Route path="/skillLevel" element={<SkillLevel />} />
        <Route path="/location" element={<Location />} />
        <Route path="/companySize" element={<CompanySize />} />
        <Route path="/salary" element={<Salary/>} />
        <Route path="/roleStepComplete" element={<RoleStepComplete/>} />

        <Route path="/skillStep1" element={<SkillStep1/>} />
        <Route path="/skillStep2" element={<SkillStep2/>} />
        <Route path="/softSkillStep1" element={<SoftSkillStep1/>} />
        <Route path="/softSkillStep2" element={<SoftSkillStep2/>} />

        <Route path="/hardStep1" element={<HardStepOne/>} />
        <Route path="/hardStep2" element={<HardStepTwo/>} />
        <Route path="/hardStep3" element={<HardStepThree/>} />
        <Route path="/hardStep4" element={<HardStepFour/>} />
        <Route path="/hardStep5" element={<HardStepFive/>} />
        <Route path="/profileComplete" element={<ProfileComplete/>} />
        <Route path="/profileCompleteCongrats" element={<ProfileCompleteCongrats/>} />
        <Route path="/enhanceProfile" element={<EnhanceProfile/>} />
        <Route path="/paymentMethod" element={<PaymentMethod/>} />
        <Route path="/addCard" element={<AddCard/>} />
        <Route path="/purchaseMethod" element={<PurchaseMethod/>} />
        <Route path="/purchaseComplete" element={<PurchaseComplete/>} />
        <Route path="/uploadVideo" element={<UploadVideo/>} />
        
      </Routes>
    );
  };

  return (
    <BrowserRouter>
      { isLogin ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
}

export default Routers;
