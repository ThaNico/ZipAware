chrome.webNavigation.onErrorOccurred.addListener((details) => {
  if (details.error !== "net::ERR_BLOCKED_BY_CLIENT") return;
  if (!isUnexpectedZipUrl(details.url)) return;

  const notificationOptions = {
    type: "basic",
    iconUrl: "icons/zipicon128.png",
    title: "ZipAware Warning",
    message:
      "The link you clicked is a website ending with .zip, it's not a .zip file!\nIt might be dangerous so it has been blocked.",
  };

  chrome.notifications.create(notificationOptions);
});

// This allows us to "know" that it was blocked by us
const isUnexpectedZipUrl = (urlStr) => {
  const url = new URL(urlStr);
  const isUnexpected = url.hostname.endsWith(".zip") && url.username != null;
  //   console.log("isUnexpected?", url, isUnexpected);
  return isUnexpected;
};
