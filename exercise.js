const http=require('http');

function fetch(url) {
    return new Promise((resolve, reject) => {
        http.get(url, (res) => {
            let data = '';
            res.on('data', (rd) => data = data + rd);
            res.on('end', () => resolve(data));
            res.on('error', reject);
        });
    });
}

fetch('http://dummy.restapiexample.com/api/v1/employees')
.then(data=>{
    for(i=0;i<3;i++){
        console.log(JSON.parse(data).data[i].employee_name,JSON.parse(data).data[i].employee_salary);
    }

});

// (async function read(){
//     const data=await fetch('http://dummy.restapiexample.com/api/v1/employees');
//    console.log('Employee name:'+ data[0].employee_name);
//     console.log('Employee salary:'+ data[0].employee_salary);
// })();