
export const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}
// default props
Header.defaultProps = {
    title: 'Cocorouch'
}