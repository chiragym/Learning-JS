//Promise creation
    const promiseOne = new Promise(function(resolve, reject){
        setTimeout(function(){
            // console.log('Executed');
            resolve()
        },1000)
    })

    promiseOne.then(function(){
        // console.log('resolved');
    })

// OR 
    new Promise(function(resolve, reject){
        setTimeout(function(){
            // console.log('Executed two');
            resolve()
        },1000)
    }).then(function(){
        // console.log('resolved two');
    })

// Passing Data
    const promiseThree = new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve({username:"Chirag", email:"abc@gmail.com"})
        },1000)
    })

    promiseThree.then(function(user){
        // console.log(user);
    })

//Chaining
    // const promiseFour = new Promise((resolve, reject) => {
    //     setTimeout(function(){
    //         let error = false
    //         if(!error){
    //             resolve({username:"ChiragY", password:1234})
    //         }else{
    //             reject('Something Went Wrong..')
    //         }
    //     },1000)
    // })

    // promiseFour.then( (user)=>{
    //     // console.log(user);
    //     // return user.username  
    // }).then((username)=>{
    //     // console.log(username);
    // }).catch((error)=>{
    //     // console.log(error);
    // // }).finally( () => console.log('finally executed') )

// Async , Await
      const promiseFive = new Promise((resolve, reject) => {
        setTimeout(function(){
            let error = true
            if(!error){
                resolve({username:"Chaman", password:44234})
            }else{
                reject(' Error: Something Went Wrong..')
            }
        },1000)
    })

    async function consumeFive(){
       try {
        const resonse = await promiseFive
        console.log(resonse);
       } catch (error) {
        console.log(error);
       }
    }
 consumeFive()

