
const brunchEl = document.querySelector("#brunch");
const riceEl = document.querySelector("#rice");
const noodleEl = document.querySelector("#noodle");
const buffetEl = document.querySelector("#buffet");
const othersEl = document.querySelector("#others");

const checkList=[brunchEl,riceEl,noodleEl,buffetEl,othersEl];

// btn
const btnEl = document.querySelector("#btn");

const orderEl=document.getElementById('eat');

let mealList=[];

// ----------------- 非同步 ---------------

// fetch("../js/mealList.json")
//     .then(function(respone){
//         //        把 json 格式資料 轉成 JS 物件
//         return respone.json();
//     })
//     // 確保 .then 裡面的程式碼 一定是在資料完全抓到資料才會執行
//     .then(function(data){
//         console.log(data);
//         // 賦值
//         mealList=data;
//     })

fetch("./js/mealList.json")
    .then(res => res.json()) // 把 json 格式資料 轉成 JS 物件
    // 確保 .then 裡面的程式碼 一定是在資料完全抓到資料才會執行
    .then(data =>{
        console.log("抓完資料");
        // 賦值
        mealList=data;
        console.log(mealList);
    })

// ----------------- 非同步 ---------------

// 監聽   會進到 Web API ，需要點擊後才會進到 Quest
btnEl.addEventListener('click',()=>{
    let checkedList=[];
    checkList.forEach((item,index)=>{
        if(item.checked){
            checkedList.push(item.value)
        }
    })

    if(checkedList.length===0){
        checkList.forEach((item1)=>{           
            checkedList.push(item1.value)         
        })
    }


    let filterList=[];

    // 勾選類別名稱字串
    checkedList.forEach((category)=>{
        // 餐廳資料 篩選
        mealList.forEach((store)=>{
            if(store.category.includes(category)){
                filterList.push(store);
            }
        })  
    })

    // 去重複
    filterList=[...new Set(filterList)];

    // 拿 filterList 作隨機
    const radomNum=Math.floor(Math.random()*filterList.length);

    if(filterList.length===0){
        orderEl.innerText="野草";
    }else{
        const orderEl2=filterList[radomNum].name;
        orderEl.innerText=orderEl2;
        console.log(filterList);
    }   
})
