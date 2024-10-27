function ngjyraKuqe(){
    return new Promise((resolve) =>{
        console.log("1. E kuqja eshte e ndezur");
        setTimeout(() =>{
            console.log("2.Stop");
            resolve ("🔴");
        }, 1000)
    })  
}

function ngjyraVerdhe(){
    return new Promise((resolve) =>{
        console.log("3. E verdha eshte e ndezur");
        setTimeout(() =>{
            console.log("4. Behu gati");
            resolve ("🟡");
        }, 3000)
    })
}

function ngjyraGjelbert(){
    return new Promise((resolve) =>{
        console.log("5. E gjelberta eshte e ndezur");
        setTimeout(() =>{
            console.log("6. Vazhdo");
            resolve ("🟢");
        }, 5000)
    })
}

async function asyncSemafori() {
    console.log("Jeni duke pritur ne semafor:");
    const kuqjaPromise = ngjyraKuqe();
    const verdhaPromise = ngjyraVerdhe();
    const gjelbertaPromise = ngjyraGjelbert();

    const eKuqja = await kuqjaPromise;
    const eVerdha = await verdhaPromise;
    const eGjelberta = await gjelbertaPromise;  
    
    console.log("Ngjyrat:" + eKuqja + "" + eVerdha+ "" +eGjelberta)
}

asyncSemafori();