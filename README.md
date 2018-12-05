# todo

Simple scheduling and task creation.
Currently building for Windows and Android.

## Builds

### Desktop

Built using Electron and React. Requires yarn to install packages.
Dependencies can automatically be installed using

```shell
yarn install
```

### Mobile

Built with Flutter, so it supports both Android and iOS. No current build.

### Backend

Built in Golang, serving as a webserver and a MySQL database.

## Development Roadmap

### Phase 1: Basic Functionality

The goal for phase one is to create an application that will let the user add tasks (either single or multi step),
and supply when they would like to complete the task by and how long it will take them to complete (the user will provide their own estimate).

### Phase 2: Utilizing the User's Schedule

The goal for phase two is to implement an account system that syncs with a calendar app, such as Google Calendar, and determines the proper time to notify the User to complete tasks. It will also determine how many steps of a multi-step task the User can complete in a given time frame, given their schedule on their calendar.

### Phase 3: Adapting to the User

The goal for phase three is to design an algorithm that can monitor the amount of time the User takes to complete certain types of tasks, and predict how much of a problem the User can complete given a time constraint. Machine learning is the obvious choice, but is most likely unnecessary.
