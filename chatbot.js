// Sample responses for the chatbot
const responses = {
    hi: "Hi! Welcome to Wanderlust Tours. How can I assist you today?",
    hello: "Hi! Welcome to Wanderlust Tours. How can I assist you today?",
    packages: "We offer a variety of exciting tour packages, including:\n- Varanasi - ₹10,900\n- Agra - ₹9,900\n- Delhi - ₹11,900\n- Ladakh - ₹13,900\n- Manali - ₹7,900\n- Kerala - ₹12,900\n- Rajasthan - ₹18,900\n- Goa - ₹21,900\n- Haridwar - ₹14,900\n- Jammu & Kashmir - ₹7,900\n- Tamil Nadu - ₹7,900\n- Nepal - ₹7,900\n- Bangladesh - ₹5,900\n- Mumbai - ₹11,900",
    varanasi: "Our Varanasi package includes 5 days, 4 nights, starting at ₹10,900 per person.",
    agra: "Our Agra package includes 7 days, 6 nights, starting at ₹9,900 per person.",
    delhi: "Our Delhi package includes 5 days, 4 nights, starting at ₹11,900 per person.",
    affordable: "The Bangladesh Tour Package is our most affordable option, priced at ₹5,900.",
    international: "Yes, we offer packages for Nepal and Bangladesh as part of our international options.",
    book: "You can book any of these packages by clicking the 'Book Now' button on our website or visiting the booking section.",
    default: "I'm sorry, I didn't understand that. Could you please rephrase?",
  };
  
  // Function to add a message to the chat body
  function addMessage(message, sender) {
    const chatBody = document.getElementById("chat-body");
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom
  }
  
  // Function to display available questions
  function showQuestions() {
    const questions = [
      "Hi",
      "Hello",
      "Packages",
      "Varanasi",
      "Agra",
      "Delhi",
      "Affordable",
      "International",
      "Book"
    ];
    const message = "Here are some questions you can ask me:\n" + questions.map((q) => `- ${q}`).join("\n");
    addMessage(message, "bot");
  }
  
  // Handle user input and bot response
  document.getElementById("send-button").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput) {
      addMessage(userInput, "user");
      document.getElementById("user-input").value = "";
  
      if (userInput.toLowerCase() === "show questions") {
        showQuestions();
      } else {
        const response = responses[userInput.toLowerCase()] || responses.default;
        setTimeout(() => addMessage(response, "bot"), 500); // Simulate delay
      }
    }
  });
  
  // Show questions button listener
  document.getElementById("show-commands").addEventListener("click", showQuestions);
  
  // Initialize chatbot with a welcome message
  addMessage("Welcome to Wanderlust Tours! Type 'show questions' or click the 'Show Questions' button to see what you can ask.", "bot");
  