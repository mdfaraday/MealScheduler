## Meal Scheduler

### Purpose

- to set up schedule of what to eat for each meal of each day, and also have 1 cheat day each week.
- this will eliminate confusion as to what to eat daily and reduce decision fatigue.

#### Technologies/Methods used:

- React Redux
- Firebase Realtime Database

#### Outside dependencies installed:

- React Navigation
- React navigation stack
- react-navigation-header-buttons
- @expo/vector-icons
- react-navigation-drawer
- @react-native-community/async-storage
- @react-native-picker/picker
- react-native-elements

##### Extra notes:

- May use react native elements for styling.

##### Current Issues

- MainScreen 'foodData' list for the FlatList does not refresh when state is updated.
- need to update AsyncStorage when new meal data is entered.

##### Future Upgrades

- add clean styling
- connect storage (actions) to Firebase
- Authentication
