var btn = document.getElementById("alert");

chrome.tabs.query({active: true, currentWindow: true}, tabs=>{
    const tab = tabs[0]
    const username = "urusername"
    if(tab.url === `https://www.fiverr.com/users/${username}/requests`){
        let active = false
        btn.addEventListener('click', function() {
            active = !active
            btn.style.backgroundColor= active?"#0BB3D4":"#1DBF73";
            btn.innerHTML= active?"stop":"start";
            chrome.tabs.sendMessage(
                tabs[0].id,
                {from: "popup", query: active}
            );
            // window.close();
        });
    }
})
