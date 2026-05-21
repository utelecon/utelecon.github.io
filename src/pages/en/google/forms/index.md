---
title: Google Forms
breadcrumb:
  title: Google Forms
---

This page explains how to use Google Forms. It also outlines potential use cases tailored for utilizing the service within the University of Tokyo.

## About Google Forms

Google Forms is a tool that allows you to easily create forms and surveys to collect information. 
It features the following capabilities:

* You can create forms easily.
* You can also use form templates.
* You can clearly organize and analyze collected information.
* You can collaborate throughout the entire process.

This page introduces the basic workflow of creating and responding to forms, as well as the functions and settings available when editing them. Please note that the instructions provided here assume you are operating from a PC. For detailed usage and specific procedures, please refer to the Official Help.

You can access Google Forms by using your ECCS Cloud Email account (the University of Tokyo's Google account). By using your ECCS Cloud Email account, you can restrict form access exclusively to UTokyo members.

## Potential Use Cases

### Using as a Survey Form

This section introduces how to use Google Forms as a survey form.Please note that [UTOL](/utol/lecturers/surveys/) also offers similar features for conducting surveys within a class.

Potential scenarios for use include class attendance forms, event registration, and feedback surveys.By[メcollecting email addresses],(#collect_email_addresses)you can send detailed event information directly to the respondents' email addresses.

#### Using as an Attendance Form

When instructors use a survey form as a class attendance form,please note that[UTOL](/utol/lecturers/attendances/)also provides similar capabilities. The respective advantages of Google Forms and UTOL are as follows:

* Advantages of using Google Forms
  * You can easily share survey results in lectures that invite external lecturers, where using UTOL might be difficult.
  * You can conduct anonymous surveys by turning off the email address collection setting.
* Advantages of using UTOL
  * You can configure settings for late registration.
  * You do not need to ask respondents to enter personal information, as individuals can be identified based on the UTokyo Account used to log in to UTOL.

### Using as a Quiz

This section introduces how to use Google Forms for quizzes.

This is intended for instructors to check students' understanding of the lecture.As with the class attendance forms,[UTOL](/utol/lecturers/quizzes/)also offers similar features.

* Advantages of using Google Forms
  * You can allow non-registered participants (such as auditors) to respond without requiring any special configurations.
  * You can allow users to upload files directly within the form.
* Advantages of using UTOL
  * You can set time limits and response deadlines.
  * You can immediately check the response status of registered students.
  * You can immediately download grading data.

If you wish to use grading features, please refer to the [Quiz Settings](#テストに関する設定)section described later in this document.

## Basic Flow for Creating a Form

This section introduces the general flow for creating a form. For more detailed information on usage, please refer to "[How to Use Google Forms](https://support.google.com/docs/answer/6281888?hl=ja&co=GENIE.Platform%3DDesktop)"（official help）and the sections below "[Useful Features When Editing a Form](#useful_features_for_form_editing)" on this page.

The overall flow for creating a form is as follows:

* Step 1：[Create a New Form](#create_new_form)
* Step 2：[Create Questions](#create_questions)
* Step 3：[Publish & Share](#publish_and_share)
* Step 4：[Check Responses](#check_answer)

### Step 1: Create a New Form
{:#create_new_form}

1. Go to[https://docs.google.com/forms/](https://docs.google.com/forms/)．
2. From the "Create a new form" section, select a template for the type of form you want to create.

### Step 2: Create Questions
{:#create_questions}

A form consists of any number of questions. The following explains how to create questions. Please also refer to "[Edit a Form](https://support.google.com/docs/answer/2839737?hl=ja&ref_topic=6063584&sjid=2142759939340137168-NC#zippy=)" (official help)as needed.

![](./creating-form.png){:.medium}
1. Click the "Add question" button to add a question.
2. Enter the content of the question.
3. Set the question format.
   * For more specific instructions, see"[Choose a question format for your form](https://support.google.com/docs/answer/7322334?hl=ja&ref_topic=6063584&sjid=2142759939340137168-NC#zippy=)" (official help).
   * Please note that file upload answer options cannot be used in forms stored in shared drives.
4. For multiple-choice answer formats, configure the answer options.

### Step 3: Publish & Share
{:#publish_and_share}

This section explains how to publish a completed form so others can respond, and how to share it for collaborative editing. Please also refer to "[Publish a form and share it with respondents](https://support.google.com/docs/answer/2839588?hl=ja&ref_topic=6063592&sjid=18353895898968559699-NC)" (official help).

Please note that there are settings you should configure before publishing the form, such as settings for use as a test or for recording responses. Check the "[Form Settings](#form_settings)section at the bottom of this page and configure as needed.

#### Publishing the Form

You can publish the form to accept responses by clicking the "Publish" button in the upper right of the page.

![](./publishing-form.png){:.medium}

After publishing, you can stop accepting responses using the "Accepting responses" button. Simply publishing the form does not allow anyone to respond — respondents must be given access through the "[Sharing with Respondents](#sharing_with_respondents)" step below.

#### Sharing the Form

there are two types of people you may be sharing with: [respondents](#sharing_with_respondents)and[editors](#sharing_with_editors)．Accordingly, there are two types of permissions — editing permission and response permission. Respondents should be given response permission, while editors should be given editing permission. Editing permission allows the holder to edit the form and view responses. Be careful not to share a link granting editing permission with someone who is only meant to respond, as doing so would allow them to edit the form and could lead to a data breach of the collected information.

Additionally, when sharing forms that collect sensitive information such as personal data, be aware that using the "[Show summary of responses](https://support.google.com/docs/answer/2839588?hl=ja#zippy=)"（official help）feature may lead to information leaks.

You can change the scope of users who can respond to the form by clicking the respective buttons for editors and respondents that display permission levels, such as "Restricted" or "The University of Tokyo ECCS Cloud Email."

![](./sharing-form.png){:.medium}

##### Sharing with Respondents
{:#sharing_with_respondents}

To have others respond to your form, share the response link by following these steps:

1. Click the link icon in the upper right ("Copy link for respondents").
2. Copy the response link.
   * You can also share a shortened link by turning on "Shorten URL."

![image4](./sharing-form-link.png)

##### Sharing with Editors
{:#sharing_with_editors}

To allow others to edit the form, share editing permission using one of the following methods:

* Directly entering the user: Share by entering the email address of the person you want to share with.
* Copying and sharing the URL from the browser toolbar: You must first allow the editor view for "Anyone with the link" or "The University of Tokyo ECCS Cloud EMail" in the editor selection screen.

#### Managing Visibility

From the "Manage" button under Respondents, you can limit visibility to "Anyone with the link" or "The University of Tokyo ECCS Cloud Email." Using "University of Tokyo ECCS Cloud Mail" restricts respondents to members within the university. (In this case, people outside the university cannot respond to or view the form's questions, even if they have the link.)

## Step 4: Check Responses
{:#check_answer}

This section introduces how to review the responses you have collected.

Switch from the "Questions" tab (where you edit the form) to the "Responses" tab to view responses by question or by individual respondent. Visualization tools such as graphs are also automatically applied based on the results.

![](./form-result.png){:.medium}

### Exporting to a Spreadsheet
You can configure the results to be automatically exported to a spreadsheet by clicking the "Link to Sheets" button. (Responses already collected will also be transferred to the spreadsheet.)

![image6](./linking-spreadsheet.png){:.medium}

This is useful when you want to manage responses using spreadsheet features. Responses exported to the spreadsheet can be freely edited.

For more details, refer to "[Choose where to save form responses](https://support.google.com/docs/answer/2917686?hl=ja&ref_topic=6063592&sjid=18353895898968559699-NC)"（official help）.

#### Deleting Responses

You can delete some or all responses. However, once a response is deleted, it cannot be recovered, so please be careful. Also note that deleting responses does not remove them from any linked spreadsheet.

## Basic Flow for Responding to a Form

This section explains the flow for respondents to answer a Google Form.

You can respond by accessing the "link for respondents" created by the form owner. Select and fill in all required fields, then click the "Submit" button to record your response.

When using a browser signed in to a Google account, responses in progress are automatically saved as a draft for 30 days. Note that this feature is only available in an online environment and when "the form owner has not disabled auto-save".

### When "Access Required" Is Displayed

There are two main possible causes. Please also refer to "[Get permission to open a Google Form](https://support.google.com/docs/answer/160166?sjid=9391686295985041241-NC)"（official help）for more details.

* You do not have permission to open the form
  * You need to obtain permission.
  * You can optionally enter a message and request access via the "Request access" button, which will notify the form owner.
    ![](./access-trouble.png){:.small}
* You are signed in to a Google account that does not have access
  * You need to sign in with a different Google account that has access. 
  * For example, if a form is restricted to "The University of Tokyo ECCS Cloud Email" accounts, signing in with any other account will result in the above error.

## Useful Features When Editing a Form
{:#useful_features_for_form_editing}

This section introduces useful features available when editing a form.

The numbers below correspond to the numbered descriptions. 
![質問編集画面の右側や下側にあるアイコンでできる機能を紹介しています．](./editing-form.png)

1. Import Questions
   * The "Import questions" button lets you reuse questions from other forms. Click the button, then select the form and the questions you want to import. This saves time when creating a similar form where existing questions can be referenced.
2. Duplicate a Question
   * The "Duplicate question" button lets you copy an existing question. This eliminates the need to build a similar question from scratch.
3. Insert Images and Videos
   * The "Add image" and "Add video" buttons let you insert photos or videos into the form. This is useful for supplementing question content with visuals. 
   * Note that there is also a separate feature for inserting images directly within a question or answer option. See "[Useful Features When Editing a Question ](#useful_features_for_question_editing) >  Inserting Images" below for details.
4. Add a Section
   * The "Add section" button lets you divide questions into units called sections, which can be displayed on separate pages or used to show different questions based on previous answers.
   * For details on navigating between sections based on responses, see "[Useful Features When Editing a Question ](#useful_features_for_question_editing) > Navigate to Section" below. 
   * Sections can be moved, duplicated, deleted, merged, and reordered. Note that "Delete section" also deletes the questions within it — if you only want to remove the section break, choose "Merge with above" instead.

### Useful Features When Editing a Question
{:#useful_features_for_question_editing}

This section introduces features that are particularly useful when editing individual questions.

![質問編集画面の下側「必須」のトグル，およびその隣のトリコロンの内容を紹介しています．](./editing-question.png)

1. Making a Response Required
   * Turning on the "Required" toggle for a question makes it mandatory. Respondents cannot submit the form or proceed to the next page without answering required questions, so it is recommended to mark any question you must receive an answer to as required.
2. Shuffle Option Order
   * The "Shuffle option order" button randomizes the order in which answer options are displayed. This can be useful for tests, where you may want different respondents to see options in a different order.
3. Navigate to Section
   * For questions with a selection-based format (radio buttons, dropdown), the "Go to section based on answer" button lets you set which section respondents are directed to depending on their answer.Questions to be shown for each answer must be created in separate sections. For detailed setup instructions, refer to "Show questions based on answers" (official help).
   * ある質問における回答に応じて異なる質問を用意している場合，回答に応じて自動的に異なる質問を表示させることができます．この場合，回答に応じて表示する質問はそれぞれ別のセクション内に作成しておく必要があります．
   * 詳しい設定方法は「[回答に応じて質問を表示する](https://support.google.com/docs/answer/141062?hl=ja&ref_topic=6063584&sjid=13364979449790478673-NC) 」(公式ヘルプ)を参照してください．
4. Response Validation
   ![](./editing-question-setting.png)
   * For short-answer or checkbox questions, the "Response validation" button lets you set rules for responses (e.g., "Show an error if the value is not an integer").
   * Standardizing formats — such as requiring half-width Arabic numerals for an age field — makes it easier to manage collected responses.
5. Inserting Images
   ![](./editing-question-photo.png)
   * You can attach images to a question using the button to the right of the question text (a.), or to an answer option using the button to the right of the option (b.). 
   * Images inserted next to the question text appear below the question; images inserted next to an answer option appear above the option.
      ![](./editing-question-photo-result.png)

## Form Settings
{:#form_settings}

ここでは，フォームに関して設定できるものを紹介します．

「設定」タブに切り替えると，テストに関する設定や回答・質問に関する設定を行うことができます．

### テストに関する設定

![](./form-setting-test.png)

1. テストとして利用する
   * 小テストなどにGoogleフォームを利用したいときは，設定タブの「テストにする」をオンにすることで，テストとして利用することができます．テスト機能を用いることで，各々の質問に対し配点と模範解答を設定し，それに基づいた成績を回答者に知らせる採点機能を利用することができるようになります．
   * 回答後すぐに採点を行うかなどの採点のタイミング・結果の共有の方法などは場合に応じて選択することができます．
   * その他，適宜以下のサイトをご確認ください．
      * [Googleフォームでテストを作成，採点する](https://support.google.com/docs/answer/7032287?hl=ja&ref_topic=6063584&sjid=2142759939340137168-NC#zippy=)（公式ヘルプ）
      * [Googleフォームで小テストやアンケートを実施する](/articles/google-form/)

### 回答に関する設定

![](./form-setting-answer.png)

2. <span id='collect_email_addresses'>メールアドレスの収集</span>
   * 「メールアドレスを収集する」を選択すると，回答者のメールアドレスを収集できます．「確認済み」を選択すると自動で，「回答者からの入力」を選択すると回答者の入力により収集することができます．メールアドレスの収集により，回答者の連絡先を入手することができるほか，回答のコピーを回答者に送信することができます．
   * 「確認済み」を選択する場合，回答者はGoogleアカウントでログインした状態でフォームに回答する必要があり，ログインしていない状態ではログインが求められます．「回答者からの入力」を選択する場合は，ログインの必要はありません．
3. 回答のコピーの送信
   * 「回答のコピーを回答者に送信」を選択すると，回答者自身の回答が，入力された（収集された）メールアドレス宛に送信されます．回答者としては自分の回答内容を確認することができます．「常に表示」を選択すれば回答者の意思に関わらず回答を送信することになります．
4. 回答の編集
   * 「回答の編集を許可する」をオンにすると，回答者が回答を送信した後でも，回答送信後の画面に表示されるリンクにアクセスすると，送信した回答を編集することができるようになります．ただし，編集することができるのは「回答の受付を終了」するまでです．
5. 回答回数の制限
   * 「回答を1回に制限する」をオンにすると，同一のGoogle アカウントからの回答を1回に制限することができます．これをオンにすると，既にフォームに回答したことがある人が回答しようとした場合，既に回答済みである旨が表示されます．ただし同じ人であっても，前の回答で用いたGoogleアカウントとは別のアカウントを利用している場合は，回答できてしまうことに注意が必要です．
   * 回答者は，Googleアカウントでログインした状態でフォームに回答する必要があります．

### 質問の表示に関する設定

![](./form-setting-display.png)

6. 進行状況バーを表示
   * 「進行状況バーを表示」をオンにすることで，回答箇所が何セクション目なのかを視覚的に表示させることができます．
7. 質問のシャッフル
   * 「質問の順序をシャッフルする」をオンにすることにより，テストなどとして利用する際に，質問を回答者によって異なる順序で表示することができます．シャッフルされるのは、同一セクション内の質問に限ります．
   * 記録された回答を編集者として確認するときには，元の順番通りとなります．
8. 結果の概要の表示
   * 「結果の概要を表示する」をオンにすると，すでに収集されている回答を，フォームの回答が終わった人に対して共有することができます．
   * この機能は，組織内でのアンケート結果を共有する際などには便利ですが，個人情報を収集するようなフォームにおいて用いると情報漏洩につながる可能性があるため，注意が必要です．
9. 回答の自動保存
   * デフォルトでは，Googleフォームに回答する際にその下書きは30日間自動で保存されます．
   * 「すべての回答者に対して自動保存を無効にする」をオンにすると，自動保存が無効化されます．
   * 詳しくは，「[Google フォームに入力途中の回答を自動保存する](https://support.google.com/docs/answer/10952360?sjid=9391686295985041241-NC)」（公式ヘルプ）もご参照ください．

