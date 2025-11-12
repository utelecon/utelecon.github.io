---
title: UTokyo Account Identity Verification Service
breadcrumb:
  title: Identity Verification Service
---

## Overview

The UTokyo Account Identity Verification Service (hereinafter referred to as the "Identity Verification Service") is a system that allows you to verify your identity online using your [My Number Card (Individual Number Card of Japan)](https://www.digital.go.jp/en/policies/mynumber) that has been pre-linked with your UTokyo Account, in case you are unable to sign in to your UTokyo Account.

Specifically, it can be used in the following situations:

- When you fail to sign in to your UTokyo Account and want to reset it (e.g., when you have forgotten your password or need to reconfigure multi-factor authentication)
- When you need to retrieve cloud data after leaving the university (due to graduation, resignation, etc.) that you forgot to back up beforehand (i.e., when using the cloud data salvage service)
- When joining alumni services after graduation (As of September 2025, this service is under preparation.)

### Advantages

Normally, identity verification is performed manually, but with the Identity Verification Service, you can verify your identity anytime, anywhere. This allows you to quickly regain access to your UTokyo Account even when the office is closed, when you are in a hurry, or when you are unable to visit the office in person.

This is an especially effective method for those who do not have an IC card student/employee ID and are unable to come to the office.

Furthermore, your UTokyo Account will be revoked and you will be unable to sign in after you leave the university due to graduation, resignation, etc. However, since the Identity Verification Service uses your My Number Card, it can also be used for identity verification after you have left.

### Requirements

**To use the Identity Verification Service, you must complete the "[pre-link](#link)" procedure in advance while you are still able to sign in to your UTokyo Account**. This will link the authentication information on your My Number Card to your UTokyo Account[^4], making it available for identity verification.

[^4]: This link remains valid even after renewing your My Number Card or changing your smartphone model. For details, please refer to the [Pre-link Procedure](#link).

The following items are required for both the pre-link procedure and for the actual identity verification process:

- Your own My Number Card[^2]
- A smartphone (iOS / Android) capable of reading the My Number Card[^5]
- The 4-digit PIN (personal identification number) you registered when you received your My Number Card ([PIN for User Certificate for Digital Signature](https://faq.myna.go.jp/faq/show/3494)(in Japanese), [PIN for Card Info Input Support](https://faq.myna.go.jp/faq/show/2385)(in Japanese))

[^2]: As of September 2025, only physical cards are supported. So-called [My Number Card on smartphone](https://www.digital.go.jp/en/policies/mynumber/smartphone-certification) (digital certificates for Android or My Number Card on iPhone) cannot be used, but they are expected to become available once the digital identification app supports them.

[^5]: A list of compatible smartphones is available at <https://www.jpki.go.jp/prepare/pdf/nfclist.pdf> (in Japanese).

### Information to be Acquired

The Identity Verification Service uses your My Number Card, but it only acquires and retains the following information:

- An ID that is valid only within the Identity Verification Service to identify the user (called "linkage ID" in the service. Technically, it is a [PPID: Pairwise Pseudonymous Identifier](https://www.digital.go.jp/en/policies/mynumber/local-government/mykey-platform#guidance2).)
  - This ID can only be used for the purpose of "determining if the user is the same person," and it is designed so that personal information such as the My Number cannot be obtained using it.
  - Furthermore, even for the same person, a different ID is issued for services other than the Identity Verification Service, so it is not possible to match users across services using this ID.
- The name printed on the card face

Therefore, **neither the My Number itself nor PIN is stored in UTokyo's systems**[^3]. In addition, personal information other than the name (such as address, date of birth, gender, etc.) is not acquired. It also does not create a copy of your My Number Card on your smartphone.

[^3]: When receiving salary or honorarium from UTokyo, you may be asked to submit your My Number for tax and social security processing, but this is a separate procedure from the pre-link for the Identity Verification Service. Please handle this separately, even if you have already completed the pre-link for the Identity Verification Service.

For the operational policy, please refer to "[UTokyo Account規則](https://www.u-tokyo.ac.jp/gen01/reiki_int/reiki_pdf/r060321094.pdf)"(in Japanese) and "[Precautions for using external services managed and operated by Division for Information and Communication Systems](/en/docs/dics-terms/)". For the privacy policy of the smartphone app "Digital Identification App" (Digital Agency) used to read the My Number Card, please refer to "[デジタル認証アプリサービス個人情報保護方針](https://services.digital.go.jp/auth-and-sign/privacy-policy/)"(in Japanese).

## Pre-link Procedure
{:#link}

Please follow the steps below to perform the pre-link.

**[How to Start Using the Identity Verification Service](./link/)**{:.box.center}

In principle, the pre-link procedure only needs to be performed once and does not need to be done again when renewing your card or changing your smartphone model, unless you have deactivated the service.

- **In case of renewal or re-issuance of My Number Card, or renewal of the digital certificate**: You do not need to perform the pre-link again.
- **In case of changing your smartphone model**: You do not need to perform the pre-link again. However, if the Digital Identification App is not installed on your new smartphone, you will need to install the [Digital Identification App](https://services.digital.go.jp/en/auth-and-sign/) and complete the [user registration for the Digital Identification App](https://services.digital.go.jp/en/auth-and-sign/start-guide/).
- **If your digital certificate has been revoked due to expiration, loss, etc., and you have had it reissued, or if you have changed your My Number**: This is currently under investigation as of September 2025, but it is possible that the link will become invalid. Therefore, please perform the pre-link again just in case.

## Usage Procedures (Identity Verification Procedures)
{:#procedures}

To use the Identity Verification Service (i.e., to use it for identity verification), you must have completed the [pre-link](#link). If you become unable to sign in to your UTokyo Account without having completed the pre-link, you will need to verify your identity through other methods, such as in-person verification at the office. Please refer to the respective procedures for details.

### Password Reissue
{:#reissue-password}

**[If you forget your password](/en/utokyo_account/#forget-password)**{:.box.center}

### Reregistering for Multi-Factor Authentication
{:#mfa-reregister}

**[Reregistering Verification Method for UTokyo Accounts](/en/utokyo_account/mfa/reregister/)**{:.box.center}

### Cloud Data Salvage After Leaving the University
{:#cloud-salvage}

**[Trial Operation: About Cloud Data Salvage after UTokyo Account Revocation](/en/systems/leave/salvage/)**{:.box.center}

## Deleting the Link

(Under Preparation)

## Checking Configuration Status

(Under Preparation)

## Supplementary Notes

- If you have multiple UTokyo Accounts, the Identity Verification Service is not designed to be linked with multiple accounts. Therefore, you can only use it with the UTokyo Account assigned to you as a student.
