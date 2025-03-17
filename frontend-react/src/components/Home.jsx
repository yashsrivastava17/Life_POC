// This is the main homepage component with options for quick capture, recording previous 60 seconds, and starting daily notes.
// Classes and Objects Reference: See CLASSES_AND_OBJECTS.md for its role in overall navigation and interaction.

/*
--
[Write a React component in JSX named Home that contains buttons for "Record last 60 seconds", "Start Recording", and navigation to other tabs. Use Tailwind CSS for styling and include comments.]
--
<details>
<summary>Explanation</summary>
Home.jsx provides navigation and quick access to recording functions.
</details>
*/

// Example placeholder implementation:
// Home.jsx:
// Main homepage with options for quick capture, recording last 60 seconds, etc.

import React, { useRef } from "react";
import AudioRecorder from "./AudioRecorder";

const Home = () => {
  const recorderRef = useRef(null);

  // Simulate capturing last 60 seconds
  const recordLast60Sec = () => {
    if (recorderRef.current) {
      recorderRef.current.startRecording();
      setTimeout(() => {
        recorderRef.current.stopRecording();
      }, 60000);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Beads Audio Lite</h1>
      <div className="flex flex-col space-y-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={recordLast60Sec}
        >
          Record Last 60 Seconds
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => recorderRef.current?.startRecording()}
        >
          Start Recording
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() => alert("Daily Notes coming soon!")}
        >
          Daily Note
        </button>
      </div>

      {/* Pass ref so Home can trigger recording */}
      <AudioRecorder ref={recorderRef} />
    </div>
  );
};

export default Home;