chrome.runtime.onMessage.addListener((message, sender) => {
    console.log(message);
    if (message.from === "popup" && message.query == true){
        localStorage.setItem("active", true)
        location.reload()
    }
    else if(message.from === "popup" && message.query == false){
        localStorage.removeItem("active");
    }
}
);
if(localStorage.getItem("active") == 'true'){
    let res;
    function check(){
        let el = document.querySelector(".db-new-main-table.align-top.js-db-table tbody")
        console.log(el.children[0].children[0].children[0].textContent)
        res = el.children[0].children[0].children[0].textContent
        if(res !== 'No requests found.'){
            clearInterval(myInterval)
            localStorage.removeItem("active");
            runNotfication()
        }
        else{
            location.reload()
        }
    }
    const myInterval = setInterval(check, 60000)
}
console.log("2")
function runNotfication(){
    chrome.runtime.sendMessage(
        { method: "getStatus", data: "send from script" }, 
        (res) => {return true;} 
    );      
}