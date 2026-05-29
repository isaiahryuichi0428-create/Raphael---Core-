# RAPHAEL Core

RAPHAEL Core is a safe real-world student productivity assistant dashboard inspired by JARVIS-style command centers and the calm clarity of Raphael. This MVP is intentionally local-first: it does not include authentication, external databases, Gmail, Google Calendar, or Google Drive integrations yet.

## MVP Features

- Next.js App Router with TypeScript and Tailwind CSS
- Futuristic dark interface with blue, white, and soft cyan accents
- Cleaner responsive dashboard with mobile-friendly navigation
- Dashboard, Chat, Study, Research, Life Management, Tasks, and Settings pages
- Mock RAPHAEL Core chat responses in a Japanese-first assistant style
- Chat loading and validation states for a more stable MVP interaction
- Local browser task persistence with `localStorage`
- Task loading, empty, validation, and storage error states
- Safety rules displayed in Settings
- Placeholders for future OpenAI and Google integrations

## Install Dependencies

```bash
npm install
```

## Run the Development App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run start
```

## Run Checks

```bash
npm run lint
npm run build
```

If dependency installation is blocked by your environment, run these commands again after registry access is restored.

## Add OpenAI API Later

The current Chat page uses a mock response function only. To add OpenAI safely later:

1. Create a server-side route such as `app/api/chat/route.ts`.
2. Store the API key in `.env.local` as `OPENAI_API_KEY=...` and never expose it in client components.
3. Move the chat generation call into the API route.
4. Add rate limiting and request validation.
5. Define a RAPHAEL Core system instruction that keeps the assistant calm, logical, Japanese-first, and safety-focused.
6. Keep confirmation requirements for external actions before connecting tools such as email, calendar, or file access.

A TODO comment is already included in `app/chat/page.tsx` where the mock response should be replaced with the future OpenAI API route call.

## Add Google Integrations Later

Google integrations are intentionally placeholders in this MVP. Before adding Gmail, Google Calendar, or Google Drive:

1. Configure OAuth with the minimum required scopes only.
2. Add a permission review screen explaining exactly what access is requested.
3. Add preview screens before any email, calendar event, or Drive file action.
4. Require explicit user confirmation for every external action.
5. Store tokens securely and avoid storing unnecessary personal information.
6. Add audit logs so users can review what RAPHAEL Core prepared or changed.

Required safety rules:

- Never send emails without user confirmation.
- Never create, edit, or delete calendar events without user confirmation.
- Never share, delete, or edit Drive files without user confirmation.
- Show only the minimum necessary personal information.
- Ask for confirmation before external actions.
- Do not guess if information is unclear.

## Project Structure

```text
app/                  App Router pages and global layout
components/           Reusable UI components and empty/loading-support UI
lib/                  Shared constants and prompt templates
README.md             Setup and future integration instructions
```

## Current Limitations

- Chat responses are mock responses, not AI-generated.
- Tasks persist only in the current browser via `localStorage`.
- No authentication, external database, or Google API integration is included.
