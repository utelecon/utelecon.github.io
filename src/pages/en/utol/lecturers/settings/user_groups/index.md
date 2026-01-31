---
title: Using user group function in UTOL (for Course Instructors / TAs)
breadcrumb:
  title: User groups
---

## What is the user group?
{:#about}
In the courses on [UTOL](../../../), you can create units called “user groups” from among the students taking the course. These are used to make course contents (such as [course materials](../../materials/) and [assignments](../../assignments/)) available only to certain students, allowing you to choose to make the contents available only to certain user groups.

If you frequently restrict access to contents to certain students, you can avoid the trouble of specifying which students can access them each time by registering user groups in advance. One possible case of use is when you want to divide the students into several groups and make different contents available for each group in a group work project.

## Notes for using the user group function
{:#details}
- Only the course designer or instructor can manage user groups (register, change, delete). TAs cannot manage them.
- One student can be registered in multiple user groups.
- When publishing contents, you can select multiple user groups as the target for publication.

### Relation to the course group
{:#course_group}
When you register a [course group](../course_group/), a user group with members who are enrolled in each of the grouped courses are automatically registered with the name “(academic year)\_(department code)\_(timetable code)-group”. This is called the “default user group”. If the enrolled students are changed on UTAS after registration, the changes will be reflected in the list of members of each default user group through system integration.

## Managing user groups
{:#manage}
This section explains the procedures for managing (registering, changing, and deleting) user groups.

### Registering a user group
{:#register}
There are two ways to register a user group.

- Registration by selecting on the screen
![](register_web.png){:.medium}
    - With this method you can select members on the UTOL screen and register them as a single user group.
    - This is suitable for cases where you are registering only one user group or where there are only a few members to register.

- Registration by uploading an Excel file
![](register_excel.png){:.border}{:.medium}
    - Use this method to register one or more user groups by uploading an Excel file containing information about the user groups and their members.
    - This is suitable for registering multiple user groups at once or when electronic data is available on the student's Common IDs or student ID numbers.

#### Registration by selecting on the screen
{:#web}
1. Click on the icon with three lines in the top left corner while the course you want to use is open.
![](sidebar.png){:.border}
1. Click on "User group settings" under "Course settings".
    <details>
    <summary>If there are no “Course settings”</summary>
        You may not have <a href=#details>the authority required to manage user groups</a>. If you consider it necessary, please consult the course instructor about <a href=../course_participants/>granting the authority</a>.
    </details>

    ![](sidebar_ug.png){:.border}{:.medium}
1. Click on the “+” button on the right of "Manage User Group".
![](ug_manage_plus.png){:.border}{:.medium}
1. Enter the “User group name” and “Group summary” (optional). This information will be used to distinguish between user groups later.
![](label.png)
1. Select all the checkboxes for the users you want to add to the user group and click on the "Confirm" button to proceed. (You can select all the displayed users at once by selecting the checkbox directly "Select group members".)
![](checkboxes.png)
1. Check the details, and if there are no problems, click on the “Register” button.
![](confirm.png)
1. When the "Registration is completed." message appears, the registration process has been completed.
![](finished.png)

#### Registration by uploading an Excel file
{:#excel}
1. Click on the icon with three lines in the top left corner while the course you want to use is open.
![](sidebar.png){:.border}{:.medium}
1. Click "User group settings" under "Course settings".
    <details>
    <summary>If there are no "Course settings"</summary>
        You may not have <a href=#details>the authority required to manage user groups</a>. If you consider it necessary, please consult the course instructor about <a href=../course_participants/>granting the authority</a>.
    </details>

    ![](sidebar_ug.png){:.border}{:.medium}
1. Click on the "Batch registration" button on the right of "Manage User Group".
![](ug_manage_whole.png)
1. Click on “Download Format” to download the Excel file for data entry.
![](format_download.png)
1. Open the downloaded Excel file.
![](register_excel.png){:.border}{:.medium}
1. Please follow the procedure below to enter the information for each user group you wish to register. Note that each user group corresponds to a single row in the Excel file. In other words, **you cannot use multiple rows to describe a single user group**.
    - First, enter the "User Group Name" and "Details" (optional). This information will be used to distinguish between user groups later.
    - Next, enter either the Common ID or student ID number for all members. If it is a Common ID, enter it in the "User ID" field, and if it is a student ID number, enter it in the "User Number" field. Please enter the Common ID and student ID number in one field, separated by a semicolon.
  
    The following image is an example of how to enter the information.
![](sample.png){:.border}
1. Once you have finished entering the data, please save it.
1. After selecting the Excel file you entered by clicking on the "Reference" button on the UTOL screen, click the "Confirm" button to proceed.
![](browse.png)
1. Check the details, and if there are no problems, click on the “Register” button.
![](confirm_excel.png)
1. When the "Registration is completed." message appears, the registration process has been completed.
![](finished.png)

### Changing the user groups
{:#edit}
This section explains the procedure for changing registered user groups, such as adding and deleting members.
1. Click on the icon with three lines in the top left corner while the course you want to use is open.
![](sidebar.png){:.border}{:.medium}
1. Click "User group settings" under "Course settings".
    <details>
    <summary>If there are no "Course settings"</summary>
         You may not have <a href=#details>the authority required to manage user groups</a>. If you consider it necessary, please consult the course instructor about <a href=../course_participants/>granting the authority</a>.
    </details>

    ![](sidebar_ug.png){:.border}{:.medium}
1. Click on the user group name you want to change in the "User Group List".
![](fix.png)
1. The same screen as the one used for [registration by selecting on the screen](#web) will be displayed. Make any necessary changes to the items you want to change, and then click the "Confirm" button to proceed.
1. Check the details, and if there are no problems, click on the "Register" button.
![](confirm.png)
1. When the "Registration is completed." message appears, the registration process has been completed.
![](finished.png)

### Deleting user groups
{:#remove}
This section explains the procedure for deleting user groups.
1. Click on the icon with three lines in the top left corner while the course you want to use is open.
![](sidebar.png){:.border}{:.medium}
1. Click "User group settings" under "Course settings".
    <details>
    <summary>If there are no "Course settings"</summary>
         You may not have <a href=#details>the authority required to manage user groups</a>. If you consider it necessary, please consult the course instructor about <a href=../course_participants/>granting the authority</a>.
    </details>

    ![](sidebar_ug.png){:.border}{:.medium}
1. Open the "Actions" menu for the user group you want to delete in the "User Group List" and click on the" Delete" button.
![](del.png)
1. The message "Are you sure you wish to delete (user group name)?" will be displayed. Please check that the target group is correct and click the "Delete" button.
![](confirm_del.png){:.small}
1. If the target group has been deleted from the "User Group List", the registration process has been completed.

## Publishing content only to selected user groups
{:#access_management}
This page explains the procedure for publishing content (e.g., course materials, assignments) only to selected user groups. The example here is for [assignments](../../assignments/), but the same procedure applies to other types of content.
1. Open the target course.
1. Click the "+" button in the "Assignments" box to register a new assignment. To edit an existing assignment, click the assignment name you want to edit in the "Assignments" box.
![](assignments.png)
1. The new registration/edit assignment screen will appear. After entering and editing the other items, select the "Selected user group" in the "Published target" as shown below.
![](selected_ug.png)
1. From the "User Group List", select all the checkboxes for the user groups of published targets. When finished, click the "Confirm" button. (Selecting the checkbox directly below the "User Group List" will allow you to select all the displayed user groups simultaneously.)
![](assignments_ug_checkboxes.png)
1. Check the details, and if there are no problems, click on "Register" button.
![](confirm_assignments.png){:.medium}
1. You are done if the message "Registration is completed." is displayed.
![](finished.png)
