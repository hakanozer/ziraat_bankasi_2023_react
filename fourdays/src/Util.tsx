import { wait } from "@testing-library/user-event/dist/utils";

const fnc1 = () => {
    return new Promise<boolean>( (resolve, reject) => {
        setTimeout(() => {
            console.log("fnc1 -call")
            resolve(true)
        }, 3000);
    })
}

const fnc2 = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("fnc2 -call")
            resolve(true)
        }, 2000);
    })
}

const fnc3 = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("fnc3 -call")
            resolve(true)
        }, 2000);
    })
}

export const allCall = async () => {
   /* 
   await fnc1()
    await fnc2()
    await fnc3()
    */
    
    
    fnc1().then(th1 => {
        console.log('th1', th1)
        fnc2().then( th2 => {
            console.log('th2', th2)
            fnc3().then( th3 => {
                console.log('th3', th3)
                console.log("All Servisi Finish")
            })
        })
    })
    console.log('All Finish')
    
}