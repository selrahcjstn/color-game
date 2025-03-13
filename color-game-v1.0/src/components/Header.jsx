import CurrencyFormat from "../utils/CurrencyFormat";

function Header({ balance }) {
    return (
        <>
            <div className="bg-[#272626] text-[#fff] flex justify-between items-center p-6">
                <h1 className="flex flex-col justify-center text-[26px] font-bold"><span className="text-[12px]">🟥🟦🟨</span> Color Game</h1>
                <p className="text-[20px] bg-[#fff] text-black rounded-[40px] px-4 py-2 flex items-center">
                    Balance:
                    <span className="bg-[#272626] text-[#fff] px-2 py-1 ml-2 rounded-lg flex items-center">
                        {CurrencyFormat(balance)} <span className="ml-1">➕</span>
                    </span>
                </p>
            </div>
        </>
    );
}

export default Header;