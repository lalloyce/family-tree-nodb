**Family Tree Project**
**Overview**
This project provides an interactive family tree visualization tool where users can add, view, and delete family members. The tool supports adding parents, siblings, children, and spouses, along with the option to include each member's birth year. The family tree is visually represented using an organogram-style layout with rounded rectangles and grey connecting lines.

**Features**
Add family members (parent, sibling, child, spouse).
Include optional year of birth for each member.
Click on any member to add new relations.
Delete members and their descendants.
Visual representation of family structure with connecting lines and distinct spouse positioning.

**Files**
index.html: The main HTML file containing the structure of the application.
styles.css: The CSS file for styling the family tree and its nodes.
script.js: The JavaScript file managing the interactivity and logic of the family tree.
Getting Started
Prerequisites
To run this project, you only need a modern web browser.

**Installation**
Clone the repository or download the project files.
Ensure that index.html, styles.css, and script.js are in the same directory.
Running the Application
Open index.html in a web browser.
Click the "Add Root Member" button to start building your family tree.
Click on any member to add a relation (parent, sibling, child, spouse).
Optionally enter the year of birth when prompted.
To delete a member, use the browser's developer tools to access the deleteMember function in the console (e.g., deleteMember('member1')).

**Example Usage**
Add Root Member: Click "Add Root Member", enter the name and gender, and optionally enter the year of birth.
Add Child: Click on the root member, select "child", and enter the details.
Add Spouse: Click on a member, select "spouse", and enter the details. The spouse will appear slightly below the member.
Add Sibling: Click on a member, select "sibling", and enter the details. The sibling will appear on the same line.
Add Parent: Click on a member, select "parent", and enter the details. The parent will appear above the member.

**Customization**
You can customize the family tree's appearance and behavior by modifying the CSS and JavaScript files.

styles.css: Adjust the styles for nodes, lines, and overall layout.
script.js: Modify the logic for adding and deleting members and the prompts and interactions.
Contribution
If you want to contribute to this project, please fork the repository and submit a pull request with your changes.

**License**
This project is licensed under the MIT License.

**Contact**
For any questions or suggestions, please get in touch with Lawrence Juma at lalloyce@gmail.com.
