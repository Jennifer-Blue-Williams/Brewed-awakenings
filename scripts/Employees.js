import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")
            let foundEmployee = {}
            let employeeOrders = []
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    foundEmployee = employee
                    employeeOrders = orders.filter((empOrder) => {
                        if (empOrder.employeeId === employee.id) {
                            return true
                        }
                    })
                }
            }
            window.alert(` ${foundEmployee.name} sold ${employeeOrders.length} products `)
        }
    })

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employees--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

