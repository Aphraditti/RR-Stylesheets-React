import MenuItem from "./MenuItem"


export default function Menu({ menuStyle, menuItem }) {
    return (
        <div style={ menuStyle }>
            <h3>This is my menu </h3>
            <ul>
                <MenuItem menuItem={ menuItem } label="This is option 1" />
                <MenuItem menuItem={ menuItem } label="This is option 2" />
                <MenuItem menuItem={ menuItem } label="This is option 3" />
                <MenuItem menuItem={ menuItem } label="This is option 4" />
            </ul>
        </div>
    )
}