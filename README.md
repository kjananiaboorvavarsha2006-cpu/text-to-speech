# text-to-speech

🔊 Text to Speech Converter Web App

A simple and responsive Text to Speech Converter built using HTML, CSS, and JavaScript. This application converts user-entered text into spoken audio using the browser’s built-in Speech Synthesis API.

📌 Features

✅ Convert text into speech instantly

✅ Uses Web Speech API (SpeechSynthesis)

✅ Clean and responsive UI

✅ Input validation with error messages

✅ Automatically stops previous speech before playing new one

✅ Button state changes while audio is playing

🛠️ Technologies Used

HTML5

CSS3

JavaScript (Vanilla JS)

Web Speech API (SpeechSynthesis)

📂 Project Structure
project-folder/
│
├── index.html     → Main webpage structure
├── style.css      → Styling and layout
├── index.js       → Text-to-speech logic
└── README.md      → Project documentation

🚀 How It Works

User enters text into the textarea.

When the Play Converted Sound button is clicked:

Browser support is checked.

Empty input is validated.

Previous speech (if any) is canceled.

Text is converted to speech using SpeechSynthesis.

Button text updates while audio is playing.

▶️ How to Run Locally

Download or clone this repository:

git clone https://github.com/your-username/your-repo-name.git


Open the project folder.

Double-click index.html
OR

Open with Live Server in VS Code.

🌐 Browser Support

Works in most modern browsers that support:

SpeechSynthesis API

Chrome ✅

Edge ✅

Firefox ✅ (partial voice support)

Safari ✅

⚠️ Notes

Internet connection may be required for some voices depending on browser.

Voice quality and availability depend on the operating system and browser.

💡 Future Improvements

Voice selection dropdown

Speed & pitch controls

Language selection

Download audio option

Dark/light theme toggle
