function solve(arr) {
    const number = arr.shift();
    const sprintBoard = arr.splice(0, number);
    const board = {};

    sprintBoard.forEach((element) => {
        const [assignee, taskId, title, status, estimatedPoints] = element.split(":");

        if (!board.hasOwnProperty(assignee)) {
            board[assignee] = [];
        }

        board[assignee].push({
            taskId,
            title,
            status,
            estimatedPoints: Number(estimatedPoints),
        });
    });

    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        if (element.includes("Add New")) {
            const [_, assignee, taskId, title, status, estimatedPoints] = element.split(":");
            if (!board.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            } else {
                board[assignee].push({
                    taskId,
                    title,
                    status,
                    estimatedPoints: Number(estimatedPoints),
                });
            }
        } else if (element.includes("Change Status")) {
            const [_, assignee, taskId, newStatus] = element.split(":");

            if (!board.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }
            const task = board[assignee].find((e) => e.taskId === taskId);
            if (!task) {
                console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                continue;
            }
            task.status = newStatus;
        } else if (element.includes("Remove ")) {
            const [_, assignee, index] = element.split(":");
            if (!board.hasOwnProperty(assignee)) {
                console.log(`Assignee ${assignee} does not exist on the board!`);
                continue;
            }

            if (index < 0 || index >= board[assignee].length) {
                console.log(`Index is out of range!`);
                continue;
            }
            board[assignee].splice(index, 1);
        }
    }

    let [toDo, InProgress, codeReview, Done] = [0, 0, 0, 0];
    Object.values(board).forEach((el) => {
        el.forEach((element) => {
            if (element.status === "ToDo") {
                toDo += element.estimatedPoints;
            } else if (element.status === "In Progress") {
                InProgress += element.estimatedPoints;
            } else if (element.status === "Code Review") {
                codeReview += element.estimatedPoints;
            } else if (element.status === "Done") {
                Done += element.estimatedPoints;
            }
        });
    });

    console.log(`ToDo: ${toDo}pts`);
    console.log(`In Progress: ${InProgress}pts`);
    console.log(`Code Review: ${codeReview}pts`);
    console.log(`Done Points: ${Done}pts`);

    if (Done >= toDo + InProgress + codeReview) {
        console.log("Sprint was successful!");
    } else {
        console.log("Sprint was unsuccessful...");
    }
}

