import { useState } from "react"

export default function Toggler(props) {
    const [on, setOn] = useState(props.defaultOnValue)

    function toggle() {
        setOn(prevState => !prevState)
    }

    return (
        <div>
            {props.render(on, toggle)}
        </div>
    )
}

Toggler.defaultProps = {
    defaultOnValue: false
}