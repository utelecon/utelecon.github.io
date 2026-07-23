---
title: Device Management Service for Departmental ChromeOS Devices
breadcrumb:
  title: ChromeOS device management services
---

## Overview

When a department deploys ChromeOS devices, the Information Technology Center provides a service for configuring those devices to enable centralized management. By using this service, access to devices can be restricted so that only [ECCS Cloud Email](/en/google/) can be used to sign in.

This page explains the standard services offered. However, actual service details will be determined on a case-by-case basis after consultation with the department.

### Standard Configuration

The standard configuration is as follows.

- Departments wishing to use this service (hereafter referred to as "Department") are required to prepare ChromeOS devices (including displays, keyboards, and mice), a network environment, and CEU (Chrome Education Upgrade) licenses.
  - The required network environments are as follows.
    - A VLAN designated by the Information Technology Center will be assigned to a specified port on the UTNET switch. The Department is responsible for preparing the equipment required to connect the devices to that port, such as routers, switching hubs, and network cabling.
    - Functions for loop detection and for allowing connections only from designated devices are required.
    - A dedicated network for centrally managed ChromeOS devices is required.
      - WiFi LAN services that require users to authenticate with their individual accounts, such as UTokyo WiFi, cannot be used.
    - Either wired or wireless network connections may be used.
- The university-wide security firewall will be used to provide DHCP and firewall services.
- The Information Technology Center will perform the necessary configuration during the initial setup and when faulty devices are replaced.
- In the event of system failures or security incidents, the Department and the Information Technology Center will work together to address the issue.

### Usage Fee

The usage fee for standard configuration is JPY 10,000 per device per year. Depending on the details (which are subject to consultation), optional configuration will increase the fee to JPY 20,000 or JPY 30,000 per device.

## Inquiries and Applications

Please fill out the following form "Device Management Service for Departmental ChromeOS Devices" (only in Japanese). Please note that signing in with your ECCS Cloud Email is required to complete the form.

**[Device Management Service for Departmental ChromeOS Devices](https://docs.google.com/forms/d/e/1FAIpQLSdrddEnD_see3tvDMfkWL3RktJyt0vremITPM2u6NdndhpCYQ/viewform)**{:.box.center}

## Supplementary Information

### Equipment

- There are several ways to deploy ChromeOS devices (Chromebox and Chromebook), such as purchasing or leasing. However, purchasing them, including spare units, is more cost-effective. For your reference, the estimated costs for equipment to be prepared by the department are as follows.
  - Devices, displays, keyboards, mice, CEU license: Around JPY 100,000 in total per device.
  - Switching hub with required functions such as loop detection: Around JPY 10,000 per port.
- You can use the Device Management Service for Departmental ChromeOS Devices with your existing equipment. However, please note that ChromeOS devices have an [Auto Update Expiration](https://support.google.com/chrome/a/answer/6220366?hl=en) date. Once this period has passed, the devices can no longer be centrally managed.

### Other Information

- It is possible to apply different policies (such as restricting available applications) from those of standard [ECCS ChromeOS devices](/eccs/chromeos/) (only in Japanese) to your centrally managed devices. However, please note that this is an optional setting and will incur an additional usage fee.
  - Currently, we have not found a way to grant departments direct access to a restricted management console. Therefore, the Information Technology Center will handle the configuration on our end based on the setting requirements you provide.
- If your department already has a Google Workspace for Education subscription, it is possible to centrally manage ChromeOS devices without using this service. Please add CEU licenses to your department's Google Workspace tenant.
  - Please note that it appears to be difficult for organizations within the university to obtain a new Google Workspace for Education contract separate from the university-wide contract.
