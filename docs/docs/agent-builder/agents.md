---
sidebar_position: 2
---

# Agents

Agents are the core of the Agent Builder. An agent combines a model, tools, and instructions into a single entity you can chat with and test.

## Creating an Agent

1. Go to the **Create** page and make sure you are on the **Agents** tab.
2. Click the **New** button and select **Agent**.
3. Fill in a **name** and **description** for your agent. The name helps you identify it later, and the description explains what the agent is designed to do.
4. Configure the model parameters (see below).
5. Attach any **tools** and **instructions** you want the agent to use.
6. Click **Create**.

Your new agent will appear in the left sidebar where you can select it to edit or test at any time.

## Model Parameters

You can configure how the agent's underlying model behaves using two modes:

### Basic Mode (Default)

Basic mode gives you two simple controls:

- **Verbosity** — Choose between Concise, Standard, or Detailed. This controls how long the agent's responses tend to be.
- **Behavior Slider** — A slider that goes from Precise to Creative. Sliding toward Precise makes the agent more focused and deterministic. Sliding toward Creative makes it more varied and exploratory.

### Advanced Mode

For more control, switch to Advanced mode to set parameters directly:

- **Max Tokens** — The maximum length of the agent's response. Default is 8,192. Range: 1 to 1,000,000.
- **Temperature** — Controls randomness. Lower values (closer to 0) make responses more focused. Higher values (up to 2.0) make them more creative. Default is 0.7.
- **Top P** — Controls diversity of word choices. Lower values make the agent more predictable. Default is 0.7. Range: 0.0 to 1.0.
- **Top K** — Limits the number of word choices the model considers at each step. Default is 50. Range: 1 to 100.

### Enhanced Reasoning

You can toggle **Enhanced Reasoning** to switch the agent from the standard model (Haiku) to a more capable model (Sonnet). This is useful for agents that need to handle complex tasks, nuanced instructions, or detailed analysis.

## Attaching Tools and Instructions

When creating or editing an agent, you can attach tools and instructions using the multi-select fields on the form. Tools define what the agent can do, and instructions define how it should behave.

You can attach multiple tools and multiple instructions to a single agent. The same tool or instruction can be reused across different agents.

## Managing Agents

All your agents appear in the left sidebar of the Create page. From there you can:

- **Select** an agent to view and edit its configuration.
- **Rename** an agent by clicking the menu icon and selecting Rename.
- **Delete** an agent by clicking the menu icon and selecting Delete. You will be asked to confirm before deletion.
- **Search** for agents using the search bar at the top of the page.

## Tags

You can add tags to your agents for organization. Tags are freeform text labels that help you categorize and find agents later.
