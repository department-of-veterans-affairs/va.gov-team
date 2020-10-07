# URL discovery notes

**Goal**: Learn more about how other sites handle having a logged-in and logged-out version of the homepage at the same URL

We scoured the web to find out how other major sites handle changing the home page contents after logging in. There wasn't a whole lot to learn from our investigations:

- Most sites redirect from the home page after logging in. And if you go back to the home page after logging in, you are again prompted to log in.
- Instagram and Facebook were two examples we found that appear to use React to entirely change the home page contents after logging in. But there isn't much content to speak of on the logged out version.
- Amazon is an example of a major site that entirely changes the home page content when logged in (in other words, the stuff you saw on the home page is gone once you sign in). It's hard to know what tech they use to change the page contents, but my (Erik's) _guess_ is that it's done server side.
