const STORAGE_KEY = "life-command-center-v1";
const FILE_DB = "life-command-center-files";

const prayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
const quranVerses = [
  { ar: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", en: "So surely with hardship comes ease.", ref: "Quran 94:5" },
  { ar: "وَقُل رَّبِّ زِدْنِي عِلْمًا", en: "And say, My Lord, increase me in knowledge.", ref: "Quran 20:114" },
  { ar: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", en: "Surely in the remembrance of Allah do hearts find comfort.", ref: "Quran 13:28" },
  { ar: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", en: "Whoever is mindful of Allah, He will make a way out for them.", ref: "Quran 65:2" },
  { ar: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", en: "Allah does not require of any soul more than what it can afford.", ref: "Quran 2:286" }
];

const quranVerseBank = [
  { ar: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا", en: "So surely with hardship comes ease.", ref: "Quran 94:5" },
  { ar: "وَقُل رَّبِّ زِدْنِي عِلْمًا", en: "And say, My Lord, increase me in knowledge.", ref: "Quran 20:114" },
  { ar: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ", en: "Surely in the remembrance of Allah do hearts find comfort.", ref: "Quran 13:28" },
  { ar: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا", en: "Whoever is mindful of Allah, He will make a way out for them.", ref: "Quran 65:2" },
  { ar: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", en: "Allah does not require of any soul more than what it can afford.", ref: "Quran 2:286" }
];

const surahs = [
  "Al-Fatihah الفاتحة","Al-Baqarah البقرة","Ali Imran آل عمران","An-Nisa النساء","Al-Maidah المائدة","Al-Anam الأنعام","Al-Araf الأعراف","Al-Anfal الأنفال","At-Tawbah التوبة","Yunus يونس","Hud هود","Yusuf يوسف","Ar-Rad الرعد","Ibrahim إبراهيم","Al-Hijr الحجر","An-Nahl النحل","Al-Isra الإسراء","Al-Kahf الكهف","Maryam مريم","Taha طه","Al-Anbiya الأنبياء","Al-Hajj الحج","Al-Muminun المؤمنون","An-Nur النور","Al-Furqan الفرقان","Ash-Shuara الشعراء","An-Naml النمل","Al-Qasas القصص","Al-Ankabut العنكبوت","Ar-Rum الروم","Luqman لقمان","As-Sajdah السجدة","Al-Ahzab الأحزاب","Saba سبأ","Fatir فاطر","Ya-Sin يس","As-Saffat الصافات","Sad ص","Az-Zumar الزمر","Ghafir غافر","Fussilat فصلت","Ash-Shuraa الشورى","Az-Zukhruf الزخرف","Ad-Dukhan الدخان","Al-Jathiyah الجاثية","Al-Ahqaf الأحقاف","Muhammad محمد","Al-Fath الفتح","Al-Hujurat الحجرات","Qaf ق","Adh-Dhariyat الذاريات","At-Tur الطور","An-Najm النجم","Al-Qamar القمر","Ar-Rahman الرحمن","Al-Waqiah الواقعة","Al-Hadid الحديد","Al-Mujadila المجادلة","Al-Hashr الحشر","Al-Mumtahanah الممتحنة","As-Saff الصف","Al-Jumuah الجمعة","Al-Munafiqun المنافقون","At-Taghabun التغابن","At-Talaq الطلاق","At-Tahrim التحريم","Al-Mulk الملك","Al-Qalam القلم","Al-Haqqah الحاقة","Al-Maarij المعارج","Nuh نوح","Al-Jinn الجن","Al-Muzzammil المزمل","Al-Muddaththir المدثر","Al-Qiyamah القيامة","Al-Insan الإنسان","Al-Mursalat المرسلات","An-Naba النبأ","An-Naziat النازعات","Abasa عبس","At-Takwir التكوير","Al-Infitar الانفطار","Al-Mutaffifin المطففين","Al-Inshiqaq الانشقاق","Al-Buruj البروج","At-Tariq الطارق","Al-Ala الأعلى","Al-Ghashiyah الغاشية","Al-Fajr الفجر","Al-Balad البلد","Ash-Shams الشمس","Al-Layl الليل","Ad-Duha الضحى","Ash-Sharh الشرح","At-Tin التين","Al-Alaq العلق","Al-Qadr القدر","Al-Bayyinah البينة","Az-Zalzalah الزلزلة","Al-Adiyat العاديات","Al-Qariah القارعة","At-Takathur التكاثر","Al-Asr العصر","Al-Humazah الهمزة","Al-Fil الفيل","Quraysh قريش","Al-Maun الماعون","Al-Kawthar الكوثر","Al-Kafirun الكافرون","An-Nasr النصر","Al-Masad المسد","Al-Ikhlas الإخلاص","Al-Falaq الفلق","An-Nas الناس"
].map((name, index) => ({ number: index + 1, name }));

const javaModules = [
  { title: "1. Setup and First Program", body: "Install a JDK, understand files, classes, main method, printing, comments, and how Java runs from source code to bytecode.", code: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Assalamu alaikum, Java!\");\n  }\n}", practice: "Change the message, print your name, school, favorite subject, and today's study goal.", project: "Make a personal introduction program with 5 printed lines." },
  { title: "2. Variables, Types, and Operators", body: "Learn int, double, boolean, char, String, assignment, arithmetic, comparison, and logical operators.", code: "int minutes = 45;\ndouble gpa = 3.8;\nboolean studiedToday = true;\nString subject = \"Math\";\nSystem.out.println(subject + \": \" + minutes + \" minutes\");", practice: "Create variables for income, expense, and balance. Print the result.", project: "Build a tiny money calculator." },
  { title: "3. Input and Strings", body: "Use Scanner, read user input, combine strings, compare strings correctly, and format output.", code: "import java.util.Scanner;\n\nScanner input = new Scanner(System.in);\nSystem.out.print(\"Name: \");\nString name = input.nextLine();\nSystem.out.println(\"Welcome, \" + name);", practice: "Ask for name, age, school, and goal. Print a profile card.", project: "Build a profile form in the console." },
  { title: "4. If, Else, and Switch", body: "Make decisions with if, else if, else, nested conditions, switch expressions, and boolean logic.", code: "int score = 88;\nif (score >= 90) {\n  System.out.println(\"A\");\n} else if (score >= 80) {\n  System.out.println(\"B\");\n} else {\n  System.out.println(\"Keep working\");\n}", practice: "Write logic that checks if a prayer, assignment, or workout is complete.", project: "Build a grade letter calculator." },
  { title: "5. Loops", body: "Use for, while, do-while, break, continue, counters, accumulators, and nested loops.", code: "for (int day = 1; day <= 7; day++) {\n  System.out.println(\"Day \" + day + \": study Java\");\n}", practice: "Print a 7-day study schedule with a loop.", project: "Build a habit streak counter." },
  { title: "6. Methods", body: "Create reusable logic with parameters, return values, overloads, scope, and clean method names.", code: "static double average(double a, double b, double c) {\n  return (a + b + c) / 3;\n}", practice: "Write methods for average, tax, and minutes-to-hours.", project: "Refactor your grade calculator into methods." },
  { title: "7. Arrays and ArrayList", body: "Store multiple values, loop over collections, add/remove values, and search lists.", code: "import java.util.ArrayList;\nArrayList<String> tasks = new ArrayList<>();\ntasks.add(\"Read Quran\");\ntasks.add(\"Study Java\");\nSystem.out.println(tasks);", practice: "Create a list of assignments and print unfinished ones.", project: "Build a to-do list console app." },
  { title: "8. Object-Oriented Java", body: "Understand classes, objects, fields, constructors, methods, encapsulation, and why OOP helps organize bigger apps.", code: "class Task {\n  String title;\n  boolean done;\n\n  Task(String title) {\n    this.title = title;\n  }\n}", practice: "Create Student, Assignment, and Workout classes.", project: "Build a school planner using objects." },
  { title: "9. Inheritance and Interfaces", body: "Learn extends, implements, polymorphism, abstract classes, interfaces, and when to use each.", code: "interface Trackable {\n  void markDone();\n}\n\nclass Prayer implements Trackable {\n  public void markDone() {\n    System.out.println(\"Prayer completed\");\n  }\n}", practice: "Create a Trackable interface for tasks, prayers, and workouts.", project: "Build a tracker system with shared behavior." },
  { title: "10. Exceptions and Files", body: "Handle errors with try/catch, read and write files, and protect programs from crashing.", code: "try {\n  int result = 10 / 0;\n} catch (ArithmeticException error) {\n  System.out.println(\"Cannot divide by zero\");\n}", practice: "Catch invalid input in your calculator.", project: "Save and load notes from a text file." },
  { title: "11. Collections and Maps", body: "Use HashMap, HashSet, sorting, searching, and choosing the right data structure.", code: "import java.util.HashMap;\nHashMap<String, Integer> scores = new HashMap<>();\nscores.put(\"Math\", 95);\nSystem.out.println(scores.get(\"Math\"));", practice: "Map subject names to grades.", project: "Build a report-card tracker." },
  { title: "12. Final Projects", body: "Combine everything into real projects: planner, budget tracker, quiz app, library system, or habit tracker.", code: "// Capstone idea:\n// Classes: User, Task, Assignment, Transaction\n// Features: add, list, mark done, save, load", practice: "Pick one app and write the class list before coding.", project: "Build a console Life Command Center in Java." }
];

const successLearningSignals = [
  "Learn Java syntax first: variables, input, if/else, loops, methods. Do not skip practice.",
  "Build your web foundation: HTML structure, CSS layout, responsive design, then JavaScript DOM.",
  "Practice Git every week: commit small changes, write clear messages, push to GitHub.",
  "Use active recall: close the video, explain the concept, then code it without looking.",
  "Study databases next: tables, primary keys, joins, SQL queries, and clean data thinking.",
  "Learn backend basics: HTTP, APIs, JSON, authentication, environment variables, and errors.",
  "Learn frontend basics: components, state, forms, validation, loading states, and accessibility.",
  "Turn every lesson into a mini project. Watching is not learning until your hands build.",
  "Read documentation after tutorials. Tutorials show the road; docs teach independence.",
  "Master debugging: read the error, isolate the line, reproduce it, test one fix at a time.",
  "Use spaced repetition: review yesterday, last week, and last month before adding more.",
  "Learn deployment: GitHub Pages for static sites, then Vercel/Netlify for full-stack apps."
];

const successCareerSignals = [
  "Career path: Java fundamentals -> JavaScript -> React -> Node or Spring Boot -> SQL -> portfolio.",
  "Your portfolio should prove skill: planner app, budget tracker, Quran tracker, class scheduler, API dashboard.",
  "Become reliable first. Show up on time, finish small work, document what you built.",
  "Build public proof: one GitHub commit, one README improvement, one deployed project each week.",
  "Learn communication: explain what the app does, what problem it solves, and what you improved.",
  "Stack credentials smartly: school work, Coursera, LinkedIn Learning, Bro Code, freeCodeCamp, projects.",
  "Practice interviews early: arrays, strings, loops, maps, OOP, SQL joins, and project explanations.",
  "Choose a lane for 90 days: full-stack developer. Ignore shiny distractions until the basics are strong.",
  "Your advantage is consistency. Two focused hours daily for a year beats random all-night sessions.",
  "Network with proof: share a project link, ask for feedback, then improve it.",
  "Track money and time because successful people protect both.",
  "Respect comes from competence, calm behavior, clean promises, and repeated execution."
];

const successProjectSignals = [
  "Build a Java grade calculator with input, if/else, methods, and clean output.",
  "Build a weekly class scheduler that repeats classes automatically by weekday.",
  "Build a budget tracker with bills, due dates, paid status, and monthly totals.",
  "Build a Quran reading tracker with surah progress, reflection notes, and reminders.",
  "Build a workout tracker with start/end time, duration, and weekly streaks.",
  "Build a flashcard app for Java terms, Quran vocabulary, and school notes.",
  "Build a full-stack tasks app: frontend form, backend API, database, login, deploy.",
  "Build a portfolio homepage with your projects, screenshots, GitHub links, and resume.",
  "Build a weather/news dashboard using APIs and loading/error states.",
  "Build a habit analytics page that shows streaks, missed days, and recovery plans.",
  "Build a PDF export/history feature for your planner data.",
  "Build a ChatGPT command assistant that turns natural language into saved tasks."
];

const motivationBank = [
  "Win the next half hour. Do not negotiate with the whole day.",
  "Discipline becomes easier when your environment is already prepared.",
  "You do not need a perfect day. You need a faithful return to the plan.",
  "One prayer, one page, one assignment, one workout. Stack the basics.",
  "Your future self is built through repeated ordinary choices."
];

const extraMotivations = [
  "Make the next action so small that excuses look silly.",
  "A clean desk and a clear intention can rescue an entire day.",
  "You are not behind forever. You are one honest plan away from moving again.",
  "Study like someone is depending on your future competence.",
  "Protect your salah, then build everything else around it.",
  "When motivation is low, make the system carry you.",
  "Do the boring basics until they become your advantage.",
  "You do not need to feel ready to begin.",
  "The phone can wait. Your future cannot.",
  "A focused hour can beat an anxious day.",
  "Your habits are quiet votes for the person you are becoming.",
  "Make discipline normal, not dramatic.",
  "If you slipped, return fast. The return is part of the training.",
  "Today does not need to be perfect to count.",
  "One page, one problem, one prayer, one clean choice.",
  "The work you avoid is often the work that changes your confidence.",
  "You can rest after you make the next right move.",
  "Be loyal to the plan you made when your mind was clear.",
  "Track it, improve it, repeat it.",
  "Small consistency beats emotional intensity."
];

const starterBills = [
  { paid: false, name: "BOA Auto Loan", amount: "400", due: "28", category: "Car", note: "Monthly auto loan" },
  { paid: false, name: "Progressive Insurance", amount: "438.32", due: "15", category: "Insurance", note: "Car insurance" },
  { paid: false, name: "T-Mobile", amount: "344.49", due: "28", category: "Phone", note: "Phone bill" },
  { paid: false, name: "Spectrum Internet", amount: "59.99", due: "9", category: "Internet", note: "Home internet" },
  { paid: false, name: "Gas / Transportation", amount: "400", due: "Weekly", category: "Car", note: "Approx $100 weekly" },
  { paid: false, name: "Food", amount: "200", due: "Monthly", category: "Food", note: "Monthly food budget" },
  { paid: false, name: "Miscellaneous", amount: "500", due: "Monthly", category: "Misc", note: "Gas/minor fixes/random expenses" },
  { paid: false, name: "Xbox", amount: "9", due: "21", category: "Subscription", note: "Monthly" },
  { paid: false, name: "iCloud", amount: "2.99", due: "5", category: "Subscription", note: "Monthly" },
  { paid: false, name: "ChatGPT Plus", amount: "22", due: "Monthly", category: "Subscription", note: "Monthly" },
  { paid: false, name: "Amex #1", amount: "120", due: "23", category: "Credit Card", note: "Minimum" },
  { paid: false, name: "Amex #2", amount: "100", due: "2", category: "Credit Card", note: "Minimum" },
  { paid: false, name: "Discover", amount: "150", due: "20", category: "Credit Card", note: "Minimum" },
  { paid: false, name: "Citi", amount: "80", due: "20", category: "Credit Card", note: "Minimum" },
  { paid: false, name: "Capital One #1", amount: "50", due: "14", category: "Credit Card", note: "Minimum" },
  { paid: false, name: "Capital One #2", amount: "50", due: "10", category: "Credit Card", note: "Minimum" },
  { paid: false, name: "Capital One #3", amount: "50", due: "14", category: "Credit Card", note: "Minimum" },
  { paid: false, name: "Capital One #4", amount: "50", due: "10", category: "Credit Card", note: "Minimum" },
  { paid: false, name: "Reach Financial", amount: "302.14", due: "Biweekly", category: "Loan", note: "$151.07 biweekly" },
  { paid: false, name: "Affirm #1", amount: "30.97", due: "27", category: "Loan", note: "Monthly" },
  { paid: false, name: "Affirm #2", amount: "195", due: "28", category: "Loan", note: "Monthly" }
];

const starterBillChecklist = [
  { text: "Check due dates", done: false },
  { text: "Pay urgent bills", done: false },
  { text: "Mark paid", done: false }
];

const powerPrinciples = [
  "Control your reactions. A calm face gives you time to think.",
  "Protect your reputation by doing what you said you would do.",
  "Do not announce every plan. Build quietly and show results.",
  "Use timing. The right action at the right moment beats rushing.",
  "Make yourself useful. Skills create leverage.",
  "Avoid unnecessary arguments. Win through progress, not noise.",
  "Learn people's incentives before you judge their behavior.",
  "Guard your attention because attention is power.",
  "Be disciplined with words. Say less, mean more.",
  "Turn setbacks into information, then adjust the plan."
];

const famousQuotes = [
  "Discipline is choosing between what you want now and what you want most. - Abraham Lincoln",
  "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
  "The secret of getting ahead is getting started. - Mark Twain",
  "It always seems impossible until it is done. - Nelson Mandela",
  "He who has a why can bear almost any how. - Friedrich Nietzsche",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. - Aristotle"
];

const islamicQuotes = [
  "Indeed, with hardship comes ease. - Quran 94:6",
  "And say: My Lord, increase me in knowledge. - Quran 20:114",
  "Allah does not burden a soul beyond what it can bear. - Quran 2:286",
  "The most beloved deeds to Allah are those done consistently, even if small. - Hadith",
  "Tie your camel and trust in Allah. - Hadith meaning",
  "Verily, in the remembrance of Allah do hearts find rest. - Quran 13:28"
];

const powerLaws = [
  "Law 1: Protect respect. Do not make authority feel small.",
  "Law 2: Choose allies carefully. Loyalty matters, but incentives matter too.",
  "Law 3: Do not reveal every plan before it is ready.",
  "Law 4: Say less when emotions are high.",
  "Law 5: Guard your reputation through consistent action.",
  "Law 6: Be visible for your work, not your drama.",
  "Law 7: Learn from others, but take responsibility for the result.",
  "Law 8: Pull opportunities through value instead of begging for attention.",
  "Law 9: Win through results more than arguments.",
  "Law 10: Stay away from people who normalize chaos.",
  "Law 11: Build skills people depend on.",
  "Law 12: Use honesty strategically: clear, calm, and timed well.",
  "Law 13: Appeal to what people care about, not only what you want.",
  "Law 14: Listen deeply before trusting fully.",
  "Law 15: Finish problems completely when possible.",
  "Law 16: Create space. Scarcity makes your time valuable.",
  "Law 17: Stay unpredictable in effort, but reliable in character.",
  "Law 18: Do not isolate yourself from useful feedback.",
  "Law 19: Know who you are dealing with before reacting.",
  "Law 20: Do not commit your future to every temporary emotion.",
  "Law 21: Let people underestimate you while you build.",
  "Law 22: Step back when a fight wastes your mission.",
  "Law 23: Concentrate force on one priority at a time.",
  "Law 24: Practice social intelligence without losing your values.",
  "Law 25: Recreate yourself through habits and proof.",
  "Law 26: Keep your hands clean: avoid messy shortcuts.",
  "Law 27: Give people a hopeful standard to follow.",
  "Law 28: Act with boldness after thinking clearly.",
  "Law 29: Plan to the end before starting.",
  "Law 30: Make hard work look calm by preparing early.",
  "Law 31: Give yourself options before choosing.",
  "Law 32: Speak to people's dreams, but stay grounded in truth.",
  "Law 33: Learn each person's pressure point: fear, pride, need, or goal.",
  "Law 34: Carry yourself with dignity before asking for respect.",
  "Law 35: Master timing. Right action at the wrong time fails.",
  "Law 36: Stop chasing what does not respect you.",
  "Law 37: Use visuals, environment, and presentation to strengthen your message.",
  "Law 38: Think independently, but do not perform rebellion for attention.",
  "Law 39: Stay calm when others want you emotional.",
  "Law 40: Do not be bought by small favors that cost your freedom.",
  "Law 41: Respect mentors, but do not live as their shadow.",
  "Law 42: Remove the source of repeated disorder.",
  "Law 43: Win hearts through understanding and usefulness.",
  "Law 44: Mirror behavior to understand it, not to become fake.",
  "Law 45: Change gradually enough that people can follow.",
  "Law 46: Do not appear perfect. Stay human and improving.",
  "Law 47: Know when to stop after a win.",
  "Law 48: Stay adaptable. Rigidity breaks under pressure."
];

const motivationRecommendations = {
  books: [
    { title: "Atomic Habits", creator: "James Clear", note: "Build systems, not random motivation.", url: "https://www.google.com/search?q=Atomic+Habits+James+Clear" },
    { title: "Deep Work", creator: "Cal Newport", note: "Train focus for school, coding, and career.", url: "https://www.google.com/search?q=Deep+Work+Cal+Newport" },
    { title: "Can't Hurt Me", creator: "David Goggins", note: "Mental toughness and discipline under pressure.", url: "https://www.google.com/search?q=Can%27t+Hurt+Me+David+Goggins" },
    { title: "The 7 Habits of Highly Effective People", creator: "Stephen R. Covey", note: "Personal leadership and long-term principles.", url: "https://www.google.com/search?q=7+Habits+of+Highly+Effective+People" },
    { title: "The Compound Effect", creator: "Darren Hardy", note: "Small daily choices becoming big results.", url: "https://www.google.com/search?q=The+Compound+Effect+Darren+Hardy" },
    { title: "Don't Believe Everything You Think", creator: "Joseph Nguyen", note: "Calm your mind and reduce overthinking.", url: "https://www.google.com/search?q=Don%27t+Believe+Everything+You+Think+Joseph+Nguyen" }
  ],
  movies: [
    { title: "The Pursuit of Happyness", creator: "2006", note: "Persistence when life is heavy.", url: "https://www.google.com/search?q=The+Pursuit+of+Happyness" },
    { title: "Rocky", creator: "1976", note: "Underdog discipline and training energy.", url: "https://www.google.com/search?q=Rocky+movie" },
    { title: "The Social Network", creator: "2010", note: "Startup ambition, coding, and consequences.", url: "https://www.google.com/search?q=The+Social+Network+movie" },
    { title: "Coach Carter", creator: "2005", note: "Standards, school, discipline, and respect.", url: "https://www.google.com/search?q=Coach+Carter" },
    { title: "Good Will Hunting", creator: "1997", note: "Talent, healing, and choosing direction.", url: "https://www.google.com/search?q=Good+Will+Hunting" },
    { title: "Limitless", creator: "2011", note: "Use the energy as a reminder to build real habits.", url: "https://www.google.com/search?q=Limitless+movie" }
  ],
  songs: [
    { title: "Lose Yourself", creator: "Eminem", note: "High intensity focus mode.", url: "https://www.youtube.com/results?search_query=Lose+Yourself+Eminem" },
    { title: "Hall of Fame", creator: "The Script ft. will.i.am", note: "Big goal energy without overthinking.", url: "https://www.youtube.com/results?search_query=Hall+of+Fame+The+Script" },
    { title: "Stronger", creator: "Kanye West", note: "Workout and comeback mindset.", url: "https://www.youtube.com/results?search_query=Stronger+Kanye+West" },
    { title: "Remember the Name", creator: "Fort Minor", note: "Discipline and work ethic.", url: "https://www.youtube.com/results?search_query=Remember+the+Name+Fort+Minor" },
    { title: "Dreams and Nightmares", creator: "Meek Mill", note: "Use for a hard reset and energy spike.", url: "https://www.youtube.com/results?search_query=Dreams+and+Nightmares+Meek+Mill" },
    { title: "Till I Collapse", creator: "Eminem", note: "Training mode when you need intensity.", url: "https://www.youtube.com/results?search_query=Till+I+Collapse+Eminem" }
  ],
  podcasts: [
    { title: "The Huberman Lab", creator: "Andrew Huberman", note: "Sleep, focus, dopamine, health, learning.", url: "https://www.youtube.com/results?search_query=Huberman+Lab+motivation+focus" },
    { title: "The Diary of a CEO", creator: "Steven Bartlett", note: "Business, mindset, growth, self-awareness.", url: "https://www.youtube.com/results?search_query=Diary+of+a+CEO+best+episodes" },
    { title: "The Ed Mylett Show", creator: "Ed Mylett", note: "Confidence, habits, and high standards.", url: "https://www.youtube.com/results?search_query=Ed+Mylett+Show+motivation" },
    { title: "Impact Theory", creator: "Tom Bilyeu", note: "Learning, discipline, and mental performance.", url: "https://www.youtube.com/results?search_query=Impact+Theory+motivation" },
    { title: "Muslim Central", creator: "Islamic lectures", note: "Faith reminders and Islamic motivation.", url: "https://muslimcentral.com/" },
    { title: "Lex Fridman Podcast", creator: "Lex Fridman", note: "Tech, AI, programming, and deep thinking.", url: "https://www.youtube.com/results?search_query=Lex+Fridman+programming+AI" }
  ]
};

const fallbackNewsItems = [
  "US brief: check public safety, weather, economy, education, and major policy updates.",
  "World brief: scan conflicts, elections, markets, climate events, and technology changes.",
  "Sports brief: check NBA, NFL, MLB, soccer, combat sports, and major tournament headlines."
];

const fallbackStockItems = [
  "SPY, QQQ, AAPL, MSFT, TSLA: open More Updates if live quotes are blocked by the browser.",
  "Today focus: compare price change, volume, sector news, and broad-market direction.",
  "YTD focus: compare each stock against SPY/QQQ before trusting momentum."
];

const fallbackWeatherItems = [
  "Weather check: review temperature, rain chance, wind, and travel conditions before leaving.",
  "Daily prep: carry water, check jacket/umbrella need, and plan commute time around weather.",
  "More Updates opens a live weather page for your exact current conditions."
];

const lifeRoadmap = [
  { phase: "Today", focus: "Win the next 24 hours", actions: ["Pray on time and write one gratitude note.", "Study or code for one focused block.", "Move your body for 20 minutes.", "Spend less than you planned.", "Sleep with a plan for tomorrow."] },
  { phase: "Next 7 Days", focus: "Build proof", actions: ["Finish one assignment before the due date.", "Complete one Java lesson and one mini project.", "Track every bill and expense.", "Workout 3 times and walk most days.", "Keep your room, files, and planner clean."] },
  { phase: "Next 30 Days", focus: "Become visibly disciplined", actions: ["Publish one GitHub project.", "Create a weekly school/study routine.", "Reduce one bad habit by replacing it with a better action.", "Read one serious book and write notes.", "Review money every Sunday."] },
  { phase: "Next 90 Days", focus: "Level up identity", actions: ["Build a portfolio with 3 projects.", "Learn Java fundamentals, HTML/CSS, JavaScript DOM, and Git.", "Improve sleep, waist, stamina, and strength.", "Pay bills earlier and reduce unnecessary spending.", "Practice calm speech and controlled reactions."] },
  { phase: "1 Year", focus: "Become reliable and valuable", actions: ["Have a strong developer portfolio.", "Maintain prayer, fitness, study, and money systems.", "Build emergency savings and lower debt pressure.", "Earn through skill, not luck.", "Be known as respectful, consistent, and serious."] },
  { phase: "Forever", focus: "Powerful and peaceful life", actions: ["Faith first: keep returning to Allah.", "Health always: protect sleep, food, movement, and mind.", "Skill compounds: keep learning and building.", "Money is a tool: control it before it controls you.", "Respect comes from character, competence, and consistency."] }
];

const lockedLearningSites = [
  { title: "Bro Code", url: "https://www.youtube.com/@BroCodez", note: "Beginner-friendly coding videos", locked: true },
  { title: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/", note: "Full-stack practice", locked: true },
  { title: "The Odin Project", url: "https://www.theodinproject.com/", note: "Web developer path", locked: true },
  { title: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/", note: "HTML, CSS, JavaScript reference", locked: true },
  { title: "roadmap.sh Full Stack", url: "https://roadmap.sh/full-stack", note: "Full-stack roadmap", locked: true },
  { title: "Java Documentation", url: "https://docs.oracle.com/en/java/", note: "Official Java docs", locked: true },
  { title: "W3Schools", url: "https://www.w3schools.com/", note: "Quick syntax examples", locked: true },
  { title: "Coursera", url: "https://www.coursera.org/search?query=full%20stack%20developer", note: "Structured courses", locked: true },
  { title: "LinkedIn Learning", url: "https://www.linkedin.com/learning/search?keywords=full%20stack%20developer", note: "Professional courses", locked: true },
  { title: "GitHub Skills", url: "https://skills.github.com/", note: "Git and GitHub practice", locked: true }
];

const suggestionBank = {
  today: [
    "Start with a 10 minute reset: water, clean desk, open planner.",
    "Pick one task that would make the day feel successful.",
    "Put your phone away for the first study block.",
    "Review your roadmap before choosing tonight's work.",
    "Close the day by writing one lesson and one next step."
  ],
  study: [
    "Use 45 minutes focus plus 10 minutes recap.",
    "Write active recall questions before rereading notes.",
    "Teach the topic out loud in simple words.",
    "Do the hardest assignment while your energy is highest.",
    "Make a mistake list and review it before the next test."
  ],
  life: [
    "Protect sleep like an appointment.",
    "Pair prayer with an existing routine to make consistency easier.",
    "Track spending the same day it happens.",
    "Plan tomorrow before relaxing tonight.",
    "Keep workouts simple enough that you actually repeat them."
  ]
};

const exerciseIdeas = [
  "Full body: push-ups, squats, rows, planks, walking.",
  "Cardio day: 20-30 minute brisk walk, bike, or jog.",
  "Strength day: 3 sets each of squats, push-ups, lunges, shoulder press.",
  "Mobility: hips, hamstrings, shoulders, back, ankles for 15 minutes.",
  "Busy day minimum: 10 push-ups, 20 squats, 30 second plank, repeat 3 times."
];

const presets = {
  light: { bg: "#f6f4ee", card: "#ffffff", text: "#17201c", accent: "#256f5a" },
  calm: { bg: "#eef5f2", card: "#ffffff", text: "#162522", accent: "#2b7a78" },
  midnight: { bg: "#111827", card: "#1f2937", text: "#f8fafc", accent: "#38bdf8" },
  fresh: { bg: "#f3f8ed", card: "#ffffff", text: "#1d241f", accent: "#5b8c37" },
  ocean: { bg: "#e7f7fb", card: "#ffffff", text: "#10252d", accent: "#0f7c8f" },
  rose: { bg: "#fff1f4", card: "#ffffff", text: "#2a161b", accent: "#b63f65" },
  sunrise: { bg: "#fff4df", card: "#ffffff", text: "#241b12", accent: "#c46b25" },
  forest: { bg: "#edf5ed", card: "#ffffff", text: "#132215", accent: "#2f6f3e" },
  lavender: { bg: "#f3efff", card: "#ffffff", text: "#20182e", accent: "#7652b8" },
  obsidian: { bg: "#0b0f14", card: "#151b22", text: "#f2f7fb", accent: "#00d4ff" },
  cyber: { bg: "#090b1a", card: "#14162d", text: "#f6f2ff", accent: "#ff3df2" },
  neon: { bg: "#050816", card: "#111827", text: "#e0f2fe", accent: "#22d3ee" },
  matrix: { bg: "#03120a", card: "#0b1f13", text: "#dcfce7", accent: "#22c55e" },
  ember: { bg: "#160b08", card: "#24110d", text: "#fff7ed", accent: "#f97316" },
  void: { bg: "#050505", card: "#111111", text: "#f5f5f5", accent: "#a855f7" },
  arcticDark: { bg: "#07111f", card: "#101a2b", text: "#e6f7ff", accent: "#38bdf8" },
  plasma: { bg: "#130617", card: "#25102d", text: "#fff1ff", accent: "#fb7185" },
  terminal: { bg: "#06110d", card: "#0e1f18", text: "#ccffdd", accent: "#00ff88" },
  galaxy: { bg: "#0b1026", card: "#151a36", text: "#eef2ff", accent: "#818cf8" },
  wildfire: { bg: "#140907", card: "#29120c", text: "#fff4e6", accent: "#ef4444" },
  acid: { bg: "#08110a", card: "#111f13", text: "#f7ffe6", accent: "#a3e635" },
  quantum: { bg: "#08051a", card: "#171129", text: "#f4f0ff", accent: "#7c3aed" },
  hologram: { bg: "#061522", card: "#102738", text: "#e8fbff", accent: "#67e8f9" },
  eclipse: { bg: "#0f0d12", card: "#1d1821", text: "#fff7fb", accent: "#f43f5e" },
  chrome: { bg: "#101418", card: "#1b2229", text: "#eef2f6", accent: "#94a3b8" },
  auroraNight: { bg: "#06131d", card: "#10212d", text: "#ecfeff", accent: "#2dd4bf" },
  royalShadow: { bg: "#10071f", card: "#1e1233", text: "#faf5ff", accent: "#c084fc" },
  bloodMoon: { bg: "#170707", card: "#2a1010", text: "#fff1f2", accent: "#dc2626" },
  deepSea: { bg: "#02131a", card: "#082631", text: "#e0faff", accent: "#0891b2" },
  graphiteGold: { bg: "#121212", card: "#20201d", text: "#fff8e1", accent: "#d6a63a" },
  solarPunk: { bg: "#08170f", card: "#13251a", text: "#f4ffe8", accent: "#84cc16" }
};

const defaultMenuPages = [
  { id: "dashboard", label: "Home", visible: true },
  { id: "money", label: "Money Hub", visible: true },
  { id: "health", label: "Health Hub", visible: true },
  { id: "study", label: "Study Hub", visible: true },
  { id: "faith", label: "Faith Hub", visible: true },
  { id: "life", label: "Life Hub", visible: true },
  { id: "history", label: "History", visible: true },
  { id: "settings", label: "Settings", visible: true }
];

const defaultHomeCards = [
  { id: "overview", label: "Today At A Glance", visible: true },
  { id: "top3", label: "Top 3", visible: true },
  { id: "prayer", label: "Prayer Snapshot", visible: true },
  { id: "school", label: "School + Tasks", visible: true },
  { id: "money", label: "Money + Bills", visible: true },
  { id: "latestNotes", label: "Latest Notes", visible: true },
  { id: "sleep", label: "Sleep Summary", visible: true },
  { id: "workout", label: "Workout Coach", visible: true },
  { id: "discipline", label: "Discipline Streak", visible: true },
  { id: "checklist", label: "Daily Checklist", visible: true },
  { id: "notes", label: "Notes", visible: true }
];

let state = loadState();
let activeDate = state.activeDate || todayKey();
let currentPage = "dashboard";
let pageStack = [];
let liveLoadStarted = false;
let liveClockTimer = null;
let panelLayoutEditMode = false;

function defaultState() {
  return {
    activeDate: todayKey(),
    autoSave: true,
    pageColors: {},
    pageNames: {},
    panelLayouts: {},
    menuSettings: {
      eyebrow: "Command menu",
      title: "Where do you want to go?",
      buttonText: "Command Menu",
      bg: "#eaf4f1",
      card: "#f7fbfa",
      text: "#111917",
      active: "#dcece7",
      pages: defaultMenuPages.map((page) => ({ ...page }))
    },
    homeCardSettings: defaultHomeCards.map((card) => ({ ...card })),
    homeCardCollapsed: {},
    quoteSeeds: { mindset: 0, famous: 0, islamic: 0, power: 0 },
    recommendationSeeds: { books: 0, movies: 0, songs: 0, podcasts: 0 },
    history: [],
    reminders: [],
    theme: presets.light,
    backgroundScene: "creative",
    days: {},
    tasks: [],
    todoLists: [{ title: "Personal", items: [{ text: "Plan tomorrow", done: false }] }],
    alarms: [],
    countdowns: [],
    money: [],
    bills: starterBills.map((bill) => ({ ...bill })),
    billChecklist: starterBillChecklist.map((item) => ({ ...item })),
    calendarDraft: {},
    githubDraft: { branch: "main", message: "Upload planner file" },
    assistantApiUrl: "",
    classes: ["Math", "English", "Science"],
    assignments: [],
    importantDates: [],
    studyBlocks: [],
    javaModule: 0,
    javaNotes: [],
    selectedSurah: 1,
    mapQuery: "New York Public Library",
    schoolStudySpace: "",
    projectStudySpace: "",
    developerStudySpace: "",
    essentialsNotes: "",
    faithNotes: "",
    customLinks: [],
    learningSites: lockedLearningSites.map((site) => ({ ...site })),
    prayerLocation: { city: "New York", country: "United States" },
    prayerTimes: {},
    health: {
      sleepTime: "",
      wakeTime: "",
      sleepQuality: "Good",
      sleepActiveStart: "",
      sleepSessions: [],
      notes: "",
      checklist: [
        { text: "Drink water", done: false },
        { text: "Move body", done: false },
        { text: "Sleep on time", done: false }
      ]
    },
    motivationSeed: 0,
    workouts: [],
    roadmap: [
      { phase: "Now", text: "Build daily consistency with prayer, school, study, money, and workout tracking.", status: "In progress" },
      { phase: "Next", text: "Create weekly review habits and update goals every Sunday.", status: "Planned" },
      { phase: "Future", text: "Add bigger goals, projects, career plans, and skill milestones.", status: "Planned" }
    ],
    lifeRoadmap: lifeRoadmap.map((item) => ({ ...item, actions: [...item.actions] })),
    files: [],
    profile: {},
    discipline: { start: "", reason: "", triggers: [] },
    motivations: []
  };
}

function loadState() {
  try {
    const loaded = { ...defaultState(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
    if (!Array.isArray(loaded.bills) || loaded.bills.length === 0) loaded.bills = starterBills.map((bill) => ({ ...bill }));
    if (!Array.isArray(loaded.billChecklist) || loaded.billChecklist.length === 0) loaded.billChecklist = starterBillChecklist.map((item) => ({ ...item }));
    const defaultMenu = defaultState().menuSettings;
    loaded.menuSettings = { ...defaultMenu, ...(loaded.menuSettings || {}) };
    const savedPages = loaded.menuSettings.pages || [];
    savedPages.forEach((page) => {
      if (page.id === "study" && page.label === "Developer Study Hub") page.label = "Study Hub";
    });
    const existingPages = savedPages.filter((saved) => defaultMenuPages.some((page) => page.id === saved.id));
    const missingPages = defaultMenuPages.filter((page) => !existingPages.some((saved) => saved.id === page.id));
    loaded.menuSettings.pages = [
      ...existingPages.map((saved) => ({ ...defaultMenuPages.find((page) => page.id === saved.id), ...saved })),
      ...missingPages.map((page) => ({ ...page }))
    ];
    const savedHomeCards = loaded.homeCardSettings || [];
    loaded.homeCardSettings = defaultHomeCards.map((card) => ({ ...card, ...(savedHomeCards.find((saved) => saved.id === card.id) || {}) }));
    loaded.quoteSeeds = { mindset: 0, famous: 0, islamic: 0, power: 0, ...(loaded.quoteSeeds || {}) };
    loaded.recommendationSeeds = { books: 0, movies: 0, songs: 0, podcasts: 0, ...(loaded.recommendationSeeds || {}) };
    const existingUrls = new Set((loaded.learningSites || []).map((site) => site.url));
    loaded.learningSites = [
      ...lockedLearningSites.filter((site) => !existingUrls.has(site.url)).map((site) => ({ ...site })),
      ...(loaded.learningSites || [])
    ];
    return loaded;
  } catch {
    return defaultState();
  }
}

function saveState() {
  state.activeDate = activeDate;
  if (state.autoSave === false) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function forceSaveState() {
  state.activeDate = activeDate;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function collectStyleText() {
  return [...document.styleSheets].map((sheet) => {
    try {
      return [...sheet.cssRules].map((rule) => rule.cssText).join("\n");
    } catch {
      return "";
    }
  }).join("\n")
    .replace(/url\([^)]*\)/g, "none")
    .replace(/backdrop-filter:[^;{}]+;?/g, "")
    .replace(/filter:[^;{}]+;?/g, "");
}

function prepareScreenshotClone(root) {
  root.querySelectorAll("input, textarea, select").forEach((field) => {
    if (field.tagName === "TEXTAREA") {
      field.textContent = field.value || "";
    } else if (field.tagName === "SELECT") {
      [...field.options].forEach((option) => option.toggleAttribute("selected", option.selected));
    } else {
      field.setAttribute("value", field.value || "");
      if (field.type === "checkbox" || field.type === "radio") field.toggleAttribute("checked", field.checked);
    }
  });
  root.querySelectorAll("[hidden]").forEach((node) => node.remove());
  root.querySelectorAll("script, template").forEach((node) => node.remove());
  root.querySelectorAll("iframe, video, canvas").forEach((node) => {
    const replacement = document.createElement("div");
    replacement.className = "screenshot-placeholder";
    replacement.textContent = node.title || "Preview saved in browser";
    node.replaceWith(replacement);
  });
  return root;
}

async function captureCurrentPageImage() {
  const panel = document.querySelector(".panel.is-visible");
  if (!panel) return "";
  const width = Math.min(1440, Math.max(900, document.querySelector(".main").clientWidth || 1100));
  const stage = document.createElement("div");
  stage.className = "screenshot-stage";
  stage.style.cssText = `position:fixed;left:-12000px;top:0;width:${width}px;background:white;color:#111;padding:24px;font-family:Arial,sans-serif;`;
  const title = document.createElement("div");
  title.className = "screenshot-title";
  title.innerHTML = `<p>Your personal operating system SHAHARIAR FAHIM</p><h1>${pageTitle(currentPage)}</h1><small>Saved ${new Date().toLocaleString()}</small>`;
  stage.append(title, prepareScreenshotClone(panel.cloneNode(true)));
  document.body.append(stage);
  const height = Math.min(9000, Math.max(700, stage.scrollHeight + 48));
  const html = new XMLSerializer().serializeToString(stage);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>
            ${collectStyleText()}
            body, .screenshot-stage { background: #ffffff !important; }
            .screenshot-stage .panel { display: block !important; }
            .screenshot-stage .topbar, .screenshot-stage .save-status-toast { display: none !important; }
            .screenshot-title { margin-bottom: 24px; padding: 22px; border: 1px solid #d8e0dc; border-radius: 22px; background: #f7fbfa; }
            .screenshot-title p { margin: 0 0 6px; font-size: 13px; font-weight: 900; text-transform: uppercase; color: #68736f; }
            .screenshot-title h1 { margin: 0; font-size: 44px; line-height: 1; color: #111917; }
            .screenshot-title small { display: block; margin-top: 8px; color: #68736f; }
            .screenshot-placeholder { min-height: 180px; display: grid; place-items: center; border: 1px dashed #aab5b0; border-radius: 16px; color: #68736f; background: #f7fbfa; }
          </style>
          ${html}
        </div>
      </foreignObject>
    </svg>`;
  document.body.removeChild(stage);
  const svgDataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  return new Promise((resolve) => {
    const image = new Image();
    const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(image, 0, 0);
      URL.revokeObjectURL(url);
      try {
        resolve(canvas.toDataURL("image/jpeg", 0.86));
      } catch {
        resolve(svgDataUrl);
      }
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(svgDataUrl);
    };
    image.src = url;
  });
}

async function saveSnapshot(label = "") {
  const title = label || pageTitle(currentPage);
  const screenshot = await captureCurrentPageImage();
  if (!screenshot) throw new Error("Screenshot capture failed. Try saving again after the page finishes loading.");
  state.history.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title,
    page: currentPage,
    savedAt: new Date().toLocaleString(),
    screenshot,
    data: JSON.parse(JSON.stringify({
      days: state.days,
      tasks: state.tasks,
      reminders: state.reminders,
      bills: state.bills,
      classes: state.classes,
      assignments: state.assignments,
      health: state.health,
      studyBlocks: state.studyBlocks,
      customLinks: state.customLinks,
      learningSites: state.learningSites
    }))
  });
  state.history = state.history.slice(0, 30);
  try {
    forceSaveState();
  } catch {
    state.history = state.history.slice(0, 10);
    forceSaveState();
  }
  renderHistory();
}

async function saveCurrentPage(label = "") {
  const title = label || `${pageTitle(currentPage)} - ${new Date().toLocaleString()}`;
  const status = document.querySelector("#saveStatus");
  const button = document.querySelector("#savePage");
  if (status) status.textContent = "Capturing full page screenshot...";
  if (button) button.disabled = true;
  try {
    await saveSnapshot(title);
    if (status) status.textContent = `Screenshot saved ${new Date().toLocaleTimeString()} to History.`;
  } catch (error) {
    if (status) status.textContent = error.message || "Screenshot save failed.";
  } finally {
    if (button) button.disabled = false;
  }
}

function buildPrintableCurrentPage() {
  const panel = document.querySelector(".panel.is-visible");
  if (!panel) return null;
  const printable = document.createElement("section");
  printable.id = "printPage";
  printable.className = "print-page";
  const title = document.createElement("div");
  title.className = "print-title";
  title.innerHTML = `<p>Your personal operating system SHAHARIAR FAHIM</p><h1>${pageTitle(currentPage)}</h1><small>Saved ${new Date().toLocaleString()}</small>`;
  printable.append(title, prepareScreenshotClone(panel.cloneNode(true)));
  return printable;
}

function standalonePdfHtml(printable) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>${pageTitle(currentPage)} PDF Copy</title>
  <style>
    ${collectStyleText()}
    body { margin: 0; padding: 28px; background: white !important; color: #111917; font-family: Arial, sans-serif; }
    .print-page { display: block !important; }
    .print-title { margin-bottom: 18px; padding: 18px; border: 1px solid #d8e0dc; border-radius: 14px; background: #f7fbfa; }
    .print-title p { margin: 0 0 6px; color: #68736f; font-size: 11px; font-weight: 900; text-transform: uppercase; }
    .print-title h1 { margin: 0; color: #111917; font-size: 34px; line-height: 1; }
    .print-title small { display: block; margin-top: 7px; color: #68736f; }
    .panel { display: block !important; }
    .card, .hero, .date-card { break-inside: avoid; box-shadow: none !important; }
    button, .hub-strip, .resource-links, .quote-refresh { display: none !important; }
    input, textarea, select { border-color: #cfd8d3 !important; background: white !important; color: #111917 !important; }
  </style>
</head>
<body>
  ${printable.outerHTML}
  <script>window.onload = () => setTimeout(() => window.print(), 250);<\/script>
</body>
</html>`;
}

function savePdfCopyToHistory(printable) {
  const title = `${pageTitle(currentPage)} PDF - ${new Date().toLocaleString()}`;
  state.history.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title,
    page: currentPage,
    savedAt: new Date().toLocaleString(),
    type: "pdf",
    pdfHtml: standalonePdfHtml(printable),
    data: { note: "PDF-ready copy saved. Open it from History and choose Save as PDF." }
  });
  state.history = state.history.slice(0, 30);
  forceSaveState();
  renderHistory();
}

function saveCurrentPagePdf() {
  const status = document.querySelector("#saveStatus");
  const printable = buildPrintableCurrentPage();
  if (!printable) {
    if (status) {
      status.hidden = false;
      status.textContent = "No visible page to save as PDF.";
    }
    return;
  }
  const oldPrint = document.querySelector("#printPage");
  if (oldPrint) oldPrint.remove();
  savePdfCopyToHistory(printable.cloneNode(true));
  (document.querySelector(".app-shell") || document.body).append(printable);
  if (status) {
    status.hidden = false;
    status.textContent = "PDF copy saved in History. Choose Save as PDF in the print window.";
  }
  window.print();
  window.setTimeout(() => {
    printable.remove();
    if (status) {
      status.textContent = "PDF copy saved in History.";
      window.setTimeout(() => status.hidden = true, 2200);
    }
  }, 1200);
}

function updateAutoSaveButton() {
  const button = document.querySelector("#autoSaveToggle");
  if (!button) return;
  const enabled = state.autoSave !== false;
  button.textContent = enabled ? "Auto-save On" : "Auto-save Off";
  button.classList.toggle("is-off", !enabled);
}

function updatePageLabels() {
  const menu = state.menuSettings || defaultState().menuSettings;
  document.querySelector("#pageChooser").textContent = menu.buttonText || "Command Menu";
  const launcherEyebrow = document.querySelector(".launcher-head .eyebrow");
  const launcherTitle = document.querySelector(".launcher-head h2");
  if (launcherEyebrow) launcherEyebrow.textContent = menu.eyebrow || "Command menu";
  if (launcherTitle) launcherTitle.textContent = menu.title || "Where do you want to go?";
  const nav = document.querySelector(".tabs");
  if (nav) {
    menu.pages?.forEach((page) => {
      const tab = nav.querySelector(`.tab[data-tab="${page.id}"]`);
      if (tab) nav.append(tab);
    });
  }
  document.querySelectorAll(".tab").forEach((tab) => {
    const config = menu.pages?.find((page) => page.id === tab.dataset.tab);
    tab.textContent = config?.label || state.pageNames?.[tab.dataset.tab] || tab.textContent;
    tab.hidden = config ? config.visible === false : false;
  });
}

function updateHomeCardSettings() {
  const settings = state.homeCardSettings || defaultHomeCards.map((card) => ({ ...card }));
  const dashboard = document.querySelector("#dashboard");
  const grid = document.querySelector("#homeCards");
  if (!dashboard) return;
  settings.forEach((config) => {
    const card = dashboard.querySelector(`[data-home-card="${config.id}"]`);
    if (!card) return;
    const heading = card.querySelector("h3");
    if (heading) heading.textContent = config.label || defaultHomeCards.find((item) => item.id === config.id)?.label || config.id;
    card.hidden = config.visible === false;
    if (grid) grid.append(card);
  });
  ensureHomeCardCollapse();
  renderHomeLayoutControls();
}

function ensureHomeCardCollapse() {
  const grid = document.querySelector("#homeCards");
  if (!grid) return;
  state.homeCardCollapsed = state.homeCardCollapsed || {};
  grid.querySelectorAll("[data-home-card]").forEach((card) => {
    const cardId = card.dataset.homeCard;
    let header = card.querySelector(":scope > .home-card-header");
    const heading = card.querySelector(":scope > h3") || card.querySelector(".home-card-header h3");
    if (!heading) return;
    if (!header) {
      header = document.createElement("div");
      header.className = "home-card-header";
      card.insertBefore(header, heading);
      header.append(heading);
    }
    let toggle = header.querySelector(".home-card-toggle");
    if (!toggle) {
      toggle = document.createElement("button");
      toggle.className = "home-card-toggle";
      toggle.type = "button";
      toggle.setAttribute("aria-label", "Expand or collapse dashboard card");
      toggle.addEventListener("click", (event) => {
        event.stopPropagation();
        state.homeCardCollapsed[cardId] = !state.homeCardCollapsed[cardId];
        saveState();
        ensureHomeCardCollapse();
      });
      header.append(toggle);
    }
    let body = card.querySelector(":scope > .home-card-body");
    if (!body) {
      body = document.createElement("div");
      body.className = "home-card-body";
      header.after(body);
    }
    [...card.children].forEach((child) => {
      if (child.classList.contains("home-card-tools") || child.classList.contains("home-card-header") || child.classList.contains("home-card-body")) return;
      body.append(child);
    });
    const collapsed = state.homeCardCollapsed[cardId] === true;
    card.classList.toggle("is-collapsed", collapsed);
    body.hidden = collapsed;
    body.setAttribute("aria-hidden", String(collapsed));
    card.setAttribute("aria-expanded", String(!collapsed));
    toggle.textContent = collapsed ? "Open" : "Close";
    toggle.title = collapsed ? "Expand this tab" : "Collapse this tab";
    toggle.setAttribute("aria-expanded", String(!collapsed));
  });
}

function renderHomeLayoutControls() {
  const grid = document.querySelector("#homeCards");
  if (!grid) return;
  document.querySelectorAll(".home-card-tools").forEach((tools) => tools.remove());
  grid.querySelectorAll("[data-home-card]").forEach((card) => {
    card.draggable = false;
    card.classList.remove("is-dragging");
    card.ondragstart = null;
    card.ondragover = null;
    card.ondrop = null;
    card.ondragend = null;
  });
  grid.classList.toggle("is-editing", panelLayoutEditMode);
  const settings = state.homeCardSettings || defaultHomeCards.map((card) => ({ ...card }));
  settings.forEach((config, index) => {
    const card = grid.querySelector(`[data-home-card="${config.id}"]`);
    if (!card || config.visible === false) return;
    if (!panelLayoutEditMode) return;
    card.draggable = true;
    card.ondragstart = (event) => {
      event.dataTransfer.setData("text/plain", config.id);
      event.dataTransfer.effectAllowed = "move";
      card.classList.add("is-dragging");
    };
    card.ondragover = (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    };
    card.ondrop = (event) => {
      event.preventDefault();
      const draggedId = event.dataTransfer.getData("text/plain");
      const targetId = config.id;
      if (!draggedId || draggedId === targetId) return;
      const from = settings.findIndex((item) => item.id === draggedId);
      const to = settings.findIndex((item) => item.id === targetId);
      if (from < 0 || to < 0) return;
      const [moved] = settings.splice(from, 1);
      settings.splice(to, 0, moved);
      state.homeCardSettings = settings;
      saveState();
      updateHomeCardSettings();
      renderHomeCardSettings();
    };
    card.ondragend = () => {
      card.classList.remove("is-dragging");
      renderHomeLayoutControls();
    };
    const tools = document.createElement("div");
    tools.className = "home-card-tools";
    const handle = document.createElement("span");
    handle.className = "drag-handle";
    handle.textContent = "Drag";
    const hide = document.createElement("button");
    hide.className = "danger-btn compact-action";
    hide.type = "button";
    hide.textContent = "Hide";
    hide.addEventListener("click", (event) => {
      event.stopPropagation();
      config.visible = false;
      state.homeCardSettings = settings;
      saveState();
      updateHomeCardSettings();
      renderHomeCardSettings();
    });
    tools.append(handle, hide);
    card.prepend(tools);
  });
  const editButton = document.querySelector("#editHomeLayout");
  if (editButton) {
    editButton.classList.toggle("is-active", panelLayoutEditMode);
    editButton.title = panelLayoutEditMode ? "Done editing this page layout" : "Edit this page layout";
  }
}

function layoutCardKey(card, index) {
  const heading = card.querySelector("h3, h2")?.textContent?.trim() || card.id || `card-${index}`;
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `card-${index}`;
}

function visiblePanel() {
  return document.querySelector(".panel.is-visible");
}

function renderPanelLayoutControls() {
  document.querySelectorAll(".panel-layout-tools").forEach((tools) => tools.remove());
  document.querySelectorAll(".panel-layout-editing").forEach((grid) => grid.classList.remove("panel-layout-editing"));
  document.querySelectorAll("[data-panel-layout-key]").forEach((card) => {
    card.draggable = false;
    card.classList.remove("is-dragging");
    card.ondragstart = null;
    card.ondragover = null;
    card.ondrop = null;
    card.ondragend = null;
  });
  if (currentPage === "dashboard") {
    renderHomeLayoutControls();
    return;
  }
  const panel = visiblePanel();
  if (!panel) return;
  const layout = state.panelLayouts?.[currentPage] || { hidden: {}, order: {} };
  state.panelLayouts = state.panelLayouts || {};
  state.panelLayouts[currentPage] = layout;
  const grids = [...panel.querySelectorAll(":scope > .grid, :scope > .motivation-recommendation-grid")];
  grids.forEach((grid, gridIndex) => {
    const cards = [...grid.children].filter((child) => child.classList?.contains("card"));
    const order = layout.order?.[gridIndex] || [];
    order.forEach((key) => {
      const card = cards.find((item, index) => (item.dataset.panelLayoutKey || layoutCardKey(item, index)) === key);
      if (card) grid.append(card);
    });
    grid.classList.toggle("panel-layout-editing", panelLayoutEditMode);
    [...grid.children].filter((child) => child.classList?.contains("card")).forEach((card, index) => {
      const key = card.dataset.panelLayoutKey || layoutCardKey(card, index);
      card.dataset.panelLayoutKey = key;
      const isHidden = layout.hidden?.[key] === true;
      card.hidden = isHidden && !panelLayoutEditMode;
      card.classList.toggle("is-layout-hidden", isHidden && panelLayoutEditMode);
      if (!panelLayoutEditMode) return;
      card.draggable = true;
      card.ondragstart = (event) => {
        event.dataTransfer.setData("text/plain", key);
        event.dataTransfer.setData("grid-index", String(gridIndex));
        event.dataTransfer.effectAllowed = "move";
        card.classList.add("is-dragging");
      };
      card.ondragover = (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
      };
      card.ondrop = (event) => {
        event.preventDefault();
        if (event.dataTransfer.getData("grid-index") !== String(gridIndex)) return;
        const draggedKey = event.dataTransfer.getData("text/plain");
        const targetKey = key;
        if (!draggedKey || draggedKey === targetKey) return;
        const siblings = [...grid.children].filter((child) => child.classList?.contains("card"));
        const dragged = siblings.find((item) => item.dataset.panelLayoutKey === draggedKey);
        const target = siblings.find((item) => item.dataset.panelLayoutKey === targetKey);
        if (!dragged || !target) return;
        grid.insertBefore(dragged, target);
        layout.order[gridIndex] = [...grid.children].filter((child) => child.classList?.contains("card")).map((item) => item.dataset.panelLayoutKey);
        saveState();
        renderPanelLayoutControls();
      };
      card.ondragend = () => {
        card.classList.remove("is-dragging");
        renderPanelLayoutControls();
      };
      const tools = document.createElement("div");
      tools.className = "panel-layout-tools";
      const handle = document.createElement("span");
      handle.className = "drag-handle";
      handle.textContent = "Drag";
      const hide = document.createElement("button");
      hide.className = `${isHidden ? "ghost-btn" : "danger-btn"} compact-action`;
      hide.type = "button";
      hide.textContent = isHidden ? "Show" : "Hide";
      hide.addEventListener("click", (event) => {
        event.stopPropagation();
        layout.hidden[key] = !isHidden;
        saveState();
        renderPanelLayoutControls();
      });
      tools.append(handle, hide);
      card.prepend(tools);
    });
  });
  const editButton = document.querySelector("#editHomeLayout");
  if (editButton) {
    editButton.classList.toggle("is-active", panelLayoutEditMode);
    editButton.title = panelLayoutEditMode ? "Done editing this page layout" : "Edit this page layout";
  }
}

function ensureInlineSaveButtons() {
  const deleteButtons = [...document.querySelectorAll(".panel .danger-btn, .panel .icon-btn")]
    .filter((button) => button.id !== "closeLauncher" && !button.classList.contains("has-inline-save"));
  deleteButtons.forEach((button) => {
    const label = button.textContent.trim().toLowerCase();
    const isDelete = label === "x" || label.includes("delete");
    if (!isDelete) return;
    button.classList.add("has-inline-save");
    const save = document.createElement("button");
    save.className = "ghost-btn compact-action inline-save";
    save.type = "button";
    save.textContent = "Save";
    save.addEventListener("click", (event) => {
      event.stopPropagation();
      saveCurrentPage(`${pageTitle(currentPage)} item - ${new Date().toLocaleString()}`);
    });
    button.parentNode.insertBefore(save, button);
  });
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function day() {
  if (!state.days[activeDate]) {
    state.days[activeDate] = {
      top: ["", "", ""],
      checklist: [{ text: "Review the plan", done: false }, { text: "Complete one important task", done: false }],
      notes: "",
      schedule: {},
      prayers: Object.fromEntries(prayers.map((name) => [name, { done: false, note: "" }])),
      prayerReflection: "",
      quran: { surah: "", ayah: "", minutes: "", reflection: "" },
      verseIndex: Math.floor(Math.random() * quranVerses.length)
    };
  }
  return state.days[activeDate];
}

function applyTheme() {
  const theme = state.theme || presets.light;
  const menu = state.menuSettings || defaultState().menuSettings;
  const pageColor = state.pageColors?.[currentPage] || theme.bg;
  document.documentElement.style.setProperty("--bg", pageColor);
  document.documentElement.style.setProperty("--card", theme.card);
  document.documentElement.style.setProperty("--text", theme.text);
  document.documentElement.style.setProperty("--accent", theme.accent);
  document.documentElement.style.setProperty("--menu-bg", menu.bg || "#f6f8f5");
  document.documentElement.style.setProperty("--menu-card", menu.card || "#f8fbfa");
  document.documentElement.style.setProperty("--menu-text", menu.text || "#111917");
  document.documentElement.style.setProperty("--menu-active", menu.active || "#dfece8");
  document.body.dataset.scene = state.backgroundScene || "creative";
  document.querySelector("#quickBackground").value = pageColor;
  document.querySelector("#bgColor").value = theme.bg;
  document.querySelector("#cardColor").value = theme.card;
  document.querySelector("#textColor").value = theme.text;
  document.querySelector("#accentColor").value = theme.accent;
  setColorValue("#menuBgColor", menu.bg);
  setColorValue("#menuCardColor", menu.card);
  setColorValue("#menuTextColor", menu.text);
  setColorValue("#menuActiveColor", menu.active);
}

function setColorValue(selector, value) {
  const el = document.querySelector(selector);
  if (el && value) el.value = value;
}

function bindTabs() {
  document.querySelectorAll(".tab").forEach((button) => {
    button.addEventListener("click", () => openPanel(button.dataset.tab, button.textContent, button));
  });
}

function pageTitle(tabId, fallback) {
  const menuLabel = state.menuSettings?.pages?.find((page) => page.id === tabId)?.label;
  return state.pageNames?.[tabId] || menuLabel || fallback || document.querySelector(`#${tabId}`)?.querySelector("h2")?.textContent || "Planner";
}

function openPanel(tabId, title, activeButton, options = {}) {
  if (tabId !== currentPage && !options.skipStack) pageStack.push(currentPage);
  currentPage = tabId;
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("is-active"));
  document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("is-visible"));
  if (activeButton) activeButton.classList.add("is-active");
  const panel = document.querySelector(`#${tabId}`);
  if (panel) panel.classList.add("is-visible");
  document.querySelector("#pageTitle").textContent = pageTitle(tabId, title);
  const backButton = document.getElementById("backHome");
  if (backButton) backButton.hidden = tabId === "dashboard";
  const visibleBack = document.getElementById("backButton");
  if (visibleBack) visibleBack.hidden = tabId === "dashboard";
  document.querySelector("#pageLauncher").hidden = true;
  renderAll();
  renderPanelLayoutControls();
}

function input(value, onInput, attrs = {}) {
  const el = document.createElement("input");
  el.value = value || "";
  Object.assign(el, attrs);
  el.addEventListener("input", () => {
    onInput(el.value);
    saveState();
    renderDashboard();
  });
  return el;
}

function select(value, options, onChange) {
  const el = document.createElement("select");
  options.forEach((option) => {
    const item = document.createElement("option");
    item.value = option;
    item.textContent = option;
    el.append(item);
  });
  el.value = value;
  el.addEventListener("change", () => {
    onChange(el.value);
    saveState();
    renderAll();
  });
  return el;
}

function renderDashboard() {
  const d = day();
  const date = new Date(`${activeDate}T12:00:00`);
  const dayName = date.toLocaleDateString(undefined, { weekday: "long" });
  const fullDate = date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const todayLabel = document.querySelector("#todayLabel");
  if (todayLabel) todayLabel.textContent = "Your personal operating system SHAHARIAR FAHIM";
  if (document.querySelector("#dashboard").classList.contains("is-visible")) document.querySelector("#pageTitle").textContent = dayName;
  updateLiveClock(fullDate);
  document.querySelector("#dashboardGreeting").textContent = state.profile.name ? state.profile.name : dayName;
  document.querySelector("#motivationText").textContent = motivationBank[new Date(activeDate).getDate() % motivationBank.length];

  const top = document.querySelector("#topThree");
  top.innerHTML = "";
  fillStatus("#topThree", d.top.filter(Boolean).length
    ? d.top.filter(Boolean).map((text) => ({ text, source: "Schedule", page: "daily" }))
    : [{ text: "No priorities set. Open Schedule to add them.", source: "Schedule", page: "daily" }]);

  const prayersDone = prayers.filter((name) => d.prayers[name]?.done).length;
  const snap = document.querySelector("#prayerSnapshot");
  snap.innerHTML = "";
  prayers.forEach((name) => {
    const row = document.createElement("div");
    row.className = "status-pill";
    row.innerHTML = `<strong>${name}</strong><span>${d.prayers[name]?.done ? "Done" : "Open"}</span><small>Source: Faith / Prayer</small>`;
    row.classList.add("source-row");
    row.addEventListener("click", () => openPanel("prayer", "Prayer Tracker"));
    snap.append(row);
  });

  const checklist = document.querySelector("#dailyChecklist");
  checklist.innerHTML = "";
  fillStatus("#dailyChecklist", d.checklist.map((item) => ({ text: `${item.done ? "Done" : "Open"}: ${item.text || "Checklist item"}`, source: "Schedule", page: "daily" })));
  document.querySelector("#dailyNotesDisplay").textContent = d.notes || "No notes yet. Open Schedule to write notes.";

  renderHomeSummary();
}

function updateLiveClock(dateLabel = "") {
  const date = new Date(`${activeDate}T12:00:00`);
  const fullDate = dateLabel || date.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const now = new Date();
  const time = now.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit", second: "2-digit" });
  const clock = document.querySelector("#homeDayLabel");
  if (clock) clock.textContent = `${fullDate} | Live time ${time}`;
  const digital = document.querySelector("#digitalClockTime");
  const period = document.querySelector("#digitalClockPeriod");
  if (digital) digital.textContent = now.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  if (period) period.textContent = now.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" });
  updateAnalogClock(now);
}

function updateAnalogClock(now = new Date()) {
  const clock = document.querySelector(".analog-clock");
  if (!clock) return;
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;
  clock.style.setProperty("--second-angle", `${seconds * 6}deg`);
  clock.style.setProperty("--minute-angle", `${minutes * 6 + seconds * 0.1}deg`);
  clock.style.setProperty("--hour-angle", `${hours * 30 + minutes * 0.5}deg`);
  const title = document.querySelector("#analogTimeTitle");
  const date = document.querySelector("#analogDate");
  if (title) title.textContent = now.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit", second: "2-digit" });
  if (date) date.textContent = now.toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

function openDetailModal(mode, signal = "") {
  const modal = document.querySelector("#detailModal");
  const analog = document.querySelector("#analogClockView");
  const detail = document.querySelector("#signalDetailView");
  if (!modal || !analog || !detail) return;
  modal.hidden = false;
  analog.hidden = mode !== "clock";
  detail.hidden = mode !== "signal";
  if (mode === "clock") updateAnalogClock();
  if (mode === "signal") renderSignalDetail(signal);
}

function closeDetailModal() {
  const modal = document.querySelector("#detailModal");
  if (modal) modal.hidden = true;
}

const signalConfig = {
  weather: {
    eyebrow: "Weather Pulse",
    title: "Live Conditions",
    items: () => state.liveWeather?.items || fallbackWeatherItems.map((text) => ({ text, source: "Built-in weather brief", page: "" })),
    refresh: refreshLiveWeather,
    more: "https://weather.com/weather/today/"
  },
  news: {
    eyebrow: "News Signal",
    title: "World, US + Sports",
    items: () => state.liveNews?.items || fallbackNewsItems.map((text) => ({ text, source: "Built-in news brief", page: "" })),
    refresh: refreshLiveNews,
    more: "https://news.google.com/topstories?hl=en-US&gl=US&ceid=US:en"
  },
  stocks: {
    eyebrow: "Market Signal",
    title: "Market Pulse",
    items: () => state.liveStocks?.items || fallbackStockItems.map((text) => ({ text, source: "Built-in market brief", page: "" })),
    refresh: refreshLiveStocks,
    more: "https://finance.yahoo.com/markets/stocks/"
  }
};

function renderSignalDetail(signal) {
  const config = signalConfig[signal];
  if (!config) return;
  document.querySelector("#detailEyebrow").textContent = config.eyebrow;
  document.querySelector("#detailTitle").textContent = config.title;
  fillStatus("#detailItems", [
    ...config.items(),
    { text: `Last updated: ${new Date().toLocaleString()}`, source: "Planner", page: "" }
  ]);
  const refresh = document.querySelector("#detailRefresh");
  const more = document.querySelector("#detailMore");
  refresh.onclick = async () => {
    await config.refresh();
    renderSignalDetail(signal);
  };
  more.onclick = () => openExternal(config.more);
}

function renderLifeRoadmap() {
  const wrap = document.querySelector("#lifeRoadmapList");
  if (!wrap) return;
  wrap.innerHTML = "";
  state.lifeRoadmap = Array.isArray(state.lifeRoadmap) && state.lifeRoadmap.length
    ? state.lifeRoadmap
    : lifeRoadmap.map((item) => ({ ...item, actions: [...item.actions] }));
  state.lifeRoadmap.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "life-roadmap-card";
    const number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");
    const body = document.createElement("div");
    const actions = document.createElement("textarea");
    actions.rows = 5;
    actions.value = (item.actions || []).join("\n");
    actions.addEventListener("input", () => {
      item.actions = actions.value.split("\n").map((line) => line.trim()).filter(Boolean);
      saveState();
    });
    const del = document.createElement("button");
    del.className = "danger-btn compact-action";
    del.type = "button";
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      state.lifeRoadmap.splice(index, 1);
      saveState();
      renderLifeRoadmap();
    });
    body.append(
      input(item.phase, (value) => item.phase = value, { placeholder: "Phase" }),
      input(item.focus, (value) => item.focus = value, { placeholder: "Focus" }),
      actions,
      del
    );
    card.append(number, body);
    wrap.append(card);
  });
}

function openLifeRoadmap() {
  renderLifeRoadmap();
  document.querySelector("#lifeRoadmapModal").hidden = false;
}

function closeLifeRoadmap() {
  document.querySelector("#lifeRoadmapModal").hidden = true;
}

function renderHomeSummary() {
  const openTasks = state.tasks.filter((task) => (task.status || "Backlog") !== "Done").slice(0, 4);
  const assignments = state.assignments
    .filter((item) => (item.status || "Not started") !== "Submitted" && (item.status || "Not started") !== "Graded")
    .slice(0, 4);
  const importantDates = (state.importantDates || [])
    .filter((item) => (item.status || "Upcoming") !== "Done")
    .sort((a, b) => new Date(a.when || "2999-12-31") - new Date(b.when || "2999-12-31"))
    .slice(0, 3);
  const normalizedClasses = state.classes.map(normalizeClassItem);
  const todaysClasses = normalizedClasses.filter(classOccursOnActiveDate);
  const classItems = (todaysClasses.length ? todaysClasses : normalizedClasses).slice(0, 3);
  const upcomingBills = getUpcomingBills(activeDate, 8);
  const paidBills = state.bills.filter((bill) => bill.paid).slice(0, 3);
  const reminders = state.reminders.filter((reminder) => (reminder.status || "Open") !== "Done").slice(0, 3);
  const sleep = state.health?.sleepTime && state.health?.wakeTime ? `${state.health.sleepTime} - ${state.health.wakeTime}` : "Sleep time not set";

  fillStatus("#homeOverview", [
    { text: `Tasks open: ${openTasks.length}`, source: "Study / Tasks", page: "study" },
    { text: `Assignments open: ${assignments.length}`, source: "Study / Assignments", page: "study" },
    { text: `Important dates: ${importantDates.length}`, source: "Study / Important Dates", page: "study" },
    { text: `Reminders open: ${reminders.length}`, source: "Essentials / Reminders", page: "reminders" },
    { text: `Upcoming bills shown: ${upcomingBills.length}`, source: "Money / Bills", page: "bills" },
    { text: `Sleep: ${sleep}`, source: "Health / Sleep", page: "health" }
  ]);
  fillStatus("#homeSchoolTasks", [
    ...classItems.map((item) => ({ text: `${item.name || "Class"} - ${classScheduleSummary(item)}${classOccursOnActiveDate(item) ? " (today)" : ""}`, source: "Study / Weekly Classes", page: "study" })),
    ...assignments.map((item) => ({ text: `${item.title || item.text || "Assignment"} ${item.due ? `due ${new Date(item.due).toLocaleString()}` : ""}`, source: "Study / Assignments", page: "study" })),
    ...importantDates.map((item) => ({ text: `${item.type || "Date"}: ${item.title || "Important date"}${item.when ? ` - ${new Date(item.when).toLocaleString()}` : ""}`, source: "Study / Important Dates", page: "study" })),
    ...openTasks.map((item) => ({ text: `${item.title || "Task"} ${item.due ? `due ${item.due}` : ""}`, source: "Study / Tasks", page: "study" }))
  ].slice(0, 7));
  fillStatus("#homeMoneyBills", [
    ...upcomingBills.map((item) => ({ text: `${item.paid ? "Paid" : "Due"} ${item.dateLabel}: ${item.name} - ${money(Number(item.amount || 0))}`, source: "Money / Monthly Bills", page: "bills" })),
    ...paidBills.map((bill) => ({ text: `Paid: ${bill.name}`, source: "Money / Monthly Bills", page: "bills" }))
  ]);
  renderHomeNotesFeed();
  renderHomeSleepSummary();
  renderHomeFitnessSummary();
  renderLiveCards();
  updateHomeCardSettings();
}

function trimmedPreview(text, max = 140) {
  const value = String(text || "").trim();
  if (!value) return "";
  return value.length > max ? `${value.slice(0, max)}...` : value;
}

function latestNotes() {
  const d = day();
  const journal = (state.motivations || []).find((entry) => typeof entry === "object" && entry.text?.trim());
  return [
    ["Daily Notes", d.notes, "Schedule", "daily"],
    ["Prayer Reflection", d.prayerReflection, "Faith / Prayer", "prayer"],
    ["Quran Reflection", d.quran?.reflection, "Faith / Quran", "quran"],
    ["Health Notes", state.health?.notes, "Health", "health"],
    ["School Study", state.schoolStudySpace, "Study", "study"],
    ["Projects", state.projectStudySpace, "Study / Projects", "study"],
    ["Developer Skills", state.developerStudySpace, "Study / Skills", "study"],
    ["Life Quick Notes", state.essentialsNotes, "Life / Quick Notes", "life"],
    ["Faith", state.faithNotes, "Faith", "faith"],
    ["Latest Journal", journal?.text, "Life / Journal", "motivation"]
  ].map(([label, text, source, page]) => {
    const preview = trimmedPreview(text);
    return preview ? { text: `${label}: ${preview}`, source, page } : "";
  }).filter(Boolean);
}

function renderHomeNotesFeed() {
  fillStatus("#homeNotesFeed", latestNotes().slice(0, 8));
}

function renderLiveCards() {
  fillStatus("#homeWeather", state.liveWeather?.items || [{ text: "Loading real-time weather...", source: "Open-Meteo", page: "" }]);
  fillStatus("#homeNews", state.liveNews?.items || [{ text: "Loading latest World + US headlines...", source: "Google News", page: "" }]);
  fillStatus("#homeStocks", state.liveStocks?.items || [{ text: "Loading market snapshot...", source: "Yahoo Finance", page: "" }]);
  if (!liveLoadStarted) {
    liveLoadStarted = true;
    refreshLiveWeather();
    refreshLiveNews();
    refreshLiveStocks();
  }
}

function openExternal(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

async function fetchTextWithFallback(urls) {
  let lastError;
  for (const url of urls) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const text = await response.text();
      if (text.trim()) return text;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("Feed unavailable");
}

async function fetchNewsRssItems(label, rss, limit = 1) {
  try {
    const text = await fetchTextWithFallback([
      `https://api.allorigins.win/raw?url=${encodeURIComponent(rss)}`,
      rss
    ]);
    const xml = new DOMParser().parseFromString(text, "text/xml");
    const items = [...xml.querySelectorAll("item")].slice(0, limit).map((item) => ({
      text: `${label}: ${item.querySelector("title")?.textContent || "Latest headline"}`,
      source: "Google News",
      page: ""
    }));
    if (items.length) return items;
  } catch {
    // Try the JSON bridge below.
  }
  const json = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rss)}`).then((res) => res.json());
  return (json.items || []).slice(0, limit).map((item) => ({
    text: `${label}: ${item.title || "Latest headline"}`,
    source: "RSS news",
    page: ""
  }));
}

function getWeatherPosition() {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({ lat: 40.7128, lon: -74.006, label: "New York" });
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude, label: "Your location" }),
      () => resolve({ lat: 40.7128, lon: -74.006, label: "New York" }),
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 600000 }
    );
  });
}

async function refreshLiveWeather() {
  try {
    fillStatus("#homeWeather", ["Refreshing weather..."]);
    const loc = await getWeatherPosition();
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${loc.lat}&longitude=${loc.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=auto`;
    const data = await fetch(url).then((res) => res.json());
    const current = data.current || {};
    const daily = data.daily || {};
    state.liveWeather = {
      updated: new Date().toLocaleString(),
      items: [
        { text: `${loc.label}: ${Math.round(current.temperature_2m)} F, feels ${Math.round(current.apparent_temperature)} F`, source: "Open-Meteo", page: "" },
        { text: `Humidity ${current.relative_humidity_2m}% | Wind ${Math.round(current.wind_speed_10m || 0)} mph`, source: "Open-Meteo", page: "" },
        { text: `Today: high ${Math.round(daily.temperature_2m_max?.[0] || 0)} F, low ${Math.round(daily.temperature_2m_min?.[0] || 0)} F, rain chance ${daily.precipitation_probability_max?.[0] || 0}%`, source: "Open-Meteo", page: "" }
      ]
    };
  } catch {
    state.liveWeather = {
      items: fallbackWeatherItems.map((text) => ({ text, source: "Built-in weather brief", page: "" }))
    };
  }
  saveState();
  renderLiveCards();
}

async function refreshLiveNews() {
  try {
    fillStatus("#homeNews", ["Refreshing latest headlines + sports..."]);
    const feeds = [
      ["Top", "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en"],
      ["US", "https://news.google.com/rss/headlines/section/topic/n?hl=en-US&gl=US&ceid=US:en"],
      ["World", "https://news.google.com/rss/headlines/section/topic/w?hl=en-US&gl=US&ceid=US:en"],
      ["Sports", "https://news.google.com/rss/headlines/section/topic/s?hl=en-US&gl=US&ceid=US:en"]
    ];
    const feedResults = await Promise.allSettled(feeds.map(([label, rss]) => fetchNewsRssItems(label, rss, label === "Sports" ? 2 : 1)));
    const items = feedResults.flatMap((result) => result.status === "fulfilled" ? result.value : []).slice(0, 6);
    state.liveNews = { updated: new Date().toLocaleString(), items: items.length ? items : [{ text: "Open More Updates for latest headlines.", source: "Google News", page: "" }] };
  } catch {
    state.liveNews = {
      items: fallbackNewsItems.map((text) => ({ text, source: "Built-in news brief", page: "" }))
    };
  }
  saveState();
  renderLiveCards();
}

async function fetchStock(symbol) {
  const url = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}?range=ytd&interval=1d`;
  const result = await fetch(url).then((res) => res.json());
  const chart = result.chart.result[0];
  if (!chart) throw new Error("Missing chart");
  const meta = chart.meta;
  const closes = (chart.indicators.quote[0].close || []).filter((value) => typeof value === "number");
  const last = meta.regularMarketPrice || closes[closes.length - 1];
  const previous = meta.chartPreviousClose || closes[closes.length - 2] || last;
  const first = closes[0] || previous;
  if (!Number.isFinite(last)) throw new Error("Missing price");
  const dayChange = previous ? ((last - previous) / previous) * 100 : 0;
  const ytdChange = first ? ((last - first) / first) * 100 : 0;
  return `${symbol}: $${last.toFixed(2)} | today ${dayChange >= 0 ? "+" : ""}${dayChange.toFixed(2)}% | YTD ${ytdChange >= 0 ? "+" : ""}${ytdChange.toFixed(2)}%`;
}

async function fetchStockFromStooq(symbol) {
  const stooqSymbol = `${symbol.toLowerCase()}.us`;
  const year = new Date().getFullYear();
  const today = new Date().toISOString().slice(0, 10).replaceAll("-", "");
  const quoteCsv = await fetchTextWithFallback([
    `https://stooq.com/q/l/?s=${stooqSymbol}&f=sd2t2ohlcv&h&e=csv`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://stooq.com/q/l/?s=${stooqSymbol}&f=sd2t2ohlcv&h&e=csv`)}`
  ]);
  const quoteRows = quoteCsv.trim().split(/\r?\n/);
  const quote = quoteRows[1]?.split(",") || [];
  const close = Number(quote[6]);
  if (!Number.isFinite(close)) throw new Error("Missing Stooq price");
  const histCsv = await fetchTextWithFallback([
    `https://stooq.com/q/d/l/?s=${stooqSymbol}&d1=${year}0101&d2=${today}&i=d`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://stooq.com/q/d/l/?s=${stooqSymbol}&d1=${year}0101&d2=${today}&i=d`)}`
  ]);
  const rows = histCsv.trim().split(/\r?\n/).slice(1).map((line) => line.split(","));
  const first = Number(rows[0]?.[4]) || close;
  const previous = Number(rows[rows.length - 2]?.[4]) || close;
  const dayChange = previous ? ((close - previous) / previous) * 100 : 0;
  const ytdChange = first ? ((close - first) / first) * 100 : 0;
  return `${symbol}: $${close.toFixed(2)} | today ${dayChange >= 0 ? "+" : ""}${dayChange.toFixed(2)}% | YTD ${ytdChange >= 0 ? "+" : ""}${ytdChange.toFixed(2)}%`;
}

async function fetchStockLive(symbol) {
  try {
    return await fetchStock(symbol);
  } catch {
    return fetchStockFromStooq(symbol);
  }
}

async function refreshLiveStocks() {
  try {
    fillStatus("#homeStocks", ["Refreshing stocks..."]);
    const symbols = ["SPY", "QQQ", "AAPL", "MSFT", "TSLA"];
    const rows = await Promise.all(symbols.map(fetchStockLive));
    state.liveStocks = { updated: new Date().toLocaleString(), items: rows.map((text) => ({ text, source: "Yahoo Finance / Stooq", page: "" })) };
  } catch {
    state.liveStocks = {
      items: fallbackStockItems.map((text) => ({ text, source: "Built-in market brief", page: "" }))
    };
  }
  saveState();
  renderLiveCards();
}

function formatDuration(ms) {
  if (!ms || ms < 0) return "0h 0m";
  const hours = Math.floor(ms / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  return `${hours}h ${minutes}m`;
}

function sleepDurationMs(startTime, endTime) {
  if (!startTime || !endTime) return 0;
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);
  if ([startHour, startMinute, endHour, endMinute].some(Number.isNaN)) return 0;
  const start = new Date();
  start.setHours(startHour, startMinute, 0, 0);
  const end = new Date(start);
  end.setHours(endHour, endMinute, 0, 0);
  if (end <= start) end.setDate(end.getDate() + 1);
  return end - start;
}

function sleepRating(ms) {
  if (!ms) return "";
  return ms >= 7 * 3600000 ? "Good: 7+ hours" : "Needs more sleep: under 7 hours";
}

function workoutDuration(item) {
  if (!item?.startedAt || !item?.endedAt) return "";
  const ms = new Date(item.endedAt) - new Date(item.startedAt);
  return ms > 0 ? formatDuration(ms) : "";
}

function workoutTimeRange(item) {
  if (!item?.startedAt) return "Not started yet";
  const start = new Date(item.startedAt).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  if (!item.endedAt) return `Started at ${start}`;
  const end = new Date(item.endedAt).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
  return `${start} - ${end}`;
}

function renderHomeSleepSummary() {
  const sessions = state.health?.sleepSessions || [];
  const latest = sessions[0];
  const active = state.health?.sleepActiveStart;
  const plannedMs = sleepDurationMs(state.health?.sleepTime, state.health?.wakeTime);
  const latestMs = latest ? new Date(latest.end) - new Date(latest.start) : 0;
  fillStatus("#homeSleepSummary", [
    active ? { text: `Sleep timer running: started ${new Date(active).toLocaleString()}`, source: "Health / Sleep", page: "health" } : "",
    latest ? { text: `Last sleep: ${formatDuration(latestMs)} - ${sleepRating(latestMs)} (${latest.quality || "No quality"})`, source: "Health / Sleep", page: "health" } : "",
    plannedMs ? { text: `Planned: ${state.health.sleepTime} - ${state.health.wakeTime} (${formatDuration(plannedMs)}) - ${sleepRating(plannedMs)}`, source: "Health / Sleep", page: "health" } : ""
  ].filter(Boolean));
}

function renderHomeFitnessSummary() {
  const latestWorkout = [...(state.workouts || [])].reverse().find((item) => item.text?.trim());
  const started = state.discipline?.start ? new Date(state.discipline.start) : null;
  const workoutStatus = latestWorkout?.endedAt ? `Finished ${workoutTimeRange(latestWorkout)} (${workoutDuration(latestWorkout)})`
    : latestWorkout?.startedAt ? workoutTimeRange(latestWorkout)
      : "Ready to start";
  fillStatus("#homeWorkoutCoach", [
    latestWorkout ? { text: `${latestWorkout.text}: ${workoutStatus}`, source: "Health / Workout Coach", page: "workout" } : "",
    { text: exerciseIdeas[(new Date(activeDate).getDate() + state.motivationSeed) % exerciseIdeas.length], source: "Health / Exercise Ideas", page: "workout" }
  ].filter(Boolean));
  fillStatus("#homeDisciplineStreak", [
    started ? { text: `Current streak: ${formatStreak(Date.now() - started.getTime())}`, source: "Health / Discipline", page: "discipline" } : { text: "No discipline streak started yet.", source: "Health / Discipline", page: "discipline" },
    state.discipline?.reason ? { text: `Reason: ${trimmedPreview(state.discipline.reason, 110)}`, source: "Health / Discipline", page: "discipline" } : ""
  ].filter(Boolean));
}

function daysInMonth(year, monthIndex) {
  return new Date(year, monthIndex + 1, 0).getDate();
}

function billDueDatesForMonth(bill, dateLike = activeDate) {
  const base = new Date(`${dateLike}T12:00:00`);
  const year = base.getFullYear();
  const month = base.getMonth();
  const due = String(bill.due || bill.dueDay || "").trim().toLowerCase();
  const lastDay = daysInMonth(year, month);
  const makeItem = (dayNumber) => {
    const date = new Date(year, month, Math.min(Math.max(dayNumber, 1), lastDay), 12, 0, 0);
    return {
      ...bill,
      date,
      dateKey: date.toISOString().slice(0, 10),
      dateLabel: date.toLocaleDateString(undefined, { month: "short", day: "numeric" })
    };
  };

  if (/^\d+$/.test(due)) return [makeItem(Number(due))];
  if (due.includes("weekly")) return [1, 8, 15, 22, 29].filter((dayNumber) => dayNumber <= lastDay).map(makeItem);
  if (due.includes("biweekly")) return [1, 15, 29].filter((dayNumber) => dayNumber <= lastDay).map(makeItem);
  if (due.includes("monthly")) return [makeItem(1)];
  return [makeItem(1)];
}

function getMonthBillEvents(dateLike = activeDate) {
  return state.bills
    .flatMap((bill) => billDueDatesForMonth(bill, dateLike))
    .sort((a, b) => a.date - b.date || String(a.name).localeCompare(String(b.name)));
}

function getUpcomingBills(dateLike = activeDate, limit = 8) {
  const base = new Date(`${dateLike}T00:00:00`);
  return getMonthBillEvents(dateLike)
    .filter((item) => item.date >= base)
    .slice(0, limit);
}

function normalizeStatusItem(item) {
  return typeof item === "string" ? { text: item, source: "", page: "" } : item;
}

function fillStatus(selector, items) {
  const wrap = document.querySelector(selector);
  if (!wrap) return;
  wrap.innerHTML = "";
  const list = items.length ? items : ["Nothing set yet."];
  list.map(normalizeStatusItem).forEach((item) => {
    const row = document.createElement("div");
    row.className = "status-pill";
    row.innerHTML = `<span>${item.text}</span>${item.source ? `<small>Source: ${item.source}</small>` : ""}`;
    if (item.page) {
      row.classList.add("source-row");
      row.title = `Open ${item.source || item.page}`;
      row.addEventListener("click", () => openPanel(item.page, pageTitle(item.page)));
    }
    wrap.append(row);
  });
}

function editableItem(item, onChange, onDelete) {
  const wrap = document.createElement("div");
  wrap.className = "editable-item";
  const check = document.createElement("input");
  check.type = "checkbox";
  check.checked = !!item.done;
  check.addEventListener("change", () => {
    onChange({ done: check.checked });
    saveState();
  });
  const text = input(item.text, (value) => onChange({ text: value }), { placeholder: "Task" });
  const del = document.createElement("button");
  del.className = "icon-btn";
  del.type = "button";
  del.textContent = "x";
  del.addEventListener("click", onDelete);
  wrap.append(check, text, del);
  return wrap;
}

function renderSchedule() {
  const grid = document.querySelector("#scheduleGrid");
  grid.innerHTML = "";
  renderDailyFocusEditor();
  const scheduleDate = new Date(`${activeDate}T12:00:00`);
  const header = document.createElement("div");
  header.className = "calendar-day-header";
  header.innerHTML = `
    <div>
      <span>${scheduleDate.toLocaleDateString(undefined, { weekday: "short" })}</span>
      <strong>${scheduleDate.getDate()}</strong>
    </div>
    <p>${scheduleDate.toLocaleDateString(undefined, { month: "long", year: "numeric" })}</p>
  `;
  grid.append(header);
  for (let hour = 5; hour <= 23; hour++) {
    for (let minute of [0, 30]) {
      const key = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
      const item = day().schedule[key] || {};
      const status = item.status || "Open";
      const row = document.createElement("div");
      row.className = `schedule-row calendar-event-row status-${status.toLowerCase()}`;
      const end = new Date(`2000-01-01T${key}:00`);
      end.setMinutes(end.getMinutes() + 30);
      const endKey = end.toTimeString().slice(0, 5);
      row.innerHTML = `
        <div class="time-label">
          <strong>${formatTime(key)}</strong>
          <span>${formatTime(endKey)}</span>
        </div>
      `;
      const eventCard = document.createElement("div");
      eventCard.className = "calendar-event-card";
      eventCard.append(input(item.task || "", (value) => {
        day().schedule[key] = { ...(day().schedule[key] || {}), task: value };
      }, { placeholder: "Add title, class, workout, prayer, study block..." }));
      const meta = document.createElement("div");
      meta.className = "calendar-event-meta";
      meta.append(select(status, ["Open", "Doing", "Done", "Skipped"], (value) => {
        day().schedule[key] = { ...(day().schedule[key] || {}), status: value };
      }));
      eventCard.append(meta);
      row.append(eventCard);
      grid.append(row);
    }
  }
}

function renderDailyFocusEditor() {
  const d = day();
  const topEditor = document.querySelector("#topThreeEditor");
  if (topEditor) {
    topEditor.innerHTML = "";
    d.top.forEach((item, index) => {
      topEditor.append(input(item, (value) => d.top[index] = value, { placeholder: `Priority ${index + 1}` }));
    });
  }
  const checklistEditor = document.querySelector("#dailyChecklistEditor");
  if (checklistEditor) {
    checklistEditor.innerHTML = "";
    d.checklist.forEach((item, index) => checklistEditor.append(editableItem(item, (patch) => {
      d.checklist[index] = { ...d.checklist[index], ...patch };
    }, () => {
      d.checklist.splice(index, 1);
      saveState();
      renderDailyFocusEditor();
      renderDashboard();
    })));
  }
}

function renderTasks() {
  const board = document.querySelector("#taskBoard");
  if (!board) return;
  board.innerHTML = "";
  const columns = ["Backlog", "Doing", "Done"];
  columns.forEach((status) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `<h3>${status}</h3>`;
    state.tasks
      .filter((task) => (task.status || "Backlog") === status)
      .forEach((task, index) => {
        const realIndex = state.tasks.indexOf(task);
        const row = document.createElement("div");
        row.className = "task-card";
        row.append(input(task.title, (value) => task.title = value, { placeholder: "Task title" }));
        row.append(input(task.due, (value) => task.due = value, { type: "date" }));
        row.append(select(task.status || "Backlog", columns, (value) => task.status = value));
        row.append(input(task.note, (value) => task.note = value, { placeholder: "Notes" }));
        const del = document.createElement("button");
        del.className = "danger-btn";
        del.textContent = "Delete";
        del.addEventListener("click", () => {
          state.tasks.splice(realIndex, 1);
          saveState();
          renderTasks();
        });
        row.append(del);
        card.append(row);
      });
    board.append(card);
  });
}

function renderTodos() {
  const wrap = document.querySelector("#todoLists");
  if (!wrap) return;
  wrap.innerHTML = "";
  state.todoLists.forEach((list, listIndex) => {
    const card = document.createElement("article");
    card.className = "card";
    card.append(input(list.title, (value) => list.title = value, { placeholder: "List name" }));
    const items = document.createElement("div");
    list.items.forEach((item, itemIndex) => {
      items.append(editableItem(item, (patch) => {
        list.items[itemIndex] = { ...list.items[itemIndex], ...patch };
      }, () => {
        list.items.splice(itemIndex, 1);
        saveState();
        renderTodos();
      }));
    });
    const addItem = document.createElement("button");
    addItem.className = "ghost-btn";
    addItem.textContent = "Add Item";
    addItem.addEventListener("click", () => {
      list.items.push({ text: "", done: false });
      saveState();
      renderTodos();
    });
    const delList = document.createElement("button");
    delList.className = "danger-btn";
    delList.textContent = "Delete List";
    delList.addEventListener("click", () => {
      state.todoLists.splice(listIndex, 1);
      saveState();
      renderTodos();
    });
    card.append(items, addItem, delList);
    wrap.append(card);
  });
}

function renderAlarms() {
  const wrap = document.querySelector("#alarmList");
  if (!wrap) return;
  wrap.innerHTML = "";
  state.alarms.forEach((alarm, index) => {
    const card = document.createElement("article");
    card.className = "card";
    card.append(input(alarm.time, (value) => alarm.time = value, { type: "time" }));
    card.append(input(alarm.message, (value) => alarm.message = value, { placeholder: "Alarm message" }));
    card.append(select(alarm.enabled ? "On" : "Off", ["On", "Off"], (value) => alarm.enabled = value === "On"));
    const status = document.createElement("p");
    status.className = "muted";
    status.textContent = alarm.lastFired ? `Last fired: ${alarm.lastFired}` : "Waiting for time.";
    const del = document.createElement("button");
    del.className = "danger-btn";
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      state.alarms.splice(index, 1);
      saveState();
      renderAlarms();
    });
    card.append(status, del);
    wrap.append(card);
  });
}

function renderReminders() {
  const wrap = document.querySelector("#reminderList");
  if (!wrap) return;
  wrap.innerHTML = "";
  state.reminders.forEach((reminder, index) => {
    const card = document.createElement("article");
    card.className = "task-card";
    card.append(
      input(reminder.title, (value) => reminder.title = value, { placeholder: "Reminder" }),
      input(reminder.when, (value) => reminder.when = value, { type: "datetime-local" }),
      select(reminder.status || "Open", ["Open", "Done"], (value) => reminder.status = value),
      input(reminder.note, (value) => reminder.note = value, { placeholder: "Note" })
    );
    const del = document.createElement("button");
    del.className = "danger-btn";
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      state.reminders.splice(index, 1);
      saveState();
      renderReminders();
    });
    card.append(del);
    wrap.append(card);
  });
}

function renderCountdowns() {
  const wrap = document.querySelector("#countdownList");
  if (!wrap) return;
  wrap.innerHTML = "";
  state.countdowns.forEach((countdown, index) => {
    const card = document.createElement("article");
    card.className = "card countdown-card";
    card.append(input(countdown.title, (value) => countdown.title = value, { placeholder: "Goal or deadline" }));
    card.append(input(countdown.target, (value) => countdown.target = value, { type: "datetime-local" }));
    const output = document.createElement("div");
    output.className = "countdown-output";
    output.textContent = formatCountdown(countdown.target);
    const del = document.createElement("button");
    del.className = "danger-btn";
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      state.countdowns.splice(index, 1);
      saveState();
      renderCountdowns();
    });
    card.append(output, del);
    wrap.append(card);
  });
}

function updateCountdownDisplays() {
  document.querySelectorAll(".countdown-card .countdown-output").forEach((output, index) => {
    output.textContent = formatCountdown(state.countdowns[index]?.target);
  });
}

function formatCountdown(target) {
  if (!target) return "Set a date and time.";
  const diff = new Date(target).getTime() - Date.now();
  if (Number.isNaN(diff)) return "Invalid date.";
  if (diff <= 0) return "Time reached.";
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function formatTime(key) {
  const [h, m] = key.split(":").map(Number);
  const hour = ((h + 11) % 12) + 1;
  return `${hour}:${String(m).padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`;
}

function renderPrayer() {
  const cards = document.querySelector("#prayerCards");
  cards.innerHTML = "";
  prayers.forEach((name) => {
    const data = day().prayers[name] || { done: false, note: "" };
    const card = document.createElement("article");
    card.className = `card prayer-card ${data.done ? "done" : ""}`;
    const title = document.createElement("h3");
    title.textContent = name;
    const done = document.createElement("label");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = data.done;
    check.addEventListener("change", () => {
      data.done = check.checked;
      day().prayers[name] = data;
      saveState();
      renderAll();
    });
    done.append("Completed", check);
    card.append(title, done, input(data.note, (value) => data.note = value, { placeholder: "Time / note" }));
    cards.append(card);
  });
}

function renderQuran() {
  const d = day();
  const verse = quranVerseBank[d.verseIndex % quranVerseBank.length];
  document.querySelector("#verseArabic").textContent = verse.ar;
  document.querySelector("#verseEnglish").textContent = verse.en;
  document.querySelector("#verseRef").textContent = verse.ref;
  setField("#quranSurah", d.quran.surah, (value) => d.quran.surah = value);
  setField("#quranAyah", d.quran.ayah, (value) => d.quran.ayah = value);
  setField("#quranMinutes", d.quran.minutes, (value) => d.quran.minutes = value);
  setField("#quranReflection", d.quran.reflection, (value) => d.quran.reflection = value);

  const selector = document.querySelector("#surahSelect");
  if (selector && selector.options.length === 0) {
    surahs.forEach((surah) => {
      const option = document.createElement("option");
      option.value = String(surah.number);
      option.textContent = `${surah.number}. ${surah.name}`;
      selector.append(option);
    });
  }
  if (selector) {
    selector.value = String(state.selectedSurah || 1);
    selector.onchange = () => {
      state.selectedSurah = Number(selector.value);
      saveState();
      renderQuran();
    };
  }
  const selected = surahs[(state.selectedSurah || 1) - 1] || surahs[0];
  const quranUrl = `https://quran.com/${selected.number}`;
  const videoUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${selected.name} tafsir English`)}`;
  document.querySelector("#surahStudy").innerHTML = `
    <p><strong>${selected.number}. ${selected.name}</strong></p>
    <p>This page gives you the full Arabic recitation path plus English understanding through trusted study links. Read Arabic first, then read translation, then write one action.</p>
    <p class="muted">Goal: do not rush. One ayah understood deeply is better than many pages ignored.</p>
  `;
  document.querySelector("#quranComLink").href = quranUrl;
  document.querySelector("#quranVideoLink").href = videoUrl;
  document.querySelector("#quranTeacherSteps").innerHTML = `
    <ol>
      <li><strong>Arabic:</strong> read the ayah slowly and listen to recitation if needed.</li>
      <li><strong>English:</strong> understand the meaning, but remember translation is explanation, not the Quran itself.</li>
      <li><strong>Tafsir:</strong> learn context from a reliable teacher before making big conclusions.</li>
      <li><strong>Action:</strong> write one habit, dua, or decision from the lesson.</li>
    </ol>
  `;
}

function renderFaith() {
  if (!state.prayerLocation) state.prayerLocation = { city: "New York", country: "United States" };
  setField("#prayerCity", state.prayerLocation.city || "", (value) => state.prayerLocation.city = value);
  setField("#prayerCountry", state.prayerLocation.country || "", (value) => state.prayerLocation.country = value);
  renderRealPrayerTimes();
}

function renderRealPrayerTimes() {
  const wrap = document.querySelector("#realPrayerTimes");
  if (!wrap) return;
  wrap.innerHTML = "";
  const times = state.prayerTimes?.timings;
  if (!times) {
    fillStatus("#realPrayerTimes", ["Press Load Prayer Times to fetch current local prayer times."]);
    return;
  }
  ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].forEach((name) => {
    const row = document.createElement("div");
    row.className = "status-pill";
    row.innerHTML = `<strong>${name}</strong><span>${times[name] || "--"}</span>`;
    wrap.append(row);
  });
  if (state.prayerTimes.date) {
    const note = document.createElement("p");
    note.className = "muted";
    note.textContent = `Updated for ${state.prayerLocation.city}, ${state.prayerLocation.country} on ${state.prayerTimes.date}.`;
    wrap.append(note);
  }
}

async function loadPrayerTimes() {
  const city = state.prayerLocation?.city || "New York";
  const country = state.prayerLocation?.country || "United States";
  const wrap = document.querySelector("#realPrayerTimes");
  if (wrap) fillStatus("#realPrayerTimes", ["Loading prayer times..."]);
  try {
    const url = `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=2`;
    const response = await fetch(url);
    const json = await response.json();
    if (!response.ok || !json.data?.timings) throw new Error("Could not load prayer times.");
    state.prayerTimes = {
      date: json.data.date?.readable || new Date().toLocaleDateString(),
      timings: json.data.timings
    };
    saveState();
    renderRealPrayerTimes();
    renderDashboard();
  } catch (error) {
    fillStatus("#realPrayerTimes", [`Prayer times unavailable: ${error.message}`]);
  }
}

function setField(selector, value, onInput) {
  const el = document.querySelector(selector);
  if (document.activeElement !== el) el.value = value || "";
  el.oninput = () => {
    onInput(el.value);
    if (el.tagName === "TEXTAREA") autoGrow(el);
    saveState();
  };
}

function renderSuggestions() {
  fillList("#todaySuggestions", randomPick(suggestionBank.today, 4));
  fillList("#studySuggestions", randomPick(suggestionBank.study, 4));
  fillList("#lifeSuggestions", randomPick(suggestionBank.life, 4));
}

function randomPick(items, count) {
  return [...items].sort(() => Math.random() - 0.5).slice(0, count);
}

function fillList(selector, items) {
  const list = document.querySelector(selector);
  list.innerHTML = "";
  items.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    list.append(li);
  });
}

