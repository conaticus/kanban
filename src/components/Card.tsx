interface Props {
    card: ICard;
    onClickHandler: (e: React.MouseEvent<HTMLParagraphElement>) => void;
}

export default function Card({ card, onClickHandler }: Props) {
    return (
        <p onClick={onClickHandler} className="card">
            {card.title}
        </p>
    );
}
