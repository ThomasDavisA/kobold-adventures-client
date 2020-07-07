# Kobold Adventures!

**Live App: https://kobold-adventures.thomasdavisa.vercel.app/**

## Summary

Kobold Adventures is a simple text-based adventure game where you take control of a kobold and go out to explore the lands to have silly and simple adventures.  To start, you may login or register to the website.  We have three dummy accounts for you to trial the game as well:

Name | Password
---------|----------
dunder | password
maria | password2
jacob | password3

Upon logging in, you'll be greeted with the news screen, and the choice to adventure or look at your status.  You may assign status points in the status screen, and may re-allocate points whenever you want.  When you go adventuring, you are presented with several locations to pick.  Upon selecing an area, you are then taken to the encounter screens, where you must play out each encounter.  Regardless of success or failure of each encounter, you make progress throughout the day.  At the end of the day, your adventure is complete, and you tally up all the currencies and experience you gain through the adventure.  And that's it!  Continue to explore each area fully to see all the options you can discover, as every encounter has multiple ways of resolving themselves.

![The status screen.](https://i.imgur.com/KXBl3Er.png) ![Going on an adventure!](https://i.imgur.com/LzclImT.png)

## Technologies

The Kobold Adventures Client is made with React.

## API

The Kobold Adventures Client uses a basic API service to make calls to the server.

### Auth
The Auth service is used purely for ensuring all login credentials are secure.  It sends fetch requests to the `/api/auth/` endpoint.

### Kobold
The Kobold API service is used to get kobolds from user information, adventures, and rewards information after adventures. It sends fetch requests to the `/api/kobold/` endpoint.

### Locations
The Locations API service is used to get locations for all Kobold Adventures. It sends fetch requests to the `/api/locations/` endpoint.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).