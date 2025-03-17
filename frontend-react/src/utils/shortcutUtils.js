// This utility module handles global keyboard shortcut management.
// Classes and Objects Reference: See CLASSES_AND_OBJECTS.md for how it supports QuickCapture and other interactive components.

/*
--
[Write a JavaScript module that exports functions to add and manage keyboard shortcuts for the app. Include inline comments and error handling.]
--
<details>
<summary>Explanation</summary>
shortcutUtils.js manages key listeners and triggers callback functions when specific keyboard shortcuts are pressed.
This helps components like QuickCapture to easily register and unregister shortcuts.
</details>
*/
// shortcutUtils.js:
// Manages keyboard shortcuts for the app.

const shortcutCallbacks = new Map();

export const registerShortcut = (shortcut, callback) => {
  shortcutCallbacks.set(shortcut, callback);
  window.addEventListener('keydown', handleKeyDown);
};

export const unregisterShortcut = (shortcut) => {
  shortcutCallbacks.delete(shortcut);
  if (shortcutCallbacks.size === 0) {
    window.removeEventListener('keydown', handleKeyDown);
  }
};

const handleKeyDown = (event) => {
  const keys = [];
  if (event.ctrlKey) keys.push('Ctrl');
  if (event.shiftKey) keys.push('Shift');
  if (event.altKey) keys.push('Alt');
  // event.key is the actual letter or function key
  keys.push(event.key);
  const shortcutStr = keys.join('+');

  if (shortcutCallbacks.has(shortcutStr)) {
    event.preventDefault();
    shortcutCallbacks.get(shortcutStr)();
  }
};