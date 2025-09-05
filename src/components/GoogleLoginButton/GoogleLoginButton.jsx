"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
export default function GoogleLoginButton() {
    const buttonDiv = useRef(null);
    const router = useRouter();
    const id =
      "283062755565-snjllf1872smur7dc82chrsmmbativg8.apps.googleusercontent.com";
  useEffect(() => {
    if (window.google && buttonDiv.current) {
      window.google.accounts.id.initialize({
        client_id: id,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(buttonDiv.current, {
        theme: "outline",
        size: "large",
        shape: "pill",
        width: 405,
      });

      // Optional: Show One Tap
      // window.google.accounts.id.prompt();
    }
  }, []);

  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);

    const base64Url = response.credential.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const userInfo = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
      console.log("User Info:", JSON.parse(userInfo));
      if (userInfo) {
          localStorage.setItem("UserInfo", JSON.stringify(userInfo)) || [];
          router.push("/Home");
      }
  };

  return <div ref={buttonDiv}></div>;
}
