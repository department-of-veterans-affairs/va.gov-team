---- 


# We've moved our docs!

### This document is no longer maintained.

### Please visit the [Platform website](https://depo-platform-documentation.scrollhelp.site/) for the latest information or contact the Platform Support Team via [#vfs-platform-support](https://dsva.slack.com/archives/CBU0KDSB1).


----
# Developer content

- [Code in text](#code-in-text)
- [Code samples](#code-samples)
- [Documenting command-line syntax](#documenting-command-line-syntax)

## Code in text

**Key point:** Use code font for code that appears in text.

In your documentation, use code font to mark up most things that have anything to do with code. 

### Some specific items to put in code font

The following list includes items that should be in code font, but it's not an exhaustive list.
- Attribute names and values
- Class names
- Command-line utility names
- Defined (constant) values for an element or attribute
- Enum (enumerator) names
- Environment variable names
- Element names (XML and HTML). Place angle brackets (<>) around the element name; you may have to escape the angle brackets to make them appear in the document
- Filenames, filename extensions (if used), and paths
- Language keywords
- Method and function names
- Namespace aliases
- Placeholder variables
- Query parameter names and values

Generally, don't put quotation marks around code unless the quotation marks are part of the code.

### Items to put in ordinary (non-code) font

The following list includes items that should not be in code font, but it's not an exhaustive list.

- Email addresses.
- Headings (including table headings). For clarity, where possible, add a noun to the code-related term in the heading: "Calling the projects.roles.create() method"; "Setting the parent parameter".
- URLs. 

### Placeholder variables

Identify placeholder variables by using uppercase characters with underscore delimiters. Don't include possessive pronouns in placeholders.

```
PLACEHOLDER_VARIABLE
```

| Recommended     | Not recommended   |
| :-------------  | :---------------- |
|  https://developers.google.com/API_NAME     | https://developers.google.com/YOUR_API_NAME     |
|  https://developers.google.com/METHOD_NAME  | https://developers.google.com/MY_METHOD_NAME    |

### Explaining placeholders

When you use a placeholder in text or code, include an explanation for the placeholder the first time you use it. If there are many steps and other placeholders after the first use of that placeholder, it's OK to explain it again.

In procedures, use the following order:
1. Tell the user what they're doing.
1. List the command.
1. Explain the placeholder.
1. Explain the command in more detail if necessary.
1. List any output if necessary.
1. Explain any output if necessary.

**Example**
1. Mock an API response.
```
yarn mock-api --responses PATH_TO_RESPONSES_FILE
```
Replace `PATH_TO_RESPONSES_FILE` with the file path to the `responses.js` file.

## Code samples

**Key point:** Use standard code formatting for code samples.

These are the basic guidelines for formatting code samples:
- Don't use tabs to indent code; use spaces only.
- Indent by 2 spaces per indentation level.
- Wrap lines at 80 characters.

### Introductions

In most cases, precede a code sample with an introductory sentence or paragraph. 

| Recommended (ending with a period)     | Not recommended (ending with a colon)   |
| :-------------  | :---------------- |
|  The following code sample shows how to use the get method. For information on other methods, see [link]. [sample] | The following code sample shows how to use the get method. For information on other methods, see [link]: [sample] |

## Documenting command-line syntax

**Key point:** Recommendations for documenting command-line tools.

### Placeholder variables

Identify placeholder variables by using uppercase characters with underscore delimiters.

```
yarn test:unit src/applications/PATH_TO_TEST_FILE/TEST_FILE.unit.spec.js
```

### Command-line syntax

Here's how to document command-line commands and their arguments.

#### Command prompt

If your command-line instructions show multiple lines of input, then start each line of input with the `$` prompt symbol.

Don't show the current directory path before the prompt, even if part of the instruction includes changing directories. However, if the overall context of the command interface changes — such as from the local machine to a remote machine — then add an additional prompt indicator, as appropriate, for the new context.

1. Enter the following code into the terminal.
```
$ curl -v --proxy socks5h://127.0.0.1:2001 sentry.vfs.va.gov
```

The following output appears:
```
*   Trying 127.0.0.1...
* TCP_NODELAY set
* SOCKS5 communication to sentry.vfs.va.gov:80
* SOCKS5 request granted.
* Connected to 127.0.0.1 (127.0.0.1) port 2001 (#0)
> GET / HTTP/1.1
> Host: sentry.vfs.va.gov
> User-Agent: curl/7.64.1
> Accept: */*
>
< HTTP/1.1 302 FOUND
< Content-Language: en
< Content-Type: text/html; charset=utf-8
< Location: http://sentry.vfs.va.gov/auth/login/
< Set-Cookie: sentrysid="gAJ9cQFVBV9uZXh0cQJYAQAAAC9zLg:1jgVjX:3Cz0QiIh8V1dJ3eX9MIgFW1LR3w"; expires=Wed, 17-Jun-2020 15:55:15 GMT; httponly; Max-Age=1209600; Path=/
< Vary: Accept-Language, Cookie
< X-Content-Type-Options: nosniff
< X-Frame-Options: deny
< X-Robots-Tag: noindex, nofollow
< X-XSS-Protection: 1; mode=block
< Content-Length: 0
< Connection: keep-alive
<
* Connection #0 to host 127.0.0.1 left intact
* Closing connection 0
```

If your command-line instructions include a combination of input and output lines, we recommend using separate code blocks for input and output.

```
$ cat ~/.ssh/my-ssh-key.pub
```

The terminal shows your public key in the following form:
```
ssh-rsa [KEY_VALUE] [USERNAME]
```

#### Required items (commands, arguments, etc.)
Use text without brackets or braces. Depending on the circumstances, this is likely to be in code font.

```
ssh-add -K ~/.ssh/id_rsa_vetsgov
```

In these examples, all words and arguments are required.

#### Optional arguments

Use square brackets around an optional argument.

If there's more than one optional argument, enclose each item in its own set of square brackets.

```
git log [OPTIONS] [REVISION_RANGE]
```

In this example, `OPTIONS` and `REVISION_RANGE` are optional.

#### Mutually exclusive arguments

Use braces (also known as curly braces) to indicate that the user must choose one—and only one—of the items inside the braces. Use vertical bars (also known as pipes) to separate the items. There can be more than two mutually exclusive choices, separated from each other by pipes.
 
```
{FILE1|FILE2}
```

In this example, choose either `FILE1` or `FILE2`.

#### Arguments that can repeat

Use an ellipsis (`...`) to indicate that the user can specify multiple values for the argument.

```
git log [OPTIONS] [REVISION_RANGE] [[--] PATH…​]
```

In this example, the user can specify multiple instances of the optional parameter `PATH`.

#### Output from commands

You don't have to show output for every command. Only add output if it adds value, for example, if the reader needs to copy a value from the output or if they need to verify a value in the output.

If you are showing output, use an introductory phrase to separate the command from the output.

- The output is similar to the following:
- The output is the following:
