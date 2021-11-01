# Notification Settings & Default Sends

## Problem
Earlier in the summer the team learned that our VA Profile partners had no way of indicating in the data whether a user explicitly opted into notifications or was opted in by default. For example, when Veterans sign up for healthcare through the, they are automatically opted in to receive appointment reminders via text. These individuals are not marked in the data base as having been opted in by default (hence the name "default sends") as opposed to users who explcitily checked a box that used to exist on VA.gov for opting into appointment reminders via text. 

Because default sends are not indicated in the data base, we have no way of displaying that information on the frontend, which means when our notification settings feature launches, a Veteran may already be receiving text message appointment reminders, but when they first visit the notification settings feature the appointment reminder notification item will appear as though they are not opted in to receive notifications. 


## Proposed Solutions
We've had many discussions with VA Notify and VA Profile as to how we should resolve this issue. The first step is for VA Profile to enhance their database to include a flag or indicator of some kind to denote implied opt-ins (default sends) vs explicit opt-ins.

There have also been discussions as to whether there should be some kind of design element on the frontend to indicate that a user may be have been opted in impliciltly vs explicitly.
