import { getEmployees } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employees--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

