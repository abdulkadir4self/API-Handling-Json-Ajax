const getEmployees = document.getElementById('getEmployees');
const employeeSection = document.getElementById('employeeSection');


getEmployees.addEventListener('click' , function(e){
    getFetchData();
})

function DisplayEmployee(empData){
    empData.forEach(function(el){
        let layout = `<div id="container">
        <div id="employeeCard">
           <div id="section1">
            <div id="img-age">
                <img src="${el.pic}" alt="${el.name}">
                <span>${el.age}</span>
            </div>
           </div>
            <h6 id="empName">${el.name} </h6>
            <div id="strip">
                <h6>${el.company} </h6>
                <span class="vertical-line"></span>
                <h6>${el.designation} </h6>
            </div>
            <h6 id="gender">${el.gender} </h6>
            <div id="email" class="basic-info">
                <span class="material-symbols-outlined">mail</span>
                <h6>${el.email} </h6>
            </div>
            <div id="contact" class="basic-info">
                <span class="material-symbols-outlined">call</span>
                <h6>${el.phone} </h6>
            </div>
            <div id="salary" class="basic-info">
                <span class="material-symbols-outlined">monetization_on</span>
                <h6>${el.salary} </h6>
            </div>

        </div>
    </div>`
    employeeSection.insertAdjacentHTML('beforeend' , layout)
    })
}


async function getFetchData(){
    const response = await fetch('https://mocki.io/v1/9b0dbdf6-83d8-4297-ad79-7cdb249e767c')
    const employeesArr = await response.json();
    DisplayEmployee(employeesArr);

}






