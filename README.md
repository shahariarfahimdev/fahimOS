# Life Command Center

A GitHub Pages-ready personal planner website that saves data locally in the browser.

## Features

- Forever daily planner with half-hour blocks
- One `Choose Page` button that opens a full page selector
- Cleaner five-page command menu: Home, Money, Health, Developer Study, and Life
- Home dashboard summarizes saved classes, assignments, tasks, bills, sleep, roadmap, prayer, and daily mindset
- Home is now read-only: edit data inside the related hub pages, and Home reflects the latest saved state
- Header includes Home, Back, Save, Rename, Auto-save On/Off, Command Menu, and page-specific background color
- Save creates a timestamped copy in the History page
- Reminders and editable learning sites are included
- Selectable background scenes, including a generated creative background image in `assets/creative-command-bg.png`
- Custom URL saving in Life Hub
- Life Hub includes Journal, Roadmap, Essentials, Faith, Files, Profile, Settings, saved URLs, and mindset principles inspired by the 48 Laws of Power
- Health Hub includes sleep, workout, discipline streak, health habits, and practical fat-loss strategy
- Developer Study Hub includes Java technique, full-stack roadmap, school study, projects, Bro Code, Coursera, LinkedIn Learning, MDN, and custom notes
- Default front page is the weekday command page with a built-in motivation engine
- Header controls include Back, New Motivation, Auto-save On/Off, Command Menu, and background color
- Journal replaces the old custom motivation button and supports long expanding entries
- Money Hub links to monthly bills and includes Credit Karma / credit report resources
- Health Hub groups sleep, workout, discipline streak, health notes, and habits
- Essentials Hub groups schedule, tasks, to-do lists, alarms, countdowns, Google Calendar, Google Maps, and GitHub Upload
- Developer Study Hub includes school study, project planning, Java, Bro Code, Coursera, LinkedIn Learning, MDN, and roadmap links
- Monthly bills tracker with paid/unpaid totals
- Google Calendar quick event link builder and calendar page
- GitHub Upload tab plus standalone `github-upload.html`
- Five-prayer tracker with notes
- Quran verse focus, reading log, all 114 surah study selector, Quran.com links, YouTube tafsir search links, beginner study roadmap, and reflection prompts
- Complete Java learning path with 12 modules, code examples, practice drills, mini projects, notes, official docs, and YouTube lesson search links
- Daily study and life suggestions
- Exercise idea library, workout log, and form guidance
- Browser alarms while the page is open
- Live countdown timers
- Google Maps place lookup and preview
- Discipline streak timer with emergency plan and trigger notes
- Local file vault with PDF, image, and text preview
- File vault View, Download, and Delete controls
- Custom background, card, text, and accent colors
- Theme presets
- Export and import JSON backups

## Use Locally

Open `index.html` in your browser.

## GPT Assistant Automation

The website now includes an API-ready GPT automation endpoint at `api/assistant.js`.

Important: do not put your OpenAI API key inside `app.js`, `index.html`, or any browser file. Keep it only in the backend environment variable.

### Step-by-step Vercel setup

1. Create or open your Vercel project.
2. Upload/deploy this whole `life-command-center` folder.
3. In Vercel, open Project Settings > Environment Variables.
4. Add `OPENAI_API_KEY` with your OpenAI API key.
5. Optional: add `OPENAI_MODEL`, for example `gpt-4.1-mini`.
6. Deploy the project.
7. Open the site and go to Settings > GPT Assistant API.
8. If the site is hosted on Vercel, use `/api/assistant`.
9. If the API is hosted somewhere else, paste the full endpoint URL.
10. Open GPT Assistant and try: `Add Java class Monday and Wednesday from 09:00 to 10:30 until 2026-08-20 room B12 teacher Khan`.

The backend returns automation actions, and the browser applies them to your planner data.

### What the GPT Assistant can automate

- Add classes with daily, weekly, monthly, or one-time recurrence
- Add assignments
- Add tasks
- Add reminders
- Add bills
- Mark bills paid
- Add workouts
- Add journal entries
- Create study blocks
- Fill daily schedule slots
- Add to-do list items
- Add important school dates
- Add alarms and countdowns
- Add money tracker transactions
- Add custom learning sites
- Add roadmap steps
- Update profile fields
- Mark prayers done
- Save Quran reading reflections

## Publish on GitHub Pages

GitHub Pages can host the website, but it cannot run `api/assistant.js`. If you use GitHub Pages, deploy the API separately on Vercel/Netlify/Cloudflare and paste that endpoint in Settings > GPT Assistant API.

1. Create a GitHub repository.
2. Upload `index.html`, `styles.css`, `app.js`, and `README.md`.
3. Go to repository `Settings` > `Pages`.
4. Choose the main branch and root folder.
5. Open the GitHub Pages URL after it finishes deploying.

## Data Notes

The app uses browser local storage for planner data and IndexedDB for uploaded file contents. Data stays on the same browser/device unless you export and import the JSON backup. Very large files may still exceed browser storage limits.
