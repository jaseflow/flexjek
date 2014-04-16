---
layout: post
title:  "Styleguide driven development"
date:   2014-04-14 19:23:22
categories: design development
---

Recently I came across a video of [Nicole Sullivan and Colin O'Bryne discussing there development process](http://www.stubbornella.org/content/2014/04/09/style-guide-driven-development/) on a redesign project. I have yet to watch the video in it's entirity although the topic triggered thoughts on how I can extend my existing use of styleguides in both design and development. 

## What is the purpose of the page?

Generally a page is used to solve a problem or complete a task in an application. Most of the time a page will have a primary action user is supposed to complete.

By defining a solution to the problem the page is trying to solve, you are able to clearly identify which tools (modules) are required to assist the user in completing the action.

## Choosing the right tools for the job

Once you have a clear vision for the page you are trying to assemble, you should be able to start listing the tools needed to get the job done. These tools can be referred to as modules. For example, if your page was displaying a list of results from a search, some modules you might need are a search box (text input and submit button) to search again, a list to display results, a toggling navigation bar to change the way the list is displayed, and possibly a pagination navigational list.

## Do these modules exist?

### If yes, then continue to assembling your layouts.

Add all the required modules to the page and being arranging them to create a layout.

### If not, then begin documenting their functionality

When documenting our modules, it is always a good idea to start by giving them a name. This is a great way to speak clearly of each module between colleagues ranging from all levels of technical backgrounds. It also keeps the problem at a functional level and can stay abstracted from the visual design which will eventually be applie.

Carrying on with our previous example of showing a search results page. We have identified the page requires a module to toggle between different ways of displaying the results, we will call this a _Switcher_.

**_Switcher_**

- Clicking a link in a _Switcher_ the user would expect to reveal hidden content, not be directed to a page full of new content.
- A _Switcher_ always has one active link.
- When one link is clicked, the active style will be applied to said link and the previously active link will appear as normal.
- A _Switcher_ can have as many links in it as possible.

By using a bullet list it makes it easy to refer back to the styleguide (documentation) to see if this module is the tool a builder (developer) is looking for. You can also see how this kind of documentation acts as a brief for a designer and provides a more complete picture of how the module will be used.

It is also important to make sure you can abstract the solution the module is solving, you will notice I made sure not to mention anything about the results in the _Switcher_ definition. The _Switcher_ should be able to switch between anything, not just results. That's it's job! This can be hard to do but is super important to maintain a high level of reusability.

## Apply visual designs

Once a modules functionality has been documented. A designer can now start doing their thing.

Modules should be designed in isolation. When you try to design at a page level element you begin attaching unneccessary visual styles to fit everything together, as you would see it in it's final state. These styles can always be attached seperately after added to the page.

[Harry Roberts talking about using BEM syntax to write maintanable CSS which can help to apply seperate layout styles](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

When there is already existing styles applied for smaller base elements such as typography, link colours and font sizing, these should be used as much as possible. Once again promoting reusability.

[Brad Frost has a great write up on _Atomic Design_ which follow this thinking.](http://bradfrostweb.com/blog/post/atomic-web-design/)

Sometimes this is a simple as adding your most popular HTML tags to a page and applying styles at the lowest element level.

## Build module components (HTML, CSS & JS)

**Note: You may of merged the previous step into this one if you are like myself and enjoy [designing in the browser](https://medium.com/design-ux/3ccb1dfad980).**

We can now begin to build our modules. Just as we applied our visual design in isolation, all module code should also be written in isolation. This means you should theoretically be able to dump a module on a page along with it's required components and it should just work. Obviously, there are some components that may have dependencies, these dependencies should be documented in the styleguide alongside the modules definition.

Remember, once again, reusability is our main goal here. So take advantage of some well structured CSS to build up your modules from smaller pieces.

## Add to your page and apply layout styles

Once you have all your required modules, you can now begin building your pages. Page layout can be designed inside the browser or more traditionally in a program such as Sketch or Adobe Photoshop. The styles used to organise modules on a page, create grids and other structural aspects of the design should be applied seperately to the module styles.

[Jonathon Snook has written an amazing book, SMACSS, all about this kind of approach](http://smacss.com/book/type-layout)