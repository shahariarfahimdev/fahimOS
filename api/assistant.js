const tools = [
  {
    type: "function",
    name: "add_class",
    description: "Add a class schedule with recurrence, selected days, date window, time, room, and teacher.",
    parameters: {
      type: "object",
      properties: {
        name: { type: "string" },
        recurrence: { type: "string", enum: ["Daily", "Weekly", "Monthly", "One time"] },
        dayMode: { type: "string", enum: ["Day range", "Selected days"] },
        startDay: { type: "string" },
        endDay: { type: "string" },
        selectedDays: { type: "array", items: { type: "string" } },
        startsOn: { type: "string", description: "YYYY-MM-DD date" },
        endsOn: { type: "string", description: "YYYY-MM-DD date, optional" },
        monthlyDay: { type: "string", description: "1-31 for monthly classes" },
        startTime: { type: "string", description: "HH:MM 24-hour time" },
        endTime: { type: "string", description: "HH:MM 24-hour time" },
        room: { type: "string" },
        teacher: { type: "string" }
      },
      required: ["name"]
    }
  },
  {
    type: "function",
    name: "add_assignment",
    description: "Add a school assignment.",
    parameters: {
      type: "object",
      properties: {
        title: { type: "string" },
        className: { type: "string" },
        due: { type: "string", description: "YYYY-MM-DD or YYYY-MM-DDTHH:MM" },
        priority: { type: "string", enum: ["Low", "Medium", "High", "Urgent"] },
        status: { type: "string" },
        note: { type: "string" }
      },
      required: ["title"]
    }
  },
  {
    type: "function",
    name: "add_task",
    description: "Add a task.",
    parameters: {
      type: "object",
      properties: {
        title: { type: "string" },
        due: { type: "string" },
        status: { type: "string" },
        note: { type: "string" }
      },
      required: ["title"]
    }
  },
  {
    type: "function",
    name: "add_reminder",
    description: "Add a reminder.",
    parameters: {
      type: "object",
      properties: {
        text: { type: "string" },
        when: { type: "string" },
        status: { type: "string" },
        note: { type: "string" }
      },
      required: ["text"]
    }
  },
  {
    type: "function",
    name: "add_bill",
    description: "Add a bill.",
    parameters: {
      type: "object",
      properties: {
        name: { type: "string" },
        amount: { type: "string" },
        due: { type: "string" },
        category: { type: "string" },
        note: { type: "string" }
      },
      required: ["name"]
    }
  },
  {
    type: "function",
    name: "mark_bill_paid",
    description: "Mark a matching bill paid.",
    parameters: {
      type: "object",
      properties: { name: { type: "string" } },
      required: ["name"]
    }
  },
  {
    type: "function",
    name: "add_workout",
    description: "Add a workout idea or workout log item.",
    parameters: {
      type: "object",
      properties: {
        text: { type: "string" },
        note: { type: "string" }
      },
      required: ["text"]
    }
  },
  {
    type: "function",
    name: "add_journal_entry",
    description: "Add a journal entry to the Life Hub journal.",
    parameters: {
      type: "object",
      properties: {
        text: { type: "string" },
        title: { type: "string" }
      },
      required: ["text"]
    }
  },
  {
    type: "function",
    name: "create_study_block",
    description: "Create a self-learning study block.",
    parameters: {
      type: "object",
      properties: {
        subject: { type: "string" },
        topic: { type: "string" },
        start: { type: "string" },
        end: { type: "string" },
        goal: { type: "string" },
        method: { type: "string" }
      },
      required: ["subject"]
    }
  },
  {
    type: "function",
    name: "create_daily_schedule",
    description: "Fill daily schedule time slots.",
    parameters: {
      type: "object",
      properties: {
        items: {
          type: "array",
          items: {
            type: "object",
            properties: {
              time: { type: "string", description: "HH:MM" },
              title: { type: "string" },
              status: { type: "string" },
              note: { type: "string" }
            },
            required: ["time", "title"]
          }
        }
      },
      required: ["items"]
    }
  },
  {
    type: "function",
    name: "add_todo_item",
    description: "Add an item to a named to-do list.",
    parameters: {
      type: "object",
      properties: {
        listTitle: { type: "string" },
        text: { type: "string" }
      },
      required: ["text"]
    }
  },
  {
    type: "function",
    name: "add_important_date",
    description: "Add an exam, quiz, presentation, registration date, meeting, or deadline.",
    parameters: {
      type: "object",
      properties: {
        title: { type: "string" },
        className: { type: "string" },
        when: { type: "string" },
        type: { type: "string" },
        note: { type: "string" }
      },
      required: ["title"]
    }
  },
  {
    type: "function",
    name: "add_alarm",
    description: "Add a browser alarm.",
    parameters: {
      type: "object",
      properties: {
        time: { type: "string" },
        label: { type: "string" }
      },
      required: ["time"]
    }
  },
  {
    type: "function",
    name: "add_countdown",
    description: "Add a countdown timer.",
    parameters: {
      type: "object",
      properties: {
        title: { type: "string" },
        target: { type: "string" }
      },
      required: ["title", "target"]
    }
  },
  {
    type: "function",
    name: "add_money_transaction",
    description: "Add income or expense row to the money tracker.",
    parameters: {
      type: "object",
      properties: {
        date: { type: "string" },
        type: { type: "string" },
        category: { type: "string" },
        amount: { type: "string" },
        note: { type: "string" }
      },
      required: ["amount"]
    }
  },
  {
    type: "function",
    name: "add_learning_site",
    description: "Add a custom learning site to Study Hub.",
    parameters: {
      type: "object",
      properties: {
        title: { type: "string" },
        url: { type: "string" },
        note: { type: "string" }
      },
      required: ["title", "url"]
    }
  },
  {
    type: "function",
    name: "add_roadmap_step",
    description: "Add a roadmap step to the editable Roadmap page.",
    parameters: {
      type: "object",
      properties: {
        phase: { type: "string" },
        text: { type: "string" },
        status: { type: "string" }
      },
      required: ["text"]
    }
  },
  {
    type: "function",
    name: "update_profile",
    description: "Update profile fields.",
    parameters: {
      type: "object",
      properties: {
        name: { type: "string" },
        phone: { type: "string" },
        email: { type: "string" },
        school: { type: "string" },
        grade: { type: "string" },
        city: { type: "string" },
        emergency: { type: "string" },
        goal: { type: "string" },
        bio: { type: "string" }
      }
    }
  },
  {
    type: "function",
    name: "mark_prayer_done",
    description: "Mark one of the five daily prayers done for the active date.",
    parameters: {
      type: "object",
      properties: {
        prayer: { type: "string", enum: ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"] },
        note: { type: "string" }
      },
      required: ["prayer"]
    }
  },
  {
    type: "function",
    name: "add_quran_reflection",
    description: "Save Quran reading progress and reflection for the active date.",
    parameters: {
      type: "object",
      properties: {
        surah: { type: "string" },
        ayah: { type: "string" },
        minutes: { type: "string" },
        reflection: { type: "string" }
      }
    }
  }
];

function json(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
  response.end(JSON.stringify(payload));
}

module.exports = async function handler(request, response) {
  if (request.method === "OPTIONS") return json(response, 200, { ok: true });
  if (request.method !== "POST") return json(response, 405, { error: "Use POST." });

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return json(response, 500, { error: "OPENAI_API_KEY is not configured on the server." });

  let body = "";
  for await (const chunk of request) body += chunk;

  let payload;
  try {
    payload = JSON.parse(body || "{}");
  } catch {
    return json(response, 400, { error: "Invalid JSON body." });
  }

  const command = String(payload.command || "").trim();
  if (!command) return json(response, 400, { error: "Missing command." });

  const today = payload.snapshot?.activeDate || new Date().toISOString().slice(0, 10);
  const openaiResponse = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
      instructions: [
        "You are Fahim OS automation brain.",
        "Convert the user request into one or more function calls for the planner website.",
        "Use the user's active date as today when dates are vague.",
        "Prefer tool calls over plain text when the request asks to create, update, schedule, track, or save anything.",
        "Use YYYY-MM-DD dates and HH:MM 24-hour times.",
        "Do not expose secrets or API keys."
      ].join(" "),
      tools,
      input: [
        {
          role: "user",
          content: `Active date: ${today}\nPlanner snapshot: ${JSON.stringify(payload.snapshot || {})}\nCommand: ${command}`
        }
      ]
    })
  });

  const data = await openaiResponse.json();
  if (!openaiResponse.ok) {
    return json(response, openaiResponse.status, { error: data.error?.message || "OpenAI request failed." });
  }

  const actions = [];
  for (const item of data.output || []) {
    if (item.type === "function_call") {
      let args = {};
      try {
        args = JSON.parse(item.arguments || "{}");
      } catch {
        args = {};
      }
      actions.push({ name: item.name, arguments: args });
    }
  }

  return json(response, 200, {
    message: actions.length ? `Ready: ${actions.map((action) => action.name.replaceAll("_", " ")).join(", ")}.` : data.output_text || "No automation action was created.",
    actions,
    rawText: data.output_text || ""
  });
};
