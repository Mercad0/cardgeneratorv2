
import { Inter } from 'next/font/google'
import { useState } from "react";

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [topSuit, setTopSuit] = useState("");
  const [bottomSuit, setBottomSuit] = useState("");
  const [luckyNumber, setLuckyNumber] = useState("");

  const randomNumbers = function () {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "LOL",
    ];
    let theseNumb = Math.floor(Math.random() * numbers.length);
    return numbers[theseNumb];
  };

  const randomSuit = function () {
    let suit = ["♥", "♦", "♠", "♣"];
    let theseSuit = Math.floor(Math.random() * suit.length);
    
    return suit[theseSuit];
  };

  const handleDeal = () => {
    const newTopSuit = randomSuit();
    setTopSuit(newTopSuit);
    setBottomSuit(newTopSuit);
    setLuckyNumber(randomNumbers());
  };

  
  return (
    <div className="w-full h-[100vh] bg-green-700 pt-40 text-center">
      <div className="w-[280px] h-[380px] bg-white m-auto flex flex-col justify-center items-center relative rounded-lg">
      <div className={`text-7xl absolute left-0 top-0 ${topSuit === "♥" || topSuit === "♦" ? "text-red-500" : ""}`}>{topSuit}</div>
        <div className="text-7xl">{luckyNumber}</div>
        <div className={`text-7xl rotate-180 absolute bottom-0 right-0 ${bottomSuit === "♥" || bottomSuit === "♦" ? "text-red-500" : ""}`}>{bottomSuit}</div>
      </div>
        <button className="bg-red-500 hover:bg-lime-400 text-black font-bold py-2 px-4 rounded mt-4" onClick={handleDeal}>
          Deal
        </button>
    </div>
  );
}
