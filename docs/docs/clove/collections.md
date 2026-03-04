---
sidebar_position: 4
---

# Collections

Collections are a way to organize your files and documents so Clove can search them for relevant information when answering your questions. Under the hood, Clove uses a technology called Retrieval-Augmented Generation (RAG) to make this work. You can learn more about RAG here: https://www.ibm.com/think/topics/retrieval-augmented-generation

## How Collections Work

When you select a collection in a chat, Clove searches your documents before answering. It finds the most relevant sections of your data and uses that information to inform its response. This means you get answers grounded in your actual documents, with source citations so you can verify where the information came from.

RAG excels at question-and-answer tasks and specific lookups. It is not always ideal for summarizing large volumes of data or your entire collection — for that, attaching a file directly in chat may work better. See [Adding References](./adding-references) for more on that.

## Creating a Collection

1. Select **Collections** from your sidebar.
2. Click **New Collection** to create a folder.
3. Drag in files or folders, or click to upload.
4. Organize your files into folders however makes sense for your use case.

Collections support a nested folder structure, so you can organize by project, department, topic, or whatever works for you. There is a maximum folder nesting depth to keep things manageable.

## Uploading Files

You can upload files by dragging and dropping them into the collections page or clicking the upload button. Clove supports a wide range of file types including PDFs, Word documents, PowerPoints, images, code files, spreadsheets, and more.

During upload you will see:
- **Progress** — A global progress bar showing total files, completed, and failed.
- **Errors** — Any files that fail validation or upload, with reasons.
- **Skipped files** — Files that were skipped and why.

You can cancel an ongoing upload if needed.

When uploading folders, Clove may offer to flatten nested structures into a single level. You will see a confirmation before this happens.

## Managing Collections

From the collections page you can:

- **Create** new collections (folders).
- **Rename** collections or documents.
- **Move** files and folders between collections using drag-and-drop or the move action.
- **Delete** collections or documents with confirmation.
- **Search** across all collections and documents by name.

## Using Collections in Chat

When you are in a chat, click the **folder button** next to the upload button in the input area. This opens a modal where you can:

1. Browse your collections in a tree view.
2. Drill down into specific folders.
3. Select an entire collection or individual documents.
4. Search for specific collections or documents.

Clove only looks at the folder or documents you select — it does not search everything. This puts you in control of where the information comes from and helps with traceability.

A dot indicator appears on the folder button when you have sources selected.

## Tips

- **Organize intentionally.** Separating information across different collections (by project, task, system, etc.) helps Clove find the right data and keeps your sources clear.
- **Be specific.** Selecting a more targeted folder or document gives better results than selecting a broad collection.
- **Clove still knows things.** Collections supplement Clove's existing knowledge. It may already know about a topic — collections are there to add your specific data and improve traceability.
