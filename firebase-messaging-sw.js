// Firebase Cloud Messaging service worker.
//
// Handles background push on web. Active now that the real Firebase
// web config is in place (project "case-thread").
importScripts(
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js',
);
importScripts(
  'https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js',
);

const firebaseConfig = {
  apiKey: 'AIzaSyC37uK6vwqf8HctYR5fxvQHWdlZ60TGjOc',
  authDomain: 'case-thread.firebaseapp.com',
  projectId: 'case-thread',
  storageBucket: 'case-thread.firebasestorage.app',
  messagingSenderId: '192858483136',
  appId: '1:192858483136:web:01df7f2fbf4c9ace2e4025',
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  // Data-only messages: surface a notification here if desired.
  const title = payload.notification?.title ?? 'CaseThread';
  const options = {
    body: payload.notification?.body ?? 'New message',
  };
  return self.registration.showNotification(title, options);
});
