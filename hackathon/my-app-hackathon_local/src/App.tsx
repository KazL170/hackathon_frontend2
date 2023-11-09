import logo from "./logo.svg";
import "./App.css";
import { SetStateAction, useState, useEffect } from "react";
import LoginForm from "./Loginform";
import { onAuthStateChanged } from "firebase/auth";
import { fireAuth } from "./firebase";
import Contents from "./Contents";

type user = {
  id: string;
  name: string;
  item_category: string;
  curriculum_category: string;
  detail: string;
  url: string;
  update_time: string;
};

function App() {
  const [loginUser, setLoginUser] = useState(fireAuth.currentUser);
  
  // ログイン状態を監視して、stateをリアルタイムで更新する
  onAuthStateChanged(fireAuth, user => {
    setLoginUser(user);
  });



  return (
      <>
      <LoginForm />
      {/* ログインしていないと見られないコンテンツは、loginUserがnullの場合表示しない */}
      {loginUser ? <Contents /> : null}
    </>
  ); 
};


export default App;