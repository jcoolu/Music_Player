# Music Player

Music Player that was made with JavaScript using Electron and jQuery. 

## Table of Contents

- [Information](#information)
- [Features](#Features)
- [How to Install](#how-to-install)
- [Credits](#credits) 
 
## Information <a name = "information"> </a>

This was a personal project that I created to get familiar with using JavaScript frameworks such as electron and jQuery. 
I created a program that is customizable and able to 
play any songs the user wants to include via adding the files to one of the project's folders. 
It's an interactive experience for when a user 
wants to play some music or watch a video in their own personal setting. 
 
![opening](/ReadmeVI/musicplayeropening.gif)
 
## Features <a name = "Features"></a> 

### Play Any Music Playlist You Want

To add your own songs to the playlist, simply
change the list of videos in the variable "songs."
Add the path to the song you want to add. 
 

```javascript
// list of songs you want to play
var songs = 
["Music/spyro.mp3", 
"Music/hip.mp3", 
"Music/stop.mp3"];

// assigned pictures according to order of song list
var posters = 
["Images/spyro.png", 
"Images/Button.png", 
"Images/motivateicon.png"];
```

Example:


![music](/ReadmeVI/music.gif)

### Customize your Space

You can change:
	- mousepad (image file)
	- mug (image file)
	- figurines (image file)
	- board (image file)
	- keyboard (image file)
	- wall (color using hex)
	- desk (color using hex)
	- shelfInner (color using hex)
	- deskFront (color using hex)

```javascript
function changeToDragonTheme() {
	mousepad.src = "Images/mousepad.png";
	mug.src = "Images/spyro_mug.gif";
	figurines.src = "Images/spyro.png";
	board.src = "Images/board.png";
	keyboard.src = "Images/keyboard.png";
	wall.style.backgroundColor = "#dab3ff";
	desk.style.backgroundColor = "#994d00";
	shelfInner.style.backgroundColor = "#804000";
	deskFront.style.backgroundColor = "#804000";
}
```

![backgrounds](/ReadmeVI/backgrounds.gif)

### Play Videos 

To add your own videos to the playlist, simply
change the list of videos in the variable "videos."
Add the path to the video you want to add. 
 
```javascript
// list of videos being played
var videos = 
['Videos/firstVideo.mp4', 
'Videos/secondVideo.mp4', 
'Videos/thirdVideo.mp4'];
``` 
Example:

![example](/ReadmeVI/videoEX.gif)
 
![videos](/ReadmeVI/videos.gif) 
 
## How to Install <a name = "how-to-install"></a>

Libraries/Frameworks Used:
 - JQuery
 - electron
 - node.js
 
### Installing Node (needed in order to use npm command)

https://nodejs.org/en/download/
 
### Installing Electron

```npm install electron -g```
 
### Installing jQuery

```npm install jquery```
 
## Credits <a name = "credits"></a>

- Artwork and program - [Jamie Coulombe](https://github.com/jcoolu) (me)

- Progress bar for music player - 
https://github.com/DaftCreation/Custom-Audio-Player/blob/master/Music%20Player.html
