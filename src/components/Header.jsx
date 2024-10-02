export default Header

function Header() {
    return (
        <>
            <div className="md:flex md:p-4 justify-between">
                <h1 className="font-bold text-[1.8rem] mb-8 md:grid-cols-6">The creative crew</h1>
                <div className="md:w-56 md:ml-4">
                <h2 className="font-bold mb-3">WHO WE ARE</h2>
                <p className="text-balance text-sm ">We are team of creatively diverse. driven. innovative individuals working in various locations from the world.</p>
                </div>
                
            </div>

        </>
    )

}