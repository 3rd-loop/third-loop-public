---
sidebar_position: 4
---

# Instructions

Instructions shape how your agent behaves. They set the rules, tone, and priorities that guide the agent's responses. Like tools, instructions are reusable across multiple agents.

## Creating an Instruction Set

1. Go to the **Create** page and switch to the **Instructions** tab.
2. Click the **New** button and select **Instruction**.
3. Fill in the following fields:
   - **Name** — A descriptive name for the instruction set.
   - **Description** — An overview of what these instructions cover.
   - **Priority** — How important this instruction set is overall. Options are Low, Standard, High, or Critical.
   - **Type** — The category of instruction. Options include Core, Section, Guideline, Note, and Format.
4. Add **guidelines** (see below).
5. Optionally add **tags**.
6. Click **Create**.

## Guidelines

Each instruction set contains one or more guidelines. Guidelines are the individual rules or directives within the set. Each guideline has:

- **Name** — A short label for the guideline.
- **Text** — The actual instruction text.
- **Priority** — The importance level of this specific guideline (Low, Standard, High, or Critical).

For example, a "Customer Support Tone" instruction set might contain guidelines like:
- "Always greet the customer by name" (High priority)
- "Use a friendly, professional tone" (Critical priority)
- "Avoid technical jargon unless the customer uses it first" (Standard priority)

### Per-Agent Guideline Exclusions

When you attach an instruction set to an agent, you can exclude specific guidelines from that agent. This lets you share instruction sets across agents while tailoring which rules apply to each one.

## Priority Levels

Priority helps the agent decide what to prioritize when guidelines might conflict:

- **Critical** — Must always be followed.
- **High** — Should be followed in most cases.
- **Standard** — Follow when there is no conflict with higher-priority guidelines.
- **Low** — Nice to have, but can be deprioritized.

## Instruction Types

Types help you organize instructions by their role:

- **Core** — Foundational instructions that define the agent's identity or purpose.
- **Section** — Instructions scoped to a specific topic or area.
- **Guideline** — General rules for behavior.
- **Note** — Additional context or reminders.
- **Format** — Rules about how the agent should format its responses.

## Managing Instructions

Your instruction sets appear in the left sidebar when the Instructions tab is selected. You can:

- **Select** an instruction set to view and edit it.
- **Rename** it from the menu icon.
- **Delete** it from the menu icon with confirmation.
- **Search** for instruction sets using the search bar.
