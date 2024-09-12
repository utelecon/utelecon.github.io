---
title: Scheduling a Zoom Meeting
breadcrumb:
  title: Scheduling a Meeting
---

## Introduction
This page provides an overview of how to set up a Zoom meeting. Please also refer to the following pages for detailed explanations of individual functions.

- [Scheduling Recurring Zoom Meetings](date_and_time/)
- [Requiring Authentication to Join a Zoom Meeting](auth/)
- [Setting up a Zoom Waiting Room](waiting_room/)
<!-- - [参加者に登録を求める](registration/)
- [代替ホストを設定する](alternative_host/) -->

## Scheduling Meetings
{:#create}

This section provides information on how to schedule a Zoom Meeting from the Zoom webpage.

1. Access to your [Zoom My Account page](https://zoom.us/profile) from a web browser. Click “Schedule a Meeting” on the top right corner of the page. 
    ![](./1.png){:.medium}  

2. Select the meeting options and click “Save” to finish scheduling your meeting. For supplementary explanation on the meeting options, see [“Zoom Meeting Options”](#settings).
    ![](2.png){:.medium}  
    ![](3.png){:.medium}  

3. After saving, copy and send out **the invite link** to participants via email.
   ![](4.png){:.medium}
   * **The password information is included in the URL** by default. Therefore, sharing the password separately is not required.
   * The text obtained by clicking “Copy Invitation” contains unnecessary information such as how to join the meeting by dialing. We recommend that **you only share the URL of the meetings**, instead of copying the whole invitation.  
   * By clicking “Show all occurrences”, you can edit the date/time settings or add another session to the scheduled recurring meetings. (For example, while the recurring meeting is set on Tuesdays, another class would be held on Thursday).

## Editing Meeting Options
{:#edit}

Editing meeting options of scheduled Zoom meetings is possible.

1. Access your [Zoom Meeting page](https://u-tokyo-ac-jp.zoom.us/meeting#/upcoming) from a web browser.
    ![](auth/meeting_1.png){:.medium} 
2. All scheduled meetings will be listed on the page. Click “Edit” on the right side of the meeting you would like to make changes to.
    ![](auth/meeting_2.png){:.medium}
3. Edit the meeting options and click “Save”. The meeting will be scheduled. The URL for the meeting will remain the same if no changes were made to its Meeting ID and password.
    ![](3.png){:.medium}  

## Zoom Meeting Options
{:#settings}

This section explains some of the important meeting options. 

  * **Regular meetings**: You can set up meetings on a regular basis. (Reference: [Scheduling Recurring Zoom Meetings](date_and_time)．．
  * **Security**: 
    * **Passcode**: **It is desired to have one**. In the default setting, however, participants can join the room by simply clicking the URL since the passcode is embedded in the link.
      * If you uncheck "Embed passcode in invite link for one-click join" in the [Zoom settings](https://zoom.us/profile/setting), participants are required to enter the passcode to join. 
    * **Waiting Room**: When the waiting room is activated, participants are placed there until the host lets them into the main conference room. Using the advanced setting, the host can send particular groups of participants to the waiting room, such as those whose email address does not have a domain given by the University of Tokyo (`g.ecc.u-tokyo.ac.jp` etc.). In order to avoid unintentionally sending legitimate participants to the waiting room, you should make sure that it is properly set up (refer to [Setting up a Zoom Waiting Room](waiting_room/)). Regarding possible settings for classes at the University of Tokyo, please see [Restricting Access to Zoom Meeting Rooms for Online Classes](/en/faculty_members/zoom_access_control).
    * **Student Authentication**: If you activate this option and select "Sign in with University account(大学アカウントでサインイン)", non-UTokyo Zoom accounts cannot join the room. Make sure that the domain designated as UTokyo Zoom accounts is `.u-tokyo.ac.jp.` Please check [Requiring Authentication to Join a Zoom Meeting](auth/) for more information.
      * However, it is not recommended to use this option in the first weeks since students might have troubles creating a UTokyo Zoom account.
      * Regarding possible settings for classes at the University of Tokyo, please see [Restricting Access to Zoom Meeting Rooms for Online Classes](/en/faculty_members/zoom_access_control).
* **Meeting Options**:
  * **Allow participants to join before host**: It is recommended to activate this option unless you have some problems with students joining the room before you. You can also decide when students can join.
  * **Mute all participants when they join a meeting**: It is recommended to activate this option unless you have certain reasons to do otherwise.

## How to set additional functions and recommended settings
Here we will introduce how to set additional functions (such as "voting" for asking questions to participants and "breakout" for discussing in groups) and recommended settings.
  
1. Go to Zoom account <a href="https://zoom.us/profile/setting" target="_blank">settings page</a> (Personal “Settings” → “Meeting”).
    * Please log in with the account you obtained from school
    ![](/en/zoom/usage/host_setting.png)  
  
1. Turn on the required settings. Recommended settings are as follows.
    * (ON when necessary) **Only authenticated users can join the meeting**: If you turn this on and select "Sign in with University Account", access will be restricted to those with an ECCS cloud email (`xxxx@utac.u-tokyo.ac.jp`) 
    * (ON recommended) **Chat auto save**: When turned on, the chat will be saved automatically(otherwise, the chat text will not be kept unless you save it manually) . See also <a href="https://support.zoom.us/hc/en-us/articles/115004792763" target="_blank">Zoom Help Center "Saving in-meeting chat"</a> for details.
    * (ON recommended) **Polls**:  The organizer can ask questions to the participants.
    * (ON recommended) **Breakout room**: Divides participants into subgroups to encourage discussion and work.
    * (ON when necessary) **Subtitle function**: It can be used when you want to supplement audio with text.

## (Reference) Scheduling Meetings on the Mobile App

You can also schedule meetings in the mobile app. Please refer to [How to Schedule Meetings in the Mobile App](../misc/app/). However, please note that not all the settings explained in this article can be modified in the meetings created with the mobile app.



