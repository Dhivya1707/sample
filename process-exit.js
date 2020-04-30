setTimeout(()=>process.exit(),2000);
process.on('exit',()=>{
    console.log('process ends');
});
console.log("hello");