---
title: Information Security and the Risk of Information Leakage
---

<font color="red" size=-1>This page is under construction. Both its content and its URL are subject to change.</font>

## Overview

When using AI, besides the general points covered in [Responsible AI Use](../basics/responsible-use/), there is a practical question you run into daily: how far may non-public information be entered into AI? The answer differs greatly not only with the content of the information but with how the AI is used, how the service is operated, and, for a cloud service, the terms of that service's contract. It is less a matter of ethics or social norms than a question of a strongly technical character: how to balance risk against usefulness. And (as with other such questions) a clear line is hard to draw; it is not the sort of thing where following a rule or a guideline yields an unambiguous answer.

On that basis, this section explains

- the basic way of looking at the risk: **how far the information you enter is transmitted, and where it is stored**
- what those answers actually are, for each form of contract, use and implementation
- the basic principles for handling information at UTokyo
- given all of the above, the approaches that can reasonably be taken in each situation (rules of thumb)

## A Simplified Version: Rules of Thumb, Leaving Out Detail and Nuance

To begin with, here are rough rules of thumb for the common question of whether a document may be given to the chat services people often use (Google Gemini, Microsoft Copilot Chat).

| Confidentiality | Typical examples                                                                    | Free service | Paid service |
|-----------------|--------------------------------------------------------------------------------------|--------------|--------------|
| Low             | published papers, University web pages, general questions                            | ○            | ○            |
| Medium          | internal meeting materials, departmental work documents, draft research notes        | ✕            | ○            |
| High            | exam questions being drafted, information received under NDA, pre-filing inventions  | ✕            | see below    |
{:style="text-align: left"}

This table is only an approximation, however. The distinction between "free service" and "paid service" is not really the point; what actually matters is each service's rules on handling data, its privacy terms and so on, but we leave the details aside here. For the time being, if you are using Google Gemini, Microsoft Copilot Chat or the like under the University's contracts, with a UTokyo Google account (g.ecc) or a UTokyo Account (utac), you may take that to be the "paid service" column above.

