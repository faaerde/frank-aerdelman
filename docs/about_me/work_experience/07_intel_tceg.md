---
sidebar_position: 7
---

# Intel Corporation (TCEG)
## Technology Project/Program Manager - Technology Collateral Enablement Group
**IPPO TCEG2 Tech Pubs 2**

`Chandler, AZ (April 2018 – September 2025)`

- `Technology Project/Program Manager - Intel / September 2020 - September 2025`
- `Senior Technical Writer - Intel / April 2018 - September 2020`

![Intel New](../img/intel_new.png)

### Resume Bullets

- Created, revised, and maintained the technical content of Intel Kit documentation (User Guides, Release Notes, Quick Start Guides, and Addenda), Reliability Design Rules, Training Modules, and presentations using Adobe FrameMaker, Microsoft PowerPoint, Microsoft Visio, JIRA, Oxygen XML Author, and GitHub.
- Utilized metadata tagging and conditional processing from a single source in DITA to create multiple slices for different Electronic Design Automation (EDA) vendors, customers, and audiences for Intel 4, Intel 3, Intel 18A, and Intel 14A documentation.
- Created a new document type called EDA Vendor Tool Companion for the Intel 14A process that separated EDA-specific content from the Platform Design Kit (PDK) User Guide to allow for easier conditionalization, slicing, and the ability to support and deprecate specific EDA tools in accordance with the EDA breadth.
- Assisted in the “siloing” and profiling restructure of the PDK documentation into separate process-based repositories when shifting from Alfresco CMS to GitHub.
- Interfaced with 60 to 280+ (depending on process) subject-matter experts including developers, engineers, and owners across 15 different functional areas to create, revise, and manage the following documents through their life cycle:
  - Platform Design Kits (PDK) / Common Platform Design Kits (CPDK)
  - ASIC Design Flow Kits (ADF) / Cadence Stylus Modules (CSM)
  - Radio Frequency Kits (RF)
  - Reliability Verification Flow Kits (RVF) / Reliability Tool Kits (RTK)
  - Custom Tool Kits (CTK) / Utilities Tools Kits (UTK)
  - Static Random-Access Memory Kits (SRAM)
  - Tape-in Collateral Kits (TIC)
  - Halo Kits

### Details

In 2018, I'd applied for a Technical Writer positon in the _Intel Foundry Services (IFS)_ group to work on Kit documentation in DITA.  Our jobs were eventually retitled as Project/Program Managers in September 2020.

Most of the documentation created in this group was for the _Intel 4_, _Intel 3_, _Intel 18A_, and _Intel 14A_ processes.
It included Kit documentation (PDK, RTK, UTK, and so on), Reliability Design Rules, Layout Design Rules, and Training Documentation (with and without narration).
Starting in 2020, this was a mostly a remote position due to COVID.

It required interfacing with around 280 SMEs across 15 functional groups.

Some of the functional groups, like _ASIC_ and _Reliability Verification_, were based out of Bangalore, India.
The ability to pop on quickly in the evening to get a question answered really helped to ensure that we weren't playing E-mail tag when a deadline was approaching.

The PDK documentation usually referred to design materials, API references, and technology data that described a [Process Design Kit](https://en.wikipedia.org/wiki/Process_design_kit).

Most of the documentation was written in XML/DITA, was hosted in [GitHub](https://en.wikipedia.org/wiki/GitHub), and used an in-house tool to solicit inputs from the SMEs.
JIRA was used for opens and carry forwards.

The most difficult part of the documentation process when I first arrived involved classifying information in the XML for different customers.
PDK releases usually required multiple "slices" of the documentation that targeted specific vendors and customers.
We'd tag specific content in [DITA](https://en.wikipedia.org/wiki/Darwin_Information_Typing_Architecture) with [conditional text](https://en.wikipedia.org/wiki/Conditional_text) attributes so that Internal content would remain for only the Internal slice, for instance.
We had to ensure that a EDA vendor slices for "Company A" did not include "Company B" information despite the fact that both slices came from the same source.
A normal PDK release would require anywhere from 4 to 8 slices depending on the maturity and potential interested customers.

We were instructed that we had to move the DITA source out of Alfresco CMS and into GitHub somewhere around 2023.
Our source was initially not ready to make that change, many of the conditional profiles had deep entanglements in our multi-process source.
Eventually, we split our multi-process source into separate process-based repositories and eliminated our use of the "platform" tag entirely.

An _EDA Vendor Tool Companion_ document was created, starting with _Intel 14A_, that would simplify the layout into tool-based chapters by vendor.
The EDA vendor-based content was removed from the _Platform Design Kit (PDK) User Guide_ leaving it with only core/global content.
The separation of the chapters to focus specifically on a particular vendor REALLY sped things up and framed the scope cleanly for the SMEs.

When supplying a vendor with a specific slice, now they would get:
1. Intel Platform Design Kit (PDK) User Guide (which now only contains core/global content)
2. Intel Platform Design Kit (PDK) Release Notes (mirrored to match a vendor's area of coverage)
3. Intel Platform Design Kit (PDK) EDA Vendor Tool Companion (including only the chapters that applied to the vendor)
4. Intel Platform Design Kit (PDK) Addendum (Could be given separately for non-POR features that weren't to be mentioned globally)

![Fab](../img/fab.jpg)