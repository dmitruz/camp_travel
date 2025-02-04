
type ButonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
}

const Button = ({ type, title, icon, variant }: ButonProps) => {
    return (
        <div>Button</div>
    )
}

export default Button