function renderMotivation() {
  const allMotivations = [...motivationBank, ...extraMotivations];
  const motivation = state.motivationSeed < allMotivations.length
    ? allMotivations[state.motivationSeed]
    : buildGeneratedMotivation();
  const dayIndex = new Date(activeDate).getDate();
  const mindset = powerPrinciples[(dayIndex + (state.quoteSeeds?.mindset || 0)) % powerPrinciples.length];
  const famous = famousQuotes[(dayIndex + (state.quoteSeeds?.famous || 0)) % famousQuotes.length];
  const islamic = islamicQuotes[(dayIndex + (state.quoteSeeds?.islamic || 0)) % islamicQuotes.length];
  const powerStart = (dayIndex + (state.quoteSeeds?.power || 0)) % powerLaws.length;
  document.querySelector("#motivationText").textContent = motivation;
  document.querySelector("#motivationPageText").textContent = motivation;
  document.querySelector("#motivationPageMindset").textContent = mindset;
  document.querySelector("#motivationPageFamous").textContent = famous;
  document.querySelector("#motivationPageIslamic").textContent = islamic;
  fillStatus("#motivationPowerLaws", Array.from({ length: 6 }, (_, index) => powerLaws[(powerStart + index) % powerLaws.length]));
  state.recommendationSeeds = { books: 0, movies: 0, songs: 0, podcasts: 0, ...(state.recommendationSeeds || {}) };
  renderRecommendationList("#bookRecommendations", motivationRecommendations.books, state.recommendationSeeds.books);
  renderRecommendationList("#movieRecommendations", motivationRecommendations.movies, state.recommendationSeeds.movies);
  renderRecommendationList("#songRecommendations", motivationRecommendations.songs, state.recommendationSeeds.songs);
  renderRecommendationList("#podcastRecommendations", motivationRecommendations.podcasts, state.recommendationSeeds.podcasts);
}

