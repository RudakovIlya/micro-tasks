type HeaderPropsType = {
    titleForHeader: string
}

export const Header = (props: HeaderPropsType) => {
    return (
        <>
            {props.titleForHeader}
        </>
    )
};