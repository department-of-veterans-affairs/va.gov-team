## Event dictionary for homepage metrics

See also: 
- [#11324 Implement GA analytics for baselining current homepage](https://app.zenhub.com/workspaces/vagov-cms-team-5c0e7b864b5806bc2bfc2087/issues/gh/department-of-veterans-affairs/va.gov-cms/11324)
- [#11467 Implement Google Analytics for new homepage ](https://app.zenhub.com/workspace/o/department-of-veterans-affairs/va.gov-cms/issues/11467)

What do you want to measure?	|	Version | Component/area	|	Event	|	Example
---	|	---	|	---	|	--- |	---
How often do users opt-in using the modal? | Redesigned | Modal | <ul><li> event: new-homepage-modal-click <li> modal-primaryButton-text: try the new homepage </li></ul>
How often do users decline the new homepage using the modal? | Redesigned | Modal | <ul><li> event: new-homepage-modal-click <li>  modal-secondary-link: go to current homepage </li></ul>
How often do users decline the new homepage by closing the  modal?  | Redesigned | Modal | <ul><li> event: new-homepage-modal-close
How often do users click on a link from the mega menu?	|	Universal | Mega menu	|	<ul><li>  eventLabel: "nav-header-link"	|	Header - Disability - Check your claim or appear status
How often do users click on a link from the footer?	|	Universal| Footer	|	<ul><li> hitType: event, <li> eventCategory: Vetsgov <li>  eventAction: nav-footer-programs </li></ul>  |	Navigation - Footer - Pathfinder: the front door for engaging with VA
How often do users click on a link from the header?	|Universal|	Header	|	<ul><li>nav-header-action	|	|
How often do users click on a specific benefit hub?	|	Universal |Benefit hubs	|	<ul><li> event: nav-linkslist	|	Benefit hub - Service member benefits|
How often do users click on a link in Link in top 4 box on legacy page?	|	Legacy | Top 4 boxes |	<ul><li> Navigation - Zone One - Task/Link - Benefit name	|	Navigation - Zone One - ->/health-care/refill-track-prescriptions - Refill and track your prescriptions - Health care
How often do users click on a link from the Banner alert in the footer?	|	Universal | Footer alert 	|	<ul><li> Footer alert - name	|	Footer alert - Learn what the PACT ACT means for your VA benefits
How often do users click on the header component to sign in?	|	Universal | Sign in - header	|	<ul><li> eventCategory: Sign-on <li> eventAction: Login - localhost, <li> eventLabel: login-link-clicked-header |	
How often do users click through on in-page promo?  	|	Legacy |in-page promos   	|	<li> homepage-promo-action 	|	
How often do users click through on in-page CTA?  	|		Legacy |in-page CTA  	|	<li> homepage-cta-action	|	Homepage CTA - Crisis Line
How often do users click on the in-page component to create an account?	|	Redesigned | Create an account |	<li> event: homepage-create-account <li> action: Homepage Create Account CTA|	
How often do users click through to read more about the benefit promo	|	Redesigned |Benefit promo |	<li> event: homepage-benefit-link-click <li> action: Homepage benefit promo - Learn what the PACT Act means for you	|	
What searches are performed on the homepage using the search field in the header?	|	Universal |Search from header	|	<li> eventCategory: Search <li> eventAction: Search Results Returned ~ Type Ahead Enabled ~ All VA.gov ~ test header search <li> eventLabel: view_search_results	|	
What searches are performed on the homepage using the in-page search field?	|Redesigned |	Search from body of page|	<li> eventCategory: Search <li>eventAction: Search Results Returned ~ Type Ahead Disabled ~ All VA.gov ~ test in page search <li>eventLabel: view_search_results	|	
How often do users click on a specific link from the list of other search tools?	|	Redesigned |Other search tools |	<li> homepage-search-tools-click	|	Other search tools - Find a VA facility
How often do users click on a specific link from the [top task] list?	|	Redesigned |[Top task list] |		|	Popular on VA.gov - Check your claim or appeal status
How often do users click through on the title of the promo?	|	Redesigned |News promo |<li> event: homepage-news-promo-title-click	|	Homepage News Promo - Pathfinder: The front door for engaging with VA
How often do users click through to read the full article?	|	Redesigned |News promo 	|	<li>event: homepage-news-promo-click	|	Homepage news promo - Pathfinder: The front door for engaging with VA - CTA
How often do users click through to "More VA news"?	|	Redesigned |News promo 	|	<li>event: homepage-news-promo-more-news-click <li> action: Homepage news promo - More VA News	|	
How often do users submit an email to sign up?	|	Redesigned|  Email	|	<li> event:homepage-email-sign-up	|	Homepage email sign up


