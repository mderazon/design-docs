# design-docs

> A repo for technical design documents

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## What is this ?

This repository is used for technical design reviews, inspired by [this blog post](https://caitiem.com/2020/03/29/design-docs-markdown-and-git/).

Why do design reviews here instead of Google Docs?

1. Visibility / Discoverability - Once you write the design review in Google Docs, it's usually left there, with minimal visibility for other people to find later. Here everyone can find and discover.
2. Comments / Approval - We can leverage Github's powerful PR review / commenting flow.
3. Versioning - We can use the powerful capabilities of Git to review previous versions of the design, and how it changed over time.
4. Markdown - We can leverage Markdown's easy and clean formatting. You can learn the basics [here](https://guides.github.com/features/mastering-markdown/) and [here](https://help.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax).
5. Templates - We can easily create templates for design documents.

## Guidelines

1. Always follow the [naming conventions](link-to-naming-conventions-doc) for filenames and folders.
2. Create a folder for the design document under the relevant `pi-*` folder. That folder will contain the markdown file and additionally any other resource you've included (pictures, graphs, etc...)
3. Open a PR and add the relevant stakeholders as reviewers so that they know about it.
4. **Do not follow** the same rules / processes for team Git branches / PR names like we have for regular development. They don't make sense here. You can create a PR directly to main branch.
5. Run Prettier on your markdown files, **before you commit them**. Otherwise, build will fail.
6. Always include the source to the diagram so it's easily editable by anyone later.
7. Use the [template](template.md).

## Diagrams and drawings

**Diagrams are very important**. They help convey your design much better than words and also help you create a better design.

### [Mermaid.js](https://mermaid-js.github.io/mermaid)

Use Mermaid and their [Live Editor](https://mermaid-js.github.io/mermaid-live-editor/) to create all kind of flow diagrams. Include the diagram image in your design markdown file and always include link to the source so it's editable.

### [Excalidraw](https://excalidraw.com)

Use Excalidraw for whiteboard sketching diagrams. Also in this case, embed the image and include the source for your diagram in the markdown file.
