# React Sports Clock

A simple, customizable sports timer built with React and Vite. It allows users to set session (e.g., training or round) times and break times, with automatic switching between modes when the timer expires. Inspired by Pomodoro techniques but tailored for sports activities.

## Features
- Adjustable session length (1-60 minutes, default: 25).
- Adjustable break length (1-60 minutes, default: 5).
- Real-time countdown display in MM:SS format.
- Automatic mode switching (session ↔ break) with audio alert on expiry.
- Start/Pause and Reset controls using intuitive icons.
- Built with React hooks for state management and `react-timer-hook` for reliable timing.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/hassan-louazri/react-sports-clock.git
   cd react-sports-clock
   ```

2. Install dependencies:
   ```
   npm install
   ```

   This will install React, Vite, and required libraries like `react-timer-hook`, `@fortawesome/react-fontawesome`, and `@fortawesome/free-solid-svg-icons`.

3. Run the development server:
   ```
   npm run dev
   ```

   Open `http://localhost:5173` in your browser to view the app.

4. Build for production:
   ```
   npm run build
   ```

## Usage

- **Adjust Times**: Use the up/down arrows in the "Break Length" and "Session Length" sections to set your desired durations.
- **Start/Pause**: Click the play/pause icon to control the timer.
- **Reset**: Click the refresh icon to reset to default values (25-minute session, 5-minute break) and session mode.
- **Mode Switching**: The timer automatically switches between "session" and "break" modes when time runs out, playing an audio alert.

**Note**: If the timer doesn't respond to adjustments, ensure props are passed correctly in `src/App.jsx` (e.g., pass `sessionTime`, `setSessionTime`, etc., to child components). See the "Development Notes" section for details.

## Project Structure

- `src/App.jsx`: Main component managing state and rendering controls/timer.
- `src/BreakControl.jsx`: UI for adjusting break time.
- `src/SessionControl.jsx`: UI for adjusting session time.
- `src/Timer.jsx`: Core timer logic, display, and controls.
- `src/main.jsx`: Entry point for rendering the app.
- `src/index.css`: Global styles (customize as needed).

## Dependencies

- `react` and `react-dom`: Core libraries.
- `react-timer-hook`: For timer functionality.
- `@fortawesome/react-fontawesome` and `@fortawesome/free-solid-svg-icons`: For icons.
- Dev dependencies: `vite`, `@vitejs/plugin-react`, ESLint plugins.

Full list available in `package.json`.

## Development Notes

- **Fixing Prop Passing**: In the current code, state from `App.jsx` isn't passed to child components. Update the render like this:
  ```jsx
  <BreakControl breakTime={breakTime} setBreakTime={setBreakTime} />
  <SessionControl sessionTime={sessionTime} setSessionTime={setSessionTime} />
  <Timer sessionTime={sessionTime} breakTime={breakTime} setSessionTime={setSessionTime} setBreakTime={setBreakTime} />
  ```
- **Audio Alert**: The audio source in `Timer.jsx` is empty. Uncomment and update the `audioLink` to a valid WAV/MP3 file URL for alerts to work.
- **Styling**: Add custom CSS in `src/App.css` or `index.css` for better visuals (e.g., layout, colors).
- **Testing**: Run locally with `npm run dev`. For previews, use `npm run preview` after building.
- **Deployment**: Easily deploy to GitHub Pages, Netlify, or Vercel using Vite's build output.

## Contributing

Contributions are welcome! Fork the repo, make changes, and submit a pull request. Focus on bug fixes (e.g., prop passing), UI improvements, or new features like custom audio or multiple modes.

## License

MIT License. See [LICENSE](LICENSE) for details (add if not present).

## About the Author

Developed by [Hassan Louazri](https://github.com/hassan-louazri). Feel free to reach out with feedback!