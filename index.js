const fs = require('fs');

const filePath = 'codes.txt'; // Specify the desired file path
const fileStream = fs.createWriteStream(filePath, { flags: 'a' }); // Append mode


async function getNitro() {
    const res = await fetch("https://api.discord.gx.games/v1/direct-fulfillment", {
        "headers": {
            "accept": "*/*",
            "accept-language": "tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7",
            "content-type": "application/json",
            "sec-ch-ua": "\"Opera GX\";v=\"105\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "Referer": "https://www.opera.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"partnerUserId\":\"9292d2143749d09af4289feeeab001bec850999ab3fe2829a07c406682f43c58\"}",
        "method": "POST"
    });

    const code = await res.json();
    const token = code.token;
    const editedCode = 'https://discord.com/billing/partner-promotions/1180231712274387115/' + token
    return editedCode
}

setInterval(async () => {
    const code1 = await getNitro();
    const code2 = await getNitro();

    fileStream.write(`${code1} - ${code2}\n`);
}, 100)
