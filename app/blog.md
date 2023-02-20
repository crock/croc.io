---
layout: layouts/default.liquid
title: "Blog | Croc Studios"
description: "A one-man software development and design studio based in the US. We build web and mobile applications for people and businesses."
pagination:
    data: collections.post
    size: 8
    alias: post
---

{% include PostGrid, posts: pagination.items %}