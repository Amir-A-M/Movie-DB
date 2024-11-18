import { GluestackUIProvider } from "@/src/components/ui/gluestack-ui-provider";
import { Stack } from "expo-router";

import "../src/styles/global.css";

export default function RootLayout() {
  return <GluestackUIProvider><Stack /></GluestackUIProvider>;
}
