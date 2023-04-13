import { ReactNode, useEffect, useReducer, useState } from "react";
import { AuthContext, initialState } from "../context/AuthContext";
import {
  FacebookAuthProvider,
  signOut,
  signInWithRedirect,
  getRedirectResult,
  UserCredential,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db, storage } from "../../firebase.setup";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { ACTIONS, reducer } from "../reducer/reducer";

interface Props {
  children: ReactNode;
}

// Get Access Token
const getAccessToken = (userCredential: UserCredential): string => {
  const credential = FacebookAuthProvider.credentialFromResult(userCredential);
  return credential?.accessToken!;
};

// Get photo url from graph api
interface Data {
  picture: { data: { url: string } };
}

const getPhotoURL = async (accessToken: string): Promise<string> => {
  const endpoint = `https://graph.facebook.com/me?fields=picture.type(large)&access_token=${accessToken}`;
  const response = await fetch(endpoint);
  const data = (await response.json()) as Data;
  return data.picture.data.url;
};

// Create blob from photoURL
const createBlobFromUrl = async (photoURL: string): Promise<Blob> => {
  const response = await fetch(photoURL);
  return await response.blob();
};

// Create base64 data url from blob
const createBase64DataUrlFromBlob = async (blob: Blob): Promise<string> => {
  return await new Promise<string>(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
};

// Check to see if user is already in firestore
const isUserInDatabase = async (uid: string): Promise<boolean> => {
  const docRef = doc(db, "users", uid);
  const docSnapshot = await getDoc(docRef);

  return docSnapshot.exists();
};

// Sets user uid and photoURL in firestore
const setUserDataInDatabase = async (
  uid: string,
  base64DataUrl: string
): Promise<void> => {
  const docRef = doc(db, "users", uid);
  await setDoc(docRef, { uid });

  const storageRef = ref(storage, `users/${docRef.id}`);
  await uploadString(storageRef, base64DataUrl, "data_url");

  const downloadURL = await getDownloadURL(storageRef);
  await setDoc(docRef, { photoURL: downloadURL });
  console.log("User data set in database");
};

// Gets user info from firestore
interface UserData {
  uid: string;
  photoURL: string;
}

const getUserData = async (uid: string): Promise<UserData | undefined> => {
  const docRef = doc(db, "users", uid);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return docSnapshot.data() as UserData;
  }
};

export const AuthProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(
    () =>
      auth.onAuthStateChanged(async firebaseUser => {
        if (firebaseUser) {
          try {
            const result = await getRedirectResult(auth);
            const userInDatabase = await isUserInDatabase(firebaseUser.uid);

            if (!userInDatabase && result) {
              const accessToken = getAccessToken(result);
              const photoURL = await getPhotoURL(accessToken);
              const blob = await createBlobFromUrl(photoURL);
              const base64DataURL = await createBase64DataUrlFromBlob(blob);

              await setUserDataInDatabase(firebaseUser.uid, base64DataURL);
            }

            const userData = await getUserData(firebaseUser.uid);

            if (userData) {
              dispatch({
                type: ACTIONS.SETPHOTOURL,
                payload: userData.photoURL,
              });
            }

            dispatch({ type: ACTIONS.SETUSER, payload: firebaseUser });
          } catch (error) {
            console.error(error);
          }
        } else {
          dispatch({ type: ACTIONS.SETUSER, payload: null });
          dispatch({ type: ACTIONS.SETPHOTOURL, payload: "" });
        }

        setLoading(false);
      }),
    []
  );

  const signInWithFacebook = async (): Promise<void> => {
    const provider = new FacebookAuthProvider();

    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  // Logout
  const logOut = async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  const darkModeToggle = async (
    uid: string,
    darkModeEnabled: boolean
  ): Promise<void> => {
    const userProfileRef = doc(db, "users", uid);

    await updateDoc(userProfileRef, {
      darkModeEnabled: darkModeEnabled,
    });

    const docRef = doc(db, "users", uid),
      docSnap = await getDoc(docRef);

    docSnap.exists() &&
      dispatch({
        type: ACTIONS.DARKMODETOGGLE,
        payload: docSnap.data().darkModeEnabled,
      });
  };

  const value = {
    ...state,
    darkModeToggle,
    signInWithFacebook,
    logOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
