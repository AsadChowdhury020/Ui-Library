import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-4xl mx-auto space-y-6">

        <h1 className="text-3xl font-bold text-gray-800 text-center">
          UI Component Library
        </h1>

        {/* Buttons */}
        <Card>
          <h1 className="text-xl font-bold text-gray-800 text-center mb-5">
          Buttons
        </h1>
          <div className="flex justify-around ">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Delete</Button>
          </div>
        </Card>

        {/* Card */}
        <Card>
          <h1 className="text-xl font-bold text-gray-800 text-center mb-5">
          Card
        </h1>
          <p>
            This is a reusable card component used to display
            structured content in a clean way.
          </p>
        </Card>

        {/* Modal */}
        <Card >
          <h1 className="text-xl font-bold text-gray-800 text-center mb-5">
          Modal
        </h1>
          <Button onClick={() => setOpen(true)}>
            Open Modal
          </Button>
        </Card>

        <Modal isOpen={open} onClose={() => setOpen(false)}>
          Are you sure you want to continue?
        </Modal>

      </div>
    </div>
  );
}

export default App;