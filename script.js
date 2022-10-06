chrome.runtime.onMessage.addListener((message, sender) => {
    console.log(message);
    if (message.from === "popup" && message.query == true){
        console.log("calling test")
        localStorage.setItem("active", true)
        runNotBad("badge")
        location.reload()
    }
    else if(message.from === "popup" && message.query == false){
        localStorage.removeItem("active");
        runNotBad("remove badge")
    }
}
);
    if(localStorage.getItem("active") == 'true'){
        console.log("working")
        let res;
        function check(){
            console.log("start check")
            let el = document.querySelector(".db-new-main-table.align-top.js-db-table tbody")
            console.log(el.children[0].children[0].children[0].textContent)
            res = el.children[0].children[0].children[0].textContent
            if(res !== 'No requests found.'){
                runNotBad("notification")
                localStorage.removeItem("active");
                
            }
            else{
                console.log("reaload called")
                setTimeout(reaload, 60000)
            }
        }
        setTimeout(check, 2000)
    }
function reaload(){
    location.reload()
}

console.log("2")
function runNotBad(e){
    chrome.runtime.sendMessage(
        { method: e, data: "send from script" }, 
        (res) => {return true;} 
    );      
}