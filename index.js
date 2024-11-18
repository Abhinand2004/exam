let arr=[]

function add() {
    const data=document.getElementById("input").value
    arr.push(data)
    display()
}
function display() {
    str=``
    for (i in arr){
      str+=`
        <li>${arr[i]}:<button onclick="del('${i}')">delete</button></li>
        ` }
    document.getElementById("out").innerHTML=str
}
function del(index) {
    arr.splice(index,1)
    display()
}