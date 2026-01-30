# React Native Components:

1. SafeAreaView
2. Images
3. Modals
4. Alerts
5. Switch
6. StatusBar



## SafeAreaView `(<SafeAreaView>)`

`<SafeAreaView>` provides a safe zone to render app content without being obstructed by device hardware features like the notch, home indicator, or status bar.

- Essential for building apps that work across different devices with varying screen sizes and shapes.

- Wrap content inside `<SafeAreaView>` if you suspect it might appear too long or awkwardly placed on certain devices.

- While the default `<SafeAreaView>` works well in most cases, it may fall short on some devices.

### **Better Alternative:**

Use the `react-native-safe-area-context` package for consistent behavior **across all devices, including bottom bars.**

```
npm i react-native-safe-area-context
```

**Usage Example:**

```
import { SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Content inside safe area</Text>
    </SafeAreaView>
  );
}
```

<br>

## Displaying Images:

React Native provides the `<Image>` and `<ImageBackground> ` components.

**`<Image>` Component:**

- Used for displaying images individually.

- Accepts source as a URL or local asset.

- Supports image formats like PNG, JPEG, GIF, WebP.

- Does not support SVG files natively.

```
import { Image } from 'react-native';

export default function App() {
  return (
    <Image
      source={{ uri: 'https://example.com/image.png' }}
      style={{ width: 200, height: 200 }}
    />
  );
}
```
<br>

### `<ImageBackground>` Component

- Used for images as background.

- Allows layering other components on top.

- Useful for creating cards, headers, or sections with a background image.

```
import { ImageBackground, Text } from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={{ uri: 'https://example.com/background.png' }}
      style={{ width: '100%', height: 300 }}
    >
      <Text>Text on background</Text>
    </ImageBackground>
  );
}
```
**Using SVGs:**

- React Native cannot render SVGs natively.

- Use the package: react-native-svg for SVG support.
```
npm i react-native-svg
```

## Modals `(<Modal>)`

**React Native provides a Modal component for creating pop-ups or overlay screens.**

- Import from React Native.

- Set visible to true to show the modal.

- Add animationType to control appearance/disappearance.

- Define behavior when modal is closed.

```
import { Modal, View, Text, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View>
          <Text>Modal Content</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}
```

## Alerts `(<Alert>)`

- Convenient way to display messages and get user feedback.

- **Provides title, message, and callback functions for "OK" or "Cancel".**

```
import { Alert, Button, View } from 'react-native';

export default function App() {
  const showAlert = () => {
    Alert.alert(
      "Alert Title",
      "This is an alert message",
      [
        { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  };

  return (
    <View>
      <Button title="Show Alert" onPress={showAlert} />
    </View>
  );
}
```

## Switch `(<Switch>)`

**Used to create toggle buttons in forms or settings.**

- Import from React Native.

- Create a state to track its on/off value.

- Define a function to handle changes.
  
```
import { Switch, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
```

## StatusBar `(<StatusBar>)`

- Controls the appearance of the status bar on each screen.

- Both React Native and Expo provide a <StatusBar> component.

- Can be used to change color, style, visibility, and network indicators.

```
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#6a51ae" />
    </>
  );
}
```

## **Differences Between React and React Native**

| React (Web)          | React Native (Mobile)                          |
| -------------------- | ---------------------------------------------- |
| `<p>` and `<h>` tags | `<Text>`                                       |
| `<div>` tags         | `<View>`                                       |
| CSS stylesheets      | StyleSheet or TailwindCSS                      |
| onClick()            | onPress()                                      |
| HTML elements        | Native components like View, Text, Image, etc. |


## **Other than these, React Native offers mobile-specific components:**

- TouchableOpacity for buttons

- Modal for overlays

- Alert for messages

- Switch for toggles

**Many React concepts carry over, but components are adapted for `mobile platforms`. This allows you to `build mobile apps with React-like syntax.`**
