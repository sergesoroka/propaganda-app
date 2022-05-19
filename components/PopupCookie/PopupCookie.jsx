import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import styles from "./PopupCookie.module.css";

export default function PopupCookie() {
  return (
    <div className={styles.cookiePopup}>
      <CookieConsent
        className={styles.CookieConsent}
        disableStyles
        location="none"
        buttonText="I understant"
        style={{ padding: "2rem 0" }}
        buttonStyle={{
          color: "#fff",
          fontSize: "1rem",
          background: "#056A1F",
          border: "none",
          padding: ".6rem 1.2rem",
          cursor: "pointer",
          marginTop: "2rem",
        }}
        cookieName="myAwesomeCookieName2"
        overlay
        overlayClasses="overlayclass"
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}
