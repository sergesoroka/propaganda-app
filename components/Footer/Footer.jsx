import React from "react";
import Link from "next/link";
import { FaInstagramSquare, FaFacebookSquare, FaTelegram, FaYoutube } from "react-icons/fa";

import styles from './Footer.module.css'

// FaInstagramSquare

function Footer() {
  return (
    <div  className={styles.footerWrap}>
      <p className={styles.footerText}>© 2020 <span className={styles.footerTextBold}>VoxUkraine</span></p>
      <div className={styles.socialWrap}>
      <Link href="https://t.me/voxcheck">
          <a><FaTelegram /></a>
        </Link>
        <Link href="https://www.facebook.com/VoxCheck/">
          <a><FaFacebookSquare /></a>
        </Link>
        <Link href="https://www.youtube.com/c/VoxUkraineChannel">
          <a><FaYoutube /></a>
        </Link>
        <Link href="https://www.instagram.com/voxukraine/">
          <a><FaInstagramSquare /></a>
        </Link>
      </div>
      <p className={styles.footerText}>Created by <span className={styles.footerTextBold}>VoxCheck team</span></p>
    </div>
  );
}

export default Footer;
