import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate()  

  const [errorMessage, setErrorMessage] = useState(""); // Pour afficher les erreurs à l'utilisateur
  const [isSigningIn, setIsSigningIn] = useState(false); // Pour empêcher plusieurs tentatives simultanées

  const signInWithGoogle = async () => {
    if (isSigningIn) return; // Empêche d'ouvrir plusieurs popups en même temps
    setIsSigningIn(true);
    setErrorMessage(""); // Réinitialiser l'erreur avant de commencer

    try {
     await signInWithPopup(auth, provider);
      navigate("/")
      // Ici, tu peux traiter le résultat, comme sauvegarder les infos de l'utilisateur
    } catch (error) {
      console.error("Error during sign-in: ", error);
    }
  };

  return (
    <div>
      <p>Login with your Google account to continue!</p>
      <button onClick={signInWithGoogle} disabled={isSigningIn}>
        {isSigningIn ? "Connexion en cours..." : "Login with Google"}
      </button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};
