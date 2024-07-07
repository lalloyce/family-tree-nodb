let memberCounter = 1;

function addMember(parentId, relation) {
    const memberName = prompt("Enter member's name:");
    if (!memberName) return;

    const memberGender = prompt("Enter member's gender (M/F):");
    if (!memberGender) return;

    const memberYearOfBirth = prompt("Enter member's year of birth (optional):");
    const newMemberId = 'member' + memberCounter++;

    const newMember = {
        id: newMemberId,
        name: memberName,
        gender: memberGender,
        yearOfBirth: memberYearOfBirth || '',
        children: []
    };

    if (parentId === null) {
        const root = document.createElement('li');
        root.id = newMemberId;
        root.innerHTML = `<div onclick="showOptions('${newMemberId}')">${memberName} (${memberGender}) ${memberYearOfBirth ? `- ${memberYearOfBirth}` : ''}</div>`;
        document.getElementById('family-tree').appendChild(root);
    } else {
        const parentElement = document.getElementById(parentId);
        let ul = parentElement.querySelector('ul');
        if (!ul) {
            ul = document.createElement('ul');
            parentElement.appendChild(ul);
        }

        const li = document.createElement('li');
        li.id = newMemberId;
        li.innerHTML = `<div onclick="showOptions('${newMemberId}')">${memberName} (${memberGender}) ${memberYearOfBirth ? `- ${memberYearOfBirth}` : ''}</div>`;

        if (relation === 'spouse') {
            const spouseContainer = parentElement.querySelector('.spouse');
            if (spouseContainer) {
                spouseContainer.appendChild(li);
            } else {
                const spouseDiv = document.createElement('div');
                spouseDiv.className = 'spouse';
                spouseDiv.appendChild(li);
                parentElement.appendChild(spouseDiv);
            }
        } else {
            ul.appendChild(li);
        }
    }
}

function showOptions(memberId) {
    const relation = prompt("Add relation (parent, sibling, child, spouse):");
    switch(relation) {
        case 'parent':
            addMember(memberId, 'parent');
            break;
        case 'sibling':
            const parent = document.getElementById(memberId).parentNode.parentNode;
            if (parent && parent.nodeName === 'LI') {
                addMember(parent.id, 'sibling');
            } else {
                alert("Root member cannot have siblings.");
            }
            break;
        case 'child':
            addMember(memberId, 'child');
            break;
        case 'spouse':
            addMember(memberId, 'spouse');
            break;
        default:
            alert("Invalid relation.");
    }
}

function deleteMember(memberId) {
    const memberElement = document.getElementById(memberId);
    if (memberElement) {
        memberElement.parentNode.removeChild(memberElement);
    }
}
