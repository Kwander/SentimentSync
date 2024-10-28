
function deldata(){
    try{
        fetch("https://work-6fh9.onrender.com/deletedata")
    }
    catch(error){
        alert("error saving data, check your internet connexion and try again ! if the problem persists, please contact your provider.");
    }
}
export default function UploadData(data1,data2,data3){
    deldata()
    setTimeout(() => {
        fetchdata(data1,data2,data3);
    }, 1000);
}

async function fetchdata(data1,data2,data3) {
    let data = {
        "sliderA" : data1,
        "sliderB" : data2,
        "sliderC" : data3,
        "breakup"  : false,
    }
    
    
    try {
        let result = await fetch('https://work-6fh9.onrender.com/postdata',{
            method:"post",
            body: JSON.stringify({data}),
            headers : {
                "Content-Type": "application/json",
            }
        });
        result = await result.json;

    }
    catch (error){
        alert("error saving data, check your internet connexion and try again ! if the problem persists, please contact your provider.")
    }
};

export  function Breakup(){
    deldata()
    setTimeout(() => {
        sendBreakup();
    }, 1000);
}
async function sendBreakup(){
    let data = {
        "breakup" : true,
    }
    try {
        let result = await fetch('https://work-6fh9.onrender.com/postdata',{
            method:"post",
            body: JSON.stringify({data}),
            headers : {
                "Content-Type": "application/json",
            }
        });
        result = await result.json;

    }
    catch (error){
        console.error(error);
    }
}