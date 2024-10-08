const mailserver = "https://northamerica-northeast1-nipponsake-cdd8f.cloudfunctions.net/sendmailer/"
const myTo='jason.evans@sakewiz.com'

export async function sendMail(subject, body) {
  // send mail with defined transport object
   //fetch(mailserver+"?to="+myTo+"&from="+myTo+"&subject="+subject+"&body="+body, {  // Enter your IP address here
   //   method: 'POST', 
   //   body: 'Contact Email' // body data type must match "Content-Type" header
// })

const bearer = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3Y2MwZWY0YzcxODFjZjRjMGRjZWY3YjYwYWUyOGNjOTAyMmM3NmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA0ODUwODc4MTUyMzk5MjkzMjEwIiwiaGQiOiJzYWtld2l6LmNvbSIsImVtYWlsIjoiamFzb24uZXZhbnNAc2FrZXdpei5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkpNakl2dWo5V1ZjVkFfcE5DWnRncFEiLCJpYXQiOjE2NjcwODAxMTYsImV4cCI6MTY2NzA4MzcxNiwianRpIjoiNDM4ZWIzYzBlNGVlY2UzNTRmZWEyMTViM2JlNzJhNTRlM2U1N2NhOSJ9.Qz28UVek5fv5eJFjw6PjvATlObjjbkIoz85tjlx4JDSQg9kANMOxTyNA5-7GpxmDtQDYfYnufaSNU-0nErpErENOoXAbo4sTQDhSO5XRqKJ_7KN0yzTcWLEEUAwfZMuzJcyvJrBnyDRoDKkbYB2M21HowkP3_BM-IwvQZpNTTj__3xMbaDERfznyGsG8bd6T2qkPSASvWFgP5WozdW5mdQJkfqG3ObZdM_cXMIgn_C0YHrNb91RuyktPvw_UBCamDo-HOTwmZUPTYrV2CrEXM24GB0usbF0T19K-nMv6hsnffgjxh0muMoDnw_TcjdUtMZoAH4P0XRCWFPpZa4M8Sg' 
//above not really needed. now pub access

    fetch(mailserver+"?to="+myTo+"&from="+myTo+"&subject="+subject+"&body="+body, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Authorization': bearer,
        'Access-Control-Allow-Origin': '*'
      }
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    }).catch(err=>{
    console.log(err)
   })

 console.log("Message sent:");
}
