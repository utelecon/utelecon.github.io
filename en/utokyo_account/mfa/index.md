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

### Step 2: Set Up the First Authentication Method
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
        since MFA for UTokyo Account uses Microsoft's services. 
        <!-- probably better to say "We recommend using Microsoft Authenticator app because .... ". 
            Need to check if we are recommending it? --> 
        <details>
            <summary>Setup Procedure</summary>
            <ol>
                <li>
                    Install the Microsoft Authenticator app on your smartphone.
                    The Android version can be downloaded from 
                    <a href="https://play.google.com/store/apps/details?id=com.azure.authenticator">Google Play</a> 
                    and the iPhone version from 
                    <a href="https://apps.apple.com/app/microsoft-authenticator/id983156458">App Store</a>. </li>
                <li>After installing the app, go back to the setup page. Click "Next" to continue setup for the Microsoft Authenticator setup. </li>
                <li>
                    The next procedure differs by the device that you working on.
                    {% capture MSAuthenticatorSetupByDevice %}  
                    <ul>
                        <li><strong>Smartphone (the same device where you installed the Microsoft Authenticator app)</strong>：
                            <ol>
                                <li>Click "このリンクをクリックして、アカウントをアプリにペアリングします".</li>
                                    <!-- Please 1. check the exact English words that appear and 
                                            2. take a snapshot -->
                                <li>Check that your UTokyo Account appears in the 
                                    Microsoft Authenticator app.
                                    <img src="xxxxxxxxxxxxxxxxx.png"></li>
                            </ol>
                        </li>
                        <li><strong>Other Devices (PC etc.)</strong>
                            <ol>
                                <li>Read the instructions and  
                                    click "Next" to go to the QR code page.  
                                    <img src="InitSetup_AuthenticatorApp02.png"></li>
                                <li>Open the Microsoft Authenticator app on your smartphone, 
                                    select "Add account" from the icon in the upper-right, 
                                    then "Work or school account", and "Scan QR code".
                                    <img src="xxxxxxxxxxxxxxxxx.png"></li>
                                <li>Scan the QR code with your device's camera.</li>
                                <li>Check that your UTokyo Account appears on the app. 
                                    <img src="xxxxxxxxxxxxxx.png"></li>
                            </ol>
                        </li>   
                    </ul>{% endcapture %}
                    {{ MSAuthenticatorSetupByDevice }} <!-- render caputured content -->
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
                    complete the setup procedure. </li>
            </ol>
        </details>

    - **Phone Number**: 
        You can add your phone number and receive a call or text message to verify your identity．
        <details>
            <summary>Setup Procedure</summary>
            <ol>
                <li>Click "I want to use a different authenticator app" in the middle of the setup page.                     <img src="InitSetup_AuthenticatorApp01.png"></li>
                <li>For "Which method would you like to add?", select "Phone", 
                    and then click "Add".
                    <img src="xxxxxxxxxxxxxxxxx.png"></li>
                {% capture PhoneNumberSetup %}
                <li>For "What phone number would you like to use?", 
                    select the appropriate country code (+81 for Japan) and 
                    input your phone number. Also choose to either 
                    receive a text message with a verification code ("Text me a code") 
                    or a phone call ("Call me"). 
                    <img src="xxxxxxxxxxxxxxxx.png"></li>
                <li>Click "Next".</li>
                <li>You will receive a text or call on your phone to verify your identity. 
                    If you selected "Text me a code", you will receive an SMS message 
                    with a 6-digit verification code. Input the code in the setup page. 
                    If you selected "Call me", you will receive a call. 
                    Follow the instructions to verify your identity．</li>
                    <!-- Microsoft's page says, "You'll receive a phone call from Microsoft, 
                        asking you press the hashtag (#) sign on your mobile device to verify
                        your identity." -->
                    <!-- <mark>「#」を押せと言われるので，スマホでのキーパッドの出し方を説明しないと
                        立ち往生する人が出る．</mark> -->
                {% endcapture %}
                {{ PhoneNumberSetup }} <!-- render captured content -->
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

### Step3: Add Alternative Authentication Methods
**Multiple authentication methods can be set up for MFA. We recommend that you add more than one method.** 
Setting up multiple authentication methods reduces the risk of being completely locked out of your UTokyo Account. Even if your usual authentication method does not work (due to malfunction, changed phone number, etc.), you will still be able to sign in using other methods if you have set them up in advance. 

<!-- 「多要素認証の設定画面」は画面トップに"Security info"と書いてあるので、"Security info page"と訳した。-->
Alternative authentication methods can be added from **[Security info page](https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp)**. 
Below are the procedures to add different authentication methods.
<!-- <mark>TODO この手順がうまくいかないときのヘルプ：サインインが求められてしかも本人確認が求められたら？</mark> -->

- **Microsoft Authenticator App**: Using the Microsoft Authenticator app is convenient 
        since MFA for UTokyo Account uses Microsoft's services. If you possess more than one smartphone,
        you may add those phones as alternative authentication methods. 
    <details>
           <summary>Setup Procedure</summary>
            <ol>
                <li>
                    Install the Microsoft Authenticator app on your smartphone 
                    (if you haven't already done so).
                    The Android version can be downloaded from 
                    <a href="https://play.google.com/store/apps/details?id=com.azure.authenticator">Google Play</a> 
                    and the iPhone version from 
                    <a href="https://apps.apple.com/app/microsoft-authenticator/id983156458">App Store</a>. </li>
                <li>Click "Add method" in the 
                    <a href="https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp">Security info page</a>.
                    <img src="InitSetup_Completed02.png"></li>
                <li>For "Which method would you like to add?", 
                    select "Authenticator app", and click "Add".</li>
                <li>Click "Next" on the "Start by getting the app" screen. </li>
                <li>
                    The next procedure differs by the device that you working on.
                    {{ MSAuthenticatorSetupByDevice }} 
                    <!-- Reusing the same explanation in Step2 -->
                </li>
            </ol>
        </details>

- **Other Authenticator Apps**: 
    <details>
        <summary>Setup Procedure</summary>
        <ol>
            <li>Click "Add method" in the 
                <a href="https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp">Security info page</a>.
                <img src="InitSetup_Completed02.png"></li>
                <li>For "Which method would you like to add?", 
                    select "Authenticator app", and click "Add".</li>
            <li>Click "I want to use a different authenticator app".</li>
            <li>Follow the instructions until you reach the QR code page. </li>
            <li>Scan the QR code with your authenticator app and 
                complete the setup procedure. </li>
        </ol>
    </details>

- **Phone Number**:
    You can add your phone number and receive a call or text message to verify your identity．
    There are three types of phones that can be added- "Phone", "Alternate phone", and "Office phone". 
    You may add one phone number of each type 
    (i.e. a total of three phone numbers can be added as your authentication method). 
    The description of each phone type is as follows: 
    - **Phone**：This is your main phone, such as your mobile phone. You can verify your identity either by receiving an SMS message or phone call. If you added your phone number as your first authentication method, it should be automatically become "Phone".
    - **"Alternate phone"**：This is a backup phone you can add, such as your landline. You can only receive phone calls (SMS is not available) to verify your identity using this phone.
    - **Office phone**：This is another backup phone you can add, such as your company (university)
         phone. You can only receive phone calls (SMS is not available) to verify your identity 
         using this phone. You can add your extension number (a short number that you input after
         calling main office number to reach a specific person, team, etc. within the office). 
        <!-- 「内線番号」の説明を少し変えました。当たり前なので必要ないかもしれません。-->
        <details>
            <summary>Setup Procedure</summary>
            <ol>
                <li>Click "Add method" in the 
                    <a href="https://mysignins.microsoft.com/security-info?domain_hint=utac.u-tokyo.ac.jp">Security info page</a>.
                    <img src="InitSetup_Completed02.png"></li>
                <li>For "Which method would you like to add?", 
                    select "Authenticator app", and click "Add".</li>
                {{ PhoneNumberSetup }} <!--  reuse the same content in Step2 -->
            </ol>
        </details>

In the screen that appears after clicking "Add method", "App password" and "Email" will also show up as choices for "Which method would you like to add?". However, please be aware that these cannot be used for sign-in authentication (they are for other purposes).

### Step 4: Try Signing In

The last step of the initial setup procedure is checking that you can sign in to your UTokyo Accouwt using MFA.

1. Access the [UTokyo Account Sign-in page](https://login.adm.u-tokyo.ac.jp/utokyoaccount).
2. **Only for users taken to the "UTokyo Account Service Directory" page** (Users who see the sign-in screen can skip this step): Click the circle in the upper-right corner that shows either your user photo, initials, or an icon of a person. Then click "Sign out". 
<img src="xxxxxxxxxxxxxxx.png">
 Once you are signed out, access the [UTokyo Account Sign-in page](https://login.adm.u-tokyo.ac.jp/utokyoaccount) again.
3. If the sign-in screen appears, enter your UTokyo Account username (10-digit Common ID) and password and click "Sign in".
4. Verify your identity using MFA. The procedure differs by the authentication method you use. Please follow the instructions on your screen. 
    - **Microsoft Authenticator App**：A notification will be sent to your phone to approve the sign-in request in the app. Click "Approve". <img src="xxxxxxxxxxxxxxx.png"> 
    - **Other Authenticator Apps**：You will see a 6-digit code for your account in the authenticator app. Enter the code in the sign-in page. <img src="xxxxxxxxxxxxxxx.png">
    - **Phone Number (verification via text)**：An SMS message with a 6-digit code will be sent to your phone. Enter the code in the sign-in page and click "Verify". <img src="xxxxxxxxxxxxxxx.png">
    - **Phone Number (verification via call)**： You will receive a phone call, asking you to press the pound key (#) on your phone. Press the key and end the call.（To display the pound key on your smartphone during the call, press the "keypad" button.)
5. You have successfully signed in if you are taken to the "UTokyo Account Service Directory" page. 

When you sign in, one of the methods you set (usually the first one you set) will be automatically selected as the default identification method. If you want to use a different identification method, click on the "Having trouble? Click on the "Sign in with another method" link on the screen. If you want to change the default method, please follow the instructions below.

Please note that your default sign-in method is automatically chosen from the authentification methods you set up (usually the method added first is chosen). If you wish to sign in with a different method, click the "Having trouble? Sign in another way" link. The default sign-in method can also be changed following the procedure in the next section.


<!-- more to come -->
