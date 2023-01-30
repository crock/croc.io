---
title: Dropfilter
publishDate: 20230125
type: project
---

The first iteration of Dropfilter was in the form of an open-source [Python-based command-line program](https://github.com/checker/cli).

The next iteration was a Discord bot for the Domaincord server. It was written in Node.js and had traditional CLI style arguments and flags to modify the command. This initial version only had one flag, `--raw`, which you passed a full JSON object to and it would return the result of the filter along with upload the plain text drop list as an attachment within Discord.

Sadly, that version of the bot was so convoluted and confusing for the many non-technical users in Domaincord that I had to build a simple web app specifically for generating the Discord bot command that you paste into Discord chat.

The [current version of Dropfilter](https://dropfilter.app) is a full-fledged React-based web app that allows you to easily configure the tool through various filter controls and dyanmically filters the results as you make changes to the filters. This version is also open-source and available on [GitHub](https://github.com/crock/dropfilter)
