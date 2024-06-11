import { FormEvent } from "react";
import Modal from "./Modal";

interface Props {
    isOpen: boolean;
    closeModal: () => void;
    card?: ICard;
}

export default function EditCardModal({ isOpen, closeModal, card }: Props) {
    function editCard(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // Make funni request - if card is undefined, create, otherwise, edit

        closeModal();
    }

    return (
        <Modal isOpen={isOpen}>
            <form onSubmit={editCard}>
                <input placeholder="Title" value={card?.title} />

                <textarea
                    placeholder="Description"
                    value={card?.description}
                ></textarea>

                <div className="btn-container">
                    <button className="btn" onClick={closeModal}>
                        Cancel
                    </button>
                    <button className="btn" type="submit">
                        Confirm
                    </button>
                </div>
            </form>
        </Modal>
    );
}
