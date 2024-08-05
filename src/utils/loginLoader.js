import { redirect } from "react-router-dom";
import { authProvider } from "../auth";

export async function loginLoader() {
  if (authProvider.isAuthenticated) {
    return redirect("/dashboard");
  }
  return null;
}
