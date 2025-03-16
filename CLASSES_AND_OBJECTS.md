# CLASSES_AND_OBJECTS.md

This document outlines the complete structure of classes, modules, and objects for the Beads Audio Lite project. It provides an overview of each file's purpose and explains how they interrelate. Use this document as a reference when updating any particular file to ensure that changes do not break the overall project context.

## Overview

- **Backend (Python Microservice):**
  - **api.py:** Exposes REST endpoints for audio uploads and transcription.
  - **audio_handler.py:** Manages file I/O for audio data.
  - **transcription_service.py:** Uses Whisper AI for transcription.
  - **speaker_identifier.py:** Identifies speakers in the audio.
  - **context_analysis.py:** Extracts keywords and context from transcriptions.
  - **logger.py:** Provides logging for all operations.
  
- **Backend (Node.js):**
  - **server.js:** Main server for real-time operations and proprietary logic.
  - **context_processor.js:** Applies secret logic on neutral data.
  - **nodes_manager.js:** Manages Nodes (structured memory blocks) for transcribed data.
  - **db.js:** Handles database connections and queries.
  - **logger.js:** Provides logging for Node.js operations.
  
- **Frontend (React):**
  - **Components:** AudioRecorder, QuickCapture, InsightsView, NodesTab, Home.
  - **Utilities:** audioUtils, shortcutUtils, api.
  - **App.jsx & index.jsx:** Set up routing, rendering, and overall layout.
  
## Interrelations

- **Data Flow:**  
  1. The Frontend records audio and sends it securely to the Python microservice.
  2. The Python microservice processes audio (saving, transcription, context extraction) and returns anonymized insights.
  3. The Node.js backend receives these insights and applies proprietary logic before sending enhanced data back to the Frontend.
  
- **Logging & Error Handling:**  
  Both Python and Node.js modules use dedicated logger files for consistent debugging and error tracking.

- **Privacy:**  
  Raw user audio and sensitive data are processed only in the open Python service, while the Node.js backend receives only anonymized data for further proprietary processing.

## How to Use This Document

- **Reference Before Changes:**  
  Check this document before modifying any file to ensure the new code maintains the overall structure.
- **Update Consistently:**  
  If you change how one module works (e.g., update transcription_service.py), update its description and interactions here.
- **Integration Check:**  
  Use this document to verify that all modules still interoperate correctly after changes.

*If any file's changes might affect other parts of the project, refer to this document to adjust those interrelations accordingly.*

