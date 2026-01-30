# React Native Notes

## Expo

Expo is a framework that simplifies React Native development. It provides tools and services that make building apps easier, similar to what Vite does for React.


- Expo is to React Native what Next.js is to React.
- It handles environment setup, so you don’t need to separately install Android Studio or native dependencies.

- Provides pre-built components for navigation, gestures, camera, maps, and more.

- Supports Over-the-Air (OTA) updates, allowing users to get the latest code without App Store or Play Store approvals.

- Enables fast deployment — many companies use Expo for rapid development.

- Expo continuously improves, similar to Next.js.

`Coding in React Native uses JavaScript, just like React. However, instead of HTML, we render Native Mobile Components.`


**Example:**
```
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
}
```

- JSX syntax is used, which is HTML-like but renders native components, not HTML tags.

- <Text> is used for displaying text (not <p> or <h> tags).

- Styling works like React CSS using the style prop.

- React Native also offers a StyleSheet utility for optimized performance in large applications.

- Tailwind CSS can also be used for styling in React Native projects.

## View Component (<View>)

- Think of <View> as a container or box that holds other components.

- Similar to HTML div, but with added mobile-specific functionality.

- Used for layout structures.

- Supports flexbox layout by default, making layout control easy.

- Flexbox properties like flexDirection, justifyContent, and alignItems control child component layout.

- **Interactivity:**
      
    - Instead of onClick() (React), React Native uses onPress().
    - Touchable components, such as TouchableHighlight, allow Views to respond to touch in unique ways. 

## FlatList Component (<FlatList>)

**<FlatList> is perfect for rendering long lists of items that require scrolling.**

- Similar to .map() in React but optimized for performance.

**Features:**

- Smooth scrolling

- Item separation

- Memory optimization

**Example**:
```
import { View, FlatList, Text } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '5', title: 'Item 5' },
];

export default function App() {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}
```
### When to  use:

- FlatList: For large lists with smooth scrolling.
- Map function: For smaller lists.

## ScrollView Component (<ScrollView>)

- <ScrollView> is a scrollable container that can hold multiple components.

- Similar to overflow: scroll in HTML.

- Allows users to easily navigate through a large amount of content.

**Example:**

```
import { View, ScrollView, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <ScrollView>
        <Text>Apple</Text>
        <Text>Banana</Text>
        <Text>Orange</Text>
        <Text>Mango</Text>
      </ScrollView>
    </View>
  );
}
```
- Useful for making content intuitive and accessible to users.