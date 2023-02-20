---
title: PermissionsEx for Dummies
publishDate: 20151225
layout: layouts/post.liquid
tags:
    - post
---

## Setting up permissions for a Minecraft server

Running a Minecraft server is a great experience! It is an opportunity to work on one’s leadership skills, while making money on the side. However, Minecraft servers are not all fun and games. They require more work than one might think. The heart of any Minecraft server is the permissions. Without properly configured permissions, chaos would overtake any Minecraft server. In my opinion, setting up and configuring permissions is the best part of setting up a server because it allows the owner to be creative with how he wants his server to run. There are a few different options when it comes to setting up permissions for a Minecraft server and everyone is entitled to his personal preference. Some people like Essentials Group Manager, others swear by zPermissions, or bPermissions, but the one I like is good ol’ PEX (PermissionsEx) which is the focus of this tutorial.

### Helpful Tools & Reference links

To edit the configuration and permissions files, you can use the built-in Multicraft file editor used by most Minecraft server hosts or any basic text editor, preferably one with syntax highlighting. I recommend [Visual Studio Code](https://code.visualstudio.com) since it is free and cross-platform.

**PermissionsEx Official Wiki**
[https://github.com/PEXPlugins/PermissionsEx/wiki](https://github.com/PEXPlugins/PermissionsEx/wiki)

**Essentials Commands + Permissions Reference**
[https://essinfo.xeya.me/permissions.html](https://essinfo.xeya.me/permissions.html)

**Minecraft Color Codes**
[https://minecraft.gamepedia.com/Formatting_codes](https://minecraft.gamepedia.com/Formatting_codes)

### Configuration File

Upon first installing a fresh copy of PermissionsEx, you will want to make a quick configuration change to the following file:

```
SERVER_ROOT/plugins/PermissionsEx/config.yml
```

On line 4, change the Boolean (true/false) value next to `allowOPs` from ` false` to `true` .

### Setting up ranks

There are two ways to setup ranks via PermissionsEx—editing the permissions.yml (YOUR_SERVER/plugins/PermissionsEx/permissions.yml) directly or via in-game commands. I highly recommend all beginners setup all their ranks via in-game commands because it prevents common formatting errors, which is the number one mistake I see people make when editing the file directly. Also, simple typing /pex in-game will list every available PermissionsEx command along with a brief description of how to use it. This tutorial will cover how to create ranks and add permissions using in-game commands only. The first thing I do when starting to setup permissions from scratch is to create all the permission groups (groups are basically ranks) that I want on the server. Try to create them in order to keep the file neat and more readable, but it is not crucial what order you make them in. Also, it is very helpful to stick with the same naming convention for groups to make life easier later. For instance, if you make a group called “member” with all lowercase, make sure all the other group names are all lowercase too for consistency. Keep in mind, the name of the group does not have to be the same as the prefix (the part shown in chat before the player’s username). Personally, I name each group after the prefix, but in all lowercase because I never have to remember whether I called a group “member” or “Member”, both of which appear as two different groups to the server under most circumstances.

#### To create a group:

```bash
/pex group {nameOfGroup} create
```

#### To delete a group:

```bash
/pex group {nameOfGroup} delete
```

Next, I setup the rank order. The rank order defines the actual hierarchy (order) of the ranks. It is important to note that the higher the number, the lower the rank. As a good rule of thumb, keep the absolute highest rank on your server as 1. Also, do not make the second highest rank 2, the third highest rank 3, etc. Instead, space them out by at least increments of 10 so you can add ranks in between two ranks in the future without having to re-setup the rank order completely. For example, on my personal server, my highest rank Owner is rank 1 and my default rank, Astro, is 1000. I have 10 ranks total, so each is 100 apart.

#### To set rank order:

```bash
/pex group {nameOfGroup} set rank {rank number}
```

Now is the time to talk about group inheritance. This is the trickiest part for noobs to understand when first learning how to setup permissions. Often times, I see people skip setting up inheritance all together due to frustration or lack of understanding. However, inheritance saves so much time in the long run, so it is worth spending a few extra minutes setting it up. Basically, inheritance is like a reverse parent child relationship. Using moderator and admin as an example, if we give moderator a bunch of permissions we do not have to give admin those same permissions because admin is higher than moderator. Moderator is the parent of Admin.

#### To set inheritance:

```bash
/pex group {nameOfGroup} parents set {nameOfParentGroup}
```

The fourth step is the fun part—setting up those fancy prefixes and suffixes. PermissionsEx has built-in support for Essentials Color Codes. If you are not familiar with these, this site has a handy reference. Remember, in order to get the prefixes to show up in chat, you need a chat plugin such as Essentials Chat or Mineverse Chat among others. If you want spaces in the prefix or suffix, surround it with quotation marks.

#### To add an optional prefix:

```bash
/pex group {nameOfGroup} set prefix {prefix}
```

#### To add an optional suffix:

```bash
/pex group {nameOfGroup} set suffix {suffix}
```

Last but not least, you are now ready for the most tedious part—adding permissions. I’m assuming many of you will be using the full Essentials suite (minus Group Manager), so you can find a full list of every command and its associated permission node here. For other plugins, they typically list all the permissions on the download page or at the very least a link to the plugin’s wiki. For Owner rank, you only need to add one permission—a single asterisk or \* symbol. That is simply a variable which means every permission available.

#### To add a permission to a group:

```bash
/pex group {nameOfGroup} add {permission node}
```

#### To remove a permission from a group:

```bash
/pex group {nameOfGroup} remove {permission node}
```

#### To add a permission to a specific user:

```bash
/pex user {username} add {permission node}
```

#### To remove a permission from a specific user:

```bash
/pex user {username} remove {permission node}
```

### Important!

In order for the changes to take effect after adding or removing permissions, you have to run the following command…

```bash
/pex reload
```

Congratulations are making it through our exhaustive guide on managing server permissions with PermissionsEx. Now take your newly obtained knowledge and share it with others or just link them to this tutorial!

Originally posted as a thread on [SpigotMC](https://www.spigotmc.org/threads/permissionsex-for-dummies.111072) and [MC-Market](https://www.mc-market.org/wiki/permissionsex-for-dummies/) forums.
