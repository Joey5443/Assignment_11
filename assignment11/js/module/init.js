async function fetchEmployees() {
    try{
        const res = await fetch('./data/employees.json');
        const employees = await res.json();
        console.log('empl async: ', employees);
        return employees;
    } catch(e){
        console.log('catched error: ', e);
    }
}

export {fetchEmployees};