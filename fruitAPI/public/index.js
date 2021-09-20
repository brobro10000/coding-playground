

async function API(){
    console.log('hi')
    await fetch('api', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json()).then(data => console.log(data))
}
API()