const someThingWillHappen = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('Hey: Hola Minegritos!')
        }
        else{
            reject('whoop\'s!, donde está la Lucro');
        }
    });
};

someThingWillHappen()
    .then(response  => console.log(response))
    .catch(err      => console.error(err));

const someThingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('true');
            },2000)
        }else{
            const err = new Error('Whooops');
            reject(err);
        }
    });
};

someThingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));

Promise.all([someThingWillHappen(), someThingWillHappen2()])
    .then(response => {
        console.log(response);
        })
    .catch(err => {
        console.error(err);
    })