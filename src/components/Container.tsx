import { useState } from "react";
import Card from "./Card";
import EditCardModal from "./Modal/EditModal";

interface ModalState {
    isOpen: boolean;
    card?: ICard;
}

export default function Container({ container }: { container: IContainer }) {
    const closedModalState: ModalState = { isOpen: false, card: undefined };
    const [modalState, setModalState] = useState(closedModalState);

    return (
        <div className="container">
            <h2>{container.title}</h2>

            {container.cards.map((card, idx) => (
                <Card
                    onClickHandler={() => setModalState({ isOpen: true, card })}
                    card={card}
                />
            ))}

            <button
                onClick={() => setModalState({ isOpen: true, card: undefined })}
            >
                Create Card
            </button>

            <EditCardModal
                closeModal={() => setModalState(closedModalState)}
                isOpen={modalState.isOpen}
                card={modalState.card}
            />
        </div>
    );
}
