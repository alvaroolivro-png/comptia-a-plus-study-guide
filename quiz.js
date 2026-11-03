const quizzes = {
  "quiz-core1": {
    title: "Core 1 quick test",
    questions: [
      { q: "A Windows client has an IPv4 address beginning with 169.254. Which is the best first lead?", options: ["DHCP lease failure or path to the DHCP server", "Incorrect monitor refresh rate", "A full printer toner cartridge", "A missing local user profile"], answer: 0, why: "169.254.0.0/16 is link-local/APIPA. Check the client link and DHCP service/path before changing unrelated hardware." },
      { q: "Which service translates a host name such as helpdesk.example into an IP address?", options: ["DHCP", "DNS", "NTP", "SNMP"], answer: 1, why: "DNS resolves names to records such as A and AAAA. DHCP assigns addressing configuration." },
      { q: "Which statement about RAID 0 is correct?", options: ["It mirrors data for redundancy", "It stripes data but provides no redundancy", "It uses parity across three or more disks", "It is a backup stored off-site"], answer: 1, why: "RAID 0 stripes data for performance/capacity, but a single drive failure can lose the array. RAID is not a backup." },
      { q: "Which laser-printer component uses heat and pressure to bond toner to paper?", options: ["Fuser", "Pickup roller", "Separation pad", "Duplexer"], answer: 0, why: "The fuser bonds toner to the page. Pickup rollers and separation pads feed paper." },
      { q: "A hypervisor that runs directly on physical host hardware is which type?", options: ["Type 1", "Type 2", "SaaS", "Container registry"], answer: 0, why: "Type 1 hypervisors run on the hardware. Type 2 hypervisors run on a host operating system." },
      { q: "A user can reach a server by IP address but not by its name. What should you investigate first?", options: ["DNS configuration or resolution", "CPU thermal paste", "Printer fuser", "Bluetooth pairing"], answer: 0, why: "Successful IP connectivity but failed name access points toward DNS or name-resolution configuration." },
      { q: "What does the USB-C connector shape tell you by itself?", options: ["It guarantees Thunderbolt", "It guarantees a particular data rate", "Only the physical connector shape; capabilities vary", "It always carries video"], answer: 2, why: "USB-C describes the reversible connector. Supported data, power, and video features depend on the device and cable." },
      { q: "A PC suddenly powers off under load and feels very hot. Which initial cause best fits?", options: ["Thermal problem or inadequate cooling", "Incorrect DNS MX record", "An expired printer queue", "A missing DHCP scope option"], answer: 0, why: "Overheating can trigger throttling or protective shutdown. Check airflow, fans, heatsink contact, and temperatures." },
      { q: "Which statement about an M.2 drive is accurate?", options: ["M.2 always means NVMe", "M.2 is a form factor; supported interface/protocol must also match", "M.2 is a printer connection", "Every M.2 slot supports every drive"], answer: 1, why: "M.2 describes a physical form factor. Verify SATA or PCIe/NVMe support, keying, and slot compatibility." },
      { q: "Which device forwards traffic between different IP networks?", options: ["Router", "Unmanaged keyboard", "Patch panel", "Fuser"], answer: 0, why: "Routers forward packets between networks; switches primarily forward frames within a LAN." },
      { q: "A user reports a slow wireless connection only in one room. What is the best first comparison?", options: ["Compare signal/band and test near the access point", "Replace the CPU", "Change the DNS MX record", "Reinstall the printer driver"], answer: 0, why: "The location-specific symptom points first toward signal, interference, band, or roaming conditions." },
      { q: "Which RAID statement is correct?", options: ["RAID 1 mirrors data but is not a substitute for backup", "RAID 0 mirrors data", "RAID 5 has no parity", "Any RAID protects against accidental deletion"], answer: 0, why: "RAID 1 mirrors, improving availability for a drive failure, but it does not protect against deletion, malware, or site loss." }
    ]
  },
  "quiz-core2": {
    title: "Core 2 quick test",
    questions: [
      { q: "A staff member only needs to read files in one project folder. Which access principle should guide permissions?", options: ["Least privilege", "Open access by default", "Shared administrator account", "Disable auditing"], answer: 0, why: "Least privilege grants only the access needed for the job, limiting accidental or malicious impact." },
      { q: "A caller pressures you to bypass identity verification to reset an executive password. What is the best response?", options: ["Follow the approved verification and escalation procedure", "Reset it because the request is urgent", "Send the current password by email", "Disable MFA temporarily"], answer: 0, why: "Urgency is a common social-engineering tactic. Follow policy, verify identity, and escalate when required." },
      { q: "Which Windows file system supports file permissions and journaling and is commonly used for system volumes?", options: ["NTFS", "FAT12", "ISO 9660", "ext2 only"], answer: 0, why: "NTFS is the typical Windows volume file system with ACL permissions and journaling." },
      { q: "Which command checks protected Windows system files and attempts repairs?", options: ["sfc /scannow", "nslookup", "net use", "format"], answer: 0, why: "System File Checker checks protected system files; it is not a substitute for backup or diagnosis." },
      { q: "Where would you look for recorded Windows application and system events?", options: ["Event Viewer", "Paint", "Disk Cleanup", "Bluetooth settings"], answer: 0, why: "Event Viewer exposes application, system, security, and other event logs useful in troubleshooting." },
      { q: "Which backup type copies changes made since the most recent backup of any type?", options: ["Incremental", "Differential", "Full", "Bare-metal restore"], answer: 0, why: "Incremental backups capture changes since the last backup. Differential backups capture changes since the last full backup." },
      { q: "Why should a change plan include a rollback procedure?", options: ["To restore a known-good state if the change fails", "To avoid documenting the change", "To skip user communication", "To guarantee no downtime"], answer: 0, why: "A rollback plan defines how to reverse a failed change and reduce service impact." },
      { q: "An application fails for one user but works for others on the same PC. What is a useful next diagnostic comparison?", options: ["Test the app in another user profile and compare user-specific settings", "Replace the network switch immediately", "Reinstall the operating system first", "Change the monitor cable"], answer: 0, why: "A working second profile helps isolate per-user configuration, permissions, or profile corruption without destructive changes." },
      { q: "Which tool is best suited to inspect Windows application and system event logs?", options: ["Event Viewer", "Disk Cleanup", "Paint", "Task Scheduler only"], answer: 0, why: "Event Viewer provides recorded Windows application and system events for troubleshooting." },
      { q: "A PC can ping a server by IP but a hostname lookup fails. What should you investigate?", options: ["DNS resolution and configured DNS servers", "Display cable version", "Printer paper size", "CPU fan direction"], answer: 0, why: "IP reachability with failed name lookup points toward DNS configuration or resolution." },
      { q: "Which backup combination generally requires the least data to restore after a full backup?", options: ["Full plus latest differential", "Full plus every incremental since the full", "Only a system restore point", "No backup is needed"], answer: 0, why: "A differential restore typically needs the last full backup and the latest differential; incremental chains require each increment." },
      { q: "A worker entered a password on a suspected phishing site. What is the best next action?", options: ["Report promptly and follow approved credential-reset and incident procedures", "Delete the browser history and say nothing", "Forward the email to coworkers", "Wait until the account is misused"], answer: 0, why: "Prompt reporting lets the organization contain risk; follow its identity and incident response process." },
      { q: "What should be included in a planned IT change?", options: ["Approval, risk/impact, timing, rollback, and verification", "Only the technician's preferred tool", "No user communication or notes", "A promise that failure is impossible"], answer: 0, why: "Change control reduces risk through authorization, impact review, a maintenance window, rollback, and validation." }
    ]
  }
};

