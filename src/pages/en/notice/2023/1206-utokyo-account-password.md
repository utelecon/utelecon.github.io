---
title: "Correction of Password Expiration Period for UTokyo Account"
toc: false
---

<div style="text-align: right;">December 6, 2023</div>

We have recently discovered that **the password expiration period for UTokyo Account of some users was incorrectly set** due to a system malfunction. Today, we hereby announce that we have made a correction to the setting. We are sending an email to the affected users with the specific details of the correction (expiration date before and after the correction), and **ask that they change their UTokyo Account password from the [UTokyo Account User Menu](https://utacm.adm.u-tokyo.ac.jp/webmtn/LoginServlet) by the expiration date after the correction**. Note that the new password will have an infinite expiration period if multi-factor authentication (MFA) has been enabled at the time of the password change.

We apologize for any inconvenience this may cause.

If you have any questions about this problem, please contact the [Support Desk](/en/support/). Please let us know that your inquiry is about "Correction of Password Expiration Period for UTokyo Account" when you do so.

## Details of the problem

On March 9, 2023, we changed the handling of UTokyo Account passwords. While passwords were valid for 365 days (one year) before the change, now passwords do not expire infinitely if MFA is enabled, and valid for 397 days (one year plus one month) if MFA is not enabled. In addition, the criteria for the minimum number of characters required in a password has been changed from 8 to 12.

After this change, until April 21, 2023, the password expiration period was set infinitely when MFA was enabled. However, this behavior was inappropriate and wrong because passwords set before the change of handling may not meet the new criteria of the number of characters. The behavior itself has already been corrected, but the expiration period that was incorrectly set remained uncorrected, so we are correcting it this time.

Please note that all users who enabled MFA during the period when the behavior was inappropriate will be subject to the correction, regardless of the actual number of characters in the password, as passwords are stored in the system with encryption (hashing) and the original passwords are not known even to the administrator.

The corrected expiration date for those whose last password change was before 2023-01-06 (334 days before today) is 2024-01-06, which is 31 days after today, and for all others, it is 365 days after the last password change date.
