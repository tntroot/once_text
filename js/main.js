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

const btnEl=document.getElementById('btn');
const eattypeEl=document.getElementsByName('eattype');
const eatEl=document.getElementById('eat');


btnEl.addEventListener('click',()=>{
    let res="";
    let recordtype=[];
    for(let i=0;i<eattypeEl.length;i++){
        if(eattypeEl[i].checked===true){
            recordtype.push(eattypeEl[i].id);
        }else{
            res+=eattypeEl[i].id;
            if(res.length===eattypeEl.length){
                recordtype.push(res);
            }
        }
    }

    console.log(recordtype);
    
    let mealList_new=[]
    for(let i=0;i<mealList.length;i++){
        const testType=recordtype.every(el => mealList[i].category.includes(el));
        if(testType===true){
            mealList_new.push(mealList[i]);
        }
        // const testType=mealList[i].category.filter(el => recordtype.includes(el));
        // console.log(testType);
    }

    const eatEl_num=Math.floor(Math.random()*mealList_new.length);
    console.log(mealList_new);
    eatEl.innerText=mealList_new[eatEl_num].name;
    
})