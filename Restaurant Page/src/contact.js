export function loadContact() {
  const container = document.createElement("div");
  container.classList.add("tab-content");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  heading.classList.add("page-title");
  container.appendChild(heading);

  const contactWrapper = document.createElement("div");
  contactWrapper.classList.add("main-card");

  contactWrapper.innerHTML = `
    <div class="contact-details">
      <h2>Get in Touch</h2>
      <p>📞 <strong>Phone:</strong> (555) 123-4567</p>
      <p>✉️ <strong>Email:</strong> reservations@savoryfork.com</p>
      <p>📍 <strong>Address:</strong> 123 Culinary Way, Flavor Town</p>
    </div>
    
    <form class="contact-form" onsubmit="event.preventDefault();">
      <h3>Send a Message</h3>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message..." rows="4" required></textarea>
      <button type="submit" class="submit-btn">Send</button>
    </form>
  `;

  container.appendChild(contactWrapper);
  return container;
}
