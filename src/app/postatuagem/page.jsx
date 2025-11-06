"use client"
import Content from "./content/content"
import Header from "../components/header/header"
import Banner from "./banner/banner"
import Footer from "../components/footer/footer"
export default function page() {

    return (
        <div>
        <Header/>
        <Banner/>
        <Content/>
        <Footer color="black" textcolor="white"/>
        </div>
    )
}