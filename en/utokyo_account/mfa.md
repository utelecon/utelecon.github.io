---
title: Using Multi-Factor Authentication for UTokyo Accounts
lang: en
---

## Introduction

In order to improve the security of UTokyo's IT systems, multi-factor authentication will be available for UTokyo Accounts starting September 27, 2021.

This page provides information about multi-factor authentication for UTokyo Accounts. Please check this page for any updates.

### Multi-Factor Authentication

Multi-factor authentication (MFA) is a security process in which users prove their identity by at least two pieces of evidence. In addition to passwords, users are asked to verify their identity via SMS, authentication applications, and other methods when signing in to their accounts.

MFA assures the user’s identity at a higher level and improves the account security. This reduces the risk of unauthorized sign-ins even if your password has been compromised.

## Implementation of Multi-Factor Authentication for UTokyo Accounts

MFA will be available for all UTokyo Accounts after the MFA launch date. Users can then set up MFA for their accounts following the procedure in the next section. Once MFA is enabled, users will be required to verify their identity via SMS or an authentication application every time they sign in to their UTokyo Accounts.

It is recommended to have MFA set up for better security of your UTokyo Account. However, MFA setup is not mandatory at this time, and you can continue to use your UTokyo Account without MFA. The only exception is users of the new UTokyo VPN for faculty members. The new UTokyo VPN will require MFA, so faculty members who wish to use the system will need to set up MFA. (For more information about UTokyo VPN, please refer to the [UTokyo Portal page (for faculty members only)](https://univtokyo.sharepoint.com/sites/utokyoportal/wiki/d/UTokyo_VPN.aspx).)

## MFA Initial Setup Procedure
<!-- 
英語版画像フォルダ：https://drive.google.com/drive/folders/1hEoxKmJBbxFKtPao5jvTZ81gaLQFUifw?usp=sharing 
PC上での一つ目のサインイン方法設定の画像まで収集できています。この先の収集お願いします！
-->

### Step 1: Apply for MFA Use 
<!--or "Apply to Enable MFA" -->
To start using MFA for your UTokyo Account, please submit an application form. 

1. Access the [UTokyo Account User Menu](https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet).
2. Sign in with your UTokyo Account username (10-digit Common ID) and password if prompted. 
3. Click the "MFA Application Form"<!--Replace form name later --> in the menu on the left. 
4. Read the MFA instructions carefully, then find "Enable MFA?" at the bottom of the page. Answer "Yes" and click "Save".<!-- item4 needs amendment later to match the actual form layout --> 

### Step 2： Set Up the First Authentication Method
<!-- 「本人確認方法」はMicrosoftのMFAウェブページの表現"authentication method"を採用 -->

The next step is to set up the authentication method for MFA.
You will be directed to the authentication method setup page when you sign in to UTokyo Account for the first time after submitting the MFA application form.

1. Access the [UTokyo Account Sign-in Page](https://login.adm.u-tokyo.ac.jp/utokyoaccount).
2. Sign in with your UTokyo Account username (10-digit Common ID) and password. 
3. Click "Next" in the "More information required" page. 
   ![](InitSetup_MoreInfoRequiredPage.png)
4. Add the first authentication method in the setup page. (Add the  method that will be mainly used. Other methods can be added later.) 
    ![](InitSetup_AuthenticatorApp01.png)

    The setup procedure varies depending on the authentication method you add. 
    - **Microsoft Authenticator App**:
        Using the Microsoft Authenticator app is convenient 
        because MFA for UTokyo Account uses Microsoft's services. 
        <!-- probably better to say "We recommend using Microsoft Authenticator app because .... ". 
            Need to check if we are recommending it? --> 
        <details>
            <summary>Setup Procedure</summary>
            <ol>
                <li>
                    Install the Microsoft Authenticator app on your smart phone.
                    The Android version can be downloaded from 
                    <a href="https://play.google.com/store/apps/details?id=com.azure.authenticator">Google Play</a> 
                    and the iPhone version from 
                    <a href="https://apps.apple.com/app/microsoft-authenticator/id983156458">App Store</a>. </li>
                <li>After installing the app, go back to the setup page. Click "Next" to continue setup for the Microsoft Authenticator setup. </li>
                <li>
                    The next procedure differs by the device that you working on.
                    <ul>
                        <li><strong>Smart Phone (the same device where you installed the Microsoft Authenticator app)</strong>：
                            Click "このリンクをクリックして、アカウントをアプリにペアリングします".
                            <!-- Please 1. check the exact English words that appear and 
                                        2. take a snapshot -->
                            Check that your UTokyo Account appears in the Microsoft Authenticator app.
                            <img src="xxxxxxxxxxxxxxxxx.png"></li>
                        
                        <li><strong>Other Devices (PC etc.)</strong>
                            <ol>
                                <li>Read the instructions to add your UTokyo Account 
                                    in the Microsoft Authenticator app, 
                                    and click "Next" to go to the QR code page.  
                                    <img src="InitSetup_AuthenticatorApp02.png"></li>
                                <li>Open the Microsoft Authenticator app on your smart phone, 
                                    select "Add account" from the icon in the upper-right, 
                                    then "Work or school account", and "Scan QR code".
                                    <img src="xxxxxxxxxxxxxxxxx.png"></li>
                                <li>Scan the QR code with your device's camera.</li>
                                <li>Check that your UTokyo Account appears on the app. 
                                    <img src="xxxxxxxxxxxxxx.png"></li>
                            </ol>
                        </li>
                        
                    </ul>
                </li>
            </ol>
        </details>

    - **Other Authenticatior Apps**: 
        If you already use other authenticator apps, such as Google's, 
        you may also use it for your UTokyo Account authentication. 
        <details>
            <summary>Setup Procedure</summary>
            <ol>
                <li>Click "I want to use a different authenticator app" in the middle of the setup page. 
                    <img src="InitSetup_AuthenticatorApp01.png"></li>
                <li>Follow the instructions until you reach the QR code page. </li>
                <li>Scan the QR code with your authenticator app and 
                    add complete the setup procedure. </li>
            </ol>
        </details>

    - **Phone Number**: 
        You can add your phone number, and receive a call or text message to verify your identity．
        <details>
            <summary>Setup Procedure</summary>
            <ol>
                <li>Click "I want to use a different authenticator app" in the middle of the setup page.                     
                    <img src="InitSetup_AuthenticatorApp01.png"></li>
                <li>When asked "Which method would you like to add?", select "Phone", 
                    and then click "Add".
                    <img src="xxxxxxxxxxxxxxxxx.png"></li>
                <li>When asked "What phone number would you like to use?", 
                    select the appropriate country code (+81 for Japan) and 
                    input your phone number. Also choose to either 
                    receive a text message with a verification code ("Text me a code") 
                    or a phone call ("Call me"). 
                    <img src="xxxxxxxxxxxxxxxx.png"></li>
                <li>Click "Next".</li>
                <li>You will receive a text or call on your phone to verify your identity. 
                    If you selected "Text me a code", you will receive an SMS message 
                    including a 6-digit verification code. Input the code in the setup page. 
                    If you selected "Call me", you will receive a call. 
                    Follow the instructions to verify your identity．</li>
                    <!-- Microsoft's page says, "You'll receive a phone call from Microsoft, 
                        asking you press the hashtag (#) sign on your mobile device to verify
                        your identity." -->
                    <!-- <mark>「#」を押せと言われるので，スマホでのキーパッドの出し方を説明しないと
                        立ち往生する人が出る．</mark> -->
            </ol>
        </details>

    5. You will be prompted to input your email address (if you haven't already done so).
        Please input an email address address OTHER THAN your ECCS Cloud Email if possible, 
        and click "Next".
        <img src="InitSetup_Email01.png">
        Input the 6-digit code sent to your email address, and click "Next".
        <img src="InitSetup_Email02.png">
    6. Next you will be taken to the "App Password" page, and asked to input your "app password name". 
        (The system may skip this step.) Input any name you like using alphanumeric charancters 
        and click "Next".（This "App Password" is used when signing in to apps or devices that don't support MFA. It will not be used for signing in with UTokyo Accounts.) 
        <img src="InitSetup_AppPassword01.png">
    7. A screen showing that you have successfully set up your security info will appear. Click "Done".
        <img src="InitSetup_Completed01.png">
    8. If you are taken to the "UTokyo Account Service Directory", your setup has been successfully completed. 


<!-- Step 3以降 coming soon -->
