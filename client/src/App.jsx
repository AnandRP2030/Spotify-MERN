import { PaymentOtp } from "./Components/Payment/PaymentOtp";

import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { Signup } from "../src/Components/Login/SignUp/SignUp";
import TwitterHeart from "./Components/CommonComponents/LikeAnimation/LikeAnimation";
import NotFound from "./Components/CommonComponents/NotFoundPage/Notfound";
import { Home } from "./Components/Home/home";
import { Like } from "./Components/Like/like";
import { PaymentSuccess } from "./Components/Payment/PaymentSuccess";
import { Payment } from "./Components/Payment/payment";
import { PrivatePayment } from "./Components/Payment/plansDetails/PrivatePayment";
import Playlist from "./Components/Playlist/Playlist";
import { SearchPage } from "./Components/Search/SearchPage";
import { Upgrade } from "./Components/Upgrade/upgrade";
import Account from "./Components/Accounts/Accounts";
import PlaylistDetails from "./Components/Playlist/PlaylistComponent/PlaylistDetails";
import LyricsData from "./Lyrics/LyricsData";
import { NotPremium } from "./Lyrics/NotPremium";
import {Login} from "./Components/Login/SignUp/login"
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/like" element={<Like />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/test" element={<TwitterHeart />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/paymentotp" element={<PaymentOtp />} />
          <Route path="/account" element={<Account/>}/>
          <Route path="/lyrics" element={<LyricsData />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/playlistDetails" element={<PlaylistDetails/>}/>
          <Route path="/NotPremium" element={<NotPremium/>}/>
          

          <Route
            path="/payment"
            element={
              <PrivatePayment>
                <Payment />
              </PrivatePayment>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
