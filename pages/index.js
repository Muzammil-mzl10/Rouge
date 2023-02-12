/** @format */

import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import HomePage from "../components/HomePage";
export default function Home() {
  return (
    <div className="relative w-full h-fit font-roboto">
      <HomePage />
      <Footer />
    </div>
  );
}
