function generateLetter() {

    const letterType = document.getElementById("letterType").value;

    const customerName = document.getElementById("customerName").value;
    const address = document.getElementById("address").value;
    const accountNumber = document.getElementById("accountNumber").value;
    const facilityType = document.getElementById("facilityType").value;
    const issue = document.getElementById("issue").value;


    let letter = "";


    if (letterType === "document") {

        letter = `
To,

${customerName}
${address}


Dear Sir/Madam,

SUB: Submission of pending documents

We refer to the credit facilities availed by you from our branch under Account No. ${accountNumber}.

It is observed that the following documents/information are pending from your end:

${issue}

You are requested to submit the above documents/information at the earliest for regularisation of our records.

Kindly treat the matter as urgent.

Yours faithfully,

Branch Manager
`;

    }


    else if (letterType === "renewal") {

        letter = `
To,

${customerName}
${address}


Dear Sir/Madam,

SUB: Renewal of Credit Facilities

We refer to the ${facilityType} facility maintained by you with our branch under Account No. ${accountNumber}.

The renewal of the existing credit facilities is due.

You are requested to submit the required financial statements and other documents for processing the renewal of the credit facilities.

${issue}

Kindly submit the required documents at the earliest.

Yours faithfully,

Branch Manager
`;

    }


    else if (letterType === "irregularity") {

        letter = `
To,

${customerName}
${address}


Dear Sir/Madam,

SUB: Irregularity in Credit Account

We refer to your ${facilityType} account bearing Account No. ${accountNumber} maintained with our branch.

It has been observed that the account is irregular due to the following reason:

${issue}

You are requested to regularise the account immediately and ensure that the account is conducted as per the terms and conditions of sanction.

Kindly treat this communication as urgent.

Yours faithfully,

Branch Manager
`;

    }


    else {

        alert("Please select a letter type.");

        return;
    }


    document.getElementById("letterPreview").innerText = letter;
}


function copyLetter() {

    const letter = document.getElementById("letterPreview").innerText;

    if (!letter || letter.includes("Your generated letter")) {
        alert("Please generate a letter first.");
        return;
    }

    navigator.clipboard.writeText(letter);

    alert("Letter copied successfully!");
}
