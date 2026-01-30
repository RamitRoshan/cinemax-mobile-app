# Creating a New Expo Project

**To create a new Expo project, run the following command in your terminal:**

```
npx create-expo-app@latest
```

**If you already created a folder and want to use the current directory:**
```
npx create-expo-app@latest ./
```
- This initializes a new Expo project in the current folder.

<br>

## Running the Expo Project

**Use one of the following commands to run your app:**

**📌Just run this (inside mobile_movie_app folder):**

```
npm start

or

npx expo start
```

<br>


## How to Run a React Native (Expo) Project

### 1️⃣ Running the Project

- ✅ You don’t need to install anything extra right now

- Expo already sets up everything for you.

**📌 Run the following command inside your project folder (for example: mobile_movie_app):**

```
npm start

or

npx expo start
```
- 👉 Both commands do the same thing.
  

### 2️⃣ How to See the App (Phone / Emulator / Web)

**Option A: Real Android Phone (Recommended & Fastest 🚀)**

- This is the best option:

**Steps:**

1. Install Expo Go app from the Play Store

2. Run the project:
```
npm start
```

3. Scan the QR code shown in the terminal or browser

4. App opens instantly on your phone 📱

-✅ Fast
- ✅ Real mobile experience
- ✅ No emulator needed


### Option B: Android Emulator

**You need:**

- Android Studio
- Android Emulator setup

**Run:**
```
npm run android
```

**⚠️ Emulator setup takes time.**
Avoid this unless Android Studio is already installed.

<br>

## 📌 **Important Notes**

**To run the mobile app, use:**
```
npm start
```

- Install Expo Go from the Play Store
- Scan the QR code shown after running npm start
- Phone and Laptop (VS Code) must be on the same Wi-Fi
- ❌ You cannot send this app as an APK at this stage


## 🟢 When Will the App Work Offline?

**👉 When you create a standalone build (APK / AAB).**

**After build:**

- ✅ Expo Go not needed
- ✅ App works offline
- ✅ Can be installed like a normal app
- ✅ Ready for submission / take-home assignments


### Folder Structure (Expo Router)

**Scripts Folder:**
```
/scripts
 └── reset-project
```

- reset-project allows you to reset the project to bare minimum code

- Useful when you want to start fresh


#### Reset Command
```
npm run reset-project
```

**After running, it will ask:**
```
Do you want to move existing files to /app-example instead of deleting them? (Y/n):

👉 Type n and press Enter
```

##### What Gets Deleted After Reset
```
❌ /app deleted
❌ /components deleted
❌ /hooks deleted
❌ /constants deleted
❌ /scripts deleted
```


#### What Gets Created After Reset

- 📁 New /app directory created
- 📄 app/index.tsx created (main screen)
- 📄 app/_layout.tsx created (layout & navigation)

**✅ Project reset complete**


### After Reset – Next Steps

**1️⃣ Start the development server:**
```
npx expo start

or

npm start
```

**2️⃣ Edit the main screen:**
```
app/index.tsx
```
- That file controls what you see first in the app.

<br>

#### App Folder (Routing Concept)

- Expo Router uses the app folder for routing

- Similar to Next.js
- We don’t call them pages, we call them screens

**Example:**
```
/app
 ├── index.tsx
 ├── _layout.tsx
 └── (tabs)
     ├── home.tsx
     ├── profile.tsx
```
- (tabs) folder manages tab-based layouts

- Nested folders help manage complex routing easily

----

## **Expo Development Reloading (Pressing r) – Explained Clearly**

**✅ Yes — during development, this is totally normal**

Let’s understand when and why you press `r`.


### 🔁 Why You Press r in Development ?

**You are running the app using:**

- Expo Go
- Metro Bundler

**When you:**

- Change code
- Add a new file
- Change routing or config

**Expo does not always auto-reload.**

**So you reload manually by:**

- Pressing r in the terminal

- Shaking the phone → Reload

**👉 This is expected behavior in development mode.**

<br>

#### Reloading on Android Device

**Ways to reload:**

- Press r in terminal ✅

- Shake phone → Reload

- Ctrl + M → Reload menu

- adb reload (advanced)


#### TL;DR

- Dev mode → Press r ✅

- Production APK → No reload ❌

<br>

### app.json (Expo App Configuration)

**📄 File: app.json**

- Everything starts with the expo object.
- This is the root configuration for your app.

**Key Properties Explained**
```
{
  "expo": {
    "name": "cinemax-mobile-app",
    "slug": "cinemax-mobile-app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "cinemaxmobileapp",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true
  }
}
```

**Important Fields**

- name
→ App display name

- slug
→ Unique identifier used by Expo
→ Used for web URL and project identity

**userInterfaceStyle**

- light

- dark

- automatic ✅ (follows system theme)


### Recommended Project Structure:

**Single-Folder Monorepo (Industry Style)**

```
ecommerce-assignment/
│
├── mobile-app/          <-- React Native (Expo)
│   ├── src/
│   │   ├── components/   <-- reusable UI components
│   │   ├── screens/      <-- screens (Home, Product, Cart)
│   │   ├── navigation/   <-- navigation logic
│   │   ├── services/     <-- API calls
│   │   └── assets/       <-- images, icons, fonts
│   ├── App.js
│   └── package.json
│
├── backend/             <-- Node.js backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── config/
│   ├── app.js
│   └── package.json
│
└── README.md
```

## React Native Shortcut (VS Code)
```
rnfce
```

**👉 Generates:**

- React Native Functional Component

- With export