"use client"; // חייב להיות Client Component

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function QueryProvider({ children }) {
  // יוצרים את ה-client בתוך useState כדי שלא ייווצר מחדש בכל רינדור
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