function renderRecommendationList(selector, items, offset = 0) {
  const wrap = document.querySelector(selector);
  if (!wrap) return;
  wrap.innerHTML = "";
  const rotated = items.map((_, index) => items[(index + offset) % items.length]).slice(0, 4);
  rotated.forEach((item) => {
    const card = document.createElement("a");
    card.className = "recommendation-item";
    card.href = item.url;
    card.target = "_blank";
    card.rel = "noreferrer";
    card.innerHTML = `
      <strong>${item.title}</strong>
      <span>${item.creator}</span>
      <p>${item.note}</p>
    `;
    wrap.append(card);
  });
}

function cleanCommandValue(value = "") {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function extractAfterKeyword(text, keyword) {
  const match = text.match(new RegExp(`${keyword}\\s+(.+?)(?=\\s+(?:class|due|priority|status|note|room|teacher|days|time|amount|category|when)\\b|$)`, "i"));
  return cleanCommandValue(match?.[1] || "");
}

function parseAssistantDate(text) {
  const lower = text.toLowerCase();
  const isoDate = text.match(/\b(20\d{2}-\d{2}-\d{2})(?:[ t](\d{1,2}:\d{2}))?\b/i);
  if (isoDate) return isoDate[2] ? `${isoDate[1]}T${isoDate[2]}` : isoDate[1];
  const timeMatch = text.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/i);
  const date = new Date();
  if (lower.includes("tomorrow")) date.setDate(date.getDate() + 1);
  if (lower.includes("next week")) date.setDate(date.getDate() + 7);
  if (timeMatch) {
    let hour = Number(timeMatch[1]);
    const minute = Number(timeMatch[2] || 0);
    const period = timeMatch[3].toLowerCase();
    if (period === "pm" && hour < 12) hour += 12;
    if (period === "am" && hour === 12) hour = 0;
    date.setHours(hour, minute, 0, 0);
    return date.toISOString().slice(0, 16);
  }
  if (lower.includes("tomorrow") || lower.includes("next week")) return date.toISOString().slice(0, 10);
  return "";
}

