import { useState } from "react";

function Bet({ children, setSelectedBet }) {
    const bets = [50, 100, 200, 500, 1000];
    const [activeBet, setActiveBet] = useState(null);

    function handleBetClick(bet) {
        setActiveBet(bet);
        setSelectedBet(bet);
    }

    return (
        <>
            <h1 className="text-[20px] font-bold">Bet Options</h1>
            <div className="flex gap-4">
                {bets.map((bet, index) => (
                    <div
                        key={index}
                        onClick={() => handleBetClick(bet)}
                        className={`cursor-pointer font-bold p-2 rounded flex-1 text-white
                            ${activeBet === bet ? "border-2 border-white bg-amber-500" : "bg-[#6047d1]"} 
                            hover:bg-[#8976dd]`}
                    >
                        {bet}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Bet;
