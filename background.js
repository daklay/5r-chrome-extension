chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request)
  if (request.method == "notification") {
    console.log(request.data)
    sendResponse({ method: "mossaab", data: "amimar" })
    chrome.action.setBadgeText({text: ''});

    const options = {
      type:     'basic',
      iconUrl:  'assets/fav.png',
      title:    'Fiverr Post Found',
      message:  'Work Time!',
      requireInteraction: true,
      priority: 0
    }

    chrome.notifications.create(options)
  }else if(request.method == "badge"){
    chrome.action.setBadgeText({text: '.'});
  }
  else if(request.method == "remove badge"){
    chrome.action.setBadgeText({text: ''});
  }
});