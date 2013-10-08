# Fork
Really, go to the OpenGovFoundation fork first...

## Starting the server

Add this to your `bash_profile` or similar:

```sh
#simple server
alias server="python -m SimpleHTTPServer"
```

Then in your `stackedit` folder, just run `server`:

```sh
$ server
```

And visit `localhost:8000` in your browser.

<hr />

StackEdit
=========

StackEdit is a free, open-source Markdown editor based on PageDown, the Markdown library used by Stack Overflow and the other Stack Exchange sites.

> **NOTE:**
>
> - Documents are stored in the [browser's local storage][1], which means they are not shared between different browsers/computers. Furthermore, clearing your browser's data may delete all your local documents.
> - Full access to Dropbox or Google Drive is required to be able to import any document in StackEdit. Imported documents are downloaded in your browser and are not transmitted to a server.

### StackEdit can:
 
 - Manage multiple Markdown documents online or offline
 - Export your documents in Markdown or HTML and format it using a template
 - Synchronize your Markdown documents in the Cloud
 - Edit existing Markdown documents from Google Drive, Dropbox and your local hard drive
 - Post your Markdown document on Blogger/Blogspot, WordPress, Tumblr
 - Publish your Markdown document on GitHub, Gist, Google Drive, Dropbox or any SSH server
 - Share a link to a Markdown document that renders it in a nice viewer
 - Show statistics about your document
 - Convert HTML to Markdown

### Features:

 - Real-time HTML preview with Scroll Link feature to bind editor and preview scrollbars
 - Markdown Extra support and Prettify/Highlight.js syntax highlighting
 - LaTeX mathematical expressions using MathJax
 - WYSIWYG control buttons
 - Configurable layout
 - Theming support with multiple themes available
 - A la carte extensions
 - Offline editing
 - Online synchronization using Google Drive and Dropbox
 - One click publish on Blogger, Dropbox, Gist, GitHub, Google Drive, SSH server, Tumblr, WordPress

### Documentation:

 - [Welcome document][2]
 - [Developer guide][3]
 - [Theming guide][4]


> **NOTE:** This page has been written and published with [StackEdit][5].


  [1]: https://developer.mozilla.org/en-US/docs/Web/Guide/DOM/Storage#localStorage
  [2]: https://github.com/benweet/stackedit/blob/master/WELCOME.md#welcome-to-stackedit---welcome "Welcome document"
  [3]: https://github.com/benweet/stackedit/blob/master/doc/developer-guide.md#developer-guide "Developer guide"
  [4]: https://github.com/benweet/stackedit/blob/master/doc/theming.md#stackedit-theming-guide "Theming guide"
  [5]: http://benweet.github.io/stackedit/ "StackEdit"
