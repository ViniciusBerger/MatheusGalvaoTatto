"use client"
import Header from "./components/header/header";
import MeetArtist from "./components/meetArtist/meetArtist";
import Landing from "./components/landing/landing";
import Footer from "./components/footer/footer";

export default function Home() {
    return (
    <div>
    <Header/>
    <Landing/>
    <MeetArtist/>
    <Footer color="black" textcolor="white"/>
    </div>
    )
}