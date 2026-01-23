import { ApolloProvider } from "@apollo/client/react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { apolloClient } from "../lib/apollo-client";
import { store } from "../store";

export default function RootLayout() {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="landing" />
          <Stack.Screen name="auth/login" />
          <Stack.Screen name="auth/signup" />
        </Stack>
      </Provider>
    </ApolloProvider>
  );
}
