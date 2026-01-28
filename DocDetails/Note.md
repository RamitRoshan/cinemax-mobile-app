# Routing in React Native

It simply means, that your file within the `app` folder  represents your `routes` and the `file name` is a URL pointing to that routes .

>For Examples:

```
app -|
     |- index.tsx  
     |- onboarding.tsx
     |
```
- **It(index.tsx) represents home routes, <br> The starting points of your app.**     
- onboarding.tsx is also a routes.


####  This `routes` shows the details of movie. 

```
app -|
     |        |
     |- movie-|- [id].tsx
     |        |
     |
```


**Code:**

```
import {StyleSheet, View, Text } from "react-native"
import React from 'react';


const Details = () => {
    return (
        <View>
            <Text>[id]</Text>
        </View>
    )
}

export default Details;

const styles = StyleSheet.create({});
```

## 1️⃣ Importing from react-native

```
import { StyleSheet, View, Text } from "react-native";
```

- View → like a div in web React. Used as a container.

- Text → for displaying text (React Native requires text inside Text component).

- StyleSheet → optional, but recommended to define styles for this component in a clean way.

**Every component is independent, so it must import whatever it uses from React Native itself.**

<br>

## 2️⃣ Creating a functional component

```
const Details = () => {
  return (
    <View>
      <Text>[id]</Text>
    </View>
  )
}
```

- Each screen or component is self-contained.

- React Native doesn’t have a global DOM like web; every screen is its own mini UI.

- So each component imports the things it uses (View, Text, etc.).

<br>

## 3️⃣ Exporting the component
```
export default Details;
```

- Allows other parts of your app (like navigation) to import this screen.

- Without export, React Navigation (or any parent component) cannot render this component.

<br>

## 4️⃣ Why StyleSheet.create({}) in every file
```
const styles = StyleSheet.create({});
```

- Keeps styles local to this component.

- Better for organization → no global CSS like web.

- Optional if you use NativeWind / Tailwind, but still often included in templates.

### ✅ Summary

- Importing → to use React Native components and styles.

- Exporting → to allow the component to be used elsewhere (navigation, parent).

- StyleSheet → optional, keeps styles modular and clean.


### If you use NativeWind/Tailwind, you don’t always need StyleSheet.create anymore. You can write:

```
<View className="flex-1 items-center justify-center">
  <Text className="text-lg font-bold">Hello</Text>
</View>
```

**No StyleSheet needed, but View/Text import is still required.**


- Keep in mind that, there can be only one `index.tsx` route , we put it in the `tabs` folder . bcz `home` page is a part of `tabs` layout folder.


### `rnfe` shortcut to create functional component boiler plate code.


- (tabs), under this folder there is multiple pages , we call it screen.