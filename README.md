# 🌟 Salesforce Contact Locator App 🌟

## 🚀 Project Overview
This project is a Lightning Web Component (LWC) built on the Salesforce platform, designed to efficiently search and display contact records based on user-entered search terms. It leverages Apex for robust server-side data querying, demonstrating a practical application of Salesforce development skills.

## ✨ Features
- **Dynamic Contact Search:** Real-time search for contacts by Name, Email, or Phone.
- **Apex Controller Integration:** Utilizes a secure Apex class for querying Salesforce data.
- **Responsive UI:** Built with Lightning Web Components for a modern and intuitive user experience.
- **Error Handling:** Basic error display for search failures.

## 🛠️ Technologies Used
- **Salesforce Platform:** Lightning Web Components (LWC), Apex
- **Web Technologies:** HTML, JavaScript, CSS (Lightning Design System)
- **Version Control:** Git, GitHub
- **Development Environment:** Visual Studio Code (VS Code) with Salesforce Extension Pack
- **Salesforce CLI**

## ⚡ Getting Started (How to deploy and run this project)

### Prerequisites
- A Salesforce Developer Org (or any Salesforce org with development access)
- Visual Studio Code installed
- Salesforce CLI installed
- Salesforce Extension Pack for VS Code installed

### Installation & Deployment Steps

1.  **Clone the Repository:**
    Open your terminal or VS Code's integrated terminal (Ctrl+` or Cmd+`).
    ```bash
    git clone [https://github.com/SreenuPonemoni/ContactLocatorApp.git](https://github.com/SreenuPonemoni/ContactLocatorApp.git)
    cd ContactLocatorApp
    ```

2.  **Authorize Your Salesforce Org:**
    In VS Code, open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P).
    Type `SFDX: Authorize an Org` and select it.
    Choose `Project Default` and give it an alias like `SreenuDevOrg`.
    This will open your browser to log into your Salesforce org. After logging in, allow access.

3.  **Deploy Source to Org:**
    In VS Code's Explorer (left sidebar), right-click on the `force-app` folder.
    Select `SFDX: Deploy Source to Org`.
    This will push the Apex class and LWC to your connected Salesforce org.

## ➡️ Usage (How to see the app in action)

1.  **Open Your Salesforce Org:**
    In VS Code, open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P).
    Type `SFDX: Open Default Org` and select it. Your Salesforce org will open in your web browser.

2.  **Create a Lightning App Page:**
    * In your Salesforce Org, navigate to `Setup` (Gear Icon) -> `Setup Home`.
    * In the Quick Find box, type `App Builder` and select `Lightning App Builder`.
    * Click `New` -> Select `App Page` -> Click `Next`.
    * Give the page a `Label`: `Contact Locator Page` -> Click `Next`.
    * Choose a template (e.g., `One Region`) -> Click `Finish`.
    * On the Lightning App Builder canvas, search for `contactLocator` in the Components panel (left sidebar).
    * Drag the `contactLocator` component onto the canvas.
    * Click `Save` in the top right.
    * Click `Activate`. Choose to make it visible for `System Administrators` and optionally add it to `Navigation Menus` (e.g., Sales App, Service App). Click `Save`.

3.  **Access the Page and Test:**
    * From the Salesforce App Launcher (9 dots icon in the top left), search for `Contact Locator Page` and click on it.
    * Now you can use the search box to find contacts! Try searching for existing contact names, emails, or phone numbers in your Salesforce org.

## 📸 Screenshot / Demo
(Once your project is deployed, take a screenshot of your LWC in action on the Salesforce page. Or, even better, record a short GIF of you using it. You can use tools like ShareX (Windows) or LICEcap (Windows/Mac) to record GIFs.)

![Screenshot of Contact Locator App](assets/contact_locator_demo.gif)
*(Replace `assets/contact_locator_demo.gif` with your actual image path, or use a direct image URL)*

## 💡 Future Enhancements
- Implement pagination for search results.
- Add more advanced filtering options (e.g., by account, city).
- Enhance UI with Salesforce Lightning Design System (SLDS) styling.
- Add unit tests for the Apex controller and LWC.

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact
Connect with me:
- **LinkedIn:** [http://linkedin.com/in/sreenu-ponemoni-b84167369](https://www.linkedin.com/in/sreenuponemoni/)
- **GitHub:** [https://github.com/liveasyourlike](https://github.com/SreenuPonemoni)
- **Email:** liveasyourlike@gmail.com