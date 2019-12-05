## How to collaborate on documents

Most document updates and revisions are pretty easy. Make your change in the `master` branch (or upload your document) and commit. This simple way should be used for documents that are being added/edited, but don't need too much collaboration or there isn't anyone else likely to edit it before adding it to the repo (and if it turns out there is, someone can always change it later).

For documents that require multiple people to contribute ideas, feedback, and edits; the following is the best approach:

- Create a branch for the document(s) to add/edit
- Commit initial draft(s) of document(s)
- Open a pull request for the branch
- In the pull request, tag or assign to people that need to collaborate (This creates a space for folks to discuss and submit changes)
- After the collaborating group agrees on the document, merge the pull request

An example of when this might be needed is: editing this document, where it explains how the team operates and it's good to get feedback/buy-in before changing the team's existing practice.

For documents that require collaboration, Markdown is the desired format. It's really simple to learn, GitHub renders it cleanly, and it's super easy to track/contribute changes line-by-line changes.

['Markdown Basics'](https://help.github.com/articles/markdown-basics/) is a great place to start, but here's a quick nutshell version:

```
# Heading 1

## Heading 2

### Heading 3 (and so on up to 6...)

Here is some _italic_ text.

Here is some **bold** text.

Here are

- bullet
- points
    - and sub
    - bullets

Here are

1. numbered
1. points
1. (mark everything with "1.", it'll auto number)

> Quoted text here

This is what `code` looks like.

Here is a [link to Google](http://google.com)

Look at the ![picture](path/to/picture.png)
```

Markdown can easily be exported to HTML, DOC, and PDF. There are a bunch of converters available online or apps like Mou (Mac) or Markdown Pad (Windows). Atom is an editor too that has syntax highlighting.