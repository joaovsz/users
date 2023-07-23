import { UserProvider } from "@/context/UserContext";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <UserProvider>
    <Html lang="pt-br">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    </UserProvider>
  );
}
