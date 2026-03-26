---
sidebar_position: 8
---

# Template Configurations

Document templates let you define how Clove formats generated documents. If your organization has specific styling requirements for reports, memos, or other outputs, you can create a template that Clove will follow when generating DOCX files.

Each user gets one document template. You can create, edit, and delete it from **Settings > Templates**.

## Creating a Template

There are two ways to create a template:

### Import from a DOCX File

The fastest way to set up a template is to import an existing Word document. Clove extracts the styling information automatically using AI.

1. Go to **Settings > Templates**.
2. Click **Create Template** (or you will be prompted if no template exists yet).
3. In the **Import from File** section, drag and drop a `.docx` file or click to browse.
4. Clove extracts the XML structure from the document and analyzes its styles.
5. Review the extracted style preview. A validation indicator shows whether the extracted schema is valid.
6. Give your template a name (required) and optional description.
7. Click **Create Template**.

File requirements:
- Format: `.docx` only
- Maximum size: 10 MB

### Manual Configuration

You can also configure template styles by hand:

1. Go to **Settings > Templates**.
2. Click **Create Template**.
3. Fill in a template name and optional description.
4. Use the configuration controls to set your styling:

| Setting | Options |
|---------|---------|
| **Body Font** | Arial, Georgia, Helvetica Neue, Times New Roman, Calibri, Verdana, Trebuchet MS, Courier New |
| **Body Font Size** | 10pt, 11pt, 12pt, 14pt, 16pt, 18pt, 20pt, 24pt |
| **Heading Font** | Same font options as body (applied to H1 and H2) |
| **Heading Color** | Any color via the color picker |
| **Body Text Alignment** | Left, Center, Right, Justified |

5. Click **Create Template**.

You can combine both approaches — import a file to get a starting point, then tweak the settings manually.

## Advanced Settings

Click **Show Advanced Settings** in the template form to access additional options:

- **Table Header Color** — Sets the background fill color for table header rows.
- **Bullet Character** — Choose the bullet style for lists: bullet, white bullet, square, or dash.

## Editing a Template

1. Go to **Settings > Templates**.
2. Your current template is displayed with its style configuration.
3. Click **Edit** to modify the template name, description, or any style settings.
4. Click **Save Changes** when done.

## Viewing Template Details

The template preview shows:

- Template name and type (DOCX)
- Description (if provided)
- A summary of style settings: body font, heading font, heading color, text alignment, bullet style, and table header color
- A collapsible **View Raw Template Data** section for advanced users who want to inspect the full JSON configuration

## Deleting a Template

1. Go to **Settings > Templates**.
2. Click **Delete** on your template.
3. Confirm the deletion. This action cannot be undone.

After deleting, Clove will use its default formatting for generated documents until you create a new template.

## Default Template Values

If you create a template without importing a file, Clove starts with these defaults:

| Setting | Default |
|---------|---------|
| Body Font | Arial, 12pt |
| Body Color | Black (#000000) |
| H1 | Arial, 16pt, Bold, #1F2937 |
| H2 | Arial, 14pt, Bold, #374151 |
| Text Alignment | Left |
| Paragraph Spacing | 160 after, 276 line spacing |
