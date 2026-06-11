import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from  "./components/Footer"
import Card from  "./components/Card"
import BookFlight from "./components/BookFlight";
import RecentSearches from "./components/RecentSearches";
// import SearchBox from "./components/SearchBox";

export default function Home() {
  return (
    <main className="min-h-screen justify-center bg-white">
     <Navbar />
     <Hero />
     <RecentSearches />
     {/* <SearchBox /> */}
     <Card />
     <BookFlight />
     <Footer/>
    </main>
  );
}
