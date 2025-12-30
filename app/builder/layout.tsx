"use client";

import { BuilderProvider } from "./BuilderContext";

export default function BuilderLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <BuilderProvider>
            {children}
        </BuilderProvider>
    );
}
