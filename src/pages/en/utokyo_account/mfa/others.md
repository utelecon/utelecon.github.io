---
title: Other Information About the Multi-Factor Authentication for UTokyo Accounts
breadcrumb:
  title: Other Information
---

## Hardware Tokens (for Faculty Members)
{:#hardware-token}

Authentication apps and phone numbers (SMS or phone calls) are the standard verification methods for MFA. However, for faculty members who are unable to register any of the verification methods, such as those who do not have smartphones, we offer a device called “hardware token” as an alternative. Please refer to [UTokyo Portal (only for faculty members)](https://univtokyo.sharepoint.com/sites/utokyoportal/wiki/d/UTokyo_Account_Token.aspx) for details.

## Use the 6-digit Code in Microsoft Authenticator to Sign In
{:#msauth-totp}

If you are using Microsoft Authenticator for MFA, you can verify your identity by entering the 6-digit code displayed on the app instead of approving the sign-in after receiving a notification on your app (which is the standard method). This method is available even when your phone is offline and is resilient against network failure.

1. Click the “Sign in another way” (or “I can’t use my Microsoft Authenticator app right now.”) link in the verification screen that appears after entering your username (10-digit number) and password for the UTokyo Account.
1. In the following screen, click “Use a verification code from my mobile app” (or “Use a verification code”).
1. In the following screen, you will be asked to enter the verification code with the message “Enter code” (or “Enter the code displayed in the authenticator app on your mobile device​​”). Obtain the code (6-digit number) from the Microsoft Authenticator App by following steps below and enter the code.
   1. Launch the Microsoft Authenticator app.
   1. Select “The University of Tokyo” from the list displayed.
   1. In the following screen, the verification code (6-digit number) is displayed below the “One-time password code”.
   1. Enter the code in the sign-in screen and click “Sign in” (or “Verify”) before the countdown on the left in the app screen becomes 0.
      <br>* When the countdown reaches 0, the verification code turns into a new one. In this case, enter the new code instead of the old one.
1. You can now sign in to your UTokyo Account.

## Irregular Behaviors During Verification 
{:#irregular}

Normally, when you sign in with MFA, you first enter your password and then verify your identity with MFA.

However, the following behaviors can happen on occasion.

- You are required to verify your identity with MFA two times in a row.
- You are required to verify your identity with MFA although you were not asked to enter your password (the system skips password inquiry).
- You are not asked to verify your identity with MFA although you entered your password.

These behaviors are due to the connection process between multiple systems concerning the UTokyo Account. In these cases, please follow the instructions on the screen to sign in. We apologize for the inconvenience.

## About “we require additional information to verify your account” Error
{:#unknown-error}

![](redirection_error.png)

When you sign in to the UTokyo Account, you may receive a “For security reasons, we require additional information  to verify your account” error as in the image above depending on the MFA setting. This may occur when you apply for MFA use (Step 4) before setting up the verification methods (Step 1, Step 2) in [the initial setup procedures of MFA](initial/). Please register the verification methods by following the procedures in “[Step 1: Set Up the First Verification Method](initial/#first)” and “[Step 2: Add Alternative Verification Methods](initial/#alternative)”.
