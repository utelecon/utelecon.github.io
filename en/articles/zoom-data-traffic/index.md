---
title: How to Reduce Zoom Traffic During Online Classes
---

## Introduction

* The network environments used by students and faculty members is diverse. In some cases, it may be necessary to reduce the amount of traffic. This article explains how to reduce Zoom traffic, while also providing some basic information on using Zoom.
* This article is written based on information from the presentation “How to Reduce Zoom Traffic During Online Classes” given at the [9th Cyber Symposium for Sharing Distance Learning Measures at Universities and Other Institutions Since April (held online on May 29, 2020)](https://www.nii.ac.jp/event/other/decs/#09).

## How to Reduce Zoom Traffic

Both the sender (lecturer) and receiver (student) can take measures to reduce the amount of Zoom traffic. To understand how, let us take a look at how traffic occurs in a web conference.

The following instructions detail how to reduce traffic using figures.

![Zoom traffic overview](image/data-traffic-overview.png)

This figure assumes the following situation.

* The lecturer turns on the video and explains the material aloud while sharing the screen. The data is transmitted to the Zoom server.
* Student B asks a question aloud. The data is transmitted to the Zoom server.
* From the Zoom server, Student A receives the video, audio, and screen data shared by the lecturer, as well as the audio data shared by Student B.

In this case, the amount of traffic can be reduced on both the lecturer and student sides.

* On the lecturer side, the sender can reduce the traffic by turning off the video and adjusting the screen sharing settings (described below), thereby reducing the traffic that the student receives.
* On the student side, the receiver can reduce the traffic amount by hiding the video of the other participants.

Both sides (sender and receiver) can reduce the amount of traffic according to the methods above. It is recommended that you take the proper measures depending on whether you are a sender (lecturer) or receiver (student).

## Approximate Zoom Traffic

The following table shows the approximate amount of Zoom traffic (audio, video, and screen sharing). The following values represent the amount of data received; however, we assume that the amount of data sent will be similar for audio (per single user), video (large resolution), video (small resolution), and screen sharing.

![Zoom traffic](image/data-traffic-table.png)

Some supplementary information and caveats are as follows.

* Screen sharing can result in smaller or larger sized data than audio depending on the settings (see below on how to reduce the amount of traffic).
* When the video size is small, the amount of traffic is approximately the same as that of the audio (the data size of the video is not necessarily always excessively large).
* Zoom traffic changes when the size of the video display changes.
  * **Video (Large)**: The largest video size in Zoom's speaker view (basically a resolution of 640 × 320)
  * **Video (Small)**: The video when the Zoom screen is minimized (resolution of 240 × 180)
    * **Video Hidden**: The video is hidden by pressing "^" on the left corner of the Zoom when the screen is minimized (traffic 0)
* The amount of traffic per month is calculated assuming 90 hours of use per month (= 90 minutes × 15 frames per week × 4 weeks per month).

## Video Tips

### Receivers can control the traffic they receive.

* Minimizing the video view reduces the traffic to approximately 10% of the maximized video.
* Turning off the video will reduce the amount of traffic to zero.

### The sender's traffic depends on the receiver's video window size

* If all receivers use the minimized video, the traffic may decrease. In other words, when a sender turns on the video, the traffic may not necessarily equal that of a large-sized video.

## Screen Sharing Tips

### If the sender reduces the resolution, the amount of traffic is also reduced.

* If you reduce the resolution of the shared screen, you can reduce the traffic amount.
* Three ways to reduce the resolution (you can change it in real-time).
  * Reduce the resolution of the shared screen itself in the PC settings.
  * Share a window instead of the entire screen (if you reduce the size of the window, you can reduce the resolution of the shared image).
  * Share "Portion of Screen" from the "Advanced" tab when sharing screens.  

### When a sender reduces the number of frames per second (fps), the traffic also will be reduced.

* Reducing the fps will reduce the amount of traffic.
  * The fps is the frequency of screen updates per second. For example, if the fps is 1, the display will resemble a flip book being viewed at one image per second.
* How to reduce the fps (you can change it in real-time)
  * In the Zoom application, click “Settings” (gear icon) -> "Share Screen" -> "Advanced" (on the bottom right) -> "Limit your screen share to X frames-per-second."
  * 1 is the minimum (the screen refreshes once per second, and thus the video is somewhat jumpy.)  

### (For Mac, iPhone, and Android) When the recipient turns off the display, the amount of recipient traffic is zero.

* As stated in the headline, in the case of Mac, iPhone, and Android, if the recipient turns off the display, there will be zero traffic.
  * Unfortunately, when it was first released (May 29, 2020), the Windows version of the app still incurred screen sharing traffic even when the recipient turned off screen sharing.
* How to turn off the screen sharing display
  * For Mac: Minimize
  * For iPhone/Android: Put into safe operation mode (swipe from left to right)

## How lecturers (senders) can reduce the amount of traffic

### Video (high impact)

* Turning off the video will reduce the amount of traffic to zero.
* Even if the video is turned on, enabling screen sharing can reduce the size of the receiver’s video display and bring down the traffic amount to the same level as that of the audio traffic.

### Screen sharing (small to medium impact)

* Reduce the resolution as much as possible (a resolution of 1024 × 768 is sufficient).
  * Reduce the resolution of the shared screen itself in the PC settings.
  * Reduce the size by sharing a window instead of a screen.
  * Share "Portion of Screen" by changing the settings from the "Advanced" tab when sharing screens.
* Reduce the fps as much as possible. (Even 4 fps is sufficient. You can change it in real-time).
  * Can be changed from “Settings” (gear icon) -> "Share Screen" -> "Advanced" (on the bottom right) -> "Limit screen sharing to" in the Zoom app.
  * 1 is the minimum (the screen refreshes once per second, and thus the video is somewhat jumpy.)  

### Voice (small impact)

* Turn off the audio when you are not speaking.

## How students (receivers) can reduce the amount of traffic

### Video (large impact)

* If others have the video turned on, minimizing or turning off the video display will reduce the amount of traffic.

### Screen sharing (small to medium impact)

* (For Mac, iPhone, and Android) Download the material separately and turn off the screen sharing display to reduce the traffic ( note, however, that because it is likely to interfere with the receiver’s understanding of the material, it may be better to have the sender apply this approach rather than the receiver).
  * Mac users can turn off the display by minimizing it.
  * iPhone and Android users can turn off the screen sharing by swiping from left to right.

### Audio (small impact)

* As a rule, the audio should be turned off.

## Analysis of traffic during actual classes

Below, we provide the following information: How much traffic occurs during class and how much traffic can be reduced by taking the above measures (along with examples).

### How we analyzed the traffic

* Data on the traffic speed (kbps) of each participant’s functions (audio, video, and screen sharing) collected every minute was obtained from Zoom's administration screen and was used for the analysis
* The traffic (MB) was calculated as the sum of the traffic speed (kbps)/8/1000 × 60 for each minute when each function (audio, video, and screen sharing) was active.
* The amount of traffic is calculated from the sum of the sent and received data, and thus both data are listed separately.
* The average traffic speed is calculated based on the time when the function is active.
  * Example: When the video was on for only 4 minutes out of a 105-minute class, the denominator was 4 minutes instead of 105 minutes.
* The median value was used for the students.
* The data for the breakout session was not included in the analysis.

### Example case #1: Science class

#### Basic Information

* Class on programming (about 40 students, 105 minutes class)
* 20 minutes of exercises after the lecture
* Video **Basically all students turn off the video** (the lecturer turns on the video for 4 minutes)
* The lecturer turns the screen sharing on
  * During the explanation, resolution of 1920 × 1080, approximately 20 fps (average of 121 kpbs)
  * During the exercise, resolution of 3840 × 2160, approximately 7 fps (average of 333 kpbs)

#### Traffic

![Zoom traffic, example 1](image/example1.png)

* The amount of screen sharing traffic was approximately twice that of the audio traffic.
* Because the lecturer turned on the video for only 4 minutes, the amount of video traffic is low.
* There is a difference in the amount of video traffic between a lecturer and a student. Because the lecturer shares the screen, many students display the video at a small size, and the amount of traffic seems equal to that for a small video, as described above.

### Case #2: Humanities class

#### Basic Information

* Class on education (approximately 20 students, 105 min class)
* Combination of lecture and group work with breakouts
* Video **only the lecturer turns on the video**.
* The lecturer has screen sharing turned on. (**The resolution is limited to 1024 × 768 and 1 fps in the settings.**)

#### Traffic

![Zoom traffic, example 2](image/example2.png)

* The amount of traffic for screen sharing was smaller than that of the audio. This results from limiting the resolution of the shared screen to 1024 × 768 and the fps to 1 in the settings.
* Video traffic was the heaviest. Because the student displays the lecturer's video at a small size, the student's video traffic is smaller than that of the lecturer, as in Case #1.
* Looking at the total amount of traffic, there is a difference in the amount between the lecturer and students, which results from the difference in video traffic. If the lecturer's video is displayed at a small size, even if the video is on for the full 105 minutes of class time, the traffic will be less than 200 MB.
* The amount of video traffic received by the lecturer is 7 MB, and that sent by the students is 0 MB. This is likely because some students temporarily turned on the video and the median value was used to measure the video transmission of students.

### Case #3: Humanities Class (two consecutive classes)

#### Basic Information

* Class on education (approximately 30 students, 105 min class **2 sessions**)
  * The analysis is based on two classes because two classes were held consecutively.
* Classes were a combination of lectures and group work using breakouts.
* Video **All students turn on the video**.
* The lecturer turns on the screen sharing (**The video is limited to a resolution of 1024 × 768 and 1 fps using the settings.**)

#### Traffic

![Zoom traffic, example 3](image/example3.png)

* In addition to the transmission, the video traffic received by the lecturer is also heavy. However, the traffic received by students is relatively light.
  * The relatively light video traffic of the students is attributed to the gallery view used by the lecturer when the screen is shared, and the students displaying the video at a small size.
  * Because the total amount of traffic for the lecturer from two consecutive classes is approximately 3 GB, if all members want to turn on the video, the lecturer has to pay special attention to his or her own traffic, in addition to the traffic of the students.
* As in Case #2, the screen sharing traffic is less than the audio traffic, due to the reduced resolution and fps of the shared screen.

### What we can learn from actual class data

* Reducing the resolution and fps (e.g., to a resolution of 1024 × 768 and 1 fps) can reduce the amount of traffic for screen sharing so that it is lower than the audio traffic.
  * As the results show, screen sharing can result in low traffic if appropriate settings are applied. Screen sharing is especially important for students in classes that use specific presentation materials such as slides. If screen sharing is not an option owing to a concern regarding the amount of traffic, such data and tips might help the lecturers find a way to share their screen.
* Even when turning the video on, if the video is at a small size (e.g., during screen sharing), the traffic is surprisingly light.
  * In Case #3, all students had the video turned on. The median of the traffic was about 550 MB for two classes. Based on the results, if the students' network environment is of high quality, there may be no problem for the students to turn on the video. However, the reason students cannot turn on the video may not always be the amount of traffic and thus it is necessary to obtain the consent of the students to turn on the video.
* It is also vital to improve the network environment for the lecturer.
  * Both in cases in which only the lecturer turns on the video (case #2) and in which all members turn on the video (case #3), the traffic of the lecturer was heavier. Based on these results, it appears that it is especially necessary to take the network environment of the lecturer into consideration.

This concludes our analysis of Zoom traffic. We hope they will be helpful for your online classes.

## Reference Information (in Japanese)

* Inoue, H. (2020) "Survey of Network Traffic in Online Classes Using Zoom," 9th Cyber Symposium for Sharing Distance Learning Measures at Universities and Other Institutions Since April, [https://www.nii.ac.jp/news/upload/20200403-6_Inoue.pdf](https://www.nii.ac.jp/news/upload/20200403-6_Inoue.pdf) (accessed May 25, 2021)
* Inoue (2020) Facebook post (traffic during screen sharing) [https://www.facebook.com/groups/146940180042907/permalink/163466895056902/](https://www.facebook.com/groups/146940180042907/permalink/163466895056902/) (accessed May 25, 2021)
* Kudo (2020), "Communication Volume of Online Classes," University of Tokyo, Briefing Session: Two weeks after the start of S-semester, [https://utelecon.adm.u-tokyo.ac.jp/events/2020-04-16/07-Traffic.pdf](/events/2020-04-16/07-Traffic.pdf) (accessed May 25, 2021)
* Fukuda (2020), "The Situation of Networks with Tightened Bandwidth," 9th Cyber Symposium for Sharing Distance Learning Measures at Universities and Other Institutions Since April, [https://www.nii.ac.jp/news/upload/20200410-2_Fukuda.pdf](https://www.nii.ac.jp/news/upload/20200410-2_Fukuda.pdf) (accessed on May 25, 2021)
* Cho (2020), "Subsequent Impact of the New Coronavirus on FLET traffic," [https://eng-blog.iij.ad.jp/archives/5813](https://eng-blog.iij.ad.jp/archives/5813) (accessed May 25, 2021)
* Yoshida and Kurita (2020), "Zoom course for online classes to promote learning," [https://sites.google.com/view/enhance-learning/home](https://sites.google.com/view/enhance-learning/home) (accessed May 25, 2021)
  * Slide materials: [http://edulab.t.u-tokyo.ac.jp/resource/2020.05.05_slides_v2.pdf](http://edulab.t.u-tokyo.ac.jp/resource/2020.05.05_slides_v2.pdf) (accessed May 25, 2021)
