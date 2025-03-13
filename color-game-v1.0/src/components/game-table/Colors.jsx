function Colors({ children }) {
    return (
        <div className="grid grid-cols-2 grid-rows-3 gap-4 p-4 bg-[#272626]">
            {children}
        </div>
    );
}

export default Colors;