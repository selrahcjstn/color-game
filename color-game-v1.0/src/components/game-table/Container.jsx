function Container({ className, children }) {
    return (
        <div className={`${className} rounded`}>
            {children}
        </div>
    );
}

export default Container;                                                                                                                                                                                                                                                                                                                                      