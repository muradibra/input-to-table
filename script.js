let Order = document.getElementById("fin-code");
let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let btn = document.getElementById("btn");
let btnReset = document.getElementById("btn_reset");
let table_tbody = document.querySelector("table tbody");

let arr = [{
    order: 1,
    fullname: "Murad Ibrahimov",
    email: "muradibrahimov@gmail.com"
}]

function render() {
    table_tbody.innerHTML = ""

    arr.forEach(item => {
        table_tbody.innerHTML += `<tr>
        <th scope="row">${item.order}</th>
            <td>${item.fullname}</td>
            <td>${item.email}</td>
            <td onclick='deleteRow(${item.order})'>🗑</td>
        </tr> `

    })

}

btnReset.addEventListener("click", resetInput)

function resetInput() {
    Order.value = ""
    fullname.value = ""
    email.value = ""
}


function deleteRow(murad) {
    console.log(murad);
    arr = arr.filter(item => item.order != murad);
    render()
}

btn.addEventListener("click", addPerson)

function addPerson() {

    if (Order.value && fullname.value && email.value) {
        arr.push({
            order: Order.value,
            fullname: fullname.value,
            email: email.value
        })
        resetInput()

    }
    else {
        alert("Zəhmət olmasa bütün alanları doldurun");
    }

    render()

}

render()
