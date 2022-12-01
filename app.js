const insert=document.getElementById("insert");

window.addEventListener("keydown",(e)=>{
    insert.innerHTML=`
    <div class="key">
        ${e.key}
        <small>eventKey</small>   
    </div>

    <div class="key">
        ${e.keyCode}
        <small>eventKeyCode</small>   
    </div>

    <div class="key">
        ${e.code}
        <small>eventCode</small>   
    </div>
    `
})

