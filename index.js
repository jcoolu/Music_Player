/**
	Computer Icons Section
*/

// for music icon
$(document).ready(function(){
  $("#music").dblclick(function(){
    $(this).hide();
	$("#background").hide();
	$("#motivate").hide();
	$("#camera").hide();
	$("#player").show();
  });
});

// for home icon
$(document).ready(function(){
  $("#home").dblclick(function(){
	$("#player").hide();
	$("#backgroundWindow").hide();
	$("#videoWindow").hide();
	$("#background").show();
	$("#music").show();
	$("#motivate").show();
	$("#camera").show();
  });
});

// for background icon
$(document).ready(function(){
  $("#background").dblclick(function(){
    $(this).hide();
	$("#music").hide();
	$("#motivate").hide();
	$("#camera").hide();
	$("#backgroundWindow").show();
  });
});

// for motivate icon
$(document).ready(function(){
  $("#motivate").dblclick(function(){
    $(this).hide();
	$("#music").hide();
	$("#background").hide();
	$("#camera").hide();
  });
});

// for camera icon (video)
$(document).ready(function(){
  $("#camera").dblclick(function(){
    $(this).hide();
	$("#music").hide();
	$("#background").hide();
	$("#motivate").hide();
	$("#videoWindow").show();
  });
});

/**
	Music Player Section
*/

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

var currentSong  = 0; // current song playing
var playButton = document.getElementById('play_button');
var player = document.getElementById('music_player');
var poster = document.getElementById('poster');
var juice = document.querySelector('.juice'); // progress
var bar = document.querySelector('.bar');

document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);

player.addEventListener('timeupdate', function() {
	//updating juice (progress bar)
	var juicePos = player.currentTime / player.duration;
	juice.style.width = juicePos * 100 + "%";
	
	//converting time of player
	var seconds = Math.round(player.currentTime);
	var minNow = Math.floor(seconds/60);
	var secNow = seconds % 60;
	
	
	//converting total time of song
	var min = Math.floor(player.duration/60);
	var sec = Math.round(player.duration - (min * 60));
	
	// process for setting current time of song being played (current time) / song length
	if(secNow < 10) {
		document.getElementById("textTime").innerHTML = minNow + ":" + "0" + secNow + " / " + min + ":" + sec; 
	}
	else if(sec < 10) {
		document.getElementById("textTime").innerHTML = minNow + ":" + secNow + " / " + min + ":" + "0" + sec; 
	}
	else if((secNow && sec)< 10) {
		document.getElementById("textTime").innerHTML = minNow + ":" + "0" + secNow + " / " + min + ":" + "0" + sec; 
	}
	else {
		document.getElementById("textTime").innerHTML = minNow + ":" + secNow + " / " + min + ":" + sec; 
	}
	
	if(player.ended) {
		playButton.src = "Images/play.png";
	}
})

// tried to add a click function to the progress bar to add
// the ability to time seek through the song.
bar.addEventListener('click', function(event) {
	var position = (event.offsetX) / (player.duration);
	console.log(event.offsetX);
	player.currentTime = position;
});

/*
	startPlayer - Starts music player with current song. 
*/
function startplayer() 
{
	player.src = songs[currentSong];
	poster.src = posters[currentSong];
	player.controls = false; 
}

/* 
	playToggle - plays/pauses current song. 
*/
function playToggle() 
{
	if(player.paused) {
		player.play();
		playButton.src = "Images/pause.png";
	}
	else {
		player.pause();
		playButton.src = "Images/play.png";
	}
}

/*
	stopAudio - stops music
*/
function stopAudio() 
{
 player.pause();
 player.currentTime = 0; //starts time at beginning of song.
}

/*
	changeVolume - changes volume by getting value of html element
*/ 
function changeVolume()
{
 player.volume=document.getElementById("change_vol").value;
}

/*
	prev - when button is clicked, it goes to previous song in list
	if on first song, it loops back to the last song of the list given.
*/ 
function prev() {
	
	if(currentSong == 0) {
		currentSong = songs.length-1;
	}
	else {
		currentSong--;
	}
	
	startplayer(); // start song
	player.play(); // play song
	playButton.src = "Images/pause.png";
	poster.src = posters[currentSong];
}

/* 
	next - when button is clicked, it goes to the next song in the list.
	If on last song of list, it loops back to first song.
*/
function next() {
	currentSong++;
	console.log(currentSong);
	if(currentSong > songs.length-1) {
		currentSong = 0;
	}

	startplayer();
	player.play();
	playButton.src = "Images/pause.png";
	poster.src = posters[currentSong];
}

