
export async function UploadData(data1,data2,data3){
    try{
        await fetch("https://work-6fh9.onrender.com/deletedata")
    }
    catch(error){
        alert("error saving data, check your internet connexion and try again ! if the problem persists, please contact your provider.");
    }
    await fetchdata(data1,data2,data3);
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

export async function Breakup(){
    try{
        await fetch("https://work-6fh9.onrender.com/deletedata")
    }
    catch(error){
        alert("error saving data, check your internet connexion and try again ! if the problem persists, please contact your provider.");
    }

    await sendBreakup();

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