function parseClassDays(text) {
  const dayPattern = "(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|Mon|Tue|Wed|Thu|Fri|Sat|Sun)";
  const range = text.match(new RegExp(`(?:from\\s+)?${dayPattern}\\s*(?:to|through|-|until)\\s*${dayPattern}`, "i"));
  if (range) return { startDay: normalizeWeekDay(range[1]), endDay: normalizeWeekDay(range[2]), selectedDays: [], dayMode: "Day range" };
  const days = [...text.matchAll(new RegExp(dayPattern, "ig"))].map((match) => normalizeWeekDay(match[1])).filter(Boolean);
  const uniqueDays = weekDays.filter((day) => days.includes(day));
  return { startDay: uniqueDays[0] || "", endDay: uniqueDays[1] || uniqueDays[0] || "", selectedDays: uniqueDays, dayMode: uniqueDays.length > 1 ? "Selected days" : "Day range" };
}

function parseClassTimes(text) {
  const timePattern = "(\\d{1,2}(?::\\d{2})?\\s*(?:am|pm))";
  const range = text.match(new RegExp(`(?:from\\s+)?${timePattern}\\s*(?:to|through|-|until)\\s*${timePattern}`, "i"));
  if (range) return { startTime: range[1], endTime: range[2] };
  const times = [...text.matchAll(new RegExp(timePattern, "ig"))].map((match) => match[1]);
  return { startTime: times[0] || "", endTime: times[1] || "" };
}

