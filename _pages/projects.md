---
layout: page
title: Projects
permalink: /projects/
description:
nav: true
#display_categories: [work, fun]
horizontal: false
importance: 1
---
<h2 class="page-header">Annotation on select projects.</h2>
<div class="accordion" id="projects-accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Miami University Libraries website
        </button>
      </h2>
    </div>
    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#projects-accordion">
      <div class="card-body" markdown="1">

![Miami University Libraries website screenshot](/assets/img/lib-miamioh.png#featured)

### A reflection upon a new libraries website

When I arrived in January 2018, my colleagues and I found the libraries' online applications had aged poorly and needed significant accessibility remediation— and indeed re-invention.

I collaborated with fellow web services librarian Melissa Cherry to fix critical accessibility issues in multiple library systems as we planned for the future.

 We also dramatically improved our services' performance on mobile devices, simplified the publishing workflow for our strategic communications team, and enhanced site security and patron privacy by encrypting our site traffic.


After beta testing in early 2020, our team released our new libraries website in summer 2000. Contributed more than 50,000 lines of code and editing to the project. During spring we conducted usability testing to identify areas needing remediation prior to full release. I co-wrote the IRB-approved testing regime, analyzed results of live and recorded tests, wrote the initial set of recommendations, and collaborated with the team to craft solutions.

Our web services team of Ken Irwin, Meng Qu, and I collaborated to release our beta version in early 2020. From there we spent the spring semester debugging, fixing accessibility issues, and usability testing. We released our new site for primary use in summer 2020. I contributed more than 50,000 lines of code to the project via our Git-based collaboration system.

**Usability testing and remediation**: We conducted IRB-approved usability tests with the goal of finding usability and findability issues needing remediation before its general releasing. We also collaborated with Emerging Technology in Design and Business students on eye-track testing of our new site. In addition to in-person usability, we also solicited and received many comments from our website feedback form.
Challenges: The pandemic forced us to move our testing to tele-conferencing and screen sharing. This switch was actually beneficial as it was difficult to simultaneously run the test and take detailed notes in our live sessions. The recorded sessions allowed us to repeat interactions and pinpoint issues. 

Example finding/remediation: Multiple testers were unable to find the location of our third-floor King Library Makerspace so we redesigned the page (and our other service points pages) to include a highly visible box dedicated to just location and contact information. 
Contributions: I edited and rewrote portions of our IRB application. Analyzed live and recorded usability tests. From my analysis, I wrote an initial set of recommendations our team collaboratively debated and crafted solutions.
Continuous accessibility: Our team worked with Laura Fathauer of AccessMU to ensure our site remains fully accessible as we designed and developed our site. For example, re-coding our navigation to ensure proper keyboard control and working with third-party vendors to remediate embedded content such as event calendars from Localist.

University Libraries website remediation: When the web services team joined the libraries in 2018, we found the website had aged poorly over the last decade. It needed significant accessibility remediation and suffered from extensive code overlaps and lack of a cohesive design. Librarian Melissa Cherry and I fixed critical accessibility issues in multiple library systems. I repaired our primary website while Melissa did extensive work upgrading our room booking system. We also dramatically improved our services' performance on mobile devices, simplified the publishing workflow for our strategic communications team, and enhanced site security and patron privacy by encrypting our site traffic. I also developed a system where guests could access our online catalog and results from our Ebscohost databases.

Publishing tools for strategic communications team: For the first major revision to our new libraries website, I created a set of tools that allow our library strategic communications team to publish directly to our website and have detailed control over news and promotional aspects of the site. New tools also provide an editorial workflow with content review and publication staging. I configured the Netlify content management system and Jekyll static site generator for the project and reprogrammed our website page templates to pull content from this new system. Collaborated with Meng Qu on design and Pat Hawk on server configuration.

New platform for library website chosen: When our content management system, Drupal 7, reached the end of it's development cycle, our web services team explored new platforms that supported collaborative coding at its core. We chose Jekyll, a static-site generator, which builds the entire site up front. These static pages are much faster to serve and eliminate many common security exploits, such as denial of service attacks.
New site infrastructure created: Meng Qu and I collaborated in crafting our new site, Meng focused our the site’s visual design while I programmed the site infrastructure, such as the page templates. Once the templates were completed, I shifted to organizing site content in collaboration with library staff.

New site accessibility: Throughout the process we repeatedly tested the site to ensure it remained fully accessible even as we added new content and functionality. We did this in collaboration with the university’s AccessMU accessibility center.
Beta site released: As the year closed, librarian Ken Irwin joined our team, and we released a beta version of our new website to the university community. I constructed a feedback mechanism that elicited more than three dozen responses from all levels of the university community from undergraduates to faculty members.
Applied to IRB to conduct usability testing: Our team applied to the Institutional Research Board to conduct in-person usability studies. 
A-Z Database Listing: I moved our database listing from Drupal to LibGuides for its robust interface featuring faceting by academic subject, database type, and searching by title and description. Worked with librarians to customize the interface and apply subject taxonomy to our database listing.
New digital collections landing page: Developed new landing page leveraging the wonderful images found within our digital collections. The new page not only promotes the collections to students and researchers, but also visually conveys the care we give to our collections to prospective donors.
New website staff page automation: Created our new libraries staff page which features the ability to filter staff by department, liaison duties, and building. I collaborated with systems staff Mike Bomholt and Pat Hawk to automate maintenance of this page, which starts with a form submitted by the supervisor.


  </div>
  </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
          data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Emergency virtual services for the Pandemic
        </button>
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#projects-accordion">
      <div class="card-body" markdown="1">
        
![Makerspace reservation system screenshot](/assets/img/reservations.png#featured) 

The Covid-19 pandemic posed a slew of challenges for providing equitable library services. How would in-person services translate online? How do we allow researchers and makers to make full use of the libraries while keeping everyone safe? We needed to quickly plan and implement several new and upgraded virtual services. For each of these projects I collaborated with staff to best understand their needs. I then focused not solely on the needed functionality, but on how our students and staff would interact with the functionality to eliminate as much friction as possible. Here are examples of the various projects required to keep our system running during Covid.
{: .box}

### [Appointment systems for Special Collections and University Archives](https://muohio.libcal.com/reserve/equipment/makerspace)

Because researchers are working with rare materials and nearly always need librarian/archivist assistance, I integrated a custom reservation form with conditional fields that allowed new researchers to seamlessly fill out the archives user agreement and for the researcher's needs to be captured during the reservation process. This way the librarian/archivist is prepared when the researcher arrives. Collaborated with Alia Wegner and Tiffany Dogan. 

### [Curbside pickup](https://www.lib.miamioh.edu/use/borrow/curbside/)

We've long providedspace reservations for our study rooms, we just moved that space outside to our parking lot behind King Library. We implemented curbside pickup as an extension to patrons placing holds on items. When these holds are ready for pickup, they then make an timed appointment for the parking space where a library employee then brings out their selections.

### Statistics Help Desk and Zoom integrations

The undergraduate-oriented Stats Help Desk was originally hosted in-person at BEST Library. Because the tutor works with students on highly detailed, visual, and technical topics, moving to this service to text-based chat would not suffice. To bridge this gap, I integrated video conferencing software into our online chat service so the tutors could seamlessly segue from text chat to video conversations and screen sharing for demonstrations. We also needed the ability to share complex equations and graphs so I installed the MathJax javascript library to translate LaTeX equation shorthand into presentable, accessible equations. I also recorded tutorial videos and provided instruction for desk student employees on use of the chat service and on advanced topics such as accessibility for complicated math graphs. (This service is currently in hiatus).

**Zoom in Ask-a-Librarian**: At the same time, I also activated the Zoom teleconferencing software in our chat reference system and appointment software so all librarians could utilize video chat in their reference exchanges and one-on-one appointments. 

### Art Museum ticketing system  

Like everyone else, when the Miami University Art Museum reopened it was by appointment only. I worked with the museum director and marketing coordinator to create a LibCal-based ticketing system similar to those used in large museums for limited engagement gallery shows. As a result, the museum was able to easily control their capacities. I was also able to customize the ticket sign-up so they were also able to collect as they needed to know demographics and class-oriented data to go with the reservations. 

  </div>
</div>
  </div>
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse"
          data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Additional Projects
        </button>
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#projects-accordion">
      <div class="card-body" markdown="1">
        
### Proactive Chat Service

![proactive chat box screenshot](/assets/img/proactive-chat.png#right) With chat traffic stagnating, I worked with a team of librarians to improve our libraries’ chat reference service. We decided to implement a proactive service where students are invited to chat automatically if they spend more than 45 seconds on the same page. I programmed this service into the templates of our website and LibGuides including an option for librarians to choose whether they want proactive chat included on their individual research guides. The change more than doubled our chat traffic to 3,473 chats in 2018-19. Collaborated with librarians Katie Gibson, Matt Benzing and Laura Birkenhauer on the project. I also co-presented with librarian Andrew Revelle on proactive chat at the 2019 ALAO annual conference. 

### [OneCampus Project](http://miamioh.onecampus.com/)

myMiami will be retiring in 2022. I was trained on this new upcoming system as the project lead for the libraries, which is one of the very first partners on the new system. OneCampus is super simple in that it **only** provides sets of task tiles you can search or browse through to quickly reach your destination. It will be fascinating to see how this new system changes how the libraries acquire university online traffic. 

![Training for Freedom screenshot](/assets/img/train4freedom.png#interior)

### [Training for Freedom documentary website](https://trainingforfreedom.lib.miamioh.edu)

In late 2021, we learned this locally-produced documentary will be distributed nationally by PBS. To prepare the supporting website, created by university archivist Jackie Johnson, for greater traffic, I conducted an accessibility remediation and implemented code updates to make the site mobile friendly. I also provided design assistance in the site's creation phase in 2019.

### [New website staff page](https://www.lib.miamioh.edu/about/organization/staff/)

In collaboration with systems staff Mike Bomholt and Pat Hawk, we automated maintenance of this page as well as chunks of employee onboarding. When a new employee is hired, their supervisor submits a form with their basic information which populates a Google Sheet. I programmed the webpage to automatically pull this data through templates to create the page. I then programmed the filtering capabilities to make finding staff easier.

### King Libraries Master Plan mini-site

One of my fun design projects was a single-page website to showcase the King Library Master Plan. The site provides the university community and potential funders what we hope a thriving 21st century library will look like here at Miami University. The page features beautiful “parallax” paging to walk people through the building plans. Collaborated with our strategic communications team on this project.

### [Proxy bookmarklet](https://libguides.lib.miamioh.edu/MULGStandards/proxy-bookmarklet)

When using third-party academic search engines, such as Google Scholar, often encounter needed content blocked by paywalls. To solve this issue, I wrote a Javascript bookmarklet that can be clicked to gain access when encountering a paywall. If the libraries subscribe to the article's journal, the reader is sent through our ID verification proxy server and automatically given access to the article.
  </div>
    </div>
      </div>
        </div>
