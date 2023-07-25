import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import reportWebVitals from './reportWebVitals';

// Register the root component using AppRegistry
AppRegistry.registerComponent(appName, () => App);

// Start the application using AppRegistry.runApplication()
AppRegistry.runApplication(appName);

// The rest of the code can remain unchanged
reportWebVitals();
