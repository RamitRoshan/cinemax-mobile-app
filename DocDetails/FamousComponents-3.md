# Famous Components in React Native

**React Native provides many built-in components that help us build mobile applications efficiently. <br> Some of the most commonly used and important components are:**

1. `<FlatList>`

2. `<ScrollView>`

3. `<StatusBar>`

4. `<SafeAreaView>`

5. `<Alert>`

6. `<Switch>`

7. `<Modal>`

**These components solve common mobile UI problems such as scrolling, safe layouts, system UI control, user interaction, and pop-ups.**

<br>

## Core React Native Components

**Some core and frequently used components in React Native include:**

- View

- Text

- TouchableOpacity

- Image

- FlatList

- ScrollView

- SafeAreaView

- TextInput

-  StatusBar

**and many more...**

`These components act as the building blocks of any React Native application, similar to how div, p, input, and button are used in web development.`


## Navigation in React Native

**React Native supports different types of navigation to move between screens in a mobile app.**

`Common Navigation Types:`

- Stack Navigation: <br>
Used for screen-to-screen navigation (push and pop behavior).

- Tab Navigation: <br>
Used for bottom or top tab-based navigation.

- Custom Navigation Styling: <br>
Headers, icons, animations, and transitions can be customized.

**Advanced Concepts:**

- File-based routing (commonly with Expo Router)
- Nested routes
- Dynamic routes
- Custom Hooks
- Custom fonts for better UI consistency

**These features help make apps scalable, reusable, and well-structured.**

<br>

## Styling and Responsiveness

- Responsive design ensures the app looks good on all screen sizes.

- Tailwind CSS (via libraries like nativewind) can be used for styling.

- Helps maintain consistency and faster UI development.

<br>

## Backend Integration

- Backend services like Appwrite can be used to:

    - Handle authentication
    - Store data
    - Manage user interactions

- Along with backend integration, follow best practices for performance, security, and scalability.


<br>

### TypeScript Support in React Native (with Expo):

##### Q). ❓ Does React Native support TypeScript by default? <br>

ans: ✅ YES (with Expo)

**When using Expo, TypeScript support is built-in.**

**That’s why you see:**

```
tsconfig.json

.ts and .tsx files
```

**👉 Expo automatically configures TypeScript for you.**



### Can We Still Use JavaScript?
<br>
✅ YES

**React Native supports both JavaScript and TypeScript.**
| Language   | File Types    |
| ---------- | ------------- |
| JavaScript | `.js`, `.jsx` |
| TypeScript | `.ts`, `.tsx` |


**You can even mix both in the same project.**

**Example:**
```
HomeScreen.tsx   ✅
utils.js         ✅
```

- Both files will work together without any issues.

### **Important Concept (Interview-Worthy)**

1. TypeScript is optional, not mandatory.
2. React Native core is built on JavaScript.
3. TypeScript adds an extra safety layer.
4. Most companies prefer TypeScript, but React Native does not force it.

<br>

### **How Expo Behaves (Simple Explanation)**

- If Expo detects tsconfig.json → it assumes a TypeScript project.

- If you add .ts or .tsx files → TypeScript stays active.

- If you only write .js files → everything still works fine.

**👉 Expo is smart, not strict.**


### Example: JavaScript vs TypeScript Component:

**JavaScript Component (Valid)**
```
export default function Home() {
  return null;
}
```

**TypeScript Component (Also Valid)**
```
export default function Home(): JSX.Element {
  return null;
}
```
- Both run the same way.


### Final Takeaway

-  👉 React Native = JavaScript first, TypeScript friendly

**You start simple with JavaScript and scale safely with TypeScript when needed.**



 