function parseClassRecurrence(text) {
  const lower = text.toLowerCase();
  if (/\bdaily\b|\bevery day\b/.test(lower)) return "Daily";
  if (/\bmonthly\b|\bevery month\b/.test(lower)) return "Monthly";
  if (/\bone time\b|\bonce\b/.test(lower)) return "One time";
  return "Weekly";
}

function parseClassDateWindow(text) {
  const start = text.match(/\b(?:starts?|begin|begins|starting)\s+(?:on\s+)?(20\d{2}-\d{2}-\d{2})/i);
  const end = text.match(/\b(?:ends?|until|through)\s+(?:on\s+)?(20\d{2}-\d{2}-\d{2})/i);
  return { startsOn: start?.[1] || "", endsOn: end?.[1] || "" };
}

function titleFromCommand(text, removeWords = []) {
  let value = text.replace(/^(please\s+)?add\s+(a\s+|an\s+|new\s+)?(class|assignment|task|reminder|bill|workout)\b/i, "");
  removeWords.forEach((word) => {
    value = value.replace(new RegExp(`\\s+${word}\\s+.+?(?=\\s+(?:class|due|priority|status|note|room|teacher|days|time|amount|category|when)\\b|$)`, "ig"), "");
  });
  value = value.replace(/\b(20\d{2}-\d{2}-\d{2})(?:[ t]\d{1,2}:\d{2})?\b/g, "");
  value = value.replace(/\b(tomorrow|next week)\b/ig, "");
  value = value.replace(/\b\d{1,2}(?::\d{2})?\s*(am|pm)\b/ig, "");
  return cleanCommandValue(value) || "New item";
}

function runAssistantCommand(rawCommand) {
  const command = cleanCommandValue(rawCommand);
  const lower = command.toLowerCase();
  if (!command) return { text: "Write a command first.", page: "" };

  if (/\bclass\b/.test(lower) && /\badd\b/.test(lower)) {
    const parsedDays = parseClassDays(command);
    const parsedTimes = parseClassTimes(command);
    const parsedDates = parseClassDateWindow(command);
    const recurrence = parseClassRecurrence(command);
    const item = {
      name: titleFromCommand(command, ["time", "room", "teacher", "days", "from"]),
      recurrence,
      dayMode: parsedDays.dayMode,
      startDay: parsedDays.startDay,
      endDay: parsedDays.endDay,
      selectedDays: parsedDays.selectedDays,
      startsOn: parsedDates.startsOn || activeDate,
      endsOn: parsedDates.endsOn,
      monthlyDay: recurrence === "Monthly" ? String(new Date(`${parsedDates.startsOn || activeDate}T12:00:00`).getDate()) : "",
      startTime: parsedTimes.startTime,
      endTime: parsedTimes.endTime,
      time: extractAfterKeyword(command, "time") || `${parsedTimes.startTime}${parsedTimes.endTime ? ` - ${parsedTimes.endTime}` : ""}`.trim(),
      room: extractAfterKeyword(command, "room"),
      teacher: extractAfterKeyword(command, "teacher"),
      days: extractAfterKeyword(command, "days") || `${parsedDays.startDay}${parsedDays.endDay && parsedDays.endDay !== parsedDays.startDay ? ` - ${parsedDays.endDay}` : ""}`.trim()
    };
    state.classes.push(item);
    saveState();
    renderSchool();
    renderStudy();
    renderDashboard();
    return { text: `Class added: ${item.name} (${classScheduleSummary(normalizeClassItem(item))}).`, page: "study" };
  }

  if (/\bassignment\b/.test(lower) && /\badd\b/.test(lower)) {
    const item = {
      title: titleFromCommand(command, ["class", "due", "priority", "status", "note"]),
      className: extractAfterKeyword(command, "class"),
      due: extractAfterKeyword(command, "due") || parseAssistantDate(command),
      priority: cleanCommandValue(extractAfterKeyword(command, "priority") || "Medium").replace(/^./, (char) => char.toUpperCase()),
      status: extractAfterKeyword(command, "status") || "Not started",
      note: extractAfterKeyword(command, "note")
    };
    state.assignments.push(item);
    saveState();
    renderSchool();
    renderStudy();
    renderDashboard();
    return { text: `Assignment added: ${item.title}${item.due ? ` due ${item.due}` : ""}.`, page: "study" };
  }

  if (/\btask\b/.test(lower) && /\badd\b/.test(lower)) {
    const item = {
      title: titleFromCommand(command, ["due", "status", "note"]),
      due: extractAfterKeyword(command, "due") || parseAssistantDate(command) || activeDate,
      status: extractAfterKeyword(command, "status") || "Backlog",
      note: extractAfterKeyword(command, "note")
    };
    state.tasks.push(item);
    saveState();
    renderTasks();
    renderStudy();
    renderDashboard();
    return { text: `Task added: ${item.title}.`, page: "tasks" };
  }

  if (/\breminder\b/.test(lower) && /\badd\b/.test(lower)) {
    const item = {
      title: titleFromCommand(command, ["when", "note"]),
      when: extractAfterKeyword(command, "when") || parseAssistantDate(command) || new Date(Date.now() + 3600000).toISOString().slice(0, 16),
      status: "Open",
      note: extractAfterKeyword(command, "note")
    };
    state.reminders.push(item);
    saveState();
    renderReminders();
    renderDashboard();
    return { text: `Reminder added: ${item.title} at ${item.when}.`, page: "reminders" };
  }

  if (/\bbill\b/.test(lower) && /\badd\b/.test(lower)) {
    const amountMatch = command.match(/\$?\b(\d+(?:\.\d{1,2})?)\b/);
    const item = {
      paid: false,
      name: titleFromCommand(command, ["amount", "due", "category", "note"]),
      amount: extractAfterKeyword(command, "amount") || amountMatch?.[1] || "",
      due: extractAfterKeyword(command, "due") || "",
      category: extractAfterKeyword(command, "category") || "Bill",
      note: extractAfterKeyword(command, "note")
    };
    state.bills.push(item);
    saveState();
    renderBills();
    renderMoney();
    renderDashboard();
    return { text: `Bill added: ${item.name}${item.amount ? ` for ${money(Number(item.amount))}` : ""}.`, page: "bills" };
  }

  if (/\bworkout\b/.test(lower) && /\badd\b/.test(lower)) {
    const item = { text: titleFromCommand(command, ["note"]), startedAt: "", endedAt: "", done: false, note: extractAfterKeyword(command, "note") };
    state.workouts.push(item);
    saveState();
    renderWorkout();
    renderDashboard();
    return { text: `Workout added: ${item.text}.`, page: "workout" };
  }

  return { text: "I can create classes, assignments, tasks, reminders, bills, and workouts. Try: add class Java Monday 9 AM room B12 teacher Khan.", page: "" };
}

function showAssistantResult(result) {
  fillStatus("#assistantResult", [{ text: result.text, source: "GPT Assistant", page: result.page }]);
}

function assistantEndpoint() {
  const configured = String(state.assistantApiUrl || "").trim();
  if (configured) return configured;
  return window.location.protocol === "file:" ? "" : "/api/assistant";
}

function assistantSnapshot() {
  return {
    activeDate,
    profile: state.profile,
    classes: state.classes.map(normalizeClassItem).slice(0, 12),
    assignments: state.assignments.slice(0, 12),
    tasks: state.tasks.slice(0, 12),
    bills: state.bills.map((bill) => ({ name: bill.name, amount: bill.amount, due: bill.due, paid: bill.paid })).slice(0, 30),
    reminders: state.reminders.slice(0, 12),
    studyBlocks: state.studyBlocks.slice(0, 8),
    notes: {
      life: state.essentialsNotes || "",
      school: state.schoolStudySpace || "",
      projects: state.projectStudySpace || ""
    }
  };
}

async function runSmartAssistantCommand(command) {
  const endpoint = assistantEndpoint();
  if (!endpoint) return runAssistantCommand(command);
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ command, snapshot: assistantSnapshot() })
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || "Assistant API failed.");
    const applied = applyAssistantActions(data.actions || []);
    return {
      text: `${data.message || "Assistant finished."}${applied.length ? ` Applied: ${applied.join(", ")}.` : ""}`,
      page: applied[0]?.page || "dashboard"
    };
  } catch (error) {
    const fallback = runAssistantCommand(command);
    return {
      text: `API unavailable, used local assistant instead. ${error.message}. ${fallback.text}`,
      page: fallback.page
    };
  }
}

function applyAssistantActions(actions) {
  const applied = [];
  actions.forEach((action) => {
    const args = action.arguments || {};
    switch (action.name) {
      case "add_class": {
        const item = normalizeClassItem({
          name: args.name,
          recurrence: args.recurrence || "Weekly",
          dayMode: args.dayMode || (args.selectedDays?.length ? "Selected days" : "Day range"),
          startDay: args.startDay,
          endDay: args.endDay,
          selectedDays: args.selectedDays || [],
          startsOn: args.startsOn || activeDate,
          endsOn: args.endsOn || "",
          monthlyDay: args.monthlyDay || "",
          startTime: args.startTime || "",
          endTime: args.endTime || "",
          room: args.room || "",
          teacher: args.teacher || ""
        });
        syncClassLegacyFields(item);
        state.classes.push(item);
        applied.push("class");
        break;
      }
      case "add_assignment":
        state.assignments.push({ title: args.title || "New assignment", className: args.className || "", due: args.due || "", priority: args.priority || "Medium", status: args.status || "Not started", note: args.note || "" });
        applied.push("assignment");
        break;
      case "add_task":
        state.tasks.push({ title: args.title || "New task", due: args.due || activeDate, status: args.status || "Backlog", note: args.note || "" });
        applied.push("task");
        break;
      case "add_reminder":
        state.reminders.push({ text: args.text || "Reminder", when: args.when || "", status: args.status || "Open", note: args.note || "" });
        applied.push("reminder");
        break;
      case "add_bill":
        state.bills.push({ paid: false, name: args.name || "New bill", amount: args.amount || "", due: args.due || "", category: args.category || "Bill", note: args.note || "" });
        applied.push("bill");
        break;
      case "mark_bill_paid": {
        const bill = state.bills.find((item) => String(item.name || "").toLowerCase().includes(String(args.name || "").toLowerCase()));
        if (bill) {
          bill.paid = true;
          applied.push("bill paid");
        }
        break;
      }
      case "add_workout":
        state.workouts.push({ text: args.text || "Workout", note: args.note || "", startedAt: "", endedAt: "", done: false });
        applied.push("workout");
        break;
      case "add_journal_entry": {
        const stamp = new Date().toLocaleString();
        state.essentialsNotes = `${state.essentialsNotes || ""}${state.essentialsNotes ? "\n\n" : ""}${args.title ? `${args.title}\n` : ""}${stamp}\n${args.text || ""}`.trim();
        applied.push("journal");
        break;
      }
      case "create_study_block":
        state.studyBlocks.push({ subject: args.subject || "Study", topic: args.topic || "", start: args.start || "", end: args.end || "", goal: args.goal || "", method: args.method || "Deep Work", status: "Planned" });
        applied.push("study block");
        break;
      case "create_daily_schedule":
        (args.items || []).forEach((item) => {
          if (item.time) day().schedule[item.time] = { title: item.title || "Planned block", status: item.status || "Open", note: item.note || "" };
        });
        applied.push("schedule");
        break;
      case "add_todo_item": {
        const title = args.listTitle || "Personal";
        let list = state.todoLists.find((item) => String(item.title || "").toLowerCase() === String(title).toLowerCase());
        if (!list) {
          list = { title, items: [] };
          state.todoLists.push(list);
        }
        list.items.push({ text: args.text || "New to-do", done: false });
        applied.push("to-do");
        break;
      }
      case "add_important_date":
        state.importantDates = state.importantDates || [];
        state.importantDates.push({ title: args.title || "Important date", className: args.className || "", when: args.when || "", type: args.type || "Deadline", status: "Upcoming", note: args.note || "" });
        applied.push("important date");
        break;
      case "add_alarm":
        state.alarms.push({ time: args.time || "09:00", label: args.label || "Alarm", enabled: true });
        applied.push("alarm");
        break;
      case "add_countdown":
        state.countdowns.push({ title: args.title || "Countdown", target: args.target || "", note: "" });
        applied.push("countdown");
        break;
      case "add_money_transaction":
        state.money.push({ date: args.date || activeDate, type: args.type || "Expense", category: args.category || "", amount: args.amount || "", note: args.note || "" });
        applied.push("money");
        break;
      case "add_learning_site":
        state.learningSites.push({ title: args.title || "Learning site", url: args.url || "https://", note: args.note || "", locked: false });
        applied.push("learning site");
        break;
      case "add_roadmap_step":
        state.roadmap.push({ phase: args.phase || "Next", text: args.text || "New roadmap step", status: args.status || "Planned" });
        applied.push("roadmap");
        break;
      case "update_profile":
        state.profile = { ...(state.profile || {}), ...Object.fromEntries(Object.entries(args).filter(([, value]) => value !== undefined && value !== "")) };
        applied.push("profile");
        break;
      case "mark_prayer_done": {
        const prayerName = prayers.find((name) => name.toLowerCase() === String(args.prayer || "").toLowerCase());
        if (prayerName) {
          day().prayers[prayerName] = { ...(day().prayers[prayerName] || {}), done: true, note: args.note || day().prayers[prayerName]?.note || "" };
          applied.push("prayer");
        }
        break;
      }
      case "add_quran_reflection":
        day().quran = { ...day().quran, surah: args.surah || day().quran.surah, ayah: args.ayah || day().quran.ayah, minutes: args.minutes || day().quran.minutes, reflection: args.reflection || day().quran.reflection };
        applied.push("quran");
        break;
      default:
        break;
    }
  });
  if (applied.length) {
    saveState();
    renderAll();
  }
  return applied;
}

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const classRepeatOptions = ["Daily", "Weekly", "Monthly", "One time"];
const classDayModes = ["Day range", "Selected days"];

