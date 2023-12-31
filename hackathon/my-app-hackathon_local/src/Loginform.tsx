import React, { useState } from 'react';
import { signOut } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification,} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { fireAuth } from "./firebase";


const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Signup = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    alert("ログインユーザー: " + user.displayName);
    sendEmailVerification(user)
    })
    .catch((err) => {
    alert(err);
  });
  }

  const signInWithEmailandPassword = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: { user: any; }) => {
      const user = userCredential.user;
      alert("ログインユーザー: " + user.displayName);
      }).catch((err: any) => {
        alert(err);
  });
  }

  const signOutWithEmailAndPassword = () => {
    signOut(fireAuth).then(() => {
      alert("ログアウトしました");
    }).catch(err => {
      alert(err);
    });
  }
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault()
  }
  

  return (
    <div>
      <button onClick={signInWithEmailandPassword}>
        メール・パスワードでログイン
      </button>
      <button onClick={signOutWithEmailAndPassword}>
        ログアウト
      </button>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input
          type="string"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </form>
      <form onSubmit={handleSubmit}>
        <label>Password: </label>
        <input
          type="string"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type={"submit"} onClick={Signup} >サインアップ</button>
      </form>
    </div>
    
  );
};
export default LoginForm;