function Navigator({ className, children }) {
    return (
        <div className={`text-[26px] text-white bg-[#43396e]  text-center ${className}`}>{children}</div>
    );
}

export default Navigator;