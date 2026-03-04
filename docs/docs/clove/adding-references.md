---
sidebar_position: 3
---

# Adding References

One of the powerful parts of Clove is its ability to investigate, reference, and summarize documents. You can upload files directly into a chat for Clove to read and respond to.

## How to Upload

Click the **upload button** on the left side of the input field, or simply drag and drop files into the chat area. You can also paste files from your clipboard.

Once attached, your files appear above the input with their name, size, and a token usage indicator.

## Supported File Types

Clove supports a wide range of file types:

- **Documents** — PDF (both OCR and non-OCR), DOCX, PPTX
- **Spreadsheets** — XLSX, CSV
- **Images** — PNG, JPG, GIF, WebP
- **Code files** — JS, TS, PY, Java, and many more
- **Data files** — JSON, XML
- **Text** — TXT, Markdown

## Token Limits

Under the hood, the actual file size does not matter — what matters is the amount of content in the file. Clove shows you how much of your token budget each file uses with a color-coded indicator:

- **Green** — Well within limits.
- **Yellow** — Approaching the limit.
- **Red** — Exceeds the maximum.

If a single file is too large for direct chat attachment, Clove will automatically offer to add it to a collection instead. Collections use a different approach (RAG) that handles large files by searching for the most relevant sections rather than reading the entire file.

## Processing

After you attach a file, Clove processes it before you send your message. You will see a processing status indicator while this happens. Once processing is complete, the file is ready to be included with your message.

If a file fails to process, you will see an error state with the reason. You can remove it and try again or use a different format.

## When to Use References vs. Collections

- **Direct references** (file attachments) are best when you want Clove to read the entire file — for example, summarizing a document or analyzing a spreadsheet.
- **Collections** are better for large volumes of data or when you want Clove to find and cite specific relevant sections. See [Collections](./collections) for more.
