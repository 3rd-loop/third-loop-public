---
sidebar_position: 9
---

# API Keys

API keys allow you to authenticate programmatic access to the Clove API without requiring interactive login. You can manage your keys from **Settings > API Keys**.

## Key Limits

You can have a maximum of **2 active API keys** at any time. The settings page shows your current count (e.g., "1 / 2 active keys"). You must disable or delete an existing key before creating a new one if you are at the limit.

## Creating an API Key

1. Go to **Settings > API Keys**.
2. Click **Create API Key**.
3. Enter a descriptive name for the key (e.g., "CI Pipeline", "Development").
4. Select an expiration period:
   - 30 days
   - 60 days
   - 90 days (default)
   - 180 days
   - 365 days
5. Click **Create**.

After creation, you will see both the **API Key ID** and the **Secret Key**. Copy buttons are provided for each.

:::warning
The secret key is only displayed once at creation time. Copy it immediately and store it in a secure location. You will not be able to view it again.
:::

## Managing API Keys

Your keys are displayed as cards showing:

- **Name** — The label you gave the key.
- **API Key ID** — The unique identifier (always visible).
- **Status** — Current state of the key.
- **Created date** — When the key was generated.
- **Expires date** — When the key will automatically expire.
- **Last used** — When the key was last used for authentication, or "Never used".

### Key Statuses

| Status          | Meaning                                                                      |
| --------------- | ---------------------------------------------------------------------------- |
| **Active**      | The key is valid and can be used for authentication.                         |
| **Suspended**   | The key has been manually disabled and cannot authenticate until re-enabled. |
| **Expired**     | The key has passed its expiration date and can no longer be used.            |
| **Compromised** | The key has been flagged as compromised and is permanently disabled.         |

### Actions

Click the menu icon on any key card to access available actions. The actions depend on the key's current status:

- **Active keys** — You can **Disable** or **Delete** them.
- **Suspended keys** — You can **Enable** or **Delete** them.
- **Expired or Compromised keys** — You can only **Delete** them.

### Disabling a Key

Disabling a key temporarily suspends it. The key still exists and can be re-enabled later. This is useful if you suspect a key may be compromised but want to investigate before permanently deleting it.

### Enabling a Key

Re-enabling a suspended key restores it to active status so it can authenticate again.

### Deleting a Key

Deleting a key permanently removes it. This action cannot be undone. You will be asked to confirm before the key is deleted.

## Using Your API Key with Claude Code

You can use your Clove API key to connect [Claude Code](https://docs.anthropic.com/en/docs/claude-code) to your organization's Third Loop instance. This routes all Claude Code requests through Clove, so your organization's usage policies and audit logging apply.

1. Create an API key in **Settings > API Keys** and copy the API Key ID and Secret Key.

2. Open a terminal and set the following environment variables:

```bash
export ANTHROPIC_BASE_URL="https://your-tenant.thirdloop.ai"
export ANTHROPIC_API_KEY="<api_key_id>;<api_secret_key>;"
```

Replace `your-tenant` with your organization's Third Loop subdomain, and fill in your actual key ID and secret key.

3. Run Claude Code:

```bash
claude
```

That's it — Claude Code will now use your Clove instance.

### Why Use Claude Code Through Clove?

Running Claude Code through your organization's Third Loop instance instead of directly through Anthropic gives you several advantages:

- **Privacy** — Your prompts and code stay within your organization's managed environment. Third Loop does not use your data for model training, so sensitive code and proprietary information remain private.
- **Cost control** — Usage is tracked and managed through your organization's Third Loop account. Administrators can monitor token consumption across the team from a single dashboard rather than managing individual Anthropic API subscriptions.
- **Access management** — API keys are scoped to your organization and can be disabled or deleted at any time. If someone leaves the team or a key is compromised, access can be revoked immediately without affecting other users.
- **Audit logging** — All requests are logged through your Third Loop instance, giving your organization visibility into how AI tools are being used across the team.
- **Consistency** — Everyone on your team connects through the same endpoint with the same policies, ensuring a uniform experience and making it easier to enforce usage guidelines.

:::tip
To make this persistent across terminal sessions, add the `export` lines to your shell profile (`~/.bashrc`, `~/.zshrc`, etc.).
:::

## Best Practices

- **Name keys descriptively** so you can identify their purpose later (e.g., "Production Backend", "Local Development").
- **Rotate keys regularly** — Use shorter expiration periods for sensitive environments.
- **Disable before deleting** — If you suspect a key is compromised, disable it first while you investigate.
- **Never share secret keys** in code repositories, chat messages, or documentation.
