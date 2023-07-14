const mealList = [
    {
        "name": "食在一方",
        "category": ["brunch"],
        "filter": false
    },
    {
        "name": "日十",
        "category": ["brunch"],
        "filter": false
    },
    {
        "name": "鹽行站",
        "category": ["buffet", "rice"],
        "filter": false
    },
    {
        "name": "鍋燒意麵",
        "category": ["noodle"],
        "filter": false
    },
    {
        "name": "炒飯",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "八方雲集",
        "category": ["others"],
        "filter": false
    },
    {
        "name": "火鍋",
        "category": ["others"],
        "filter": false
    },
    {
        "name": "韓式料理",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "小飯糰大飯糰",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "後校門滷肉飯",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "魚耶",
        "category": ["brunch", "rice", "noodle"],
        "filter": false
    },
    {
        "name": "吳家鴨香飯",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "施家雞肉飯",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "黑盤",
        "category": ["rice", "noodle"],
        "filter": false
    },
    {
        "name": "神武拉麵",
        "category": ["noodle"],
        "filter": false
    },
    {
        "name": "森井丼飯",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "雙醬咖哩",
        "category": ["rice"],
        "filter": false
    },
    {
        "name": "麺や青鈴",
        "category": ["noodle"],
        "filter": false
    },
    {
        "name": "金拱門",
        "category": ["noodle", "rice"],
        "filter": false
    }
]


const brunchEl = document.querySelector("#brunch");
const riceEl = document.querySelector("#rice");
const noodleEl = document.querySelector("#noodle");
const buffetEl = document.querySelector("#buffet");
const othersEl = document.querySelector("#others");

const checkList=[brunchEl,riceEl,noodleEl,buffetEl,othersEl];

// btn
const btnEl = document.querySelector("#btn");

const orderEl=document.getElementById('eat');

// 監聽
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
