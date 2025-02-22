document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("infi-list");
    const container = document.querySelector("main"); // Attach event to internal container

    function addItems(count) {
        for (let i = 0; i < count; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = `Item ${list.children.length + 1}`;
            list.appendChild(listItem);
        }
    }

    // Load initial 10 items
    addItems(10);

    // Infinite Scroll inside `main`
    container.addEventListener("scroll", () => {
        const scrollableHeight = container.scrollHeight - container.clientHeight;
        const scrolled = container.scrollTop;

        if (scrolled >= scrollableHeight - 5) {
            addItems(2); // Add 2 more items
        }
    });
});
