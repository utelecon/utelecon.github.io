---
title: A special page on access failures to UTAS/ITC-LMS
redirect_from:
  - /en/notice/korea_telecom/
---

_<font color="red">**Update: 21:24 (JST) March 18 2022.**</font>  The issue below should be fixed now.  We will continue to watch the issue for any adverse effect the fix might have caused.  To that end, had you experienced any issues in accessing UTAS or ITC-LMS, [please let us know](#how-to-report)._

As of March 17 2022, we are aware that a few users from Korea cannot access several ICT services operated by the University of Tokyo including [UTAS](/en/utas) and [ITC-LMS](/en/itc_lms). We have confirmed that it is an issue about the Internet routing connecting the user's carrier and the cloud vendor hosting our servers. We are cooperating with the cloud vender to fix the issue.

In this page, we describe who is affected, how to know if you are affected, how affected users might be able to work around the issue, etc.

## 1. Who is affected?
{:#who}

In reports from users we have received so far, affected users access the Internet using Korea Telecom. We have nailed down the problem as a network routing issue of the cloud vendor hosting our service. Due to the nature of the problem, we are not absolutely sure if no other carriers are affected. We do not know either if all Korea Telecom users are affected or only a few of them are.

We therefore welcome reports from all Korea Telecom users, affected or not, as well as reports from all affected users, using Korea Telecom or not (see "[5. How to report your status](#how-to-report)" below).

## 2. When did the problem start to happen?
{:#when}

According to reports we have received so far, it appears that the problem started to happen in early March. We changed the route from the outside network to our servers on March 3rd, so the issue is likely to have something to do with the routing change.

If you were able to access UTAS and ITC-LMS before March 3rd but you are now unable to do so, it is likely that you are affected by this problem.

## 3. How to know if you are affected?
{:#how-to-know}

_Note: If you want to know the mitigation before reporting your status to us, go to "[6. How to work around the issue for now](#how-to-work-around)" first and come back to 3-5 later._

Access [https://utas.adm.u-tokyo.ac.jp/](https://utas.adm.u-tokyo.ac.jp/) and press the login button.
If you do not reach the authentication page (with Yasuda Auditorium) for a long time and eventually see an error page like this

<img src="img/timeout.png" width=300 />

then you are likely to be a victim of this issue.

To be sure, directly access [https://gidp.adm.u-tokyo.ac.jp/connect.html](https://gidp.adm.u-tokyo.ac.jp/connect.html) and if it times out, then you are very likely to be a victim.

## 4. How to check if you are accessing from Korea Telecom?
{:#how-to-check}

Access [https://bgp.tools/](https://bgp.tools/) and see the results below "You are connecting from", e.g.,

<img src="img/bgp.png" width=300 />

In this example, KDDI CORPORATION (AS2516) is the network carrier, which is of our primary interest. If you are affected you might see "Korean Telecom". Values after "IPv6" and "IPv4" are IP addresses. 

We are interested in the status of all users using Korea Telecom, affected or not, as well as all affected users, Korea Telecom or not.

## 5. How to report your status
{:#how-to-report}

If you are affected or using Korea Telecom, [please report your status here](https://docs.google.com/forms/d/e/1FAIpQLSeYMeqsVKfvc_THs_frehBaPoslYQfIKtE-fyIsfTDuazhkjQ/viewform).

* To the question **"What is your inquiry?"**, check <font color="blue">"*Troubles with other external online tools or Utokyo systems*"</font>
* To the question **"What did you try to accomplish?"**, say <font color="blue">"*Tried to access UTAS*"</font>
* To the question **"Describe the problem"**, include
  1. <font color="blue">The result of https://bgp.tools/ (texts below "You are connecting from")</font>
  1. <font color="blue">The result of accessing https://utas.adm.u-tokyo.ac.jp/ (timeout or not)</font>
  1. <font color="blue">The result of accessing https://gidp.adm.u-tokyo.ac.jp/connect.html (timeout or a page saying "Success(1 or 2)")</font>
  1. <font color="blue">The result of accessing https://20.188.18.56/ (timeout, a page showing a security warning/error, or anything else)</font>
  1. <font color="blue">The result of accessing https://20.157.12.34/ (timeout, a page showing a security warning/error, or anything else)</font>

## 6. How to work around the issue for now
{:#how-to-work-around}

We are working with the cloud vendor to fix the underlying problem. Meanwhile, you may try one of the followings and see if anything works to get around the issue.

1\. **Use alternative servers with Chrome browser.** We have set up temporary servers that go around the broken route. Chrome browser is required to use them. If you are using Chrome or do not mind installing it for this purpose, run Chrome browser as follows.
* On Windows: open "command prompt" and run
```
"C:\Program Files\Google\Chrome\Application\chrome.exe" --host-resolver-rules="map sts.adm.u-tokyo.ac.jp 20.188.19.21, map gidp.adm.u-tokyo.ac.jp 20.188.18.56"
```
Or, you may download [this batch file](run_chrome.bat) and run it.
```
run_chrome.bat
```
Note: If the command above does not work, you might try changing `Program Files` to `Program Files (x86)`, for example. The correct command depends on where the Chrome application is stored on your computer.
* On Macintosh or Linux: open terminal and run
```
chrome --host-resolver-rules="map sts.adm.u-tokyo.ac.jp 20.188.19.21, map gidp.adm.u-tokyo.ac.jp 20.188.18.56"
```
Or, you may download this [shell script](run_chrome.sh) and run it.
```
sh run_chrome.sh
```

2\. **Use another carrier.** For example, if you have a smartphone that supports tethering (which may be called "Internet sharing", "WiFi access point", depending on the phone model you are using), turn it on and connect your PC to it.

3\. **Use VPN.** If you happen to use a VPN service, connect the PC to the VPN.

In all cases, the effect is to use a different route to reach our servers. Any way to connect your PC to another network may equally circumvent the issue. e.g., bring your PC to an Internet cafe.

They are of course temporal workarounds until the real issue is solved.

We are sorry for the inconvenience this causes. We are aware that some workarounds (e.g., tethering) impose a charge or a traffic limit. We will try to fix the issue as quickly as possible and keep updating this page to inform you of the latest status.
