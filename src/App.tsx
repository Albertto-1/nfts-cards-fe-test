function App() {
    return (
        <div className="bg-black h-screen w-screen overflow-y-scroll flex flex-col gap-2">
            {/* NAV section */}
            <section className={[
                "p-4 z-10 relative",
                "sticky top-0",
                "bg-[#090A0D]/[0.5] backdrop-blur-[5px]",
            ].join(" ")}>
                <div className="max-w-8xl mx-auto flex items-center justify-between relative">
                    <img className="cursor-pointer" src="https://www.alturanft.com/logo-svg.svg" alt="Altura" />
                </div>
            </section>

            {/* CONTENT section */}
            <section className={[
                "max-w-8xl mx-auto relative",
                "w-full",
                "text-white text-lg",
            ].join(" ")}>

            </section>
        </div>
    );
}

export default App;
