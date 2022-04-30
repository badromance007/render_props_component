import {Component, useEffect, useState} from "react"

export default function DataFetcher(props) {
    const [allState, setAllState] = useState({
        loading: false,
        data: null
    })

    useEffect(() => {
        setAllState(prevState => ({
            ...prevState,
            loading: true
        }))

        fetch(props.url).then(res => res.json())
                        .then(data => setAllState({data: data, loading: false}))
    }, [])

    return (
        props.children(allState)
    )
}

// class DataFetcher extends Component {
//     state = {
//         loading: false,
//         data: null
//     }
    
//     componentDidMount() {
//         this.setState({loading: true})
//         fetch(this.props.url)
//             .then(res => res.json())
//             .then(data => this.setState({data: data, loading: false}))
//     }
    
//     render() {
//         return (
//             this.props.children(this.state.data, this.state.loading)
//         )
//     }
// }

// export default DataFetcher