# **Setting up Tailwind CSS in React Native with the help of `NativeWind`**

There are still some things we got to set up such as additional  packages for styling and configuration that make your JOB easier later on.

- One of those  packages is : `NativeWind`.
- NativeWind does not even have it's own landing pages. It just says: <br>
<br>
      **DO You like usinng Tailwind CSS to style your apps ?**  
      <br>
      - this(NativeWind) will help you do this in `react native`. <br>
  
      > npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context 

> npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context

### This installs:

- nativewind → Tailwind for React Native

- tailwindcss → config + utility engine

- react-native-reanimated → required by NativeWind

- safe-area-context → already common in Expo apps

## ⚠️ BUT installation alone is NOT enough

**1️⃣ Initialize Tailwind config**

```
npx tailwindcss init
```

**It will create:**

```
tailwind.config.js
```

## 2️⃣ Update tailwind.config.js
>Add the paths to all of your component files in your tailwind.config.js file.

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
>⚠️ Important: app/** is needed because you’re using Expo Router

<br>

## 3️⃣ Create global.css

Create a new file:
```
global.css
```
> inside the `app` folder

**Inside this folder add:**
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4️⃣ Add the Babel preset

**create a `babel.config.js`  file in root of Project:**
```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```
## 5. Create or modify your metro.config.js

**Create a metro.config.js file in the root of your project if you don't already have one, then add the following configuration:**

> we can create this file from terminal also: `npx expo customize metro.config.js`

```
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');
 
const config = getDefaultConfig(__dirname)
 
module.exports = withNativeWind(config, { input: './global.css' })
```


## 6. Now head over folder: app -> _layout.tsx
>import globals.css here

```
import { Stack } from "expo-router";
import './global.css';

export default function RootLayout() {
  return <Stack />;
}
```

## 7. In the root of a project, create a new file :

> nativewind-env.d.ts

Add this line in the file:
```
/// <reference types="nativewind/types"/>
```
- This will enable TypeScript, to recognize tailwind css Classes. Preventing constant error messages.

### Explanation:

`nativewind-env.d.ts` is a TypeScript declaration file.

**The line:**
```
/// <reference types="nativewind/types"/>
```

**tells TypeScript:** “Hey, these are valid NativeWind classes/types”, so your .tsx files using className="..." won’t show errors.

- Must be placed in the root of your project (same level as package.json).

- No other code is needed inside this file.

**This is a standard setup step for NativeWind + TypeScript.**


## In `metro.config.js` file , the global.css file path should match.
```
module.exports = withNativeWind(config, { input: './app/global.css' })
```


# To Run the app:

- npx expo start
- npm start

### Note:

- after all set-up run this command : `npx expo start --clear` it will clear all things.
- now press `r` in the terminal to refresh the app.