function renderQuiz(containerId, quiz) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const formId = `${containerId}-form`;
  const statusId = `${containerId}-status`;
  container.innerHTML = `<h3 id="${containerId}-title">${quiz.title}</h3><form id="${formId}"></form><p id="${statusId}" class="quiz-status" role="status" aria-live="polite" tabindex="-1"></p>`;
  const form = document.getElementById(formId);
  quiz.questions.forEach((item, questionIndex) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "question";
    const legend = document.createElement("legend");
    legend.textContent = `${questionIndex + 1}. ${item.q}`;
    fieldset.appendChild(legend);
    item.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "answer-option";
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `${containerId}-q${questionIndex}`;
      input.value = String(optionIndex);
      label.append(input, document.createTextNode(option));
      fieldset.appendChild(label);
    });
    form.appendChild(fieldset);
  });
  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Check answers";
  form.appendChild(button);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = document.getElementById(statusId);
    const missing = quiz.questions.findIndex((_, i) => !form.querySelector(`input[name="${containerId}-q${i}"]:checked`));
    if (missing !== -1) {
      status.dataset.state = "error";
      status.textContent = `Answer every question first. Question ${missing + 1} is unanswered.`;
      form.querySelector(`input[name="${containerId}-q${missing}"]`).focus();
      return;
    }
    let score = 0;
    form.querySelectorAll(".feedback").forEach((node) => node.remove());
    quiz.questions.forEach((item, i) => {
      const selected = Number(form.querySelector(`input[name="${containerId}-q${i}"]:checked`).value);
      const correct = selected === item.answer;
      if (correct) score += 1;
      const feedback = document.createElement("p");
      feedback.className = "feedback";
      feedback.textContent = `${correct ? "Correct." : `Not quite. Correct answer: ${item.options[item.answer]}.`} ${item.why}`;
      form.querySelectorAll("fieldset")[i].appendChild(feedback);
    });
    status.dataset.state = score >= quiz.questions.length * 0.75 ? "success" : "error";
    status.textContent = `Score: ${score} out of ${quiz.questions.length}. Review each explanation, including the ones you got right.`;
    status.focus();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  Object.entries(quizzes).forEach(([id, quiz]) => renderQuiz(id, quiz));
});
