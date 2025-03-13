import { useState } from "react";
import Header from "./Header";
import GameTable from "./game-table/GameTable";
function Game() {
    const [balance, setBalance] = useState(1001)
    return (
        <div className="space-y-2">
            <Header
                balance={balance}
                setBalance={setBalance}
            />
            <GameTable
                balance={balance}
                setBalance={setBalance}
            />
        </div>
    );
}

export default Game;
