const fse=require('fs-extra')

//Copy File
const copyFile=async()=>{
    try{
        await fse.copy('../FIle System Handling/fs-extra.js','./some.js')
        console.log('success')
    }catch(err){
        console.log(err)
    }
}

//Read JSON File
const readJSONFile=async()=>{
    try{
        await fse.readJSON('../package.json',(err,packageObj)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log(packageObj)
        })
    }catch(err){

    }
}

const makeDirectory=async()=>{
    let dir='./random'
    fse.ensureDir(dir, err => {
        console.log(err) // => null
        // dir has now been created, including the directory it is to be placed in
    })
}
