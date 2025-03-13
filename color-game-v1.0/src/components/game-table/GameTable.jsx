import Container from "./Container";
import Navigator from "./Navigator";
import Colors from "./Colors";
import Box from "./Box";
import Bet from "./Bet";
import Roll from "./Roll";
import BetPerBox from "./BetPerBox";
import CurrencyFormat from "../../utils/CurrencyFormat";

import { useState } from "react";

function GameTable({ balance, setBalance }) {
    const [jackpot, setJackpot] = useState(10000);
    const [selectedBet, setSelectedBet] = useState(0);
    const [selectedColor, setSelectedColor] = useState([]);
    const colors = ['#645bb6', '#be6969', '#cacaca', '#bbb95a', '#4d8d7a', '#aa5fa0'];

    return (
        <div className="space-y-2 mx-2 rounded">
            <Container className={"bg-[#272626] p-4 flex justify-between items-center rounded gap-6"}>
                <Navigator className={"bg-[#6047d1] rounded-full w-10 text-center"}>📈</Navigator>
                <Navigator className={"text-[26px]  text-black rounded-[40px] flex-1 px-6 py-1 border-5 border-[#fcf8ff]"}>{CurrencyFormat(jackpot)}</Navigator>
                <Navigator className={"bg-[#6047d1] rounded-full w-10 text-center"}>🕝</Navigator>
            </Container>
            <Container className={"bg-[#272626] p-4 space-y-1"}>
                <Bet
                    setSelectedBet={setSelectedBet}
                />
            </Container>
            <Container>
                <Colors className={"grid grid-cols-2 grid-rows-3 gap-4 p-4 bg-[#272626]"}>
                    <Box colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor}>
                        <BetPerBox
                            selectedBet={selectedBet}
                        />
                    </Box>

                </Colors>
                <Roll
                    balance={balance}
                    setBalance={setBalance}
                    selectedColor={selectedColor}
                    selectedBet={selectedBet}
                    colors={colors}
                    setSelectedColor={setSelectedColor} />
            </Container>


        </div >
    );
}

export default GameTable;