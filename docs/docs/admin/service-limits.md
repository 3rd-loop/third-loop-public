---
sidebar_position: 3
---

# Service Limits

The Service Limits page lets you configure token and storage quotas at the organization level. These settings control how much your organization can consume overall and what defaults new users receive.

## Organization Limits

These apply to your entire organization:

- **Weekly Token Limit** — The maximum number of tokens your organization can consume over a 7-day rolling window.
- **Organization Storage Limit** — The total storage quota for all collections across the organization, displayed in GB.

## Default User Limits

When a new user is created, they automatically receive these limits:

- **Default 4-Hour Token Limit** — The base token budget each new user gets per 4-hour window.
- **Default Surplus Token Limit** — Additional tokens available beyond the base limit for new users.
- **Default Storage Limit** — The default storage quota for each new user's collections, displayed in GB.

These defaults only apply to newly created users. Existing users keep their current limits unless you change them individually from their [user detail page](./user-management).

## Editing Limits

1. Go to the **Service Limits** page.
2. If your account manages multiple organizations, select the organization from the dropdown.
3. Click **Edit** on the section you want to change.
4. Update the values.
5. Click **Save**.
6. Confirm the change in the dialog.

A confirmation is required because organization-level changes can impact all users. The last updated timestamp is displayed for reference.

## How Limits Work

- **Token limits** are measured in tokens (the units AI models use to process text). The 4-hour window is a rolling period — once the window passes, the budget resets.
- **Surplus tokens** provide a buffer beyond the base limit. This helps handle occasional spikes without immediately blocking users.
- **Storage limits** are measured in GB and apply to the total size of files stored in collections.

When a user approaches or exceeds their limits, they will see warnings in Clove. If limits are reached, usage is restricted until the window resets or an admin increases the limit.
