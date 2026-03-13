---
sidebar_position: 5
---

# Testing Agents

The Agent Builder includes a built-in test section so you can try out your agent without leaving the builder.

## How to Test

1. Select an agent from the left sidebar on the **Create** page.
2. Scroll down to the **Test this agent** section at the bottom of the agent form.
3. Type a message or question in the input field.
4. Press **Enter** or click the send button.
5. The agent's response will stream in real-time below the input.

## What Gets Tested

When you test an agent, it uses the current configuration shown in the form — including the model, parameters, attached skills, and attached instructions. This means you can tweak settings and immediately see how they affect the agent's responses without saving first.

## Tips for Testing

- **Start simple.** Try a basic question to make sure the agent responds correctly before testing edge cases.
- **Test your trigger conditions.** If you have skills with trigger conditions, try prompts that should and shouldn't activate them.
- **Compare parameter changes.** Try the same prompt with different temperature or verbosity settings to see how the output changes.
- **Check instruction adherence.** Ask the agent something that should be governed by your instructions and verify it follows the guidelines.