function normalizeClassItem(item) {
  const value = typeof item === "string" ? { name: item } : { ...item };
  const parsedRange = parseStoredClassDays(value.days || "");
  const startDay = value.startDay || parsedRange.startDay || "";
  const endDay = value.endDay || parsedRange.endDay || startDay || "";
  const selectedDays = Array.isArray(value.selectedDays) && value.selectedDays.length
    ? value.selectedDays.map(normalizeWeekDay).filter(Boolean)
    : parsedRange.selectedDays.length ? parsedRange.selectedDays : (startDay ? [startDay] : []);
  return {
    name: value.name || "New Class",
    recurrence: value.recurrence || "Weekly",
    dayMode: value.dayMode || (selectedDays.length > 1 && startDay === endDay ? "Selected days" : "Day range"),
    startDay,
    endDay,
    selectedDays,
    startsOn: value.startsOn || "",
    endsOn: value.endsOn || "",
    monthlyDay: value.monthlyDay || "",
    startTime: value.startTime || value.time?.match(/\d{1,2}:\d{2}\s*(?:AM|PM)?|\d{1,2}\s*(?:AM|PM)/i)?.[0] || "",
    endTime: value.endTime || "",
    room: value.room || "",
    teacher: value.teacher || "",
    days: value.days || "",
    time: value.time || ""
  };
}

function parseStoredClassDays(daysText) {
  const text = String(daysText || "");
  const dayMatches = weekDays.filter((dayName) => new RegExp(`\\b${dayName.slice(0, 3)}\\w*\\b`, "i").test(text));
  const range = text.match(/\b(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|Mon|Tue|Wed|Thu|Fri|Sat|Sun)\b\s*(?:to|through|-|until)\s*\b(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|Mon|Tue|Wed|Thu|Fri|Sat|Sun)\b/i);
  if (range) return { startDay: normalizeWeekDay(range[1]), endDay: normalizeWeekDay(range[2]), selectedDays: [] };
  return { startDay: dayMatches[0] || "", endDay: dayMatches[0] || "", selectedDays: dayMatches };
}

function normalizeWeekDay(value) {
  return weekDays.find((dayName) => dayName.toLowerCase().startsWith(String(value || "").slice(0, 3).toLowerCase())) || "";
}

function classDayRange(classItem) {
  if (classItem.dayMode === "Selected days" && classItem.selectedDays?.length) {
    return weekDays.filter((dayName) => classItem.selectedDays.includes(dayName));
  }
  const start = weekDays.findIndex((dayName) => dayName === normalizeWeekDay(classItem.startDay));
  const end = weekDays.findIndex((dayName) => dayName === normalizeWeekDay(classItem.endDay || classItem.startDay));
  if (start < 0) return classItem.days ? [classItem.days] : [];
  if (end < 0 || end === start) return [weekDays[start]];
  if (end > start) return weekDays.slice(start, end + 1);
  return [...weekDays.slice(start), ...weekDays.slice(0, end + 1)];
}

function classTimeLabel(classItem) {
  if (classItem.startTime && classItem.endTime) return `${classItem.startTime} - ${classItem.endTime}`;
  return classItem.startTime || classItem.time || "Time not set";
}

function classScheduleSummary(classItem) {
  const repeat = classItem.recurrence || "Weekly";
  const days = repeat === "Daily"
    ? "Every day"
    : repeat === "Monthly"
      ? `Monthly${classItem.monthlyDay ? ` on day ${classItem.monthlyDay}` : ""}`
      : repeat === "One time"
        ? "One time"
        : classDayRange(classItem).join(", ") || classItem.days || "Days not set";
  const dateWindow = [
    classItem.startsOn ? `starts ${classItem.startsOn}` : "",
    classItem.endsOn ? `ends ${classItem.endsOn}` : ""
  ].filter(Boolean).join(", ");
  return `${repeat} | ${days} | ${classTimeLabel(classItem)}${dateWindow ? ` | ${dateWindow}` : ""}`;
}

function classOccursOnActiveDate(classItem) {
  const date = new Date(`${activeDate}T12:00:00`);
  if (classItem.startsOn && activeDate < classItem.startsOn) return false;
  if (classItem.endsOn && activeDate > classItem.endsOn) return false;
  if (classItem.recurrence === "Daily") return true;
  if (classItem.recurrence === "Monthly") {
    const monthlyDay = Number(classItem.monthlyDay || new Date(`${classItem.startsOn || activeDate}T12:00:00`).getDate());
    return date.getDate() === monthlyDay;
  }
  if (classItem.recurrence === "One time") return !classItem.startsOn || activeDate === classItem.startsOn;
  const dayName = date.toLocaleDateString(undefined, { weekday: "long" });
  return classDayRange(classItem).some((day) => dayName.toLowerCase().startsWith(String(day).slice(0, 3).toLowerCase()));
}

function defaultClassItem() {
  return {
    name: "New Class",
    recurrence: "Weekly",
    dayMode: "Day range",
    startDay: "Monday",
    endDay: "Monday",
    selectedDays: ["Monday"],
    startsOn: activeDate,
    endsOn: "",
    monthlyDay: "",
    startTime: "09:00",
    endTime: "10:00",
    time: "09:00 - 10:00",
    room: "",
    teacher: "",
    days: "Monday"
  };
}

function syncClassLegacyFields(classItem) {
  classItem.selectedDays = classItem.selectedDays?.length ? classItem.selectedDays : classDayRange(classItem);
  classItem.days = classItem.recurrence === "Weekly" ? classDayRange(classItem).join(", ") : classScheduleSummary(classItem);
  classItem.time = classTimeLabel(classItem);
  if (classItem.recurrence === "Monthly" && !classItem.monthlyDay) {
    classItem.monthlyDay = String(new Date(`${classItem.startsOn || activeDate}T12:00:00`).getDate());
  }
}

function classAdvancedEditor(classItem) {
  const fragment = document.createDocumentFragment();
  const summary = document.createElement("p");
  summary.className = "muted class-summary";
  summary.textContent = classScheduleSummary(classItem);

  const recurrence = select(classItem.recurrence || "Weekly", classRepeatOptions, (value) => {
    classItem.recurrence = value;
    syncClassLegacyFields(classItem);
  });
  const dayMode = select(classItem.dayMode || "Day range", classDayModes, (value) => {
    classItem.dayMode = value;
    syncClassLegacyFields(classItem);
  });

  const selectedDays = document.createElement("div");
  selectedDays.className = "weekday-picker";
  weekDays.forEach((dayName) => {
    const label = document.createElement("label");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = (classItem.selectedDays || []).includes(dayName);
    check.addEventListener("change", () => {
      const set = new Set(classItem.selectedDays || []);
      if (check.checked) set.add(dayName);
      else set.delete(dayName);
      classItem.selectedDays = weekDays.filter((day) => set.has(day));
      if (!classItem.startDay && classItem.selectedDays[0]) classItem.startDay = classItem.selectedDays[0];
      if (!classItem.endDay && classItem.selectedDays[0]) classItem.endDay = classItem.selectedDays[0];
      syncClassLegacyFields(classItem);
      saveState();
      renderSchool();
      renderStudy();
      renderDashboard();
    });
    label.append(check, document.createTextNode(dayName.slice(0, 3)));
    selectedDays.append(label);
  });

  fragment.append(
    input(classItem.name, (value) => classItem.name = value, { placeholder: "Class name" }),
    labeledControl("Repeats", recurrence),
    labeledControl("Day format", dayMode),
    labeledControl("From day", select(classItem.startDay || "", ["", ...weekDays], (value) => {
      classItem.startDay = value;
      syncClassLegacyFields(classItem);
    })),
    labeledControl("To day", select(classItem.endDay || "", ["", ...weekDays], (value) => {
      classItem.endDay = value;
      syncClassLegacyFields(classItem);
    })),
    labeledControl("Or choose exact days", selectedDays),
    labeledControl("Starts on", input(classItem.startsOn || "", (value) => classItem.startsOn = value, { type: "date" })),
    labeledControl("Ends on", input(classItem.endsOn || "", (value) => classItem.endsOn = value, { type: "date" })),
    labeledControl("Monthly day", input(classItem.monthlyDay || "", (value) => classItem.monthlyDay = value, { type: "number", min: "1", max: "31", placeholder: "1-31" })),
    labeledControl("Start time", input(classItem.startTime, (value) => {
      classItem.startTime = value;
      syncClassLegacyFields(classItem);
    }, { type: "time" })),
    labeledControl("End time", input(classItem.endTime, (value) => {
      classItem.endTime = value;
      syncClassLegacyFields(classItem);
    }, { type: "time" })),
    input(classItem.room, (value) => classItem.room = value, { placeholder: "Room / online link" }),
    input(classItem.teacher, (value) => classItem.teacher = value, { placeholder: "Teacher / professor" }),
    summary
  );
  return fragment;
}

function labeledControl(labelText, control) {
  const label = document.createElement("label");
  label.className = "class-control-label";
  label.append(document.createTextNode(labelText), control);
  return label;
}

function refreshMotivationSection(section = "all") {
  state.recommendationSeeds = { books: 0, movies: 0, songs: 0, podcasts: 0, ...(state.recommendationSeeds || {}) };
  state.quoteSeeds = { mindset: 0, famous: 0, islamic: 0, power: 0, ...(state.quoteSeeds || {}) };
  if (section === "motivation" || section === "all") state.motivationSeed = (state.motivationSeed || 0) + 1;
  if (section === "mindset" || section === "all") state.quoteSeeds.mindset = (state.quoteSeeds.mindset || 0) + 1;
  if (section === "famous" || section === "all") state.quoteSeeds.famous = (state.quoteSeeds.famous || 0) + 1;
  if (section === "islamic" || section === "all") state.quoteSeeds.islamic = (state.quoteSeeds.islamic || 0) + 1;
  if (section === "power" || section === "all") state.quoteSeeds.power = (state.quoteSeeds.power || 0) + 6;
  if (["books", "movies", "songs", "podcasts"].includes(section)) state.recommendationSeeds[section] = (state.recommendationSeeds[section] || 0) + 1;
  if (section === "all") {
    Object.keys(state.recommendationSeeds).forEach((key) => {
      state.recommendationSeeds[key] = (state.recommendationSeeds[key] || 0) + 1;
    });
  }
  saveState();
  renderMotivation();
  renderDashboard();
}

function setAllHomeCardsCollapsed(collapsed) {
  state.homeCardCollapsed = state.homeCardCollapsed || {};
  (state.homeCardSettings || defaultHomeCards).forEach((card) => {
    state.homeCardCollapsed[card.id] = collapsed;
  });
  saveState();
  ensureHomeCardCollapse();
}

function autoGrow(element) {
  element.style.height = "auto";
  element.style.height = `${element.scrollHeight + 2}px`;
}

function buildGeneratedMotivation() {
  const starts = ["Win the next block", "Return to the plan", "Choose discipline", "Protect your focus", "Make the next move"];
  const middles = ["even if the mood is not there", "because your future needs proof", "before distraction gets louder", "with one clean action", "and keep it simple"];
  const ends = ["then stack another small win.", "then write down what changed.", "then let momentum build.", "then come back stronger.", "then repeat without drama."];
  const seed = state.motivationSeed || Date.now();
  return `${starts[seed % starts.length]} ${middles[(seed * 3) % middles.length]}, ${ends[(seed * 7) % ends.length]}`;
}

function renderJava() {
  const modules = document.querySelector("#javaModuleList");
  if (!modules) return;
  modules.innerHTML = "";
  javaModules.forEach((module, index) => {
    const button = document.createElement("button");
    button.className = `module-button ${state.javaModule === index ? "is-active" : ""}`;
    button.type = "button";
    button.textContent = module.title;
    button.addEventListener("click", () => {
      state.javaModule = index;
      saveState();
      renderJava();
    });
    modules.append(button);
  });

  const lesson = javaModules[state.javaModule || 0];
  document.querySelector("#javaLessonTitle").textContent = lesson.title;
  document.querySelector("#javaLessonBody").innerHTML = `<p>${lesson.body}</p>`;
  document.querySelector("#javaLessonCode").textContent = lesson.code;
  document.querySelector("#javaPractice").textContent = lesson.practice;
  document.querySelector("#javaProject").textContent = lesson.project;
  document.querySelector("#javaVideoLink").href = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${lesson.title} Java tutorial`)}`;

  const list = document.querySelector("#javaNotes");
  list.innerHTML = "";
  state.javaNotes.forEach((item, index) => list.append(editableItem(item, (patch) => {
    state.javaNotes[index] = { ...state.javaNotes[index], ...patch };
  }, () => {
    state.javaNotes.splice(index, 1);
    saveState();
    renderJava();
  })));
}

function renderMoney() {
  const body = document.querySelector("#moneyRows");
  body.innerHTML = "";
  state.money.forEach((row, index) => {
    const tr = document.createElement("tr");
    ["date", "type", "category", "amount", "note"].forEach((key) => {
      const td = document.createElement("td");
      if (key === "type") td.append(select(row.type || "Expense", ["Expense", "Income"], (value) => row.type = value));
      else td.append(input(row[key] || "", (value) => row[key] = value, { type: key === "amount" ? "number" : key === "date" ? "date" : "text" }));
      tr.append(td);
    });
    const td = document.createElement("td");
    const del = document.createElement("button");
    del.className = "icon-btn";
    del.textContent = "x";
    del.addEventListener("click", () => {
      state.money.splice(index, 1);
      saveState();
      renderMoney();
    });
    td.append(del);
    tr.append(td);
    body.append(tr);
  });
  const income = state.money.filter((r) => r.type === "Income").reduce((sum, r) => sum + Number(r.amount || 0), 0);
  const expense = state.money.filter((r) => r.type !== "Income").reduce((sum, r) => sum + Number(r.amount || 0), 0);
  document.querySelector("#incomeTotal").textContent = money(income);
  document.querySelector("#expenseTotal").textContent = money(expense);
  document.querySelector("#balanceTotal").textContent = money(income - expense);
}

function money(value) {
  return new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(value);
}

function renderBills() {
  const body = document.querySelector("#billRows");
  if (!body) return;
  state.bills = state.bills.map((bill) => ({
    paid: !!bill.paid,
    name: bill.name || bill.bill || "",
    amount: bill.amount || "",
    due: bill.due || bill.dueDay || "",
    category: bill.category || "",
    note: bill.note || ""
  })).sort(compareBillsByDue);
  body.innerHTML = "";
  state.bills.forEach((bill, index) => {
    const tr = document.createElement("tr");
    const paidTd = document.createElement("td");
    const paid = document.createElement("input");
    paid.type = "checkbox";
    paid.checked = bill.paid;
    paid.addEventListener("change", () => {
      bill.paid = paid.checked;
      saveState();
      renderBills();
      renderDashboard();
      renderCalendar();
    });
    paidTd.append(paid);
    tr.append(paidTd);
    [["name", "text"], ["amount", "number"], ["due", "text"], ["category", "text"], ["note", "text"]].forEach(([key, type]) => {
      const td = document.createElement("td");
      td.append(input(bill[key] || "", (value) => {
        bill[key] = value;
        renderDashboard();
        renderCalendar();
      }, { type }));
      tr.append(td);
    });
    const td = document.createElement("td");
    const del = document.createElement("button");
    del.className = "icon-btn";
    del.textContent = "x";
    del.addEventListener("click", () => {
      state.bills.splice(index, 1);
      saveState();
      renderBills();
    });
    td.append(del);
    tr.append(td);
    body.append(tr);
  });
  const total = state.bills.reduce((sum, bill) => sum + Number(bill.amount || 0), 0);
  const paid = state.bills.filter((bill) => bill.paid).reduce((sum, bill) => sum + Number(bill.amount || 0), 0);
  document.querySelector("#billTotal").textContent = money(total);
  document.querySelector("#billPaid").textContent = money(paid);
  document.querySelector("#billRemaining").textContent = money(total - paid);

  const checklist = document.querySelector("#billChecklist");
  checklist.innerHTML = "";
  state.billChecklist.forEach((item, index) => checklist.append(editableItem(item, (patch) => {
    state.billChecklist[index] = { ...state.billChecklist[index], ...patch };
  }, () => {
    state.billChecklist.splice(index, 1);
    saveState();
    renderBills();
  })));
}

function compareBillsByDue(a, b) {
  const rank = (bill) => {
    const due = String(bill.due || "").trim().toLowerCase();
    if (/^\d+$/.test(due)) return Number(due);
    if (due.includes("weekly")) return 32;
    if (due.includes("biweekly")) return 33;
    if (due.includes("monthly")) return 34;
    return 35;
  };
  return rank(a) - rank(b) || String(a.name).localeCompare(String(b.name));
}

function renderSchool() {
  const attendance = document.querySelector("#attendanceList");
  attendance.innerHTML = "";
  state.classes = state.classes.map(normalizeClassItem);
  state.classes.forEach((classItem, index) => {
    const card = document.createElement("div");
    card.className = "task-card";
    const attended = document.createElement("label");
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = !!day()[`class-${index}-attended`];
    check.addEventListener("change", () => {
      day()[`class-${index}-attended`] = check.checked;
      saveState();
    });
    attended.append("Attended today", check);
    card.append(
      classAdvancedEditor(classItem),
      attended
    );
    const del = document.createElement("button");
    del.className = "danger-btn";
    del.textContent = "Delete Class";
    del.addEventListener("click", () => {
      state.classes.splice(index, 1);
      saveState();
      renderSchool();
      renderStudy();
      renderDashboard();
    });
    card.append(del);
    attendance.append(card);
  });

  const assignments = document.querySelector("#assignmentList");
  assignments.innerHTML = "";
  state.assignments.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "task-card";
    card.append(
      input(item.title || item.text, (value) => item.title = value, { placeholder: "Assignment title" }),
      input(item.className, (value) => item.className = value, { placeholder: "Class" }),
      input(item.due, (value) => item.due = value, { type: "datetime-local" }),
      select(item.priority || "Medium", ["Low", "Medium", "High", "Urgent"], (value) => item.priority = value),
      select(item.status || "Not started", ["Not started", "Working", "Submitted", "Graded"], (value) => item.status = value),
      input(item.note, (value) => item.note = value, { placeholder: "Instructions, rubric, link, reminder" })
    );
    const del = document.createElement("button");
    del.className = "danger-btn";
    del.textContent = "Delete Assignment";
    del.addEventListener("click", () => {
      state.assignments.splice(index, 1);
      saveState();
      renderSchool();
    });
    card.append(del);
    assignments.append(card);
  });
}

function studyDurationMinutes(start, end) {
  if (!start || !end) return "";
  const minutes = Math.round((new Date(end) - new Date(start)) / 60000);
  return Number.isFinite(minutes) && minutes > 0 ? `${minutes} minutes` : "";
}

function renderStudySystem() {
  document.querySelector("#studySystem").innerHTML = `
    <ol>
      <li><strong>Preview:</strong> spend 5 minutes reading headings and goals.</li>
      <li><strong>Focus:</strong> study for 25-50 minutes with your phone away.</li>
      <li><strong>Active recall:</strong> close notes and answer from memory.</li>
      <li><strong>Practice:</strong> solve problems, code, or write until mistakes appear.</li>
      <li><strong>Review:</strong> write what you missed and schedule the next review.</li>
    </ol>
  `;
}

function rotatingSignal(list, offset = 0) {
  if (!list.length) return "";
  const now = new Date();
  const tenMinuteBlock = Math.floor(now.getTime() / 600000);
  const activeDaySeed = Math.floor(new Date(`${activeDate}T12:00:00`).getTime() / 86400000);
  return list[(tenMinuteBlock + activeDaySeed + offset) % list.length];
}

function renderStudyFutureWidgets() {
  const java = javaModules[state.javaModule || 0];
  const nextAssignment = state.assignments
    .filter((item) => (item.status || "Not started") !== "Submitted" && (item.status || "Not started") !== "Graded")
    .sort((a, b) => new Date(a.due || "2999-12-31") - new Date(b.due || "2999-12-31"))[0];
  const openStudyBlock = state.studyBlocks.find((block) => (block.status || "Planned") !== "Done");
  fillStatus("#studyFutureNext", [
    { text: rotatingSignal(successLearningSignals), source: "Success learning system", page: "study" },
    { text: `Java next: ${java?.title || "Java fundamentals"} - ${java?.practice || "code one small exercise today"}`, source: "Complete Java", page: "java" }
  ]);
  fillStatus("#studyFutureCareer", [
    { text: rotatingSignal(successCareerSignals, 3), source: "Powerful life roadmap", page: "roadmap" },
    { text: nextAssignment ? `School priority: ${nextAssignment.title || "Assignment"}${nextAssignment.due ? ` due ${new Date(nextAssignment.due).toLocaleString()}` : ""}` : "No urgent assignment found. Use the next block for portfolio proof.", source: "Study Hub", page: "study" }
  ]);
  fillStatus("#studyFutureProject", [
    { text: rotatingSignal(successProjectSignals, 7), source: "Project builder", page: "java" },
    { text: openStudyBlock ? `Next study block: ${openStudyBlock.subject || "Study"} - ${openStudyBlock.topic || openStudyBlock.goal || "finish one clear task"}` : "After building, push one improvement to GitHub and write what changed.", source: "Developer habit", page: "github" }
  ]);
}

