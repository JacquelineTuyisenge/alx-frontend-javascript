/* eslint-disable */
export default function createIteratorObject(report) {
    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;
  
    const departments = Object.values(report);
  
    return {
      next() {
        if (currentDepartmentIndex >= departments.length) {
          return { done: true };
        }
  
        const department = departments[currentDepartmentIndex];
        const employees = department.employees;
  
        if (currentEmployeeIndex >= employees.length) {
          currentDepartmentIndex++;
          currentEmployeeIndex = 0;
          return this.next();
        }
  
        const employee = employees[currentEmployeeIndex];
        currentEmployeeIndex++;
  
        return { value: employee, done: false };
      }
    };
  }
/* eslint-enable */
