function generateLetter() {

    const letterType = document.getElementById("letterType").value;

    const customerName = document.getElementById("customerName").value;
    const address = document.getElementById("address").value;
    const accountNumber = document.getElementById("accountNumber").value;
    const facilityType = document.getElementById("facilityType").value;
    const issue = document.getElementById("issue").value;

    const today = new Date().toLocaleDateString("en-GB");

    let subject = "";
    let body = "";


    if (letterType === "document") {

        subject = "SUBMISSION OF PENDING DOCUMENTS";

        body = `
            <p>We refer to the credit facilities availed by you from our branch under Account No. <strong>${accountNumber}</strong>.</p>

            <p>It is observed that the following documents/information are pending from your end:</p>

            <p><strong>${issue}</strong></p>

            <p>You are requested to submit the above documents/information at the earliest for regularisation of our records.</p>

            <p>Kindly treat the matter as urgent.</p>
        `;
    }


    else if (letterType === "renewal") {

        subject = "RENEWAL OF CREDIT FACILITIES";

        body = `
            <p>We refer to the ${facilityType} facility maintained by you with our branch under Account No. <strong>${accountNumber}</strong>.</p>

            <p>The renewal of the existing credit facilities is due.</p>

            <p>You are requested to submit the required financial statements and other documents for processing the renewal of the credit facilities.</p>

            <p>${issue}</p>

            <p>Kindly submit the required documents at the earliest.</p>
        `;
    }


    else if (letterType === "irregularity") {

        subject = "IRREGULARITY IN CREDIT ACCOUNT";

        body = `
            <p>We refer to your ${facilityType} account bearing Account No. <strong>${accountNumber}</strong> maintained with our branch.</p>

            <p>It has been observed that the account is irregular due to the following reason:</p>

            <p><strong>${issue}</strong></p>

            <p>You are requested to regularise the account immediately and ensure that the account is conducted as per the terms and conditions of sanction.</p>

            <p>Kindly treat this communication as urgent.</p>
        `;
    }


    else {

        alert("Please select a letter type.");
        return;
    }


    const letter = `

        <div class="letter-document">

            <div class="letter-header">

                <h2>STATE BANK OF INDIA</h2>

                <div>JORHAT BRANCH</div>

            </div>


            <div class="letter-meta">

                <div>
                    Ref No: ____________
                </div>

                <div>
                    Date: ${today}
                </div>

            </div>


            <div class="letter-address">

                <strong>To</strong><br><br>

                ${customerName}<br>

                ${address.replace(/\n/g, "<br>")}

            </div>


            <p>Dear Sir/Madam,</p>


            <div class="letter-subject">

                ${subject}

            </div>


            <div class="letter-body">

                ${body}

            </div>


            <div class="signature">

                Yours faithfully,<br><br><br>

                <strong>Branch Manager</strong><br>

                State Bank of India<br>

                Jorhat Branch

            </div>

        </div>
    `;


    document.getElementById("letterPreview").innerHTML = letter;

}
function printLetter() {

    const letterContent = document.getElementById("letterPreview").innerHTML;

    if (!letterContent || letterContent.includes("Your generated letter")) {
        alert("Please generate a letter first.");
        return;
    }

    window.print();
}
