function Box({ colors, setSelectedColor, selectedColor, selectedBet, children }) {

    function getSelectedColor(color) {
        if (selectedBet <= 0) {
            alert('Select your bet first!');
            return;
        }

        // ✅ Prevent duplicate selections
        if (!selectedColor.includes(color)) {
            setSelectedColor(prevColors => [...prevColors, color]);
        }
    }

    return (
        <>
            {colors.map((color, index) => (
                <div
                    key={index}
                    onClick={() => getSelectedColor(color)}
                    style={{ backgroundColor: color }}
                    className={`cursor-pointer h-[104px] border-2 p-2 text-white font-bold hover:opacity-90 flex flex-col gap-2 items-center 
                        ${selectedColor.includes(color) ? "border-4 border-[#003af7]" : "opacity-95"}`} // ✅ Fixed "opacity-95" typo
                >
                    {children}
                </div>
            ))}
        </>
    );
}

export default Box;
