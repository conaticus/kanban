import Container from "./components/Container";
import EditCardModal from "./components/Modal/EditModal";

const containers: IContainer[] = [
    {
        title: "Todo",
        cards: [
            { title: "Poop", description: "poop" },
            { title: "Poop", description: "poop" },
            { title: "Poop", description: "poop" },
            { title: "Poop", description: "poop" },
        ],
    },
    {
        title: "In Progress",
        cards: [
            { title: "Poop", description: "poop" },
            { title: "Poop", description: "poop" },
            { title: "Poop", description: "poop" },
            { title: "Poop", description: "poop" },
        ],
    },
];

function App() {
    return (
        <div className="containers-container">
            {containers.map((container) => (
                <Container container={container} />
            ))}
        </div>
    );
}

export default App;
