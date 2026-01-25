type Props = {
    title: string
    onClick?: () => void
    disabled?: boolean
}

export const Button = ({ title, onClick, disabled }: Props) => {

    // const onClickHandler = () => {
    //     onClick()
    // }

    return <button
        onClick={onClick}
        disabled={disabled}>{title}</button>
}