"use client";

import { useSyncExternalStore } from "react";

const STORAGE_KEY = "trouve-reduced-motion";
const listeners = new Set<() => void>();

function readOverride(): boolean | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === null ? null : stored === "true";
  } catch {
    return null;
  }
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener("change", callback);
  return () => {
    listeners.delete(callback);
    mql.removeEventListener("change", callback);
  };
}

function getSnapshot(): boolean {
  const override = readOverride();
  if (override !== null) return override;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getServerSnapshot(): boolean {
  return false;
}

/** Reduced-motion state: the user's explicit override (localStorage) takes priority over the OS preference. */
export function useReducedMotion() {
  const reduced = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setReduced = (value: boolean) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(value));
    } catch {
      // localStorage unavailable - the preference just won't persist across reloads.
    }
    listeners.forEach((listener) => listener());
  };

  return { reduced, setReduced };
}
