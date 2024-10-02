export default Card1

function Card1() {
    return (
        <>
            <figure className="items-start w-[7.8rem] h-60 relative md:grid-cols-4">
                <h2 className="absolute right-0 top-0 text-[.50rem] font-semibold  [writing-mode:vertical-rl]" >PRODUCT OWNER</h2>
                <img className="w-28" src="img/photo1.png" alt="photo" />
                <figcaption className="font-bold">Bill Mahoney</figcaption>
            </figure>
        </>
    )

}