"use client"
import Header from "./_components/header/header";
import MeetArtist from "./_components/meetArtist/meetArtist";
import Landing from "./_components/landing/landing";
import Footer from "./_components/footer/footer";

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