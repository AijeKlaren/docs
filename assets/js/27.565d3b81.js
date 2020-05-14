(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{377:function(e,s,t){"use strict";t.r(s);var a=t(43),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("link",{attrs:{rel:"stylesheet",href:"/css/speechbubbles.css"}}),e._v(" "),t("h1",{attrs:{id:"events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),t("p",[e._v('Project Alice is driven by events. What are events you might ask, or what do we mean with it? Ever heard of "action -> reaction"? That\'s exactly it! When something happens, something occurs! Events are by convention prefixed with "on", like "onStormyWeather" or "onDoorOpened".')]),e._v(" "),t("p",[e._v("We provide a load of pre-made system events you can override in your skills. Lemme try to list them all, more are added on regular bases though!")]),e._v(" "),t("h2",{attrs:{id:"core-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#core-events"}},[e._v("#")]),e._v(" Core events")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Description")]),e._v(" "),t("p",[e._v("Core events report what's happening under the hood, what the system is doing")])]),e._v(" "),t("h3",{attrs:{id:"def-onstart-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onstart-self"}},[e._v("#")]),e._v(" def onStart(self)")]),e._v(" "),t("p",[e._v("Triggered when Alice is starting the skills")]),e._v(" "),t("h3",{attrs:{id:"def-onstop-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onstop-self"}},[e._v("#")]),e._v(" def onStop(self)")]),e._v(" "),t("p",[e._v("Triggered when Alice is stopping the skill. The skill is typically stopped when Alice reboots, or after and update")]),e._v(" "),t("h3",{attrs:{id:"def-onbooted-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onbooted-self"}},[e._v("#")]),e._v(" def onBooted(self)")]),e._v(" "),t("p",[e._v("Triggered when everything has started. Comes after "),t("code",[e._v("onStart")])]),e._v(" "),t("h3",{attrs:{id:"def-onhotword-self-siteid-str-user-str-constants-unknown-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onhotword-self-siteid-str-user-str-constants-unknown-user"}},[e._v("#")]),e._v(" def onHotword(self, siteId: str, user: str = constants.UNKNOWN_USER)")]),e._v(" "),t("p",[e._v("Triggered when a hotword is heard. A "),t("code",[e._v("hotword")]),e._v(" is a "),t("code",[e._v("universal wakeword")]),e._v(" that doesn't identify a user")]),e._v(" "),t("h3",{attrs:{id:"def-onwakeword-self-siteid-str-user-str-constants-unknown-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onwakeword-self-siteid-str-user-str-constants-unknown-user"}},[e._v("#")]),e._v(" def onWakeword(self, siteId: str, user: str = constants.UNKNOWN_USER)")]),e._v(" "),t("p",[e._v("Triggered when a wakeword is heard. A "),t("code",[e._v("wakeword")]),e._v(" is a "),t("code",[e._v("hotword")]),e._v(" that identifies a user")]),e._v(" "),t("h3",{attrs:{id:"def-onhotwordtoggleon-self-siteid-str"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onhotwordtoggleon-self-siteid-str"}},[e._v("#")]),e._v(" def onHotwordToggleOn(self, siteId: str)")]),e._v(" "),t("p",[e._v("Triggered when the hotword triggers itself on again. Typically, the hotword is turned off once it's been heard, until the dialog is over.")]),e._v(" "),t("h3",{attrs:{id:"def-onhotwordtoggleoff-self-siteid-str"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onhotwordtoggleoff-self-siteid-str"}},[e._v("#")]),e._v(" def onHotwordToggleOff(self, siteId: str)")]),e._v(" "),t("p",[e._v("Triggered when the hotword goes off. Typically, the hotword is turned off once it's been heard.")]),e._v(" "),t("h3",{attrs:{id:"def-onsessionstarted-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onsessionstarted-self-session"}},[e._v("#")]),e._v(" def onSessionStarted(self, session)")]),e._v(" "),t("p",[e._v("Triggered when a session is started")]),e._v(" "),t("h3",{attrs:{id:"def-onstartlistening-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onstartlistening-self-session"}},[e._v("#")]),e._v(" def onStartListening(self, session)")]),e._v(" "),t("p",[e._v("Triggered when Alice starts listening to you, right after the hotword was caught")]),e._v(" "),t("h3",{attrs:{id:"def-oncaptured-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-oncaptured-self-session"}},[e._v("#")]),e._v(" def onCaptured(self, session)")]),e._v(" "),t("p",[e._v("Triggered when Alice captured what you said, when you finished talking to her")]),e._v(" "),t("h3",{attrs:{id:"def-onpartialtextcaptured-self-session-text-str-likelihood-float-seconds-float"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onpartialtextcaptured-self-session-text-str-likelihood-float-seconds-float"}},[e._v("#")]),e._v(" def onPartialTextCaptured(self, session, text: str, likelihood: float, seconds: float):")]),e._v(" "),t("p",[e._v("Triggered every time the ASR spits out a part of the utterance it is actively trying to capture.")]),e._v(" "),t("h3",{attrs:{id:"def-onusercancel-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onusercancel-self-session"}},[e._v("#")]),e._v(" def onUserCancel(self, session)")]),e._v(" "),t("p",[e._v("Triggered when the user cancels a dialog. This ends the session and doesn't trigger onIntentParsed!")]),e._v(" "),t("h3",{attrs:{id:"def-onsessiontimeout-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onsessiontimeout-self-session"}},[e._v("#")]),e._v(" def onSessionTimeout(self, session)")]),e._v(" "),t("p",[e._v("Triggered when a session times out")]),e._v(" "),t("h3",{attrs:{id:"def-onintentnotrecognized-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onintentnotrecognized-self-session"}},[e._v("#")]),e._v(" def onIntentNotRecognized(self, session)")]),e._v(" "),t("p",[e._v("Triggered when the NLU couldn't understand the intent or your saying. Typically occurs after onCaptured")]),e._v(" "),t("h3",{attrs:{id:"def-onsessionerror-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onsessionerror-self-session"}},[e._v("#")]),e._v(" def onSessionError(self, session)")]),e._v(" "),t("p",[e._v("Triggered if the session ends with an error")]),e._v(" "),t("h3",{attrs:{id:"def-onsessionended-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onsessionended-self-session"}},[e._v("#")]),e._v(" def onSessionEnded(self, session)")]),e._v(" "),t("p",[e._v("Triggered when the session ends")]),e._v(" "),t("h3",{attrs:{id:"def-onsay-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onsay-self-session"}},[e._v("#")]),e._v(" def onSay(self, session)")]),e._v(" "),t("p",[e._v("Triggered when Alice starts to say something")]),e._v(" "),t("h3",{attrs:{id:"def-onsayfinished-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onsayfinished-self-session"}},[e._v("#")]),e._v(" def onSayFinished(self, session)")]),e._v(" "),t("p",[e._v("Triggered when Alice has finished speaking")]),e._v(" "),t("h3",{attrs:{id:"def-onsessionqueued-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onsessionqueued-self-session"}},[e._v("#")]),e._v(" def onSessionQueued(self, session)")]),e._v(" "),t("p",[e._v("Triggered when a new session is queued due to the fact there is already one on going")]),e._v(" "),t("h3",{attrs:{id:"def-onmessage-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onmessage-self-session"}},[e._v("#")]),e._v(" def onMessage(self, session)")]),e._v(" "),t("p",[e._v("Triggered when a subscribed MQTT message is received")]),e._v(" "),t("h3",{attrs:{id:"def-onskillinstalled-self-kwargs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onskillinstalled-self-kwargs"}},[e._v("#")]),e._v(" def onSkillInstalled(self, **kwargs)")]),e._v(" "),t("p",[e._v("Triggered when a skill has installed. Info about what skill can be extracted from kwargs")]),e._v(" "),t("h3",{attrs:{id:"def-onskillupdated-self-kwargs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onskillupdated-self-kwargs"}},[e._v("#")]),e._v(" def onSkillUpdated(self, **kwargs)")]),e._v(" "),t("p",[e._v("Triggered when a skill has updated. Info about what skill can be extracted from kwargs")]),e._v(" "),t("h3",{attrs:{id:"def-onskillinstallfailed-self-kwargs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onskillinstallfailed-self-kwargs"}},[e._v("#")]),e._v(" def onSkillInstallFailed(self, **kwargs)")]),e._v(" "),t("p",[e._v("Triggered when a skill failed installing")]),e._v(" "),t("h3",{attrs:{id:"def-oninternetconnected-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-oninternetconnected-self"}},[e._v("#")]),e._v(" def onInternetConnected(self)")]),e._v(" "),t("p",[e._v("Triggered when internet connection is back, after a failure. Won't trigger on boot!")]),e._v(" "),t("h3",{attrs:{id:"def-oninternetlost-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-oninternetlost-self"}},[e._v("#")]),e._v(" def onInternetLost(self)")]),e._v(" "),t("p",[e._v("Triggered when internet connection is lost.")]),e._v(" "),t("h3",{attrs:{id:"def-onbroadcastingfornewdevicestart-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onbroadcastingfornewdevicestart-self-session"}},[e._v("#")]),e._v(" def onBroadcastingForNewDeviceStart(self, session)")]),e._v(" "),t("p",[e._v("Triggered when Alice starts broadcasting her IP for new devices to discover")]),e._v(" "),t("h3",{attrs:{id:"def-onbroadcastingfornewdevicestop-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onbroadcastingfornewdevicestop-self"}},[e._v("#")]),e._v(" def onBroadcastingForNewDeviceStop(self)")]),e._v(" "),t("p",[e._v("Triggered when Alice stops broadcasting her IP for new devices to discover. Typically happens when a new device was added")]),e._v(" "),t("h3",{attrs:{id:"def-onauthenticated-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onauthenticated-self-session"}},[e._v("#")]),e._v(" def onAuthenticated(self, session)")]),e._v(" "),t("p",[e._v("Triggered when a user successfully authenticated through his pin code")]),e._v(" "),t("h3",{attrs:{id:"def-onauthenticationfailed-self-session"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onauthenticationfailed-self-session"}},[e._v("#")]),e._v(" def onAuthenticationFailed(self, session)")]),e._v(" "),t("p",[e._v("Triggered when a user failed authentication with his pin code")]),e._v(" "),t("h3",{attrs:{id:"def-onaudioframe-self-message"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onaudioframe-self-message"}},[e._v("#")]),e._v(" def onAudioFrame(self, message)")]),e._v(" "),t("p",[e._v("Triggered when audio frame are coming in through MQTT. "),t("strong",[e._v("Can be very consuming!")])]),e._v(" "),t("h3",{attrs:{id:"def-ondeviceconnecting-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-ondeviceconnecting-self"}},[e._v("#")]),e._v(" def onDeviceConnecting(self)")]),e._v(" "),t("p",[e._v("Triggered when a device is trying to connect to Alice's network")]),e._v(" "),t("h3",{attrs:{id:"def-ondevicedisconnecting-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-ondevicedisconnecting-self"}},[e._v("#")]),e._v(" def onDeviceDisconnecting(self)")]),e._v(" "),t("p",[e._v("Triggered when a device is disconnecting from Alice's network")]),e._v(" "),t("h3",{attrs:{id:"def-onvadup-self-kwargs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onvadup-self-kwargs"}},[e._v("#")]),e._v(" def onVadUp(self, **kwargs):")]),e._v(" "),t("p",[e._v("Triggered when voice activity is heard")]),e._v(" "),t("h3",{attrs:{id:"def-onvaddown-self-kwargs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onvaddown-self-kwargs"}},[e._v("#")]),e._v(" def onVadDown(self, **kwargs):")]),e._v(" "),t("p",[e._v("Triggered when voice activity has stopped")]),e._v(" "),t("h3",{attrs:{id:"def-onnlutrained-self-kwargs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onnlutrained-self-kwargs"}},[e._v("#")]),e._v(" def onNluTrained(self, **kwargs):")]),e._v(" "),t("p",[e._v("Triggered when the NLU has finished training")]),e._v(" "),t("h3",{attrs:{id:"def-onsnipsassistantinstalled-self-kwargs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onsnipsassistantinstalled-self-kwargs"}},[e._v("#")]),e._v(" def onSnipsAssistantInstalled(self, **kwargs):")]),e._v(" "),t("p",[e._v("Triggered when the assistant.json file has installed after training")]),e._v(" "),t("h3",{attrs:{id:"def-onsnipsassistantfailedtraining-self-kwargs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onsnipsassistantfailedtraining-self-kwargs"}},[e._v("#")]),e._v(" def onSnipsAssistantFailedTraining(self, **kwargs):")]),e._v(" "),t("p",[e._v("Triggered when the assistant.json file failed training")]),e._v(" "),t("h2",{attrs:{id:"user-states"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-states"}},[e._v("#")]),e._v(" User states")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Description")]),e._v(" "),t("p",[e._v('User states events report a change of state for a user. Example: "Hey Alice? I\'m going bed!" would trigger "onGoingBed" and change the user state accordingly')])]),e._v(" "),t("h3",{attrs:{id:"def-ongoingbed-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-ongoingbed-self"}},[e._v("#")]),e._v(" def onGoingBed(self)")]),e._v(" "),t("p",[e._v("Triggered when a user tells Alice he's going bed")]),e._v(" "),t("h3",{attrs:{id:"def-onsleep-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onsleep-self"}},[e._v("#")]),e._v(" def onSleep(self)")]),e._v(" "),t("p",[e._v("Triggered when a user tells Alice good night")]),e._v(" "),t("h3",{attrs:{id:"def-onwakeup-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onwakeup-self"}},[e._v("#")]),e._v(" def onWakeup(self)")]),e._v(" "),t("p",[e._v("Triggered when a user tells Alice good morning")]),e._v(" "),t("h3",{attrs:{id:"def-onleavinghome-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onleavinghome-self"}},[e._v("#")]),e._v(" def onLeavingHome(self)")]),e._v(" "),t("p",[e._v("Triggered when a user tells Alice he's leaving home")]),e._v(" "),t("h3",{attrs:{id:"def-onreturninghome-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onreturninghome-self"}},[e._v("#")]),e._v(" def onReturningHome(self)")]),e._v(" "),t("p",[e._v("Triggered when a user tells Alice he's returned home")]),e._v(" "),t("h3",{attrs:{id:"def-oneating-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-oneating-self"}},[e._v("#")]),e._v(" def onEating(self)")]),e._v(" "),t("p",[e._v("Triggered when a user tells Alice he's eating")]),e._v(" "),t("h3",{attrs:{id:"def-onwatchingtv-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onwatchingtv-self"}},[e._v("#")]),e._v(" def onWatchingTV(self)")]),e._v(" "),t("p",[e._v("Triggered when a user tells Alice he's watching TV")]),e._v(" "),t("h3",{attrs:{id:"def-oncooking-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-oncooking-self"}},[e._v("#")]),e._v(" def onCooking(self)")]),e._v(" "),t("p",[e._v("Triggered when a user tells Alice he's cooking")]),e._v(" "),t("h3",{attrs:{id:"def-onmakeup-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onmakeup-self"}},[e._v("#")]),e._v(" def onMakeup(self)")]),e._v(" "),t("p",[e._v("Triggered when a user tells Alice he's putting makeup")]),e._v(" "),t("h3",{attrs:{id:"def-oncontextsensitivedelete-self-sessionid-str"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-oncontextsensitivedelete-self-sessionid-str"}},[e._v("#")]),e._v(" def onContextSensitiveDelete(self, sessionId: str)")]),e._v(" "),t("p",[e._v("Triggered when the user asks, in a context sensitive scenario, to delete or forget something. Example:\n")]),t("div",{staticClass:"userSpeech female"},[e._v("What's my favorite color?")]),e._v(" "),t("div",{staticClass:"aliceSpeech"},[e._v("blue")]),e._v(" "),t("div",{staticClass:"userSpeech female"},[e._v("Forget this!")]),e._v(" "),t("div",{staticClass:"aliceSpeech"},[e._v("ok")]),t("p"),e._v(" "),t("h3",{attrs:{id:"def-oncontextsensitiveedit-self-sessionid-str"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-oncontextsensitiveedit-self-sessionid-str"}},[e._v("#")]),e._v(" def onContextSensitiveEdit(self, sessionId: str)")]),e._v(" "),t("p",[e._v("Triggered when the user asks, in a context sensitive scenario, to change something. Example:\n")]),t("div",{staticClass:"userSpeech male"},[e._v("What's my favorite color?")]),e._v(" "),t("div",{staticClass:"aliceSpeech"},[e._v("blue")]),e._v(" "),t("div",{staticClass:"userSpeech male"},[e._v("Change this please")]),e._v(" "),t("div",{staticClass:"aliceSpeech"},[e._v("Sure, so tell me, what's your new favorite color?")]),e._v(" "),t("div",{staticClass:"userSpeech male"},[e._v("green")]),e._v(" "),t("div",{staticClass:"aliceSpeech"},[e._v("ok")]),t("p"),e._v(" "),t("h2",{attrs:{id:"timed-events"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timed-events"}},[e._v("#")]),e._v(" Timed events")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Description")]),e._v(" "),t("p",[e._v("When Alice starts, the following events are scheduled. Alice does calculate for them to start at the correct time so it reflects real life clock.\nThus onFullHour doesn't mean Alice was running an hour on the first round, as if Alice start at 9:47, onFullMinute would trigger at 9:48:00,\nonFiveMinutes at 9:50:00, onFullHour and all the others at precisely 10:00:00")])]),e._v(" "),t("h3",{attrs:{id:"def-onfullminute-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onfullminute-self"}},[e._v("#")]),e._v(" def onFullMinute(self)")]),e._v(" "),t("p",[e._v("Triggered every real time full minute.")]),e._v(" "),t("h3",{attrs:{id:"def-onfiveminute-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onfiveminute-self"}},[e._v("#")]),e._v(" def onFiveMinute(self)")]),e._v(" "),t("p",[e._v("Triggered every real time five minutes. Example: 10:15, 10:35; 12:55")]),e._v(" "),t("h3",{attrs:{id:"def-onquarterhour-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onquarterhour-self"}},[e._v("#")]),e._v(" def onQuarterHour(self)")]),e._v(" "),t("p",[e._v("Triggered every real time fifteen minutes. Example: 10:15, 7:30; 12:00")]),e._v(" "),t("h3",{attrs:{id:"def-onfullhour-self"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onfullhour-self"}},[e._v("#")]),e._v(" def onFullHour(self)")]),e._v(" "),t("p",[e._v("Triggered every real time hour.")]),e._v(" "),t("h2",{attrs:{id:"telemetry-reports"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#telemetry-reports"}},[e._v("#")]),e._v(" Telemetry reports")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Description")]),e._v(" "),t("p",[e._v("Alice comes with a telemetry manager skill can use to store weather data. The following events reflect these reports")])]),e._v(" "),t("h3",{attrs:{id:"def-onuvindexalert-self-devicelist-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onuvindexalert-self-devicelist-list"}},[e._v("#")]),e._v(" def onUVIndexAlert(self, deviceList: list)")]),e._v(" "),t("p",[e._v("Triggered when a device reports a UV index out of the limit set by the user")]),e._v(" "),t("h3",{attrs:{id:"def-onraining-self-devicelist-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onraining-self-devicelist-list"}},[e._v("#")]),e._v(" def onRaining(self, deviceList: list)")]),e._v(" "),t("p",[e._v("Triggered when a device reports rain")]),e._v(" "),t("h3",{attrs:{id:"def-ontoomuchrain-self-devicelist-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-ontoomuchrain-self-devicelist-list"}},[e._v("#")]),e._v(" def onTooMuchRain(self, deviceList: list)")]),e._v(" "),t("p",[e._v("Triggered when a device reports a rain level above the limit set by the user")]),e._v(" "),t("h3",{attrs:{id:"def-onwindy-self-devicelist-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onwindy-self-devicelist-list"}},[e._v("#")]),e._v(" def onWindy(self, deviceList: list)")]),e._v(" "),t("p",[e._v("Triggered when a device reports a wind strength above the limit set by the user")]),e._v(" "),t("h3",{attrs:{id:"def-onfreezing-self-devicelist-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onfreezing-self-devicelist-list"}},[e._v("#")]),e._v(" def onFreezing(self, deviceList: list)")]),e._v(" "),t("p",[e._v("Triggered when a device reports temperature below 0°C")]),e._v(" "),t("h3",{attrs:{id:"def-ontemperaturehighalert-self-devicelist-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-ontemperaturehighalert-self-devicelist-list"}},[e._v("#")]),e._v(" def onTemperatureHighAlert(self, deviceList: list)")]),e._v(" "),t("p",[e._v("Triggered when a device reports a temperature above the limit set by the user")]),e._v(" "),t("h3",{attrs:{id:"def-ontemperaturelowalert-self-devicelist-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-ontemperaturelowalert-self-devicelist-list"}},[e._v("#")]),e._v(" def onTemperatureLowAlert(self, deviceList: list)")]),e._v(" "),t("p",[e._v("Triggered when a device reports a temperature under the limit set by the user")]),e._v(" "),t("h3",{attrs:{id:"def-onco2alert-self-devicelist-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onco2alert-self-devicelist-list"}},[e._v("#")]),e._v(" def onCO2Alert(self, deviceList: list)")]),e._v(" "),t("p",[e._v("Triggered when a device reports a CO2 level above the limit set by the user")]),e._v(" "),t("h3",{attrs:{id:"def-onhumidityhighalert-self-devicelist-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onhumidityhighalert-self-devicelist-list"}},[e._v("#")]),e._v(" def onHumidityHighAlert(self, deviceList: list)")]),e._v(" "),t("p",[e._v("Triggered when a device reports a humidity level above the limit set by the user")]),e._v(" "),t("h3",{attrs:{id:"def-onhumiditylowalert-self-devicelist-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onhumiditylowalert-self-devicelist-list"}},[e._v("#")]),e._v(" def onHumidityLowAlert(self, deviceList: list)")]),e._v(" "),t("p",[e._v("Triggered when a device reports a humidity level under the limit set by the user")]),e._v(" "),t("h3",{attrs:{id:"def-onnoisealert-self-devicelist-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onnoisealert-self-devicelist-list"}},[e._v("#")]),e._v(" def onNoiseAlert(self, deviceList: list)")]),e._v(" "),t("p",[e._v("Triggered when a device reports a sound level above the limit set by the user")]),e._v(" "),t("h3",{attrs:{id:"def-onpressurehighalert-self-devicelist-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onpressurehighalert-self-devicelist-list"}},[e._v("#")]),e._v(" def onPressureHighAlert(self, deviceList: list)")]),e._v(" "),t("p",[e._v("Triggered when a device reports an atmospheric pressure level above the limit set by the user")]),e._v(" "),t("h3",{attrs:{id:"def-onpressurelowalert-self-devicelist-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#def-onpressurelowalert-self-devicelist-list"}},[e._v("#")]),e._v(" def onPressureLowAlert(self, deviceList: list)")]),e._v(" "),t("p",[e._v("Triggered when a device reports an atmospheric pressure level under the limit set by the user")])])}),[],!1,null,null,null);s.default=r.exports}}]);