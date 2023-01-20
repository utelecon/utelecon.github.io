---
title: How to use UTokyo VPN on Windows devices
---

This page describes how to use UTokyo VPN on Windows devices.

{% include_relative _subpage_beginning.md %}

## Preparation: Download and Install the VPN Client Application.
{:#setup}

Install the application “AnyConnect” on your device to connect to UTokyo VPN.

**Step A:** Go to [https://vpn1.adm.u-tokyo.ac.jp/](https://vpn1.adm.u-tokyo.ac.jp/). When the UTokyo Account authentication page appears as illustrated below, log in with your UTokyo Account.

![](img/win01-vpn1-login.png){:.medium.center.border}

{% include_relative _help_mfa.html %}

**Step B:** After the log-in, a download page for the AnyConnect client application, as illustrated below, will appear. Click “Download for Windows” to download the client application.

![](img/win02-download-page.png){:.medium.center.border}

{% include_relative _help_white.html %}
{% include_relative _help_security_session.html %}
{% include_relative _help_security_username.html %}

After these steps, install the application as you would do for any other Windows application.

**Step C:** End User License Agreement, please select “I accept the terms in the License Agreement” and click “Next” to proceed.

<figure class="gallery">
  <img src="img/win03-install-1.png" class="border">
  <img src="img/win04-install-2.png" class="border">
  <img src="img/win05-install-3.png" class="border">
</figure>

**Step D:** If the installation was completed successfully, the VPN client application “Cisco AnyConnect Secure Mobility Client” is added to the application.

![](img/win06-cisco-on-task.png){:.medium.center.border}

You are now ready to use VPN.

## Steps to connect to the UTokyo VPN
{:#connect}

The following steps are required, every time to use the VPN. Please note that your device will not connect automatically to the VPN immediately after booting your PC.

**Step E:** After launching the “Cisco AnyConnect Secure Mobility Client” installed following the Preparation steps, the window illustrated below will appear. Enter **vpn1.adm.u-tokyo.ac.jp** as the VPN server. Click the “Connect” button. 

![](img/win09-anyconnect-login.png){:.medium.center.border}

**Step F:** After clicking the “Connect” button, the following UTokyo Account authentication window appears. Log in with your UTokyo Account.

![](img/win09-anyconnect-login.png){:.medium.center.border}

{% include_relative _help_multiple_users.html %}
{% include_relative _help_mfa.html %}

**Step G:** If the window displaying “Connected: vpn1.adm.u-tokyo.ac.jp” appears as illustrated below, your device is connected to the VPN. Communication is performed via this VPN while connected to the University of Tokyo campus network. Except for some communication platforms such as Zoom and WebEx that do not require a VPN connection and e-journal sites, all communications occur via this VPN, connecting to the University of Tokyo campus network.

![](img/win10-vpn-connected.png){:.medium.center.border}

**Step H:** To view the current connection status, click on the “Cisco AnyConnect Secure Mobility Client” icon again. If the window displaying “Connected to vpn1.adm.u-tokyo.ac.jp” illustrated below appears, your device is connected to the UTokyo VPN.

To disconnect from the VPN, click the “Disconnect” button in this window.

![](img/win11-vpn-connected-window.png){:.medium.center.border}

---

[Back to the UTokyo VPN home page](.)
