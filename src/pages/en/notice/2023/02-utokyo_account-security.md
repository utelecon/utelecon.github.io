---
title: Notice of Changes to Microsoft Authenticator Sign-In Approval Procedures and UTokyo Account Security Improvement Efforts
---

To improve the security of our information systems, we have been providing Multi-Factor Authentication (MFA) for UTokyo Account since September 27, 2021. In order to enhance the security of the "Microsoft Authenticator" application, which is the most widely used verification method, the sign-in approval procedure will be changed as follows starting February 27, 2023.

In addition, we are considering changing the password validity period and the number of characters in the password to ensure smooth use of UTokyo Account while addressing security considerations such as MFA. We also plan to provide more advanced verification methods in the future.

The information security environment has been deteriorating due to the worsening social situation. Ensuring the security of the UTokyo Account is critical to protecting not only individual users' information, but also the university's information assets. We strongly recommend the use of MFA for all UTokyo Account users. If you are not already using MFA, we ask for your cooperation in starting to use it. For instructions on how to start using multi-factor authentication, please refer to the "[Initial Setup Procedures for Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/initial)" page.

## Sign-in approval procedure for the "Microsoft Authenticator" application will change on February 27

The "Microsoft Authenticator" application is one of the verification method for MFA in UTokyo Account. Starting February 27, the procedure for approving notifications on your phone when signing in using the "Microsoft Authenticator" app will be changed to enhance security.

### New sign-in approval procedure

Previously, when signing in using the "Microsoft Authenticator" app, a notification was sent to the phone and the user had to press a button on the app to approve the sign-in. With the new approval procedure, a two-digit number is displayed on the screen after signing in, and the user needs to enter the two-digit number on the app.
![](/notice/2023/number_matching.png)

If you have already registered the "Microsoft Authenticator" app as a verification method, you can continue to use your current app even if the approval procedure is changed, so there is no need to register your verification method again.

Note: If you wish to register a new "Microsoft Authenticator" app, please follow the instructions in "[Using Multi-Factor Authentication for UTokyo Accounts](/en/utokyo_account/mfa/)".

### Background of the change

The previous approval procedure for the "Microsoft Authenticator" app was to press a button on a notification sent to your phone to approve sign-in. However, an attack technique called an MFA fatigue attack is now attracting attention. Fatigue attacks on MFA are an attack method in which an attacker who has stolen a user's ID and password aims at a user's incorrect operation in order to break through MFA. Specifically, the attackers attempt to cause the user to approve a notification that he/she does not remember, to cause the user to press the approve button by mistake, or to cause a user who happens to be trying to sign in at the same time as the attacker to approve the attacker's sign-in by mistake.

The new approval procedure requires users to enter the numbers displayed on the sign-in screen into the app, thus the MFA will not be approved unless the numbers displayed on the attacker's screen are entered. This reduces the risk of false sign-in due to fatigue attacks.

## We are considering changing the password validity period and number of characters for UTokyo Account

We are currently considering changing the validity period and number of characters for UTokyo Account passwords. Please check back soon for details.

## We are working on making UTokyo Account safer and smoother to use

We will continue to improve UTokyo Account to make it safer and smoother to use. As part of this effort, we are planning to enable the use of FIDO security keys as a more advanced verification method in the next few months. We will announce the detailed schedule and usage on the utelecon portal site when it becomes available.


## Maintenance of UTAS and ITC-LMS

Due to system maintenance related to UTokyo Account sign-in, UTAS and ITC-LMS will be unavailable for a short period of time during the following period. Please try to use them at different times.

- UTAS
    - 7 pm to 8 pm on Tuesday, February 21
- ITC-LMS
    - 12 pm to 1 pm on Tuesday, February 21
