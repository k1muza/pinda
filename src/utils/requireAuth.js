import { replace } from "react-router-dom";


export async function requireAuth({ location }) {
    const user = localStorage.getItem('user');
    if (!user) {
      console.log("Redirecting to login...");
      window.location.href = "/login";
    }
    return null;
  }
  