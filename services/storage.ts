import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "user_id";

export async function saveUserId(id: string) {
  await AsyncStorage.setItem(KEY, id);
}

export async function getUserId() {
  return await AsyncStorage.getItem(KEY);
}

export async function removeUserId() {
  await AsyncStorage.removeItem(KEY);
}

const LAST_LOGIN_KEY = "last_login";

export async function getLastLogin() {
  return await AsyncStorage.getItem(LAST_LOGIN_KEY);
}

export async function saveLastLogin(date: string) {
  await AsyncStorage.setItem(LAST_LOGIN_KEY, date);
}

const MEMBER_SINCE_KEY = "member_since";

export async function getMemberSince() {
  return await AsyncStorage.getItem(MEMBER_SINCE_KEY);
}

export async function saveMemberSince(date: string) {
  await AsyncStorage.setItem(MEMBER_SINCE_KEY, date);
}