function renderStudy() {
  const wrap = document.querySelector("#studyBlocks");
  wrap.innerHTML = "";
  renderStudySchoolPanels();
  state.studyBlocks.forEach((block, index) => {
    const card = document.createElement("article");
    card.className = "task-card";
    const duration = document.createElement("p");
    duration.className = "muted";
    duration.textContent = studyDurationMinutes(block.start, block.end) || "Set start and end time.";
    card.append(
      input(block.subject, (value) => block.subject = value, { placeholder: "Subject" }),
      input(block.topic, (value) => block.topic = value, { placeholder: "Topic / chapter" }),
      input(block.start, (value) => block.start = value, { type: "datetime-local" }),
      input(block.end, (value) => block.end = value, { type: "datetime-local" }),
      input(block.goal, (value) => block.goal = value, { placeholder: "Goal" }),
      select(block.method || "Pomodoro", ["Pomodoro", "Deep Work", "Practice Problems", "Active Recall", "Review"], (value) => block.method = value),
      select(block.status || "Planned", ["Planned", "In progress", "Done"], (value) => block.status = value),
      duration
    );
    const del = document.createElement("button");
    del.className = "danger-btn";
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      state.studyBlocks.splice(index, 1);
      saveState();
      renderStudy();
    });
    card.append(del);
    wrap.append(card);
  });
  renderStudySystem();
  renderStudyFutureWidgets();
  renderLearningSites();
  setField("#schoolStudySpace", state.schoolStudySpace || "", (value) => state.schoolStudySpace = value);
  setField("#projectStudySpace", state.projectStudySpace || "", (value) => state.projectStudySpace = value);
  setField("#developerStudySpace", state.developerStudySpace || "", (value) => state.developerStudySpace = value);
}

function renderStudySchoolPanels() {
  const classWrap = document.querySelector("#studyClassList");
  const assignmentWrap = document.querySelector("#studyAssignmentList");
  const importantDateWrap = document.querySelector("#studyImportantDates");
  const taskWrap = document.querySelector("#studyTaskList");
  if (!state.importantDates) state.importantDates = [];
  if (classWrap) {
    classWrap.innerHTML = "";
    state.classes = state.classes.map(normalizeClassItem);
    state.classes.forEach((classItem, index) => {
      const card = document.createElement("div");
      card.className = "task-card";
      card.append(classAdvancedEditor(classItem));
      const del = document.createElement("button");
      del.className = "danger-btn";
      del.textContent = "Delete Class";
      del.addEventListener("click", () => {
        state.classes.splice(index, 1);
        saveState();
        renderStudySchoolPanels();
        renderSchool();
        renderDashboard();
      });
      card.append(del);
      classWrap.append(card);
    });
  }
  if (assignmentWrap) {
    assignmentWrap.innerHTML = "";
    state.assignments.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = "task-card";
      card.append(
        input(item.title || item.text, (value) => item.title = value, { placeholder: "Assignment title" }),
        input(item.className, (value) => item.className = value, { placeholder: "Class" }),
        input(item.due, (value) => item.due = value, { type: "datetime-local" }),
        select(item.priority || "Medium", ["Low", "Medium", "High", "Urgent"], (value) => item.priority = value),
        select(item.status || "Not started", ["Not started", "Working", "Submitted", "Graded"], (value) => item.status = value),
        input(item.note, (value) => item.note = value, { placeholder: "Notes / link" })
      );
      const del = document.createElement("button");
      del.className = "danger-btn";
      del.textContent = "Delete Assignment";
      del.addEventListener("click", () => {
        state.assignments.splice(index, 1);
        saveState();
        renderStudySchoolPanels();
        renderSchool();
        renderDashboard();
      });
      card.append(del);
      assignmentWrap.append(card);
    });
  }
  if (importantDateWrap) {
    importantDateWrap.innerHTML = "";
    state.importantDates
      .sort((a, b) => new Date(a.when || "2999-12-31") - new Date(b.when || "2999-12-31"))
      .forEach((item) => {
        const index = state.importantDates.indexOf(item);
        const card = document.createElement("div");
        card.className = "task-card important-date-card";
        const timing = document.createElement("p");
        timing.className = "muted";
        timing.textContent = item.when ? new Date(item.when).toLocaleString() : "Set date and time.";
        card.append(
          input(item.title, (value) => item.title = value, { placeholder: "Exam, registration, presentation..." }),
          input(item.className, (value) => item.className = value, { placeholder: "Class / category" }),
          input(item.when, (value) => item.when = value, { type: "datetime-local" }),
          select(item.type || "Exam", ["Exam", "Quiz", "Presentation", "Registration", "Meeting", "Deadline", "Other"], (value) => item.type = value),
          select(item.status || "Upcoming", ["Upcoming", "Prepared", "Done"], (value) => item.status = value),
          input(item.note, (value) => item.note = value, { placeholder: "What to prepare / bring / submit" }),
          timing
        );
        const del = document.createElement("button");
        del.className = "danger-btn";
        del.textContent = "Delete Date";
        del.addEventListener("click", () => {
          state.importantDates.splice(index, 1);
          saveState();
          renderStudySchoolPanels();
          renderDashboard();
        });
        card.append(del);
        importantDateWrap.append(card);
      });
  }
  if (taskWrap) {
    taskWrap.innerHTML = "";
    state.tasks.forEach((task, index) => {
      const card = document.createElement("div");
      card.className = "task-card";
      card.append(
        input(task.title, (value) => task.title = value, { placeholder: "Task title" }),
        input(task.due, (value) => task.due = value, { type: "date" }),
        select(task.status || "Backlog", ["Backlog", "Doing", "Done"], (value) => task.status = value),
        input(task.note, (value) => task.note = value, { placeholder: "Task notes" })
      );
      const del = document.createElement("button");
      del.className = "danger-btn";
      del.textContent = "Delete Task";
      del.addEventListener("click", () => {
        state.tasks.splice(index, 1);
        saveState();
        renderStudySchoolPanels();
        renderTasks();
        renderDashboard();
      });
      card.append(del);
      taskWrap.append(card);
    });
  }
}

function renderLearningSites() {
  const wrap = document.querySelector("#learningSites");
  if (!wrap) return;
  wrap.innerHTML = "";
  state.learningSites.filter((site) => !site.locked).forEach((site) => {
    const index = state.learningSites.indexOf(site);
    const row = document.createElement("div");
    row.className = "resource-edit-card";
    row.append(
      input(site.title, (value) => site.title = value, { placeholder: "Site name" }),
      input(site.url, (value) => site.url = value, { placeholder: "https://..." }),
      input(site.note, (value) => site.note = value, { placeholder: "How this helps" })
    );
    const actions = document.createElement("div");
    actions.className = "resource-links";
    const open = document.createElement("a");
    open.className = "ghost-btn";
    open.textContent = "Open";
    open.href = site.url || "#";
    open.target = "_blank";
    open.rel = "noreferrer";
    const del = document.createElement("button");
    del.className = "danger-btn";
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      state.learningSites.splice(index, 1);
      saveState();
      renderLearningSites();
    });
    actions.append(open, del);
    row.append(actions);
    wrap.append(row);
  });
  if (!wrap.children.length) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "Add your own learning sites here.";
    wrap.append(empty);
  }
}

function setResourceTab(tabName = "core") {
  document.querySelectorAll(".resource-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.resourceTab === tabName);
  });
  document.querySelectorAll(".resource-panel").forEach((panel) => {
    panel.classList.toggle("is-active", panel.dataset.resourcePanel === tabName);
  });
}

function renderHealth() {
  if (!state.health) state.health = defaultState().health;
  if (!Array.isArray(state.health.sleepSessions)) state.health.sleepSessions = [];
  setField("#sleepTime", state.health.sleepTime || "", (value) => state.health.sleepTime = value);
  setField("#wakeTime", state.health.wakeTime || "", (value) => state.health.wakeTime = value);
  setField("#healthNotes", state.health.notes || "", (value) => state.health.notes = value);
  const quality = document.querySelector("#sleepQuality");
  if (quality) {
    quality.value = state.health.sleepQuality || "Good";
    quality.onchange = () => {
      state.health.sleepQuality = quality.value;
      saveState();
    };
  }
  const checklist = document.querySelector("#healthChecklist");
  checklist.innerHTML = "";
  state.health.checklist.forEach((item, index) => checklist.append(editableItem(item, (patch) => {
    state.health.checklist[index] = { ...state.health.checklist[index], ...patch };
  }, () => {
    state.health.checklist.splice(index, 1);
    saveState();
    renderHealth();
  })));
  renderSleepTracker();
}

function renderSleepTracker() {
  const active = state.health?.sleepActiveStart;
  fillStatus("#sleepTimerStatus", [
    active ? `Running since ${new Date(active).toLocaleString()}` : "Sleep timer is not running."
  ]);
  const sessions = state.health?.sleepSessions || [];
  fillStatus("#sleepResults", sessions.slice(0, 7).map((session) => {
    const duration = formatDuration(new Date(session.end) - new Date(session.start));
    return `${new Date(session.start).toLocaleDateString()} - ${duration} - ${session.quality || "No quality"}`;
  }));
}

function startSleep() {
  if (!state.health) state.health = defaultState().health;
  state.health.sleepActiveStart = new Date().toISOString();
  saveState();
  renderHealth();
  renderDashboard();
}

function stopSleep() {
  if (!state.health?.sleepActiveStart) return;
  const end = new Date();
  const start = new Date(state.health.sleepActiveStart);
  state.health.sleepSessions.unshift({
    start: start.toISOString(),
    end: end.toISOString(),
    quality: state.health.sleepQuality || "Good"
  });
  state.health.sleepActiveStart = "";
  state.health.sleepTime = start.toTimeString().slice(0, 5);
  state.health.wakeTime = end.toTimeString().slice(0, 5);
  saveState();
  renderHealth();
  renderDashboard();
}

function renderHubNotes() {
  setField("#essentialsNotes", state.essentialsNotes || "", (value) => state.essentialsNotes = value);
  setField("#faithNotes", state.faithNotes || "", (value) => state.faithNotes = value);
}

function renderLife() {
  const links = document.querySelector("#customLinks");
  if (links) {
    links.innerHTML = "";
    state.customLinks.forEach((link, index) => {
      const row = document.createElement("div");
      row.className = "task-card";
      row.append(
        input(link.title, (value) => link.title = value, { placeholder: "Link name" }),
        input(link.url, (value) => link.url = value, { placeholder: "https://..." })
      );
      const open = document.createElement("a");
      open.className = "ghost-btn";
      open.textContent = "Open";
      open.href = link.url || "#";
      open.target = "_blank";
      open.rel = "noreferrer";
      const del = document.createElement("button");
      del.className = "danger-btn";
      del.textContent = "Delete";
      del.addEventListener("click", () => {
        state.customLinks.splice(index, 1);
        saveState();
        renderLife();
      });
      row.append(open, del);
      links.append(row);
    });
  }
}

function renderHistory() {
  const wrap = document.querySelector("#historyList");
  if (!wrap) return;
  wrap.innerHTML = "";
  const items = state.history || [];
  if (!items.length) {
    const empty = document.createElement("article");
    empty.className = "card";
    empty.textContent = "No saved copies yet. Press Save in the header to create one.";
    wrap.append(empty);
    return;
  }
  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card";
    if (item.screenshot) {
      const image = document.createElement("img");
      image.className = "history-shot";
      image.src = item.screenshot;
      image.alt = `${item.title} screenshot`;
      card.append(image);
    }
    const details = document.createElement("div");
    details.className = "history-details";
    details.hidden = true;
    details.append(historySection("Tasks", item.data?.tasks));
    details.append(historySection("Bills", item.data?.bills));
    details.append(historySection("Classes", item.data?.classes));
    details.append(historySection("Assignments", item.data?.assignments));
    details.append(historySection("Health", item.data?.health));
    details.append(historySection("Study Blocks", item.data?.studyBlocks));
    details.append(historySection("Links", item.data?.customLinks));
    const toggle = document.createElement("button");
    toggle.className = "ghost-btn";
    toggle.textContent = "View Details";
    toggle.addEventListener("click", () => {
      details.hidden = !details.hidden;
      toggle.textContent = details.hidden ? "View Details" : "Hide Details";
    });
    const del = document.createElement("button");
    del.className = "danger-btn";
    del.textContent = "Delete";
    del.addEventListener("click", () => {
      state.history.splice(index, 1);
      forceSaveState();
      renderHistory();
    });
    const title = document.createElement("h3");
    title.textContent = item.title;
    const meta = document.createElement("p");
    meta.className = "muted";
    meta.textContent = `Page: ${pageTitle(item.page, item.page)} | Saved: ${item.savedAt}`;
    const download = document.createElement("a");
    download.className = "ghost-btn";
    download.textContent = "Download Screenshot";
    download.href = item.screenshot || "#";
    const extension = item.screenshot?.startsWith("data:image/svg+xml") ? "svg" : "jpg";
    download.download = `life-command-center-${item.page || "page"}-${String(item.savedAt || Date.now()).replace(/[^\w-]+/g, "-")}.${extension}`;
    if (!item.screenshot) download.hidden = true;
    const openPdf = document.createElement("button");
    openPdf.className = "primary-btn";
    openPdf.type = "button";
    openPdf.textContent = "Open PDF Copy";
    openPdf.hidden = item.type !== "pdf" || !item.pdfHtml;
    openPdf.addEventListener("click", () => openSavedPdfCopy(item));
    card.prepend(title, meta);
    card.append(openPdf, download, toggle, del, details);
    wrap.append(card);
  });
}

function openSavedPdfCopy(item) {
  if (!item.pdfHtml) return;
  const blob = new Blob([item.pdfHtml], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank", "noopener,noreferrer");
  window.setTimeout(() => URL.revokeObjectURL(url), 60000);
  if (!win) alert("Popup blocked. Allow popups for this file to open the saved PDF copy.");
}

function historySection(title, value) {
  const section = document.createElement("div");
  section.className = "history-section";
  const heading = document.createElement("h4");
  heading.textContent = title;
  const pre = document.createElement("pre");
  pre.textContent = JSON.stringify(value || "No saved data", null, 2);
  section.append(heading, pre);
  return section;
}

function renderMenuSettings() {
  const menu = state.menuSettings || defaultState().menuSettings;
  setField("#menuEyebrowInput", menu.eyebrow || "", (value) => {
    menu.eyebrow = value;
    state.menuSettings = menu;
    updatePageLabels();
  });
  setField("#menuTitleInput", menu.title || "", (value) => {
    menu.title = value;
    state.menuSettings = menu;
    updatePageLabels();
  });
  setField("#menuButtonInput", menu.buttonText || "", (value) => {
    menu.buttonText = value;
    state.menuSettings = menu;
    updatePageLabels();
  });

  const wrap = document.querySelector("#menuPageSettings");
  if (!wrap) return;
  wrap.innerHTML = "";
  menu.pages.forEach((page, index) => {
    const row = document.createElement("div");
    row.className = "menu-setting-row";
    const visible = document.createElement("input");
    visible.type = "checkbox";
    visible.checked = page.visible !== false;
    visible.addEventListener("change", () => {
      page.visible = visible.checked;
      saveState();
      updatePageLabels();
    });
    const label = input(page.label, (value) => {
      page.label = value;
      updatePageLabels();
    }, { placeholder: "Page label" });
    const up = document.createElement("button");
    up.className = "ghost-btn compact-action";
    up.type = "button";
    up.textContent = "Up";
    up.disabled = index === 0;
    up.addEventListener("click", () => {
      [menu.pages[index - 1], menu.pages[index]] = [menu.pages[index], menu.pages[index - 1]];
      state.menuSettings = menu;
      saveState();
      updatePageLabels();
      renderMenuSettings();
    });
    const down = document.createElement("button");
    down.className = "ghost-btn compact-action";
    down.type = "button";
    down.textContent = "Down";
    down.disabled = index === menu.pages.length - 1;
    down.addEventListener("click", () => {
      [menu.pages[index + 1], menu.pages[index]] = [menu.pages[index], menu.pages[index + 1]];
      state.menuSettings = menu;
      saveState();
      updatePageLabels();
      renderMenuSettings();
    });
    row.append(visible, label, up, down);
    wrap.append(row);
  });
}

function renderHomeCardSettings() {
  const settings = state.homeCardSettings || defaultHomeCards.map((card) => ({ ...card }));
  state.homeCardSettings = settings;
  const wrap = document.querySelector("#homeCardSettings");
  if (!wrap) return;
  wrap.innerHTML = "";
  settings.forEach((card, index) => {
    const row = document.createElement("div");
    row.className = "menu-setting-row";
    const visible = document.createElement("input");
    visible.type = "checkbox";
    visible.checked = card.visible !== false;
    visible.addEventListener("change", () => {
      card.visible = visible.checked;
      saveState();
      updateHomeCardSettings();
    });
    const label = input(card.label, (value) => {
      card.label = value;
      updateHomeCardSettings();
    }, { placeholder: "Front page card label" });
    const up = document.createElement("button");
    up.className = "ghost-btn compact-action";
    up.type = "button";
    up.textContent = "Up";
    up.disabled = index === 0;
    up.addEventListener("click", () => {
      [settings[index - 1], settings[index]] = [settings[index], settings[index - 1]];
      saveState();
      updateHomeCardSettings();
      renderHomeCardSettings();
    });
    const down = document.createElement("button");
    down.className = "ghost-btn compact-action";
    down.type = "button";
    down.textContent = "Down";
    down.disabled = index === settings.length - 1;
    down.addEventListener("click", () => {
      [settings[index + 1], settings[index]] = [settings[index], settings[index + 1]];
      saveState();
      updateHomeCardSettings();
      renderHomeCardSettings();
    });
    row.append(visible, label, up, down);
    wrap.append(row);
  });
}

function renderWorkout() {
  const log = document.querySelector("#workoutLog");
  log.innerHTML = "";
  state.workouts.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "workout-log-card";
    const title = input(item.text, (value) => {
      item.text = value;
      renderDashboard();
    }, { placeholder: "Workout name / plan" });
    const meta = document.createElement("div");
    meta.className = "workout-time-meta";
    const duration = workoutDuration(item);
    meta.innerHTML = `<strong>${workoutTimeRange(item)}</strong><span>${duration ? `Duration: ${duration}` : "Duration logs after you end the workout."}</span>`;
    const actions = document.createElement("div");
    actions.className = "resource-links";
    const start = document.createElement("button");
    start.className = "primary-btn compact-action";
    start.type = "button";
    start.textContent = item.startedAt && !item.endedAt ? "Restart" : "Start";
    start.addEventListener("click", () => {
      item.startedAt = new Date().toISOString();
      item.endedAt = "";
      item.done = false;
      saveState();
      renderWorkout();
      renderDashboard();
    });
    const end = document.createElement("button");
    end.className = "ghost-btn compact-action";
    end.type = "button";
    end.textContent = "End";
    end.disabled = !item.startedAt || !!item.endedAt;
    end.addEventListener("click", () => {
      item.endedAt = new Date().toISOString();
      item.done = true;
      saveState();
      renderWorkout();
      renderDashboard();
    });
    const save = document.createElement("button");
    save.className = "ghost-btn compact-action";
    save.type = "button";
    save.textContent = "Save";
    save.addEventListener("click", () => {
      saveState();
      renderDashboard();
    });
    const del = document.createElement("button");
    del.className = "danger-btn compact-action";
    del.type = "button";
    del.textContent = "Delete";
    del.addEventListener("click", () => {
    state.workouts.splice(index, 1);
    saveState();
    renderWorkout();
      renderDashboard();
    });
    actions.append(start, end, save, del);
    card.append(title, meta, actions);
    log.append(card);
  });
  const ideas = document.querySelector("#exerciseIdeas");
  ideas.innerHTML = "";
  exerciseIdeas.forEach((idea) => {
    const p = document.createElement("p");
    p.className = "status-pill";
    p.textContent = idea;
    ideas.append(p);
  });
}

function renderRoadmap() {
  const list = document.querySelector("#roadmapList");
  list.innerHTML = "";
  state.roadmap.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "roadmap-item";
    row.append(input(item.phase, (value) => item.phase = value, { placeholder: "Phase" }));
    row.append(input(item.text, (value) => item.text = value, { placeholder: "Roadmap step" }));
    row.append(select(item.status || "Planned", ["Planned", "In progress", "Done"], (value) => item.status = value));
    const del = document.createElement("button");
    del.className = "icon-btn";
    del.textContent = "x";
    del.addEventListener("click", () => {
      state.roadmap.splice(index, 1);
      saveState();
      renderRoadmap();
    });
    row.append(del);
    list.append(row);
  });
}

function renderFiles() {
  const list = document.querySelector("#fileList");
  list.innerHTML = "";
  state.files.forEach((file, index) => {
    const row = document.createElement("div");
    row.className = "file-row";
    const meta = document.createElement("div");
    meta.innerHTML = `<strong>${file.name}</strong><small>${file.type || "file"} • ${file.added ? new Date(file.added).toLocaleString() : "Saved"}</small>`;
    const view = document.createElement("button");
    view.className = "ghost-btn";
    view.textContent = "View";
    view.addEventListener("click", () => viewFile(file));
    const download = document.createElement("button");
    download.className = "ghost-btn";
    download.textContent = "Download";
    download.addEventListener("click", () => downloadFile(file));
    const del = document.createElement("button");
    del.className = "icon-btn";
    del.textContent = "x";
    del.addEventListener("click", async () => {
      await deleteFileData(file.id);
      state.files.splice(index, 1);
      saveState();
      renderFiles();
      document.querySelector("#fileViewer").textContent = "Choose a file to preview it here.";
    });
    row.append(meta, view, download, del);
    list.append(row);
  });
}

async function downloadFile(file) {
  const data = file.data || await getFileData(file.id);
  if (!data) return;
  const link = document.createElement("a");
  link.href = data;
  link.download = file.name;
  link.click();
}

function renderCalendar() {
  const draft = state.calendarDraft || {};
  setField("#calTitle", draft.title || "", (value) => draft.title = value);
  setField("#calLocation", draft.location || "", (value) => draft.location = value);
  setField("#calStart", draft.start || "", (value) => draft.start = value);
  setField("#calEnd", draft.end || "", (value) => draft.end = value);
  setField("#calDetails", draft.details || "", (value) => draft.details = value);
  state.calendarDraft = draft;
  renderBillCalendar();
}

function renderBillCalendar() {
  const wrap = document.querySelector("#billCalendarList");
  if (!wrap) return;
  const monthName = new Date(`${activeDate}T12:00:00`).toLocaleDateString(undefined, { month: "long", year: "numeric" });
  const events = getMonthBillEvents(activeDate);
  wrap.innerHTML = "";
  const heading = document.createElement("div");
  heading.className = "status-pill";
  heading.textContent = monthName;
  wrap.append(heading);
  events.forEach((event) => {
    const row = document.createElement("div");
    row.className = "status-pill";
    row.textContent = `${event.dateLabel} - ${event.name} - ${money(Number(event.amount || 0))} - ${event.paid ? "Paid" : "Unpaid"}`;
    wrap.append(row);
  });
}

function googleDate(value) {
  if (!value) return "";
  return new Date(value).toISOString().replace(/[-:]|\.\d{3}/g, "");
}

function buildCalendarLink() {
  const draft = state.calendarDraft || {};
  const dates = draft.start && draft.end ? `${googleDate(draft.start)}/${googleDate(draft.end)}` : "";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: draft.title || "Planner event",
    details: draft.details || "",
    location: draft.location || ""
  });
  if (dates) params.set("dates", dates);
  const url = `https://calendar.google.com/calendar/render?${params.toString()}`;
  document.querySelector("#calendarEventLink").href = url;
  document.querySelector("#calendarEventLink").textContent = "Open New Event";
}

