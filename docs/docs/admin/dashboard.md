---
sidebar_position: 4
---

# Dashboard

The Dashboard gives you a real-time view of how your organization is consuming tokens and resources. It includes visual charts and a detailed event log.

## Surplus Fluctuation Chart

This chart shows how your organization's surplus token availability changes over time. It helps you understand whether users are consistently hitting their base limits and dipping into surplus.

- **Default view:** Last 7 days.
- **Filtering:** Adjust the date range and resource type (tokens, storage, OCR).

## Consumption Chart

This chart shows token consumption trends across your organization over time.

- **Default view:** Last 7 days.
- **Filtering:** Adjust the date range and resource type.
- **Per-user view:** When viewing a specific user's detail page, this chart scopes to that user's consumption.

## Consumption Events Table

Below the charts is a detailed log of every consumption event. Each row represents a single usage event and includes:

- **Created** — When the event occurred.
- **User ID** — Which user triggered the event.
- **Amount** — How much was consumed (formatted by resource type).
- **Resource Type** — Tokens, storage, or OCR.
- **Pool Category** — Whether the consumption came from the allocated budget, surplus, or a hybrid.
- **I/O Type** — Whether the event was input (sending data to the model) or output (receiving a response).
- **Request ID** — The internal request identifier.
- **Endpoint** — Which API endpoint was called.

### Filtering the Table

You can filter the events table by:

- **Date range** — Narrow to a specific time period.
- **User ID** — Filter to specific users (multi-select).
- **Resource type** — Tokens, storage, or OCR.
- **Pool category** — Allocated, surplus, or hybrid.
- **I/O type** — Input or output.
- **Amount range** — Set minimum and maximum thresholds.

The table supports server-side pagination (25 events per page) and sortable columns. By default it sorts by creation date, newest first.

## Use Cases

- **Monitoring usage spikes** — Spot users or time periods with unusually high consumption.
- **Capacity planning** — Understand trends to decide whether to adjust organization or user limits.
- **Cost tracking** — See exactly where tokens are being spent and by whom.
- **Troubleshooting** — Investigate specific requests using the request ID and endpoint fields.
