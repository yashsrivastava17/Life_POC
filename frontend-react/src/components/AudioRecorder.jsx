// This component handles audio recording using the MediaRecorder API.
// Classes and Objects Reference: See CLASSES_AND_OBJECTS.md for its integration with the quick capture system.
 
/*
--
[Write a React component in JSX named AudioRecorder that starts and stops recording audio, captures audio data, and sends it to the backend. Include hooks, event handlers, and Tailwind CSS classes. Add inline comments for clarity.]
--
<details>
<summary>Explanation</summary>
AudioRecorder.jsx manages audio capture and communicates with the backend via functions defined in api.js.
</details>
*/

// Example placeholder implementation:
// AudioRecorder.jsx:
// Handles audio recording with the MediaRecorder API.

import React, { useState, useRef } from "react";

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [recordedAudios, setRecordedAudios] = useState([]);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  // Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.start();
      setRecording(true);

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  // Stop recording and save audio
  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);

    mediaRecorderRef.current.onstop = () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      const audioURL = URL.createObjectURL(audioBlob);
      setRecordedAudios([...recordedAudios, audioURL]);
      audioChunksRef.current = []; // Clear buffer
    };
  };

  return (
    <div className="p-4">
      <button
        className={`px-4 py-2 rounded ${recording ? "bg-red-500" : "bg-blue-500"} text-white`}
        onClick={recording ? stopRecording : startRecording}
      >
        {recording ? "Stop Recording" : "Start Recording"}
      </button>

      <h2 className="mt-4 text-lg font-bold">Recorded Audio:</h2>
      <ul className="mt-2">
        {recordedAudios.map((audio, index) => (
          <li key={index} className="flex items-center space-x-2">
            <audio controls src={audio}></audio>
            <a href={audio} download={`recording-${index + 1}.webm`} className="text-blue-500 underline">
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioRecorder;