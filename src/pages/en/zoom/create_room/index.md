---
title: Scheduling a Zoom Meeting
breadcrumb:
  title: Scheduling a Meeting
---

## Introduction
{:#introduction}
This page explains how to create a Zoom meeting in a web browser and provides an overview of the settings available when creating a meeting.
For information on creating Zoom meetings using the app, please refer to [Scheduling a Zoom Meeting (Zoom App)](/en/zoom/misc/app/). Be sure to check it out as well.

## Scheduling Meetings
{:#steps-to-create}
This section introduces the procedures for creating a Zoom meeting using a web browser and sharing the information needed for participants to join the created meeting.

1. Access the [Zoom My Account page](https://u-tokyo-ac-jp.zoom.us/profile) from a web browser.
![](./1_myprofile.png){:.border}
1. Select "Schedule" in the header of My Profile.
![](./2_select-schedule.png){:.border}  
1. On the displayed screen, please set the required fields. For detailed explanations of each setting, refer to the “[Zoom Meeting Options](#settings)" section below.
![](./3_schedule-meeting.png){:.border}
1. Once you click on the "Save" button, your Zoom meeting will be created.
![](./4_select-save.png){:.border}
1. The details of the meeting created will be displayed. Verify that it has been set up according to the settings you configured earlier.
![](./5_meeting-detail.png){:.border}

Participants can join the Zoom meeting using either the "Invitation Link" or the "Meeting ID and Passcode".

There are two main ways to share the "Invitation Link" or "Meeting ID and Passcode" with participants.
* Copy the "Invitation Link" displayed on the meeting details screen and share it with the participants. Additionally, it is helpful to share the "Meeting ID" and "Passcode" along with the "Invitation Link".
![](./6_invitelink.png){:.border}
* Select the "Copy Invitation" button displayed on the screen in Step 5 and share the content of the displayed screen with the participants. For simplicity and convenience, it is especially helpful to extract and share just the Invitation Link, Meeting ID, and Passcode.
![](./7_copylink.png){:.border}![](./8_cppymeetinginvitation.png){:.border}

## Meeting Settings Items
{:#settings}
This section provides an overview of the settings for creating a meeting.

### General Meeting Settings
{:#settings-general}
#### Topic
{:#settings-topic}
Set the name of the meeting.

By clicking "Add Description", you can enter a detailed description of the topic. The information entered may be displayed alongside the topic as information for participants.

### Settings for the Meeting Date and Time
{:#settings-date_and_time}
For more details, please refer to "[Scheduling Recurring Zoom Meetings](/en/zoom/create_room/date_and_time/)".

#### Date and Time of the Meeting

This allows you to set an estimated start time. It is only an estimate, and you can begin the meeting earlier than the set start time. The meeting will not automatically start once the set time has passed.

#### Duration

This field sets an estimated duration for the meeting. It can only be set in 15-minute intervals, but is just an estimate. The meeting will not automatically end once the set time has passed.

#### Time Zone

This field sets "the region for the meeting date and time".

#### Recurring Meeting

If you are holding recurring classes or meetings with the same topic and participants, creating a Zoom meeting each time can be time-consuming. It is also more convenient for participants to join from the same URL each time. In such cases, please place a check mark in the "Recurring Meeting" option.

### Other Various Settings
{:#settings-misc}
#### Registration
{:#settings-registration}
This feature is used when you want participants to register in advance with details such as their name and contact information. It can be useful for tracking participants for large events. For more details, please refer to "[Requesting Participant Registration in Zoom Meetings (in Japanese)](/zoom/create_room/registration/)".

#### Meeting ID
{:#settings-meetingid}
Generally, it is fine to leave the option set to "Generate Automatically".

When "Generate Automatically" is selected, a new meeting ID will be automatically generated and assigned to the meeting being created. On the other hand, if the "Personal Meeting ID" is selected, a unique number assigned to each user (the "Personal Meeting ID") will be used as the meeting ID.

#### Template
{:#settings-template}
This feature can be used if you have previously created meeting templates.

#### Whiteboard
{:#settings-whiteboard}
This is a virtual whiteboard feature that can be used during the meeting.

#### Security
{:#settings-security}
Zoom meeting IDs are typically 10-digit numbers, and without any security measures in place, there is a risk that someone who shouldn't have the ID could guess the numbers and join the meeting. To enhance security, please use these features.

For more details, refer to the page "[Restricting Access to Zoom Meeting Rooms for Online Classes](/en/faculty_members/zoom_access_control/)." The article focuses on the settings recommended for use in classes, but the content is also applicable to general meetings and other events.

* Passcode
  * When enabled, participants will be required to enter a passcode in addition to the meeting ID when joining the meeting. It is very difficult to randomly guess both the passcode and the meeting ID, which significantly reduces the risk of unauthorized third parties joining the meeting. By default, this setting is enabled, so unless you have a specific reason, it is recommended to leave it on. You can either specify your own passcode or use an automatically generated one.
  * In the default settings, the invitation link for the meeting includes both the meeting ID and passcode information. Therefore, even if the passcode feature is enabled, participants only need to be provided with the invitation link, and there is no need to separately inform them of the passcode. However, there may be cases where it is useful to share both the meeting ID and passcode in addition to the invitation link (for more details, please refer to the notice “[how to announce online class URL](/en/faculty_members/url/#use-online-class-info-in-general)”). If you do not want the passcode information to be embedded in the invitation link, it can be changed from the settings page. For more information, please refer to the "[How to Set Up Commonly Used Features](#popular_functions)" section below.
* Waiting Room
  * When enabled, participants will not be able to join the meeting directly until the host individually approves their entry, and they will remain in the waiting room. This feature is useful if you want to allow only approved participants to attend the meeting.
  * For more details, please refer to "[Setting up a Zoom Waiting Room](/en/zoom/create_room/waiting_room/)".
* Only Authenticated Users Can Join
  * This feature controls whether or not participants can join the meeting based on the type of account they use to sign in to Zoom.
  * When enabled and "Sign in with University Account" is selected, only users signed in to Zoom with a UTokyo Account can join the meeting.
  * When enabled and "Sign in to Zoom" is selected, only users signed in to Zoom, regardless of account type, can join the meeting.
  * For more details, please refer to “[Requiring Authentication to Join a Zoom Meeting](/en/zoom/create_room/auth/)”.

#### Video
{:#settings-video}
This setting controls whether participants will join the meeting with their camera on or off. It only affects the initial state when entering the meeting and does not affect the ability to turn the camera on or off during the meeting.

#### Audio
{:#settings-audio}
This setting controls the types of audio participants can use during the meeting. Zoom offers a method for joining by phone for audio-only participation, even without an internet connection. However, if "Computer Audio" is selected, this method will not be available. Generally, it is fine to leave the setting on "Both".

#### Options
{:#settings-options}
* <span id='allow-entrance'>Allow Participants to Join</span>
  * This feature allows participants to enter the meeting before the host joins. You can change the number of minutes before the host opens the meeting that participants are allowed to enter from the settings page. For more details, please refer to the section below, "[How to Set Up Commonly Used Features](#popular_functions)".
* Q&A
  * This is a feature designed to make it easier to manage questions from participants.
* Mute Participants Upon Entry
  * This feature mutes participants when they join the meeting. It only controls whether or not participants are muted upon entry and does not affect their ability to switch their microphone on or off during the meeting.
* Pre-Assign Breakout Rooms
  * By using the breakout room feature, you can split participants from the main meeting room into multiple breakout rooms. This feature allows you to pre-assign participants to specific rooms in advance.
  * For more details, please refer to "[Zoom's Breakout Room Feature (in Japanese)](/zoom/usage/breakout/)".
* Automatically Record the Meeting
  * This feature automatically starts recording as soon as the meeting begins. You can choose to save the recording either on your local computer (your PC) or on the cloud. Even if this option is turned off, you can manually start recording during the meeting.
  * For more details, please refer to “[Recording Zoom Meetings](/en/zoom/usage/recording/)”.
* Approve or Block Users from Specific Regions/Countries
  * This setting allows you to permit or deny participation from specific regions or countries. When enabled, you can select the regions or countries and specify whether to allow or block participation from those locations.
* Alternative Host
  * An "Alternative Host" is a user who can start the meeting on behalf of the host. You can designate an alternative host using this field.
  * However, only users with a UTokyo Account can be designated. To assign someone, enter their UTokyo Account (10-digit Common ID + `@utac.u-tokyo.ac.jp`).
  * For more details, please refer to the section on "Alternative Host" in "[Host and Co-host Controls in a Zoom Meeting(in Japanese)](/zoom/misc/management_roles/#alt_host)".

## How to Set Up Commonly Used Features
{:#popular_functions}
By selecting "Settings" in the side menu of your Zoom profile page, you will open the "My Settings" page. Features such as "Breakout Rooms" (to divide participants into separate rooms) and "Screen Sharing" (to share your screen with other participants) are not included in the meeting creation settings and must be configured from this separate "My Settings" page. Please note that settings made in "My Settings" will apply to all meetings you create.

This section will explain how to open "My Settings" and introduce some commonly used features that can be configured from there.

### How to Open the "My Settings" Page

1. Access your [Zoom profile](https://u-tokyo-ac-jp.zoom.us/profile) through a web browser.
2. Select "Settings" from the side menu.
![](./9_opensetting.png){:.border}

### Commonly Used Features

#### Meeting Tab
{:#meeting_tab}
The settings for these features can be accessed by selecting the "Meeting" tab from the top section of the "My Settings" page.
![](./10_meetingtab.png){:.border}

* Embed Passcode in the Invitation Link enable joining in with One-Click
  * When enabled, the passcode is embedded in the invitation link, eliminating the need to separately inform participants of the passcode. Unless there is a specific reason, it is recommended to keep this setting on.
* Allow Participants to Join Before Host
  * Normally, a meeting does not start until the host joins. However, if this option is enabled, participants can join the meeting and wait even before the host enters. Additionally, you can configure specific details about when participants are allowed to join before the host. Enabling this option can be convenient.
  * Even if this option is turned off, you can still allow participants to join before the host when creating each meeting (see "[Allow Participants to Join](#allow-entrance)" above). However, detailed control will not be available.
* Meeting Chat - Auto-Save
  * When enabled, the chat will be automatically saved at the end of the meeting.
  * For more details, please refer to "[Using Chat in Zoom Meetings (in Japanese)](/zoom/usage/chat/)".
* Co-Host
  * A co-host is a role that the host can assign to others during the meeting, and the co-host has access to almost the same functions as the host. If this option is enabled, you can assign co-hosts during the meeting, so it is recommended to leave this on unless there is a specific reason to disable it.
  * For more details, please refer to “[Host and Co-host Controls in a Zoom Meeting](/en/zoom/misc/management_roles/)”.
* Meeting Polls / Quizzes
  * This is a useful feature for collecting responses to questions from all participants during the meeting. It is recommended to leave it enabled unless there is a specific reason to disable it.
  * For more details, please refer to "[Polls in Zoom](/en/zoom/usage/poll/)".
* Screen Sharing
  * This feature allows you to share the content displayed on your screen with participants during the meeting.
  * When this option is enabled, you can further specify who is allowed to share their screen (whether only the host can share, or if participants other than the host can also share their screen).
  * It is recommended to leave this enabled unless there is a specific reason to disable it.
  * For more details, please refer to “[Screen Sharing in Zoom](/en/zoom/usage/screen_sharing/)”.
* Breakout Rooms - Meeting
  * For an explanation of Breakout Rooms, please refer to "[Zoom's Breakout Room Feature (in Japanese)](/zoom/usage/breakout/)".
* Auto-Generated Captions
  * When enabled, the content spoken by participants is automatically transcribed and displayed as captions on the Zoom screen.
