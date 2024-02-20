

export function ifObjectExist(value: object) {
  let is_valid = true;
  if (Object.keys(value).length !== 0) {
    is_valid = false;
  }
  return is_valid;
}

export const getObjectFromArrayByKey = (
  array: any,
  key: string,
  value: any
) => {
  return array.find((item: any) => {
    return item[key] === value;
  });
};

export function ifObjectKeyExist(object: any, key: string) {
  return object[key] !== undefined
}

export function paginationHandler(
  type: "next" | "prev" | "current",
  position: number
) {
  const page = type === "next" ? position + 1 : type === "prev" ? position - 1 : position;
  return page;
}




export function getArrayFromArrayOfObject(data: Record<string, unknown>[], key: string) {
  let modifiedArr: (string | number | boolean)[] = [];
  if (data && data.length > 0) {
    data.forEach((el: any) => {
      modifiedArr = [...modifiedArr, el[key]];
    });
  }
  return modifiedArr;
}

export function capitalizeFirstLetter(string: string) {
  if (string !== undefined && string !== null && string.length > 0)
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function stringSlice(string: string, slice: number = 3) {
  return string.slice(0, slice);
}


export const getDeviceInfo = () => {
  const userAgent = navigator.userAgent;

  const platform = navigator.platform;
  const regex = /\(([^)]+)\)/;
  const match = regex.exec(userAgent);
  let brand;
  let model;
  if (match && match.length > 1) {
    const deviceInfo = match[1].split(";");
    brand = deviceInfo[0].trim();
    model = deviceInfo[1].trim();
  }
  return { brand, model, platform };
};


export async function checkMicrophoneState() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const audioTrack = stream.getAudioTracks()[0];
    return audioTrack.enabled;
  } catch (error) {
    console.error("Error accessing microphone:", error);
    return false; // Microphone is not accessible
  }
}


export const userAgent = window.navigator.userAgent.toLowerCase();

export function getOperatingSystem() {
  if (userAgent.includes("win")) {
    return "Windows";
  } else if (userAgent.includes("mac")) {
    return "MacOS";
  } else {
    return "Other";
  }
}

export function gotoPermissionSetting(permissionType?: 'microphone' | 'camera') {

  let settingsUrl = "";

  // Check if the user is using Windows
  if (navigator.userAgent.includes("Win")) {
    settingsUrl = permissionType === "microphone" ? "ms-settings:privacy-microphone" : "ms-settings:privacy-webcam";
  }
  // Check if the user is using macOS
  else if (navigator.userAgent.includes("Mac")) {
    settingsUrl =
      permissionType === "microphone"
        ? "x-apple.systempreferences:com.apple.preference.security?Privacy_Microphone"
        : "x-apple.systempreferences:com.apple.preference.security?Privacy_Camera";
  }
  // For other operating systems, provide a message
  else {
    alert(
      `${permissionType} settings are not available on your current operating system.`
    );
    return;
  }

  window.open(settingsUrl);
}


export function copyToClipboard(text: string) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export function isKeyValueExistInArray(array: Record<string, unknown>[], key: string, value: string): boolean {
  return array.some(item => item[key] === value);
}
