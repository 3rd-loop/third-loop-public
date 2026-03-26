---
sidebar_position: 3
---

# Tools

Tools define specific capabilities for your agents. A tool gives your agent the ability to do tasks. Tools are reusable — you can attach the same tool to multiple agents.

## Creating a Tool

1. Go to the **Create** page and switch to the **Tools** tab.
2. Click the **New** button and select **Tool**.
3. Fill in the following fields:
   - **Name** — A short, descriptive name for the tool.
   - **Purpose** — A brief explanation of what this tool does. This helps the agent understand when to apply it.
   - **Content** — The detailed definition of the tool. This is where you write the prompt or knowledge that powers the tool.
4. Optionally add **trigger conditions** and **tags**.
5. Click **Create**.

## Trigger Conditions

Trigger conditions tell the agent when a tool should activate. You can add multiple conditions to a single tool. Each condition is a plain-text description of a scenario.

For example, a "Code Review" tool might have trigger conditions like:

- "When the user asks for a code review"
- "When the user shares a code snippet and asks for feedback"
- "When the user asks about best practices for a piece of code"

These conditions help the agent decide when to bring this tool into play versus relying on its other tools or general knowledge.

## Managing Tools

Your tools appear in the left sidebar when the Tools tab is selected. You can:

- **Select** a tool to view and edit it.
- **Rename** a tool from the menu icon.
- **Delete** a tool from the menu icon. You will be asked to confirm.
- **Search** for tools using the search bar.

## Tags

Add tags to your tools for organization. Tags help you categorize tools by topic, department, or however makes sense for your use case.
