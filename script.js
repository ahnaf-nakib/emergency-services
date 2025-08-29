document.addEventListener('DOMContentLoaded', () => {
    // Select all the necessary elements from the DOM
    const heartCount = document.querySelector('.heart-icon');
    const coinCount = document.querySelector('.coin-count');
    const copyCount = document.querySelector('.copy-count');
    const clearHistoryBtn = document.querySelector('.clear-history-btn');
    const historyList = document.querySelector('.history-list');
    const cards = document.querySelectorAll('.card');

    // Initial values
    let currentHearts = 0;
    let currentCoins = 100;
    let currentCopies = 2;

    // Update the UI with initial values
    heartCount.textContent = `❤️ ${currentHearts}`;
    coinCount.textContent = `${currentCoins} Coins`;
    copyCount.textContent = `${currentCopies} Copy`;

    // Function to handle heart icon clicks on cards
    cards.forEach(card => {
        const heartIconCard = card.querySelector('.heart-icon-card');
        heartIconCard.addEventListener('click', () => {
            currentHearts++;
            heartCount.textContent = `❤️ ${currentHearts}`;
            alert('A heart has been added to your count!');
        });
    });

    // Function to handle copy button clicks
    cards.forEach(card => {
        const copyBtn = card.querySelector('.copy-btn');
        copyBtn.addEventListener('click', () => {
            const serviceNumber = card.dataset.serviceNumber;
            navigator.clipboard.writeText(serviceNumber)
                .then(() => {
                    alert(`Hotline number ${serviceNumber} has been copied!`);
                    currentCopies++;
                    copyCount.textContent = `${currentCopies} Copy`;
                })
                .catch(err => {
                    console.error('Failed to copy text: ', err);
                    alert('Failed to copy the number. Please try again.');
                });
        });
    });

    // Function to handle call button clicks
    cards.forEach(card => {
        const callBtn = card.querySelector('.call-btn');
        callBtn.addEventListener('click', () => {
            const serviceName = card.dataset.serviceName;
            const serviceNumber = card.dataset.serviceNumber;

            // Check if coins are sufficient
            if (currentCoins < 20) {
                alert('Insufficient coins! You need at least 20 coins to make a call.');
                return;
            }

            // Deduct coins
            currentCoins -= 20;
            coinCount.textContent = `${currentCoins} Coins`;

            // Show an alert
            alert(`Calling ${serviceName} at ${serviceNumber}. 20 coins have been deducted.`);

            // Get current time
            const now = new Date();
            const timeString = now.toLocaleTimeString();

            // Create a new history item
            const newHistoryItem = document.createElement('div');
            newHistoryItem.classList.add('history-item');
            newHistoryItem.innerHTML = `
                <p class="history-name">${serviceName}</p>
                <p class="history-number">${serviceNumber}</p>
                <span class="history-time">${timeString}</span>
            `;

            // Append the new item to the history list
            historyList.appendChild(newHistoryItem);
        });
    });

    // Function to handle Clear History button
    clearHistoryBtn.addEventListener('click', () => {
        historyList.innerHTML = ''; // Clear all children from the history list
        alert('Call history has been cleared.');
    });
});