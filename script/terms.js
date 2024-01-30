// burger menu
var burgerMenu = document.getElementById('burger-menu');

var overlay = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
});

const termsAndConditions = [
        {
            header: "1. Content and Use of the Website:",
            text: "The content on this website, including but not limited to images, text, graphics, and multimedia, is provided for informational and entertainment purposes only.",
            secondText: "You may use the content for personal, non-commercial purposes, but you may not reproduce, distribute, modify, or otherwise exploit the content without our written consent",
        },
        {
            header: "2. User Contributions:",
            text: "Users may contribute comments, reviews, or other content to the website. By submitting content, you grant us the right to use, modify, and display the content on our website.",
            secondText: "You are solely responsible for the content you submit, and it should not violate any applicable laws or infringe upon the rights of others.",
        },
        {
            header: "3. Intellectual Property:",
            text: "All intellectual property rights related to the website's content and design are owned or licensed by GEORGIA.",
            secondText: "You may not use our trademarks, logos, or other proprietary information without our prior written consent.",
        },
        {
            header: "4. Privacy Policy:",
            text: "Our Privacy Policy governs the collection, use, and disclosure of personal information on our website. By using our website, you consent to the practices outlined in our Privacy Policy.",
            secondText: undefined,
        },
        {
            header: "5. Third-Party Links:",
            text: "Our website may contain links to third-party websites. We do not endorse or control these third-party sites and are not responsible for their content or practices.",
            secondText: undefined,
        },
        {
            header: "6. Disclaimer of Warranties:",
            text: "We make no warranties or representations about the accuracy or completeness of the content on our website.",
            secondText: "Your use of the website is at your own risk, and we do not guarantee that the website will be error-free or uninterrupted.",
        },
        {
            header: "7. Limitation of Liability:",
            text: "GEORGIA and its affiliates, officers, employees, or agents shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use the website.",
            secondText: undefined,
        },
        {
            header: "8. Governing Law:",
            text: "These terms and conditions are governed by and construed in accordance with the laws of georgia(საქართველო), without regard to its conflict of law principles.",
            secondText: undefined,
        },
        {
            header: "9. Changes to Terms:",
            text: "We reserve the right to update or modify these terms and conditions at any time. Your continued use of the website constitutes acceptance of the updated terms.",
            secondText: undefined,
        },
        {
            header: "10. Contact Information:",
            text: "If you have any questions or concerns about these terms and conditions, please contact us at name@gmail.com",
            secondText: undefined,
        },
];
const toWrite = document.getElementById("terms-conditions");

termsAndConditions.forEach((item) => {
    const div = document.createElement("div");
    div.className = "divOfTermsAndConditions";

    const h2 = document.createElement("h2");
    h2.innerText = `${item.header}`;

    const ul = document.createElement("ul");

    const liOne = document.createElement("li");
    liOne.innerText = `${item.text}`;
    
    if (item.secondText !== undefined) {
        const liTwo = document.createElement("li");
        liTwo.innerText = `${item.secondText}`;
        ul.appendChild(liTwo);
    }

    ul.appendChild(liOne);
    div.appendChild(h2);
    div.appendChild(ul);
    toWrite.appendChild(div);
});
