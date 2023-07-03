import { writable } from "svelte/store";
import { firebaseAuth } from "$lib/firebase";
import { onAuthStateChanged } from "firebase/auth";


/**
 * @returns a store with the current firebase user
 */
 function userStore() {
  let unsubscribe;

  if (!firebaseAuth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable(null);
    return {
      subscribe,
    }
  }

  const { subscribe } = writable(firebaseAuth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

export const user = userStore();