/**
	Video Change Section
*/

// list of videos being played
var videos = 
['Videos/BestVideo.mp4', 
'Videos/gamegrumps.mp4', 
'Videos/walk.mp4'];

var currentVideo = 0;
var vidPlayer = document.getElementById('videoPlayer');

/*
	startVideo - sets current song
*/
function startVideo() {
	vidPlayer.src = videos[currentVideo];
}

/*
	prevVideo - goes to previous video in list
*/
function prevVideo() {
	
	if(currentVideo == 0) {
		currentVideo = videos.length-1;
	}
	else {
		currentVideo--;
	}
	startVideo();
}

/*
	nextVideo - goes to next video in list
*/
function nextVideo() {
	if(currentVideo == videos.length-1) {
		currentVideo = 0;
	}
	else {
		currentVideo++;
	}
	startVideo();
}

/**
	Background Change Section
	
	- have different themes:
		- spyro (main)
		- cafe/ lofi
		- vampire
		- diff holidays
			- christmas
			- halloween
			- easter
			- thanksgiving
		
	What should change?
		- mousepad
		- coffee mug
		- figurines
		- desk
		- poster
		- keyboard
		- wall color
*/
var mousepad = document.getElementById('mousepad');
var mug = document.getElementById('mug');
var figurines = document.getElementById('figurines');
var board = document.getElementById('board');
var keyboard = document.getElementById('keyboard');
var wall = document.getElementById('wall');
var desk = document.getElementById('desk');
var shelfInner = document.getElementById('shelfInner');
var deskFront = document.getElementById('deskFront');

// different themes 


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

function changeToCafeTheme() {
	mousepad.src = "Images/cafemousepad.png";
	mug.src = "Images/cafe_mug.gif";
	figurines.src = "Images/cafefigurines.png";
	board.src = "Images/board.png";
	keyboard.src = "Images/cafekeyboard.png";
	wall.style.backgroundColor = '#ded0a9';
	desk.style.background = "#4a3d1a";
	shelfInner.style.background = "#2e2307";
	deskFront.style.background = "#2e2307";
}

function changeToVampireTheme() {
	mousepad.src = "Images/demonmousepad.png";
	mug.src = "Images/demon_mug.gif";
	figurines.src = "Images/lucyfigurine.png";
	board.src = "Images/board.png";
	keyboard.src = "Images/vampkeyboard.png";
	wall.style.backgroundColor = '#ff5959';
	desk.style.background = "#2b2b2a";
	shelfInner.style.background = "#141412";
	deskFront.style.background = "#141412";
}

function changeToHalloweenTheme() {
	mousepad.src = "Images/hallowmousepad.png";
	mug.src = "Images/hallow_mug.gif";
	figurines.src = "Images/candy.png";
	board.src = "Images/board.png";
	keyboard.src = "Images/hallowkeyboard.png";
	wall.style.backgroundColor = '#e68600';
	desk.style.background = "#454541";
	shelfInner.style.background = "#141412";
	deskFront.style.background = "#141412";
}

function changeToThanksTheme() {
	mousepad.src = "Images/thanksmousepad.png";
	mug.src = "Images/thanks_mug.gif";
	figurines.src = "Images/thanksfig.png";
	board.src = "Images/board.png";
	keyboard.src = "Images/hallowkeyboard.png";
	wall.style.backgroundColor = '#ede0ce';
	desk.style.background = "#f7cc8f";
	shelfInner.style.background = "#e8bf87";
	deskFront.style.background = "#e8bf87";
}

function changeToChristmasTheme() {
	mousepad.src = "Images/christmasmousepad.png";
	mug.src = "Images/Christmas_mug.gif";
	figurines.src = "Images/christmasdeco.png";
	board.src = "Images/board.png";
	keyboard.src = "Images/christmaskeyboard.png";
	wall.style.backgroundColor = '#b0fcff';
	desk.style.background = "#f2f2f2";
	shelfInner.style.background = "#e3e3e3";
	deskFront.style.background = "#e3e3e3";
}

function changeToEasterTheme() {
	mousepad.src = "Images/eastermousepad.png";
	mug.src = "Images/easter_mug.gif";
	figurines.src = "Images/easterdeco.png";
	board.src = "Images/board.png";
	keyboard.src = "Images/easterkeyboard.png";
	wall.style.backgroundColor = '#fcf762';
	desk.style.background = "#ffc9ec";
	shelfInner.style.background = "#f0bdde";
	deskFront.style.background = "#f0bdde";
}