![React](https://github.com/ermondel/wiki/blob/master/files/icons48b/React48b.png) ![Redux](https://github.com/ermondel/wiki/blob/master/files/icons48b/Redux48b.png)

# React Streams

_Project for Udemy ReactJS course._

### About

Simple local streaming video service.

### Features

Create, update, delete, view streams.

### Requirements

| name | version | link |
| --- | --- | --- |
| Ubuntu Linux | ≥ 18.04 | [ubuntu.com](https://ubuntu.com/) |
| Git | ≥ 2.25 | [git-scm.com](https://git-scm.com/) |
| Node | ≥ 12.16 | [nodejs.org](https://nodejs.org/) |
| OBS Studio | ≥ 25.0 | [obsproject.com](https://obsproject.com/) |
| OAuth Google | ≥ 2.0 | [developers.google.com](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow) |

### Install

Step 1

```
git clone git@github.com:ermondel/react-streams.git
```

Step 2

```
cd react-streams/streams-server
npm install
```

Step 3

```
cd react-streams/rtmp-server
npm install
```

Step 4

```
cd react-streams/client
npm install
```

Step 5

Open the `react-streams/client/src/config/index.js` configuration file, add your **OAuth client ID** and save the changes.

### Launch

Step 1

```
cd react-streams/streams-server
npm start
```

Step 2

```
cd react-streams/rtmp-server
npm start
```

Step 3

```
cd react-streams/client
npm start
```

### Usage

Step 1

1. Open `http://localhost:3000/` in browser (Chrome for example).
2. Click the blue `Sign in to Google` button. Login with your username and password.
3. Click the blue `Create Stream` button.
4. Enter the title and description of the stream and then submit the form.
5. Select your stream from the list and click on it.
6. The page with the video player opens. In the address bar at the end there will be a stream id, remember or save it separately (_9 for example_).

Step 2

1. Run OBS Studio (`obs`)
2. In the `Scenes` section add a new scene with an arbitrary name.
3. Click on the newly created scene and in the `Sources` section add `Screen Capture (XSHM)` and `Audio Input Capture`.
4. Click the `Settings` button, select the `Stream` item and enter the `stream key` (previously saved 9), save the settings.
5. Click the `Start Streaming` button.
6. Return to the browser (`http://localhost:3000/streams/9`) and click the play button in the video player.
7. Watch the stream.
8. ...
9. In OBS Studio, click the `Stop Streaming` button.
10. Return to the browser and click on the `All streams` link to display the list of streams, or sign out and close the browser.

### Technologies

- React
- Redux
- Redux Thunk
- Redux Form
- Create React App
- Axios
- flv.js
- OAuth Google
- Semantic UI
- json-server
- node-media-server
- OBS Studio
