
// =====================================
// VEGA — THE 19TH EDITION
// Birthday Countdown
// =====================================

const birthdayDate = new Date(2026, 10, 12, 0, 0, 0);

function updateCountdown() {

    const now = new Date();

    const difference = birthdayDate.getTime() - now.getTime();

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const messageElement = document.getElementById("birthday-message");

    if (!daysElement || !hoursElement ||
        !minutesElement || !secondsElement) {
        return;
    }

    if (difference <= 0) {

        daysElement.textContent = "00";
        hoursElement.textContent = "00";
        minutesElement.textContent = "00";
        secondsElement.textContent = "00";

        if (messageElement) {
            if (
                now.getFullYear() === 2026 &&
                now.getMonth() === 10 &&
                now.getDate() === 12
            ) {
                messageElement.textContent =
                    "IT'S YOUR DAY, VEGA! HAPPY 19TH BIRTHDAY ✦";
            } else {
                messageElement.textContent =
                    "THE UNIVERSE CELEBRATED VEGA ✦";
            }
        }

        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");

    if (messageElement) {
        messageElement.textContent = "";
    }
}

// Start countdown immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);


// =====================================
// SMOOTH NAVIGATION
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// =====================================
// CONSOLE MESSAGE
// =====================================

console.log("Welcome to Vega's Universe ✦");
console.log("Made with love by Deneb.");