The distinction between the levels of confidentiality (low, medium, high) is itself hard to draw strictly; properly speaking, it is for the person responsible for each piece of information to decide (see [The University's Rules on Handling Information](#security_policy)). The table above is offered only as a standard shared within the University.

With that said, the rules of thumb are as follows.

- What may be sent to a free service is published information, or general information unrelated to your organization. There should in any case be few occasions on which you have to use a free service for work, so as a rule please avoid it.
- Sending something to a paid service is in itself much like uploading it to cloud storage (Microsoft OneDrive or Google Drive); it does not mean that no non-public information may be sent at all. For information of up to medium confidentiality, take care not to share the conversation history under the wrong settings, protect your account properly (multi-factor authentication), and then go ahead
- For information of high confidentiality, it is important to understand correctly the balance between risk and necessity, and to decide who is responsible for protecting that information and act under that person's responsibility; this is discussed below
  - If you do not understand what "sending information to AI" means, the basic rule is not to do it on your own initiative

## The Detailed Version

For most everyday work, following the table above is enough. Below, however, we explain

- that "entering information into AI" covers a variety of things, and that what matters is **how far the information travels and where it is stored**
- an assessment of the risks of each form, based on that understanding
- the University's security policy and, based on it, the correct process for deciding whether information may be entered

and, on that basis, set out how to think about whether highly confidential information may be entered.

## What Happens When You "Enter Information into AI": Transmission and Storage

First, here is a diagram of what is sent where, and stored where, when you converse with AI in the ordinary way.

![Conversing with AI](svg/L/ai_L1.svg){:.medium}

The conversation you enter is sent to the server responsible for the user interface (the interface you see in your browser). This is also the server on which the history of past conversations is stored. From there it is sent, together with the history (the context) of the conversation so far, to the server actually running the AI model. In most forms of use both servers are in data centers managed by the AI provider, such as Google or Microsoft.

So although we speak of "entering information into AI", what actually happens is two separate things: **transmission** and **storage**. In thinking about risk, it is important to ask about these separately.

- **How far is the input transmitted?**
- **Where is the conversation history (input and output) stored?**

And the answer to each is one of the following three places.

| Place | Main risks to consider |
|-------|------------------------|
| The machine in front of you | Generally safe, but there is the possibility of theft, of leaving it somewhere, of virus infection, and so on |
| A server you (or your department) manage | Access to the server has to be managed strictly. Long-term operation that depends on one particular person is best avoided |
| The AI provider's cloud | The provider's security practices, the location of its data centers (which may mean a different governing law), the risk of a data breach, its policy on responding to disclosure orders from public authorities, and so on |
{:style="text-align: left"}

Which is safest cannot be said in general. Information that stays on the machine in front of you carries a low risk of leakage, but you take on a different risk: that the machine is lost or stolen.

As for storage, the **period** matters as much as the place.

- Not storing any data at all beyond the session improves safety
- When you do store it, the essential thing is to delete it as soon as it is no longer needed (if you have AI check exam questions for mistakes, for instance, delete it as soon as you have finished)
- Being able to delete it easily and reliably is itself a factor in safety. In that sense, a form in which the conversation history is stored only on the machine in front of you is the more reassuring

Further, only where the destination is the AI provider's cloud does one more question arise.

- **Is the input you send used to "train" the AI model?**

Some cloud services, free ones especially, have terms of use under which user input is used to train the AI model. Under such a contract, it is possible in principle for information contained in a user's input to be learned by the model and thereby reflected in output to other users, that is, for information to flow indirectly.

### A Note on Agent-Type AI and Workspace Integration

Up to this point we have assumed that "input" means what the user explicitly enters. But AI features that reach across business data such as mail, calendars and documents are becoming widespread, as with Microsoft 365 Copilot and Google Gemini for Workspace.

With such "agent-type" AI, not only what the user explicitly enters but data present in the workspace automatically becomes subject to processing by the AI. That is, **the scope of "input" itself silently widens**, so there is a risk of sensitive information reaching the AI unintentionally. Before considering how far data is transmitted and where it is stored, you need to check what is, and what could be, treated as input in the first place.

## How Things Differ with the Terms of the Contract, How AI Is Used, and How It Is Implemented

AI (for now, think of something like ChatGPT, which you give text or files and have it answer questions or carry out tasks) comes in the following typical forms of contract, use and implementation. For each of them we begin by giving the answers to the two questions of the previous section: how far input is transmitted, and where it is stored.

1. a contract under which **"input is used for training"** (≒ free services)
2. a contract that states, or allows, that **"input is not used for training"** (≒ mainly paid services)
3. **"private mode"** (a way of using the service, available mainly with paid services)
4. **"API use"** (calling the AI from a program)
5. **"self-hosting the UI"** (running the UI on a machine you manage yourself)
6. **"self-hosting the model"** (running the AI model itself on a server you manage yourself)
7. **"a local LLM"** (running even the model on your own laptop or the like)

### 1. A Contract under Which "Input Is Used for Training" (≒ Free Services)

> **Transmission**: the AI provider's cloud  /  **Storage**: the AI provider's cloud  /  **Used for training**: yes

Many free services fall into this category, and one user's input can flow indirectly to other users through the training of the model. By analogy, this risk is **the same as publishing a file where anyone can see it**, so you should avoid entering anything that is not fit for publication.

The University has organizational contracts for Copilot and Gemini, and there are not many situations in which you have to use a free service, so as a rule please avoid it. Where they do come in useful is when you want to try various models from various services for free.

### 2. A Contract That States, or Allows, That "Input Is Not Used for Training" (≒ Mainly Paid Services)

> **Transmission**: the AI provider's cloud  /  **Storage**: the AI provider's cloud  /  **Used for training**: no

Many paid cloud services state explicitly in their terms that **data will not be used for training**, and set out more broadly their data protection and privacy policies (that data will not leak to other users, and so on). Strictly you ought to read those policies and check for yourself, but under such a contract, what you enter will basically not flow to **other users**, either directly or indirectly (through the training of the model). For details see the following.

- [Microsoft Copilot Chat](https://learn.microsoft.com/en-us/microsoft-365/copilot/enterprise-data-protection)
- [Google Gemini](https://knowledge.workspace.google.com/admin/generative-ai/generative-ai-in-google-workspace-privacy-hub)

By analogy, this risk resembles the risk of putting a file in the cloud. That is, by default what you enter into the AI can be seen by you alone and will not leak. The risks to consider are that you might share it with someone you did not intend and leak it that way, that your account might be broken into, or that the service itself might be broken into or leak information.

The risk that remains lies in the fact that conversation history is stored in the provider's cloud over a long period. Past history may be reflected in **your own future conversations**, and if the contents of such a conversation are leaked through the user's own carelessness (sharing it with a wider circle than intended, putting it on screen in a Zoom meeting, and so on), information can leak.

This applies when you take out a contract for an AI used through a browser, and much of the AI use at the University is likely to follow this pattern. Please take care to protect properly the account you use to access the service, and to check that you have made no mistake when sharing the contents of a conversation.

![An ordinary subscription](svg/L/ai_L1.svg){:.medium}

### 3. "Private Mode" (A Way of Using the Service, Available Mainly with Paid Services)

> **Transmission**: the AI provider's cloud  /  **Storage**: not stored for any length of time  /  **Used for training**: no

Some paid services offer a "private mode" (or a "turn off history" setting) that disables the storage of conversation history. In this mode input and output are said not to be stored once the conversation ends, which removes the risk of the history being reflected in other conversations or remaining on the server for a long period. No good analogy comes to mind, but the risk is close to that of uploading a file to the cloud and deleting it immediately.

In terms of the two questions of the previous section, then, this form **resolves the storage problem but leaves the transmission problem untouched**. If there are policies you must observe — that data must not leave the area you manage, must not leave the University, must not cross a national border — then whether you may use it should be judged against those.

Note that history not being retained also means you cannot look back at the conversation afterwards, or search it ([Private Mode](../basics/private-mode/)).

![Private mode](svg/L/ai_L2.svg){:.medium}

### 4. "API Use" (Calling the AI from a Program)

> **Transmission**: the AI provider's cloud  /  **Storage**: wherever the calling program runs (the machine in front of you, or a server you manage)  /  **Used for training**: no

This is the form in which the AI is called from a program, as with the OpenAI API or the Anthropic API. Most API terms of use state explicitly that input data is not used for training by default (this varies by service, so it needs checking).

The essential point of this form is that **the provider does not hold the conversation history**. It is almost always assumed that history is managed by the program that calls the AI and sent to the server each time, so the server can be taken not to store it, at least not for long (hard though that is to verify in practice). Where the history is stored is therefore determined by where you run that program: on the machine in front of you, it is stored there; on a server you manage, it is stored on that server.

Data is still sent to the provider's servers, however, so continued care is needed in handling highly confidential information. If you incorporate an API into a system developed by your research group, the design needs to take account of what information the users of that system might enter.

APIs are usually not included in an ordinary paid subscription (to a service used through a browser) and often have to be contracted for separately. At the University the emphasis is on OpenAI's models, but APIs for various AI models are available through UTokyo Azure.

![API use](svg/L/ai_L3.svg){:.medium}

### 5. "Self-Hosting the UI" (Running the UI on a Machine You Manage Yourself)

> **Transmission**: the AI provider's cloud  /  **Storage**: wherever you run the UI (a server you manage, or the machine in front of you)  /  **Used for training**: no

In terms of transmission and storage, this form is the same as API use above. What differs is that instead of writing a program yourself, you run UI software that provides the screen you type conversations into and manages their history. The history comes under your own management and does not accumulate on the AI provider's servers. The AI model itself is the provider's, however, so each question and the context up to that point is sent to the provider's servers through the API each time.

Even within "self-hosting the UI", where you run it changes both the place of storage and the risks.

#### 5a. Running It on a Server

At the University this can be done by starting a virtual machine on mdx or UTokyo Azure and installing UI software (such as Open WebUI) on it. The history is stored on that server, so managing that server properly becomes important. There are operating costs, such as keeping up with security updates, and if it is to be run for a long time, there is the possibility that these will be neglected and the risk of intrusion will grow. It is important that operation not depend on one particular person. Rather than run it carelessly, it may well be safer to use the AI service as it is. Running it for a limited purpose over a short period is a practical approach.

![Self-hosting the UI (on a server)](svg/L/ai_L4.svg){:.medium}

#### 5b. Running It on the Machine in Front of You

You can also run the same UI software on your own laptop. A powerful GPU or the like is not needed for this. The history is stored only on that machine, so there is no server to operate, but losing the machine, or having it stolen, means losing the history with it.

Software often used in this way includes front-ends for coding AI such as Claude Code, Codex CLI and Open Code.

![Self-hosting the UI (on your own machine)](svg/L/ai_L6.svg){:.medium}

### 6. "Self-Hosting the Model" (Running the AI Model Itself on a Server You Manage Yourself)

> **Transmission**: a server you manage  /  **Storage**: a server you manage  /  **Used for training**: not applicable

This is the form in which a publicly available model is deployed on a server you manage yourself. This means that **the extent to which input is transmitted also stays within your own management**. Input data is never sent to a service provider, and you can control clearly how information flows and where it is stored. It is therefore easier to manage and to make explicit the risks of handling sensitive information or unpublished research data.

At the University this can be done by starting a virtual machine with a GPU on mdx or UTokyo Azure and installing a model on it.

![Self-hosting the model](svg/L/ai_L5.svg){:.medium}

### 7. "A Local LLM" (Running Even the Model on Your Own Laptop or the Like)

> **Transmission**: the machine in front of you  /  **Storage**: the machine in front of you  /  **Used for training**: not applicable

This is the form in which the model runs on your own desktop or laptop PC. Input and output are entirely local, and no information is sent out over the network. From the point of view of information leakage risk this is the safest form of all. The size and performance of the models you can use depend on your hardware, however (memory capacity in particular), and running a large model well requires a correspondingly capable machine.

![A local LLM](svg/L/ai_L7.svg){:.medium}

## Extent of Transmission and Place of Storage, by Form

| Form | Input transmitted as far as | Conversation history stored on | Used for training |
|------|------------------------------|--------------------------------|-------------------|
| 1. Free service | the AI provider's cloud | the AI provider's cloud | yes |
| 2. Paid service | the AI provider's cloud | the AI provider's cloud | no |
| 3. Private mode | the AI provider's cloud | not stored for any length of time | no |
| 4. API use (called from your own machine) | the AI provider's cloud | the machine in front of you | no |
| 4. API use (called from your own server) | the AI provider's cloud | a server you manage | no |
| 5a. Self-hosted UI (on a server) | the AI provider's cloud | a server you manage | no |
| 5b. Self-hosted UI (on your own machine) | the AI provider's cloud | the machine in front of you | no |
| 6. Self-hosted model | a server you manage | a server you manage | not applicable |
| 7. Local LLM | the machine in front of you | the machine in front of you | not applicable |
{:style="text-align: left"}

Forms 4 and 5 are identical in both the extent of transmission and the place of storage; the difference is one of convenience, between using the AI from a program and using it through a UI in a browser. In both, moreover, where you run it determines where the history is stored.

## Choosing a Form According to Your Requirements

If you know the requirements you need to meet, the table above lets you derive which forms of use are possible.

- **You want no data at all to leave the machine in front of you** → 7 (a local LLM)
- **You want nothing to leave the area you (or your department) manage** → 6 (self-hosting the model), provided you can secure the server and that its long-term operation does not depend on one particular person
- **You can accept sending to the provider, but do not want history left on the provider's side** → 3 (private mode), 4 (API use), 5 (self-hosting the UI)
- **You can accept sending to the provider, but do not want history left anywhere outside your own machine** → the same as above, but run the program that calls the API, or the UI, on your own machine

## Practical Points in Choosing

- When using AI for work, there is almost no situation in which you would deliberately choose **a contract under which "input is used for training" (≒ free services)**.

- In most cases **a contract that states, or allows, that "input is not used for training" (≒ mainly paid services)** combines functionality (reading data, handling images and other media), model performance (advanced reasoning) and speed, so it is a good choice when you value convenience. The Google Gemini and Microsoft Copilot Chat that the University has contracts for fall into this category.

- If you use **"private mode"**, retention of information is confined to that session, so the risk of information leakage is considerably reduced. Where it is fine for the conversation history to be discarded on the spot, this is an easy approach with a high degree of safety.

- **Self-hosting the model** and a **local LLM** are safe approaches in that they limit how far data is transmitted, but constraints apply: the AI models you can use are limited to public (open-weight (†)) ones, and you are limited by the performance of the machine available (with a local LLM, in particular, by the performance of your own laptop). It is fair to say that this suits fairly routine processing (translation) of highly confidential information.

- With **API use** and **self-hosting the UI**, you can limit where the history is stored while still choosing your model freely, which makes them a good approach when you want to give highly confidential information to a state-of-the-art model (and where sending it to the provider is itself acceptable). Note, however, that paid services have a good deal built around the model to raise the quality of answers: the provider's own system prompt (\*), integrated tools such as web search, file parsing and code execution, and multi-step processing behind the scenes. You have to provide these yourself, so matching that level of convenience takes effort.

(†) Open weight: an AI model whose trained weights are published, so that it can be downloaded and run on any machine. The major models of most cloud AI vendors are not open weight.

(\*) System prompt: an overall instruction that controls the tendency of the AI's answers.

<a name=security_policy> </a>

## The University's Rules on Handling Information

Now that we have seen how the risk of information leakage differs with how AI is implemented, we turn to the procedure for deciding whether particular information may be entered into generative AI.

What matters is

- understanding correctly the principles for handling information (who this information may be given to)

- and then judging appropriately the trade-off between risk and necessity that comes with how the AI is implemented

There is no absolute formula that can be stated in a few words.

The University's "[Information Security Policy](https://univtokyo.sharepoint.com/sites/Security/SitePages/Policy_for_Information_Security.aspx): Classification and Management of Information" sets out a general framework for managing information. Under it,

- an "information custodian" is designated for each piece of information

- the information custodian carries out the "classification and management of the information"

Information is classified by confidentiality, integrity and availability, and what decides whether it may be entered into generative AI is confidentiality. The same document defines three levels of confidentiality — 1, 2 and 3 — but more important than the level is making explicit "the range within which this information may be shared" (participants in the meeting only, the department's executive only, faculty and staff only, and so on). Whether it may be entered into generative AI should be regarded as part of that.

What the policy lays down is that "whether that information may be entered into AI is to be decided properly by the person responsible for it". So who is that person? Unless stated otherwise it is the person who created the information, but responsibility can be handed on, and where something is produced as part of the work of an organization, those involved can agree among themselves who the information custodian is.

All of the above yields the following as the correct way of deciding whether highly confidential information may be entered into AI.

- Make clear who is responsible for the information
- Have that person decide the range to which the information may be transmitted (for AI, which AI services)
- In doing so, weigh the necessity against the risks described here in deciding which AI it may be sent to (note that this is not a binary choice between "may be entered into AI" and "may not")
- If assessing the risk proves difficult, consult someone who can assess it properly, your department's CISO, or the University's CISO

## Summary

As stated above, which form of AI a given piece of information may be entered into is something the information custodian (or the organization) should decide, weighing risk against necessity. Here, as practical advice, we indicate the range that will in most cases be acceptable, according to the nature of the information.

| Confidentiality | Typical examples                                                                   | Free service¹ | Paid service¹ | Private mode | API use | Self-hosted UI | Self-hosted model | Local LLM |
|-----------------|--------------------------------------------------------------------------------------|---------------|---------------|--------------|---------|----------------|-------------------|-----------|
| Low             | published papers, University web pages, general questions                            | ○             | ○             | ○            | ○       | ○              | ○                 | ○         |
| Medium          | internal meeting materials, departmental work documents, draft research notes        | ✕             | ○             | ○            | ○       | ○              | ○                 | ○         |
| High            | exam questions being drafted, information received under NDA, pre-filing inventions  | ✕             | △²            | \*           | \*      | \*             | \*                | \*        |
{:style="text-align: left"}

- Key: ○ acceptable in most cases  /  △ depends on the content, the necessity and so on  /  ✕ should as a rule be avoided
- ¹ Strictly, the line between "free service" and "paid service" is not the point; it should be decided on the basis of the service's data protection terms (terms of use for data, privacy policy). We write it this way for clarity, and because paid services in the world at large mostly do have sensible data protection rules (your input will not leak, either directly or through the training of the model).
- ² History is stored over a long period, so it should as a rule be avoided, to prevent the risk described under "**storage of conversation history**" above.

\* For these, the variety of implementations and of management arrangements is too great for a flat ○, ✕ or △ to be appropriate. For highly confidential information, the information custodian should first settle how far that information may be transmitted, and where and for how long its history may be stored; then consult "[Extent of Transmission and Place of Storage, by Form](#extent-of-transmission-and-place-of-storage-by-form)" and "[Choosing a Form According to Your Requirements](#choosing-a-form-according-to-your-requirements)" to pick a form. Note that the name of the form alone does not settle the matter: the same "self-hosted UI" stores history in a different place depending on whether you run it on a server or on the machine in front of you.

**Personal information** (names, email addresses, grades, health information and so on) requires care independently of the levels above, because of the constraints of the Act on the Protection of Personal Information. Contact details alone would correspond to "medium" confidentiality, but removing personal information before entering it is recommended so far as is practical. Personal information bearing on grades, health, evaluations and the like should be treated as "high".

If you are unsure, please consult the information custodian for the information in question, your department's CISO, or the University's CISO.

## Related Pages

[Private Mode](../basics/private-mode/)
