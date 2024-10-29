
export default async function UploadData(data1,data2,data3,breakup){
    try{
        await fetch("https://kevinbackapp-mgbvdmym.b4a.run/deletedata")
    }
    catch(error){
        alert("error saving data, check your internet connexion and try again ! if the problem persists, please contact your provider.");
    }
    await fetchdata(data1,data2,data3,breakup);
}

async function fetchdata(data1,data2,data3,breakup) {
    let data={}
    if (breakup){
        data = {
            "sliderA" : data1,
            "sliderB" : data2,
            "sliderC" : data3,
            "breakup"  : true,
        }
    }
    else{
        data = {
            "sliderA" : data1,
            "sliderB" : data2,
            "sliderC" : data3,
            "breakup"  : false,
        }

    }
    
    try {
        let result = await fetch('https://kevinbackapp-mgbvdmym.b4a.run/postdata',{
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
    if (breakup){
        window.location.href = "/break";
    }
};
