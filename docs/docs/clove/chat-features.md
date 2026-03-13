---
sidebar_position: 2
---

# Chat Features

Chat is the core of Clove. Here is what you can do within a conversation.

## Sending Messages

Type your message in the input field at the bottom and press Enter to send. The input area automatically grows as you type longer messages. Clove streams its response in real-time so you can start reading before the full answer is ready.

If you need to stop a response mid-generation, click the **Stop** button that appears while Clove is streaming.

## Attaching Files

You can attach files directly in chat for Clove to reference. There are three ways to attach:

- **Click the upload button** next to the input field.
- **Drag and drop** files into the chat area.
- **Paste** a file from your clipboard.

Attached files appear above the input with their name and size. Clove will show you how much of your token budget each file uses. If a file is too large for direct attachment, Clove will suggest adding it to a collection instead.

For more on file handling, see [Adding References](./adding-references).

## Using Collections in Chat

Click the **folder button** next to the upload button to select collections or specific documents as knowledge sources. When you select a collection, Clove searches it for relevant information before responding and includes source citations in its answer.

You can select different collections for different messages in the same conversation. A dot appears on the folder button when sources are active.

For more on collections, see [Collections](./collections).

## Agent Selection

Use the dropdown near the input field to choose which agent or model handles your conversation. Different agents may have different expertise, tone, or capabilities. You can switch agents at any point in the conversation.

## Message Actions

Each message from Clove has actions you can take:

- **Copy** — Copy the message text to your clipboard, including any sources.
- **Download code** — If the message contains code blocks, you can download them as files.
- **Feedback** — Give a thumbs up or thumbs down to help improve Clove's responses.

## Rich Content

Clove can render more than just plain text in its responses:

- **Markdown** — Headings, bold, italics, lists, and links.
- **Code blocks** — Syntax-highlighted code in many languages.
- **Tables** — Collapsible tables for structured data.
- **Mermaid diagrams** — Flowcharts, sequence diagrams, and other visualizations rendered inline.

## Conversation Management

You can manage your conversations from the sidebar:

- **Rename** — Hover over a chat in the sidebar, click the menu, and select Rename.
- **Details** — View metadata like message count, agent used, and timestamps.
- **Delete** — Remove a conversation with confirmation.
- **Search** — Use the All Chats view to search conversations by title.

Clove automatically generates a title for new conversations based on your first message. You can rename it at any time.

## Conversation Limits

Conversations have a message limit. When you reach the limit, the conversation will end and you will need to start a new chat. This helps keep responses fast and relevant.
