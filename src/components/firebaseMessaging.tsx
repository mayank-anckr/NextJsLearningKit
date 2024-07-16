import { messaging, getToken, onMessage } from "./firebaseConfig";

const publicVapidKey = "YOUR_PUBLIC_VAPID_KEY";

export const requestNotificationPermission = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey: publicVapidKey,
    });
    if (currentToken) {
      console.log("FCM Token:", currentToken);
      // Send the token to your backend server and save it
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
    }
  } catch (error) {
    console.error("An error occurred while retrieving token. ", error);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
