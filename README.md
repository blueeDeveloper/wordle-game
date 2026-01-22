


https://github.com/user-attachments/assets/1cbd4ac0-007d-44dc-ab76-68cac01af623




Wordle Clone - React + TypeScript
A fully functional Wordle clone built with React, TypeScript, and Vite. This project replicates the core mechanics of the popular word game, including keyboard input handling, color-coded feedback, and game state persistence for the current session.

🚀 Features
Keyboard Support: Play using your physical keyboard.

Game Logic:

🟩 Green: Letter is in the word and in the correct spot.

🟨 Yellow: Letter is in the word but in the wrong spot.

⬜ Gray: Letter is not in the word in any spot.

Win/Loss States: Immediate feedback when you guess the word or run out of attempts.

Responsive UI: Clean, centered board layout using CSS Flexbox/Grid.

Type Safety: Built with TypeScript for robust code and better developer experience.

🛠️ Tech Stack
Framework: React

Language: TypeScript

Build Tool: Vite

Styling: CSS3 (Custom properties and Flexbox)

📦 Installation & Setup
Clone the repository:

Bash

git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
Navigate to the directory:

Bash

cd wordle-clone
Install dependencies:

Bash

npm install
Run the development server:

Bash

npm run dev
🎮 How to Play
Guess the WORDLE in six tries.

Each guess must be a valid five-letter word. Hit the enter button to submit.

After each guess, the color of the tiles will change to show how close your guess was to the word.

📝 Implementation Details
Game Logic Workflow
The app uses a centralized state in App.tsx to track the solution, current attempts, and the game status.

Keyboard Handling: Uses a window event listener within a useEffect hook to capture keystrokes globally.

Tile Validation: The Line component dynamically calculates the CSS classes (correct, exists, incorrect) only after a guess is submitted (isFinal).

🛠️ Future Improvements
[ ] Add a virtual on-screen keyboard.

[ ] Integrate a real dictionary API for word validation.

[ ] Add "Flip" and "Bounce" animations for tile reveals.

[ ] Implement Dark Mode support.
