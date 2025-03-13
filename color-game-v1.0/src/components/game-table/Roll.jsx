import { useState, useEffect } from "react";

function Roll({ colors, selectedColor, setSelectedColor, selectedBet, balance, setBalance }) {
    const [result, setResult] = useState([]);
    const [multiplyer, setMultiplyer] = useState(0);
    const [isWin, setIsWin] = useState(false);

    function gameResult() {
        // ✅ Prevent rolling if balance is too low
        if (balance < selectedBet) {
            alert('Insufficient balance! Please adjust your bet.');
            return;
        }

        if (selectedBet <= 0 || selectedColor.length === 0) {
            alert('Please select your bet and at least one color first!');
            return;
        }

        // ✅ Shuffle colors and pick 3 random ones
        const shuffledColors = [...colors].sort(() => Math.random() - 0.5);
        const randomColors = shuffledColors.slice(0, 3);
        setResult(randomColors);

        // ✅ Find matching colors
        const matchingColors = randomColors.filter(color => selectedColor.includes(color));
        setMultiplyer(matchingColors.length);

        // ✅ Update balance based on result
        if (matchingColors.length > 0) {
            setIsWin(true);
            setBalance(prev => prev + (selectedBet * matchingColors.length)); // Win case
        } else {
            setIsWin(false);
            setBalance(prev => prev - selectedBet); // Lose case
        }

        console.log("Selected Colors:", selectedColor);
        console.log("Randomly Selected Colors:", randomColors);
        console.log("Matching Colors:", matchingColors);
        console.log("Multiplier:", matchingColors.length);

        // ✅ Reset selected colors AFTER showing results
        setTimeout(() => {
            setSelectedColor([]);
        }, 2000); // Reset after 2 seconds
    }

    // ✅ Log new balance after it updates
    useEffect(() => {
        console.log("Updated Balance:", balance);
    }, [balance]);

    return (
        <div className="flex flex-col items-center  p-10 text-center space-y-6 mt-2 bg-gray-900 text-white ">
            <h1 className="text-2xl font-bold">Click to Select a Color</h1>

            {/* ✅ Show User's Bet */}
            <div className="text-lg font-bold bg-gray-800 px-6 py-3 rounded">
                Your Bet: <span className="text-amber-400">${selectedBet}</span>
            </div>

            {/* ✅ Display Selected Colors Before Rolling */}
            {selectedColor.length > 0 && (
                <div className="flex gap-2 justify-center">
                    <h2 className="text-lg font-bold">Selected Colors:</h2>
                    <div className="flex gap-2">
                        {selectedColor.map((color, index) => (
                            <div
                                key={index}
                                style={{ backgroundColor: color }}
                                className="w-10 h-10 rounded border-2 border-white"
                            />
                        ))}
                    </div>
                </div>
            )}

            <button
                onClick={gameResult}
                className="p-3 bg-green-500 text-white rounded w-full max-w-xs hover:bg-green-600 transition"
            >
                Get 3 Random Colors
            </button>

            {/* ✅ Display Result Colors */}
            {result.length > 0 && (
                <div className="p-6 bg-black rounded w-full max-w-lg shadow-lg">
                    <h2 className="text-lg font-bold mb-4">Game Result</h2>

                    <div className="flex justify-center gap-3">
                        {result.map((color, index) => (
                            <div
                                key={index}
                                style={{ backgroundColor: color }}
                                className={`w-14 h-14 rounded border-4 ${selectedColor.includes(color) ? "border-amber-400" : "border-transparent"
                                    }`}
                            />
                        ))}
                    </div>

                    <p className="mt-4 text-lg font-bold">Matching Colors: {multiplyer}</p>
                    <p className={isWin ? "text-green-400 font-bold" : "text-red-400 font-bold"}>
                        {isWin ? "You Win!" : "You Lose!"}
                    </p>
                    <p className="mt-2 text-lg font-bold">New Balance: ${balance}</p>
                </div>
            )}
        </div>
    );
}

export default Roll;
