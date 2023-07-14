console.log("Hello work");

// JavaScript 一行一行執行

// 同步執行
// 一行一行執行 JavaScript


// 非同步執行
//可以一次執行不同的事 java

// 瀏覽器 V8執行引擎
// 全域環境 call stack 後進先出
// JavaScript 要在 全域環境裡面執行

//函式 也有自己的執行環境

// for(let i=0;i<300000;i++){
//     console.log(i);
// }

// 全域環境
// 把現有的環境跑完清空，才可以跑 Quest

// 非同步方法
// 會被叼到 Web API ，call stack 會繼續執行
// 丟到 Web API 函式 會有 coundown(計時器)
// 計時結束後 時間短的會先送到 Quest ，最後再送到 call stack
setTimeout(()=>{
    console.log("3px")
},3000)

// json key 要用字串包起來

const btnEl = document.querySelector("#btn");

fetch("./js/mealList.json")
    .then(res => res.json()) // 把 json 格式資料 轉成 JS 物件
    // 確保 .then 裡面的程式碼 一定是在資料完全抓到資料才會執行
    .then(data =>{
        console.log("抓完資料");
    })

btnEl.addEventListener("click",()=>{
    console.log("30px");
})