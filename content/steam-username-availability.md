---
title: Programmatically checking Steam username availability
publishDate: 20180810
---

Sometimes you need to find an easy and reliable way to do something without resorting to using an official API for various reasons such as distributing an amateur-focused script or program.

Explaining how to obtain API keys is often too much of a hassle. Other times, the service might not provide a convenient endpoint for getting the information you need.

That’s when we can use our detective skills to build our own method as we will learn today. In this tutorial, I’ll show you step-by-step how to make a simple Python script to check whether or not a specific Steam ID is available.

Steam IDs are in the following format:

```
https://steamcommunity.com/id/[name]
```

The best method I found to do this is to make a HTTP GET request to the profile url seen above and parse the HTML response to check for the existence of a specific phrase. ~~As of the time of this writing, only error pages contain an H3 element, thus you can safely assume that the Steam ID is available for claiming if it exists. If it doesn’t exist, that means it found a profile with that ID, so it is not available to claim.~~

I have fully commented the source code in the Gist linked below to explain what each part does.

```python{numberLines:true}
import requests # http://docs.python-requests.org/en/master/
from bs4 import BeautifulSoup # https://www.crummy.com/software/BeautifulSoup/

def check(name):
    """
    Function to check the availability of a specific Steam ID.
    """
    session = requests.Session() # Initilzes a new session object from the requests module
    matches = [] # Creates an empty list to hold our match objects
    requestUrl = "https://steamcommunity.com/id/%s" % name # Creates a variable to hold our request url which should be the url to the Steam profile page

    response = session.request("GET", requestUrl) # Makes an HTTP request to the profile page using the session we initialized above

    if response.status_code is 200: # Checks if the request was successful before trying to parse the response on the next line
        soup = BeautifulSoup(response.content, "html.parser") # Initializes our HTML parser module of choice, BeautifulSoup4, with the passed in response content

        # Available
        match1 = soup.body.findAll(text='The specified profile could not be found.') # Searches the page for the specified text and adds it to a variable
        # Taken
        match2 = soup.body.findAll(text='This profile is private.') # Searches the page for the specified text and adds it to a variable
        match3 = soup.find('div', attrs={'class': 'profile_header'}) # Searches the page for an element with the specified class name and adds it to a variable

        matches = [match1, match2, match3] # Adds all 3 of the above match variables to the list we created earlier
        if matches is not []: # Checks if that list is empty and if it is not empty, it executes the code indented below
            if matches[0]:
                print(name + " - AVAILABLE")
                return True
            elif matches[1] or matches[2]:
                print(name + " - IN USE")
                return False
        else: # Fallback in case our list is empty, just say the name is not available.
            print(name + " - NOT AVAILABLE")
            return False
```

If you have any relevant questions at all, please leave a comment on this post with your question and I will be happy to answer them.

**Update 2018/08/10:** I have changed the method I’m using to check availability to check for a specific phrase rather than an H3 element.
