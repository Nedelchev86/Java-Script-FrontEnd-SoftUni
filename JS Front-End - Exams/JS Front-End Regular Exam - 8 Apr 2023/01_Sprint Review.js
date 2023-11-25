function solve(arr) {
    const number = Number(arr.shift());
    const assignees = arr.splice(0, number).reduce((acc, curr) => {
        const [assignee, taskId, title, status, points] = curr.split(":");
        if (!acc.hasOwnProperty(assignee)) {
            acc[assignee] = [];
        }
        acc[assignee].push({taskId, title, status, points});
        return acc;
    }, {});

    for (const line of arr) {
        const [command, ...rest] = line.split(":");

        if (command === "Add New") {
            const [assignee, taskId, title, status, points] = rest;

            if (!assignees.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
            } else {
                assignees[assignee].push({taskId, title, status, points});
            }
        } else if (command === "Change Status") {
            const [assignee, taskId, newStatus] = rest;

            if (!assignees.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }
            const task = assignees[assignee].find((x) => x.taskId === taskId);

            if (!task) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                continue;
            }
            task.status = newStatus;
        } else if (command === "Remove Task") {
            const [assignee, index] = rest;

            if (!assignees.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }

            if (index < 0 || index >= assignees[assignee].length) {
                console.log("Index is out of range!");
                continue
            }
            assignees[assignee].splice(index, 1);
        }
    }
    const status = {ToDo: 0, "In Progress": 0, "Code Review": 0, Done: 0};

    Object.values(assignees).forEach((el) => {
        for (const n of el) {
            status[n.status] += Number(n.points);
        }
    });
    for (const key in status) {
        if (key === "Done") {
            console.log(`${key} Points: ${status[key]}pts`);
        } else {
            console.log(`${key}: ${status[key]}pts`);
        }
    }

    if (status.Done >= status.ToDo + status["In Progress"] + status["Code Review"]) {
        console.log("Sprint was successful!");
    } else {
        console.log("Sprint was unsuccessful...");
    }
}
