import { useContext } from "react"
import StyleContext from "../contexts/StyleContext"

export default function Aside() {
    const { aside, innerAside } = useContext(StyleContext)
    return <div style={ aside }>
        <h4>This is the aside like a side bar type thing</h4>
        <h5 style={ innerAside }>This is another thing</h5>
    </div>
}