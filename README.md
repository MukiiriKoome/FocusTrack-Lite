---

```markdown
# FocusTrack Lite 🧠⏱️

**FocusTrack Lite** is a lightweight web-based Pomodoro-style productivity timer. It helps users stay focused by timing their work sessions and tracking their progress over time — all stored locally or with a custom Node.js backend (no Express!).

---

## 🔥 Features

- 🕐 **Simple 25-minute countdown timer**
- ✅ **Start, pause, and reset controls**
- 📊 **Tracks total focused sessions and minutes**
- 📋 **Displays a list of recent sessions**
- 💾 **Saves session data to a `sessions.json` file via a custom Node.js backend**

---

## 📁 Project Structure

```

focustrack-lite/
├── public/
│   ├── index.html       # Frontend UI
│   ├── style.css        # Timer styling
│   └── script.js        # Timer + DOM logic
├── sessions.json        # Saved session data
└── server.js            # Custom backend (no Express)

````

---

## ⚙️ How to Run the App

### 1. Clone or download the project

```bash
git clone https://github.com/your-username/focustrack-lite.git
cd focustrack-lite
````

### 2. Start the backend server

Make sure you have Node.js installed, then:

```bash
node server.js
```

The server will start on:

```
http://localhost:3000
```

### 3. Open in browser

Visit [http://localhost:3000](http://localhost:3000) and start focusing!

---

## 🧠 How It Works

* Timer counts down from 25 minutes (or test mode: 3 seconds).
* When the timer finishes:

  * The session duration and timestamp are stored.
  * Session count and total minutes update.
  * Recent sessions (up to 5) are shown.
* Sessions are saved to `sessions.json` using the backend.

---

## 📦 Built With

* **HTML5** – Structure
* **CSS3** – Styling and hover effects
* **JavaScript (Vanilla)** – Timer logic and DOM manipulation
* **Node.js (http, fs)** – Custom backend, no Express
* **JSON** – Persistent session storage

---

## ✨ Possible Improvements

* ✅ Support for long breaks and short breaks
* ✅ Configurable timer durations
* ✅ Daily/weekly analytics dashboard
* ✅ User authentication (optional)

---

## 🧑‍💻 Author

**Teddy Koome**
Junior Developer & Aspiring Full-Stack Engineer
[LinkedIn](https://linkedin.com/MukiiriKoome) • [GitHub](https://github.com/MukiiriKoome)

---

## 📄 License

MIT License

---

```


