---
sidebar_position: 5
---

# Single Sign-On (SSO)

The External Auth page lets you configure SAML-based Single Sign-On so your users can log in with your organization's identity provider (IdP) — such as Okta, Microsoft Entra ID, or Google Cloud Identity.

## Overview

When SSO is enabled, users authenticate through your identity provider instead of using a separate password for Third Loop. This gives you centralized control over access and simplifies the login experience for your team.

## Setting Up SSO

### Step 1: Get Your Service Provider Values

The External Auth page displays your Service Provider (SP) configuration values. You will need to enter these into your identity provider:

- **Entity ID** — The unique identifier for Third Loop as a service provider.
- **ACS URL** — The Assertion Consumer Service URL where your IdP sends authentication responses.
- **Logout URL** — The URL for handling logout requests.

Each value has a copy button for convenience.

### Step 2: Provide Your IdP Metadata

You can provide your identity provider's metadata in one of two ways:

- **Metadata URL** — Enter the URL where your IdP publishes its metadata. This is the preferred option because it stays up to date automatically.
- **Metadata File** — Upload or paste the metadata XML directly. Use this if your IdP does not publish a metadata URL.

After entering the metadata, Third Loop validates it and shows:

- Whether the metadata is valid.
- Your IdP's Entity ID and SSO URL.
- Certificate expiration date.
- Any warnings or errors.

### Step 3: Configure Attribute Mapping

SAML attribute mapping tells Third Loop how to read user information from your IdP's assertions. You will see a list of attributes (some required, some optional) with their expected claim URLs.

Default mappings are provided, but you can customize them to match how your IdP sends attributes.

### Step 4: Advanced Settings (Optional)

You can optionally configure:

- **Allow IdP-Initiated SSO** — Let users start the login flow from your identity provider's portal rather than from Third Loop.
- **Require Encrypted Responses** — Require your IdP to encrypt SAML responses for added security.
- **Sign SAML Requests** — Have Third Loop sign its authentication requests to your IdP.
- **Enable IdP Signout** — Support logout initiated from your identity provider (Single Logout / SLO).

### Step 5: Enable SSO

Once your metadata is validated and attribute mapping is configured, click **Configure SSO** to enable it. Users will then be able to log in through your identity provider.

## Updating SSO

After SSO is enabled, you can return to the External Auth page to:

- Update the metadata URL or file.
- Change attribute mappings.
- Modify advanced settings.
- View the current SSO status and provider name.

Click **Update Configuration** to save changes.

## Disabling SSO

If you need to turn off SSO, click **Disable SSO** on the External Auth page. You will be asked to confirm. Once disabled, users will need to use password-based authentication instead.

## Certificates

Third Loop manages signing and encryption certificates used for SAML communication. These are available through the admin API if your identity provider requires them during setup.
