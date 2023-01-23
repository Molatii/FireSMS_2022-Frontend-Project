import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import DisplayDevelopers from "./Components/LandingPageContents/Developers/DisplayDevelopers";
import Signin from "./Components/Sign In/signin";
import Signup from "./Components/Sign Up/signUp";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ResetPassword/restPassword";
import DisplayApi from "./Components/Dashboard/SubComponents/user_API_KEY/display_Api";
import DisplayBalance from "./Components/Dashboard/SubComponents/AccountBalance/displayBalance";
import DisplayDevelopersDocs from "./Components/Dashboard/SubComponents/Developers/displayDevelopers";
import DisplayHome from "./Components/Dashboard/SubComponents/Home/displayHome";
import DisplayPrices from "./Components/Dashboard/SubComponents/Pricing/displayPrices";
import DisplayBatch from "./Components/Dashboard/SubComponents/SMSBatch/displayBatch";
import DisplayBulk from "./Components/Dashboard/SubComponents/SMSBulk/displayBulk";
import DisplayHistory from "./Components/Dashboard/SubComponents/SMSHistory/displayHistory";
import DisplaySMS from "./Components/Dashboard/SubComponents/SMSSend/displaySMS";
import DisplayProfile from "./Components/Dashboard/SubComponents/UserProfile/displayProfile";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password/:resetId" element={<ResetPassword />} />
        <Route path="/docs" element={<DisplayDevelopers />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/dashboard/account-balance" element={<DisplayBalance />} />
        <Route path="/dashboard" element={<DisplayHome />} />
        <Route path="/dashboard/sms" element={<DisplaySMS />} />
        <Route path="/dashboard/sms-history" element={<DisplayHistory />} />
        <Route path="/dashboard/sms-bulk" element={<DisplayBulk />} />
        <Route path="/dashboard/sms-batch" element={<DisplayBatch />} />
        <Route path="/dashboard/pricing" element={<DisplayPrices />} />
        <Route path="/dashboard/docs" element={<DisplayDevelopersDocs />} />
        <Route path="/dashboard/profile" element={<DisplayProfile />} />
        <Route path="/dashboard/api-key" element={<DisplayApi />} />
      </Routes>
    </Box>
  );
}
export default App;
