---
sidebar_position: 2
---

# User Management

The Manage Users page lets you search for, create, edit, and manage user accounts across your organization.

## Finding Users

Use the search bar at the top of the page to find users by ID, username, email, or name. Results appear as you type and show each user's display name, username, and ID.

## Creating a User

1. Click **Create** on the Manage Users page.
2. Fill in the required fields:
   - **Email** — Must be a valid email address.
   - **First Name**
   - **Last Name**
3. Click **Create**.

The new user will be created with an active status and your organization's default token and storage limits.

## Editing a User

Click on any user in the search results to open their detail page. From there you can edit:

- **First Name**
- **Last Name**
- **Preferred Name** — How Clove addresses the user.
- **Email**

The detail page also shows read-only information like User ID, Join Date, Roles, and Last Updated.

## User Status

Each user has one of these statuses:

- **Active** (green) — The user can log in and use Clove normally.
- **Paused** (gray) — The account is deactivated. The user cannot log in but their data is preserved.
- **Deleted** — The account has been soft-deleted and is hidden from normal views.

### Pausing a User

1. Open the user's detail page.
2. Click **Pause Account**.
3. Confirm in the dialog.

Pausing an account immediately prevents the user from logging in. Their data and configuration are preserved and the account can be reactivated at any time.

### Activating a Paused User

1. Open the paused user's detail page.
2. Click **Activate Account**.

The user will be able to log in again immediately.

### Deleting a User

1. Open the user's detail page.
2. Click **Delete Account**.
3. Type the user's username in the confirmation field to confirm.

Deletion is a soft-delete — the account is hidden from normal views but not permanently destroyed.

**Note:** If you perform any of these actions on your own account, you will see an additional warning about the consequences.

## Per-User Limits

Each user has configurable token and storage limits. These are managed from the user's detail page under the metrics section:

- **4-Hour Token Limit** — The maximum number of tokens the user can consume in a 4-hour window.
- **Surplus Token Limit** — Additional tokens available beyond the base limit.
- **Storage Limit** — The total storage quota for the user's collections, displayed in GB.

When a new user is created, they inherit the default limits set at the organization level (see [Service Limits](./service-limits)). You can override these for individual users as needed.

Click **Edit** to modify the limits, then **Save** to apply. The last updated timestamp is shown for reference.
