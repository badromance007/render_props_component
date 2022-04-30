export default function Menu({on, toggle}) {
    return (
        <div>
            <button onClick={toggle}>{on ? "Hide" : "Show"} Menu 22222222222222222222222</button>
            <nav style={{display: on ? "block" : "none"}}>
                <h6>Signed in as Coder456</h6>
                <p><a>Your Profile</a></p>
                <p><a>Your Repositories</a></p>
                <p><a>Your Stars</a></p>
                <p><a>Your Gists</a></p>
            </nav>
        </div>
    )
}