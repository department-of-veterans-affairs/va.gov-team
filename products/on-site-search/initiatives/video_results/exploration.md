
##  A. Description
There is a VBA workgroup considering how to improve VA benefits educational opportunities for Veterans and families in a Post-COVID “high-tech and high touch” environment.Led by Leanne Welin to promote VA videos to users. Currently they are exploring the creation of a landing page from the main VA.gov site and we feel that adding videos to the search result pages will aid in their mission and improve the overall user experience by bringing contextuallly relevant content to users who search on va.gov


## B. Background 
In an effort to increase the number of Veterans viewing official videos posted by VA business lines, we propose the addition of a “Video” section/path on the initial landing page of the VA.gov website.
Image “Website1” shows the proposed location of the link and image “Website2” shows a proof of concept of our proposal. Once arriving to the video section, Veterans, dependents or other members of the public could click on one of the four categories to then quickly see the appropriate, official VA YouTube Channel. For example, clicking on “VA Healthcare” would bring the user to the VHA YouTube Channel.

1. VBA: https://www.youtube.com/user/vavetbenefits <br/>
2. VA Main: https://www.youtube.com/user/DeptVetAffairs<br/>
3. VHA*: https://www.youtube.com/user/VeteransHealthAdmin <br/>
4. NCC*: https://www.youtube.com/channel/UCL9c-s2Jgr_viIRccUeby1w/featured VA’s NCC Playlist: https://youtube.com/playlist?list=PL7897A1FCC5516DDE<br/>

(_*added to Search.gov by VFS Search & Discovery team_)

## YouTube Channel Information
 | YouTube Channel                                 | Subscribers | Total Videos | Joined YouTube Date | Total Views as of July 21 | Popular Topics |
|-------------------------------------------------|-------------|--------------|---------------------|---------------------------|----------------|
| [VBA: Veterans Benefits Administration  ](https://www.youtube.com/user/vavetbenefits)         |             | 1,666        |                     | 2,598,904 views           |                |
| [VHA: Veterans Health Administration](https://www.youtube.com/user/VeteransHealthAdmin)             | 80.6K       |              | Mar 13, 2008        | 47,055,529 views          |                |
| [NCC: National Cemetery Administration](https://www.youtube.com/channel/UCL9c-s2Jgr_viIRccUeby1w/featured)           | 107         |              | Mar 28, 2020        | 6,812 views               |                |
| [VA’s NCC Playlist ](https://youtube.com/playlist?list=PL7897A1FCC5516DDE)(part of the VA Main Channel) |             | 77           |                     | 27,841 views              |                |
| [VA Main: U.S. Dept. of Veterans Affairs](https://www.youtube.com/user/DeptVetAffairs)         | 55.9K       |              | Oct 15, 2009        | 11,404,755 views          |                |

## C. Video API
### Visual Example 
Nasa.gov (who is another Search.gov client) presents videos to users in the following way. 
<img width="741" alt="Screen Shot 2021-07-07 at 4 29 33 PM" src="https://user-images.githubusercontent.com/72393866/124824960-07b36e00-df41-11eb-85b6-e2c51cdba54b.png">

### Data that is returned with each "video result"
![Screen Shot 2021-07-08 at 2 15 57 PM](https://user-images.githubusercontent.com/72393866/124984269-ff256b00-e006-11eb-8418-ba8ad40eb59a.png)
 
 

# Exploration Findings

##  Q: How many users each month click on the youtube link in the footer?  <br/>
A: On average there are approximately 55,000 users each month [**Source:Google Analytics Report**](https://analytics.google.com/analytics/web/?authuser=1#/report/content-event-events/a50123418w177519031p176188361/explorer-table.plotKeys=%5B%5D&explorer-table.filter=youtube&_r.drilldown=analytics.eventCategory:Interactions/) 

![image](https://user-images.githubusercontent.com/72393866/128773284-726ed4d4-91d3-4679-818a-876d3aaa9ca3.png)



## Video Exploration

General Findings:
* One video result shown on "Everything" results does not always match first video result on "Videos" tab. 
* One video result not always showing on "Everything" results tab even when there are video results. 
* Some search terms pull up video results from random YouTube channels that we have not added on Search.gov's admin. 

Search term: "form"  
form-text.png
form-video.png  

Search term: "travel pay"  
travel-pay-text.png  
travel-pay-video.png  

Search term: "garden"  
garden-text.png  
garden-video.png 

## If you use the Videos API endpoint:
 - will retrieve all videos (that would be listed in the tab), not just the singular one we feature on the hosted results page. 
 - 
## Exploring YouTube API - 
https://developers.google.com/youtube/v3/getting-started

## Recommendations & Next Steps

1.Sync up with Search.gov
- Can we block the playlists?
- Can they reorder the videos to be sorted by relevancy vs recency? 

2. Audit of top 2020 terms 
3. Dig deeper to find out how many official VA videos are talking about?



