// initial donors (you can change these)
let donors = [
    { name: "Rajath Shetty", phone: "9876543210", group: "A+" },
    { name: "Priya R", phone: "8765432109", group: "B+" },
    { name: "Amit K", phone: "7654321098", group: "O-" }
];

// navigation
function goToSearch() {
    showPage("search");
}

function goToRegister() {
    showPage("register");
}

function goHome() {
    showPage("home");
    document.getElementById("result").innerHTML = "";
    document.getElementById("registerMessage").innerHTML = "";
}

function showPage(id) {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("search").classList.add("hidden");
    document.getElementById("register").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
}

// search donors
function showDonors() {
    const group = document.getElementById("searchGroup").value;
    const result = document.getElementById("result");

    if (!group) {
        result.innerHTML = '<div class="error">Please select a blood group.</div>';
        return;
    }

    const filtered = donors.filter(d => d.group === group);

    if (filtered.length === 0) {
        result.innerHTML = '<div class="error">No donors found for this blood group.</div>';
        return;
    }

    result.innerHTML = filtered.map(d =>
        `<div class="donor">
            <div>Name: ${d.name}</div>
            <div>Phone: ${d.phone}</div>
            <div>Blood Group: ${d.group}</div>
        </div>`
    ).join("");
}

// register new donor
function registerDonor() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const group = document.getElementById("regGroup").value;
    const msg = document.getElementById("registerMessage");

    if (!name || !phone || !group) {
        msg.innerHTML = '<div class="error">Please fill all fields.</div>';
        return;
    }

    donors.push({ name, phone, group });

    // clear fields
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("regGroup").value = "";

    msg.innerHTML = '<div class="success">Registration successful! You are now in the donor list.</div>';
}
