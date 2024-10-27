
export async function UploadData(data1,data2,data3) {
    try{
        fetch("http://localhost:3000/deletedata")
    }
    catch(error){
        alert("error saving data, check your internet connexion and try again ! if the problem persists, please contact your provider.");
    }
    let data = {
        "sliderA" : data1,
        "sliderB" : data2,
        "sliderC" : data3,
        "breakup"  : false,
    }
    
    
    try {
        let result = await fetch('http://localhost:3000/postdata',{
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
        fetch("http://localhost:3000/deletedata")
    }
    catch(error){
        console.error(error);
    }
    let data = {
        "breakup" : true,
    }
    try {
        let result = await fetch('http://localhost:3000/postdata',{
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