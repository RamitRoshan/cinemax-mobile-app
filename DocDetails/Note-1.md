# Stack Navigator (Stack) in React Native

- A Stack Navigator is like a stack of screens/pages.

- Think of it like a deck of cards: you push a screen on top when navigating, and pop it when going back.

- Only the top screen is visible, but you can go back to previous ones automatically.

<br>

**Example structure:**

```
<Stack>
  <Stack.Screen
    name="(tabs)"
    options={{ headerShown: false }}
  />
</Stack>
```


**Explanation:**

1. <Stack>

- Container for multiple screens.

- Manages screen navigation automatically.

2. <Stack.Screen>

- Defines a single screen in the stack.

- name="(tabs)" → the route name (used in navigation).

- options={{ headerShown: false }} → hides the default top header bar.


## How it works in practice

**Suppose you have Home → Details screen flow:**

```
<Stack>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Details" component={DetailsScreen} />
</Stack>
```

- Start at Home.

- Navigate to Details → push DetailsScreen on top of HomeScreen.

- Go back → pop DetailsScreen, now HomeScreen is visible.

- **<ScrollView>**, makes whole screen scrollable.