function renderGithub() {
  const draft = state.githubDraft || { branch: "main", message: "Upload planner file" };
  state.githubDraft = draft;
  setField("#ghOwner", draft.owner || "", (value) => draft.owner = value);
  setField("#ghRepo", draft.repo || "", (value) => draft.repo = value);
  setField("#ghBranch", draft.branch || "main", (value) => draft.branch = value);
  setField("#ghPath", draft.path || "", (value) => draft.path = value);
  setField("#ghMessage", draft.message || "Upload planner file", (value) => draft.message = value);
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

async function uploadGithubFile() {
  const status = document.querySelector("#githubStatus");
  const file = document.querySelector("#ghFile").files[0];
  const draft = state.githubDraft || {};
  const token = document.querySelector("#ghToken").value.trim();
  if (!file || !draft.owner || !draft.repo || !draft.path || !token) {
    status.textContent = "Missing file, owner, repo, path, or token.";
    return;
  }
  status.textContent = "Uploading...";
  try {
    const content = await readFileAsBase64(file);
    const url = `https://api.github.com/repos/${draft.owner}/${draft.repo}/contents/${encodeURIComponent(draft.path).replaceAll("%2F", "/")}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: draft.message || `Upload ${file.name}`,
        content,
        branch: draft.branch || "main"
      })
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || "GitHub upload failed");
    status.innerHTML = `Uploaded. <a href="${result.content.html_url}" target="_blank" rel="noreferrer">Open file on GitHub</a>`;
  } catch (error) {
    status.textContent = error.message;
  }
}

function renderMaps() {
  const query = state.mapQuery || "New York Public Library";
  setField("#mapQuery", query, (value) => state.mapQuery = value);
  const url = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  const external = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  document.querySelector("#mapFrame").src = url;
  document.querySelector("#externalMapLink").href = external;
}

function renderDiscipline() {
  if (!state.discipline) state.discipline = { start: "", reason: "", triggers: [] };
  setField("#disciplineReason", state.discipline.reason || "", (value) => state.discipline.reason = value);
  const started = state.discipline.start ? new Date(state.discipline.start) : null;
  document.querySelector("#disciplineTimer").textContent = started ? formatStreak(Date.now() - started.getTime()) : "0 days";
  document.querySelector("#disciplineStarted").textContent = started ? `Started ${started.toLocaleString()}` : "Start today and protect your focus.";
  const notes = document.querySelector("#triggerNotes");
  notes.innerHTML = "";
  state.discipline.triggers.forEach((item, index) => notes.append(editableItem(item, (patch) => {
    state.discipline.triggers[index] = { ...state.discipline.triggers[index], ...patch };
  }, () => {
    state.discipline.triggers.splice(index, 1);
    saveState();
    renderDiscipline();
  })));
}

function updateDisciplineTimer() {
  if (!state.discipline?.start) return;
  const started = new Date(state.discipline.start);
  document.querySelector("#disciplineTimer").textContent = formatStreak(Date.now() - started.getTime());
}

function formatStreak(ms) {
  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const minutes = Math.floor((ms % 3600000) / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  return `${days} days ${hours}h ${minutes}m ${seconds}s`;
}

function checkAlarms() {
  const now = new Date();
  const current = now.toTimeString().slice(0, 5);
  const today = todayKey();
  state.alarms.forEach((alarm) => {
    if (alarm.enabled && alarm.time === current && alarm.firedDate !== today) {
      alarm.firedDate = today;
      alarm.lastFired = now.toLocaleString();
      saveState();
      alert(alarm.message || "Alarm");
    }
  });
}

function tickTimers() {
  updateLiveClock();
  updateCountdownDisplays();
  updateDisciplineTimer();
  if (state.health?.sleepActiveStart) {
    fillStatus("#sleepTimerStatus", [`Running: ${formatDuration(Date.now() - new Date(state.health.sleepActiveStart).getTime())}`]);
    renderHomeSleepSummary();
  }
  if (document.querySelector("#dashboard")?.classList.contains("is-visible")) renderHomeFitnessSummary();
  checkAlarms();
}

async function viewFile(file) {
  const viewer = document.querySelector("#fileViewer");
  viewer.innerHTML = "";
  const data = file.data || await getFileData(file.id);
  if (!data) {
    viewer.textContent = "This file could not be loaded from browser storage.";
    return;
  }
  if (file.type.includes("pdf")) {
    const iframe = document.createElement("iframe");
    iframe.src = data;
    viewer.append(iframe);
  } else if (file.type.startsWith("image/")) {
    const img = document.createElement("img");
    img.src = data;
    img.alt = file.name;
    viewer.append(img);
  } else if (file.type.startsWith("text/") || file.name.endsWith(".md")) {
    fetch(data).then((res) => res.text()).then((text) => {
      const pre = document.createElement("pre");
      pre.textContent = text;
      viewer.append(pre);
    });
  } else {
    viewer.textContent = "This file type is saved, but preview is only available for PDF, images, and text.";
  }
}

function renderProfile() {
  ["Name", "Phone", "Email", "School", "Grade", "City", "Emergency", "Goal", "Bio"].forEach((key) => {
    const id = `#profile${key}`;
    setField(id, state.profile[key.toLowerCase()] || "", (value) => state.profile[key.toLowerCase()] = value);
  });
}

function renderAssistantSettings() {
  setField("#assistantApiUrl", state.assistantApiUrl || "", (value) => state.assistantApiUrl = value);
}

function bindStaticControls() {
  const scrollTopButton = document.querySelector("#scrollTopButton");
  if (scrollTopButton) {
    const toggleScrollTop = () => scrollTopButton.classList.toggle("is-visible", window.scrollY > 420);
    scrollTopButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    window.addEventListener("scroll", toggleScrollTop, { passive: true });
    toggleScrollTop();
  }
  document.querySelector("#homeButton").addEventListener("click", () => {
    pageStack = [];
    openPanel("dashboard", pageTitle("dashboard", "Home"), document.querySelector("#dayTab"), { skipStack: true });
  });
  document.querySelector("#backButton").addEventListener("click", () => {
    const previous = pageStack.pop() || "dashboard";
    const button = document.querySelector(`.tab[data-tab="${previous}"]`);
    openPanel(previous, pageTitle(previous), button, { skipStack: true });
  });
  document.querySelector("#savePage").addEventListener("click", () => {
    saveCurrentPagePdf();
  });
  document.querySelector("#autoSaveToggle").addEventListener("click", () => {
    state.autoSave = state.autoSave === false;
    updateAutoSaveButton();
    forceSaveState();
  });
  document.querySelector("#pageChooser").addEventListener("click", () => {
    document.querySelector("#pageLauncher").hidden = false;
  });
  document.querySelector("#assistantToggle")?.addEventListener("click", () => {
    document.querySelector("#assistantDrawer").hidden = false;
    setTimeout(() => document.querySelector("#assistantCommand")?.focus(), 50);
  });
  document.querySelector("#closeAssistant")?.addEventListener("click", () => {
    document.querySelector("#assistantDrawer").hidden = true;
  });
  document.querySelector("#assistantDrawer")?.addEventListener("click", (event) => {
    if (event.target.id === "assistantDrawer") document.querySelector("#assistantDrawer").hidden = true;
  });
  document.querySelector("#runAssistantCommand")?.addEventListener("click", async () => {
    const command = document.querySelector("#assistantCommand").value;
    fillStatus("#assistantResult", ["Thinking and preparing automation..."]);
    const result = await runSmartAssistantCommand(command);
    showAssistantResult(result);
  });
  document.querySelector("#assistantCommand")?.addEventListener("keydown", async (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      fillStatus("#assistantResult", ["Thinking and preparing automation..."]);
      const result = await runSmartAssistantCommand(event.target.value);
      showAssistantResult(result);
    }
  });
  document.querySelector("#clearAssistantCommand")?.addEventListener("click", () => {
    document.querySelector("#assistantCommand").value = "";
    fillStatus("#assistantResult", ["Ready for a command."]);
  });
  document.querySelectorAll(".assistant-example").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector("#assistantCommand").value = button.textContent.trim();
      autoGrow(document.querySelector("#assistantCommand"));
    });
  });
  document.querySelector("#motivationQuickButton")?.addEventListener("click", () => {
    document.querySelector("#pageLauncher").hidden = true;
    openPanel("motivation", "Motivation", null);
  });
  document.querySelector("#closeLauncher").addEventListener("click", () => {
    document.querySelector("#pageLauncher").hidden = true;
  });
  document.querySelector("#pageLauncher").addEventListener("click", (event) => {
    if (event.target.id === "pageLauncher") document.querySelector("#pageLauncher").hidden = true;
  });
  document.querySelector("#activeDate").value = activeDate;
  document.querySelector("#activeDate").addEventListener("change", (event) => {
    activeDate = event.target.value || todayKey();
    saveState();
    renderAll();
  });
  document.querySelector("#editHomeLayout")?.addEventListener("click", () => {
    panelLayoutEditMode = !panelLayoutEditMode;
    renderPanelLayoutControls();
  });
  document.querySelector("#dailyNotes").addEventListener("input", (event) => {
    day().notes = event.target.value;
    autoGrow(event.target);
    saveState();
  });
  document.querySelector("#prayerReflection").addEventListener("input", (event) => {
    day().prayerReflection = event.target.value;
    autoGrow(event.target);
    saveState();
  });
  document.querySelector("#addChecklist").addEventListener("click", () => {
    day().checklist.push({ text: "", done: false });
    saveState();
    renderDashboard();
  });
  document.querySelector("#clearSchedule").addEventListener("click", () => {
    if (confirm("Clear this day's schedule?")) {
      day().schedule = {};
      saveState();
      renderSchedule();
    }
  });
  document.querySelector("#resetPrayers").addEventListener("click", () => {
    day().prayers = Object.fromEntries(prayers.map((name) => [name, { done: false, note: "" }]));
    saveState();
    renderAll();
  });
  document.querySelector("#newVerse").addEventListener("click", () => {
    day().verseIndex = (day().verseIndex + 1) % quranVerseBank.length;
    saveState();
    renderQuran();
  });
  document.querySelector("#addTask").addEventListener("click", () => {
    state.tasks.push({ title: "New task", status: "Backlog", due: activeDate, note: "" });
    saveState();
    renderTasks();
  });
  document.querySelector("#addTodoList").addEventListener("click", () => {
    state.todoLists.push({ title: "New List", items: [] });
    saveState();
    renderTodos();
  });
  document.querySelector("#addAlarm").addEventListener("click", () => {
    state.alarms.push({ time: "07:00", message: "Time to move.", enabled: true });
    saveState();
    renderAlarms();
  });
  document.querySelector("#addReminder").addEventListener("click", () => {
    const soon = new Date(Date.now() + 3600000).toISOString().slice(0, 16);
    state.reminders.push({ title: "New reminder", when: soon, status: "Open", note: "" });
    saveState();
    renderReminders();
  });
  document.querySelector("#addCountdown").addEventListener("click", () => {
    const tomorrow = new Date(Date.now() + 86400000).toISOString().slice(0, 16);
    state.countdowns.push({ title: "New countdown", target: tomorrow });
    saveState();
    renderCountdowns();
  });
  document.querySelector("#refreshSuggestions").addEventListener("click", renderSuggestions);
  document.querySelector("#expandHomeCards")?.addEventListener("click", () => setAllHomeCardsCollapsed(false));
  document.querySelector("#collapseHomeCards")?.addEventListener("click", () => setAllHomeCardsCollapsed(true));
  document.querySelectorAll("[data-refresh-motivation]").forEach((button) => {
    button.addEventListener("click", () => refreshMotivationSection(button.dataset.refreshMotivation));
  });
  document.querySelector("#homeNotesCard")?.addEventListener("click", () => {
    if (panelLayoutEditMode) return;
    openPanel("daily", "Schedule");
    setTimeout(() => document.querySelector("#dailyNotes")?.focus(), 80);
  });
  document.querySelector("#refreshWeather")?.addEventListener("click", refreshLiveWeather);
  document.querySelector("#refreshNews")?.addEventListener("click", refreshLiveNews);
  document.querySelector("#refreshStocks")?.addEventListener("click", refreshLiveStocks);
  document.querySelector("#openWeatherMore")?.addEventListener("click", () => openExternal("https://weather.com/weather/today/"));
  document.querySelector("#openNewsMore")?.addEventListener("click", () => openExternal("https://news.google.com/topstories?hl=en-US&gl=US&ceid=US:en"));
  document.querySelector("#openStocksMore")?.addEventListener("click", () => openExternal("https://finance.yahoo.com/markets/stocks/"));
  document.querySelector("#digitalClock")?.addEventListener("click", () => openDetailModal("clock"));
  document.querySelector("#digitalClock")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") openDetailModal("clock");
  });
  document.querySelector("#closeDetailModal")?.addEventListener("click", closeDetailModal);
  document.querySelector("#detailModal")?.addEventListener("click", (event) => {
    if (event.target.id === "detailModal") closeDetailModal();
  });
  document.querySelector("#lifeRoadmapButton")?.addEventListener("click", openLifeRoadmap);
  document.querySelector("#addLifeRoadmapItem")?.addEventListener("click", () => {
    state.lifeRoadmap = Array.isArray(state.lifeRoadmap) ? state.lifeRoadmap : [];
    state.lifeRoadmap.push({ phase: "New Phase", focus: "Define the focus", actions: ["Add one clear action."] });
    saveState();
    renderLifeRoadmap();
  });
  document.querySelector("#closeLifeRoadmap")?.addEventListener("click", closeLifeRoadmap);
  document.querySelector("#lifeRoadmapModal")?.addEventListener("click", (event) => {
    if (event.target.id === "lifeRoadmapModal") closeLifeRoadmap();
  });
  document.querySelectorAll(".signal-widget").forEach((widget) => {
    const open = () => openDetailModal("signal", widget.dataset.signal);
    widget.addEventListener("click", (event) => {
      if (event.target.closest("button, a")) return;
      open();
    });
    widget.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") open();
    });
  });
  document.querySelectorAll(".study-future-widget").forEach((widget) => {
    widget.addEventListener("click", () => openPanel(widget.dataset.openTab || "study", pageTitle(widget.dataset.openTab || "study")));
  });
  document.querySelector("#motivationPageRefresh").addEventListener("click", () => refreshMotivationSection("all"));
  document.querySelectorAll(".hub-link").forEach((button) => {
    button.addEventListener("click", () => openPanel(button.dataset.openTab, button.textContent));
  });
  document.querySelector("#addJavaNote").addEventListener("click", () => {
    state.javaNotes.push({ text: "Java note: ", done: false });
    saveState();
    renderJava();
  });
  document.querySelector("#openMapSearch").addEventListener("click", () => {
    saveState();
    renderMaps();
  });
  document.querySelector("#startDiscipline").addEventListener("click", () => {
    state.discipline.start = new Date().toISOString();
    saveState();
    renderDiscipline();
  });
  document.querySelector("#resetDiscipline").addEventListener("click", () => {
    if (confirm("Reset the discipline streak?")) {
      state.discipline.start = new Date().toISOString();
      saveState();
      renderDiscipline();
    }
  });
  document.querySelector("#addTriggerNote").addEventListener("click", () => {
    state.discipline.triggers.push({ text: "Trigger and replacement action", done: false });
    saveState();
    renderDiscipline();
  });
  document.querySelector("#addHealthChecklist").addEventListener("click", () => {
    state.health.checklist.push({ text: "New health habit", done: false });
    saveState();
    renderHealth();
  });
  document.querySelector("#startSleep").addEventListener("click", startSleep);
  document.querySelector("#stopSleep").addEventListener("click", stopSleep);
  document.querySelector("#addLearningSite").addEventListener("click", () => {
    state.learningSites.push({ title: "New site", url: "https://", note: "", locked: false });
    saveState();
    renderLearningSites();
    setResourceTab("custom");
  });
  document.querySelectorAll(".resource-tab").forEach((button) => {
    button.addEventListener("click", () => setResourceTab(button.dataset.resourceTab));
  });
  document.querySelector("#loadPrayerTimes").addEventListener("click", loadPrayerTimes);
  document.querySelector("#clearHistory").addEventListener("click", () => {
    if (confirm("Clear saved history copies?")) {
      state.history = [];
      forceSaveState();
      renderHistory();
    }
  });
  document.querySelector("#addCustomLink").addEventListener("click", () => {
    state.customLinks.push({ title: "New link", url: "https://" });
    saveState();
    renderLife();
  });
  document.querySelectorAll(".theme-scene").forEach((button) => {
    button.addEventListener("click", () => {
      state.backgroundScene = button.dataset.scene;
      applyTheme();
      saveState();
    });
  });
  document.querySelector("#addMoneyRow").addEventListener("click", () => {
    state.money.push({ date: activeDate, type: "Expense", category: "", amount: "", note: "" });
    saveState();
    renderMoney();
  });
  document.querySelector("#addBill").addEventListener("click", () => {
    state.bills.push({ paid: false, name: "New bill", amount: "", due: "", category: "", note: "" });
    saveState();
    renderBills();
  });
  document.querySelector("#addBillChecklist").addEventListener("click", () => {
    state.billChecklist.push({ text: "New bill step", done: false });
    saveState();
    renderBills();
  });
  document.querySelector("#openGoogleCalendar").addEventListener("click", () => {
    window.open("https://calendar.google.com/calendar/u/0/r", "_blank", "noopener,noreferrer");
  });
  document.querySelector("#createCalendarLink").addEventListener("click", () => {
    buildCalendarLink();
    saveState();
  });
  document.querySelector("#uploadGithubFile").addEventListener("click", uploadGithubFile);
  document.querySelector("#addClass").addEventListener("click", () => {
    state.classes.push(defaultClassItem());
    saveState();
    renderSchool();
    renderStudy();
  });
  document.querySelector("#addAssignment").addEventListener("click", () => {
    state.assignments.push({ title: "New assignment", className: "", due: "", priority: "Medium", status: "Not started", note: "" });
    saveState();
    renderSchool();
    renderStudy();
  });
  document.querySelector("#addClassFromStudy").addEventListener("click", () => {
    state.classes.push(defaultClassItem());
    saveState();
    renderSchool();
    renderStudy();
    renderDashboard();
  });
  document.querySelector("#addAssignmentFromStudy").addEventListener("click", () => {
    state.assignments.push({ title: "New assignment", className: "", due: "", priority: "Medium", status: "Not started", note: "" });
    saveState();
    renderSchool();
    renderStudy();
    renderDashboard();
  });
  document.querySelector("#addImportantDateFromStudy").addEventListener("click", () => {
    if (!state.importantDates) state.importantDates = [];
    const start = new Date();
    start.setHours(start.getHours() + 24, 0, 0, 0);
    state.importantDates.push({ title: "Important date", className: "", when: start.toISOString().slice(0, 16), type: "Exam", status: "Upcoming", note: "" });
    saveState();
    renderStudy();
    renderDashboard();
  });
  document.querySelector("#addTaskFromStudy").addEventListener("click", () => {
    state.tasks.push({ title: "New task", status: "Backlog", due: activeDate, note: "" });
    saveState();
    renderTasks();
    renderStudy();
    renderDashboard();
  });
  document.querySelector("#addStudyBlock").addEventListener("click", () => {
    const start = new Date();
    const end = new Date(start.getTime() + 50 * 60000);
    state.studyBlocks.push({ subject: "", topic: "", start: start.toISOString().slice(0, 16), end: end.toISOString().slice(0, 16), goal: "", method: "Pomodoro", status: "Planned" });
    saveState();
    renderStudy();
  });
  document.querySelector("#addWorkout").addEventListener("click", () => {
    state.workouts.push({ text: "Workout plan", startedAt: "", endedAt: "", done: false });
    saveState();
    renderWorkout();
  });
  document.querySelector("#addRoadmapItem").addEventListener("click", () => {
    state.roadmap.push({ phase: "New", text: "", status: "Planned" });
    saveState();
    renderRoadmap();
  });
  document.querySelector("#fileUpload").addEventListener("change", handleFiles);
  document.querySelector("#exportData").addEventListener("click", exportData);
  document.querySelector("#importData").addEventListener("change", importData);
  document.querySelector("#resetAll").addEventListener("click", () => {
    if (confirm("Reset all saved data?")) {
      localStorage.removeItem(STORAGE_KEY);
      state = defaultState();
      activeDate = todayKey();
      renderAll();
    }
  });
  ["bgColor", "quickBackground", "cardColor", "textColor", "accentColor"].forEach((id) => {
    document.querySelector(`#${id}`).addEventListener("input", (event) => {
      const key = id === "quickBackground" || id === "bgColor" ? "bg" : id.replace("Color", "");
      state.theme[key] = event.target.value;
      if (id === "quickBackground") {
        state.pageColors[currentPage] = event.target.value;
        state.backgroundScene = "plain";
      }
      applyTheme();
      saveState();
    });
  });
  [
    ["menuBgColor", "bg"],
    ["menuCardColor", "card"],
    ["menuTextColor", "text"],
    ["menuActiveColor", "active"]
  ].forEach(([id, key]) => {
    document.querySelector(`#${id}`).addEventListener("input", (event) => {
      state.menuSettings[key] = event.target.value;
      applyTheme();
      saveState();
    });
  });
  document.querySelector("#resetMenuSettings").addEventListener("click", () => {
    state.menuSettings = defaultState().menuSettings;
    saveState();
    renderMenuSettings();
    updatePageLabels();
    applyTheme();
  });
  document.querySelector("#resetHomeCards").addEventListener("click", () => {
    state.homeCardSettings = defaultHomeCards.map((card) => ({ ...card }));
    saveState();
    renderHomeCardSettings();
    updateHomeCardSettings();
  });
  document.querySelector("#softMode").addEventListener("click", () => setPreset("calm"));
  document.querySelector("#focusMode").addEventListener("click", () => setPreset("midnight"));
  document.querySelectorAll(".preset").forEach((button) => button.addEventListener("click", () => setPreset(button.dataset.mode)));
}

function openFileDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(FILE_DB, 1);
    request.onupgradeneeded = () => request.result.createObjectStore("files");
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function putFileData(id, data) {
  const db = await openFileDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").put(data, id);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function getFileData(id) {
  const db = await openFileDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readonly");
    const request = tx.objectStore("files").get(id);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function deleteFileData(id) {
  const db = await openFileDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction("files", "readwrite");
    tx.objectStore("files").delete(id);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

function handleFiles(event) {
  [...event.target.files].forEach((file) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const id = `${Date.now()}-${crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(16).slice(2)}`;
      await putFileData(id, reader.result);
      state.files.push({ id, name: file.name, type: file.type || "application/octet-stream", added: new Date().toISOString() });
      saveState();
      renderFiles();
    };
    reader.readAsDataURL(file);
  });
  event.target.value = "";
}

function setPreset(name) {
  state.theme = { ...presets[name] };
  applyTheme();
  saveState();
}

function exportData() {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `life-command-center-${todayKey()}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state = { ...defaultState(), ...JSON.parse(reader.result) };
    activeDate = state.activeDate || todayKey();
    saveState();
    renderAll();
  };
  reader.readAsText(file);
}

function renderAll() {
  document.querySelector("#activeDate").value = activeDate;
  document.querySelector("#dailyNotes").value = day().notes || "";
  document.querySelector("#prayerReflection").value = day().prayerReflection || "";
  updateAutoSaveButton();
  updatePageLabels();
  applyTheme();
  renderDashboard();
  renderSchedule();
  renderTasks();
  renderTodos();
  renderAlarms();
  renderReminders();
  renderCountdowns();
  renderPrayer();
  renderQuran();
  renderFaith();
  renderSuggestions();
  renderMotivation();
  renderJava();
  renderMoney();
  renderBills();
  renderCalendar();
  renderGithub();
  renderSchool();
  renderStudy();
  renderHealth();
  renderHubNotes();
  renderLife();
  renderHistory();
  renderMenuSettings();
  renderHomeCardSettings();
  renderWorkout();
  renderRoadmap();
  renderFiles();
  renderMaps();
  renderDiscipline();
  renderProfile();
  renderAssistantSettings();
  document.querySelectorAll("textarea").forEach(autoGrow);
  ensureInlineSaveButtons();
  renderPanelLayoutControls();
}

bindTabs();
bindStaticControls();
renderAll();
setInterval(tickTimers, 1000);
setInterval(() => refreshMotivationSection("all"), 600000);
setInterval(renderStudyFutureWidgets, 600000);
setInterval(() => {
  refreshLiveWeather();
  refreshLiveNews();
  refreshLiveStocks();
}, 15 * 60 * 1000);
