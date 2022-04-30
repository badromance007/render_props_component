export default function Favorite2({on, toggle}) {
    return (
        <div>
            <h3>Click heart to favorite 222222222222222222222222</h3>
            <h1>
                <span 
                    onClick={toggle}
                >
                    {on ? "❤️" : "♡"}
                </span>
            </h1>
        </div>
    )
}
