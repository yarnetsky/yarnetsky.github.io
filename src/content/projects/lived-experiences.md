---
title: Lived Experiences Through Storytelling
description: Digital heritage project bringing the experiences of minority
  students, staff and faculty at Miami University to life
tags:
  - Web Development
  - Static Site
  - Sanity CMS
link: https://livedmu.lib.miamioh.edu/
thumbnail: /assets/lived-experiences.webp
order: 1
publishDate: 2026-01-22
---
**November 2022-present**

The Lived Experiences project strives to bring the experiences of minority students, staff and faculty here at Miami University to life in a website. It does this by elevating their stories through more than 75 documentaries, oral histories, and biographies and 10,000 pages of digitized primary source documents. This university-grant funded website was constructed on an extremely tight deadline by our web services team — Meng Qu, Ken Irwin, and myself— for the Havighurst Special Collections and Archives led on this project by Digital Collections Librarian Alia Levar Wegner and University Archivist Jacqueline Johnson.

## **Customized content management**

So often metadata and content from digital history collections are molded and reshaped to fit the online repository or content management system used to house the collection. Digital Collections Librarian Alia Levar Wegner said she wanted a system she could mold to their needs.

To fulfill that need I used [Sanity](https://web.archive.org/web/20240523113710/https://sanity.io/), an online structured content platform. Sanity allowed me to create highly detailed content models called schemas to define how the content was stored in their database. In turn, I defined how this data is entered and displayed in their content management system. These data points can also be used for creating relationships between the dozens of stories in the site.

In this process, I collaborated with Alia to ensure the data structure fulfilled the needs of the Lived Experiences project, but was also flexible enough that the data models could be used for multiple Lived Experiences projects that are in the plans.

Once all the stories and metadata was entered, this database became the central product of the Lived Experiences project. In turn, this data can be queried by any application for any use from data visualizations to augmented reality. In the project’s first phase, we created a digital history website from this data.

## **Lived Experiences accessibility work**

Here are the overarching goals for accessibility: You want everyone to able to perceive and operate a site’s user interface and its intended content. You want the interface to behave in predictable ways and for it to help you avoid errors. You finally want your content to be understandable by your target audiences and for your content to work with current and future tools.

For Lived Experiences, we wanted an interactive experience to aid the storytelling aspects of the website. For instance, on the [front page of the site](https://web.archive.org/web/20240523113710/https://www.yarnetsky.net/lived-experiences-race-at-miami/), we have a series of six flipping cards. When you hover over a card with your mouse, it flips to expose additional content. Hover over “The Great” and you’ll see a photo of basketball great and Miami alum Wayne Embry. You can then click on this card to read his story.

However, if not done correctly, this poses a challenge for people coming to our site using screen readers. Because, without the proper programming, this interactivity can hide the content. For starters, people using a screen reader will use the keyboard as opposed to a mouse to control the interface. Thus, they won’t hovering over the card to activate the flip. If you do not program the interface to accept the keyboard interaction, then you lose the ability to operate your interface. Similarly, the programming has to communicate to the screen reader what content is hidden or being exposed with each interaction and convey the new content changes with each transition.

This series of interactions is very much a dance between the site’s content and structure written in Hypertext Markup Language (HTML), Cascading Style Sheets (CSS) for design and animations and Javascript, the web programming language, that makes changes to both of these so the structure can communicate with the screen reader what changes are taking place.

I code these dance steps into place with the help of Web Services Librarians Ken Irwin who contributes advanced Javascript required for some of the interactions and Meng Qu on design.

## **Related Scholarship**

- Wegner, A., Irwin, K., Yarnetsky, J. (2023, October) *Design for Storytelling: Building a Platform for Sharing the Lived Experiences of Race at a PWI* [Presentation]. HighEdWeb 2023 Conference, Buffalo, NY.
- Johnson, J., Levar-Wegner, A., Yarnetsky, J., and Irwin, K. (2023, October) *Collaborative Storytelling: Building a Platform for Sharing the Lived Experiences of Race at a Predominantly White Institution*. [Accepted to present] Core Forum, New Orleans, La.

