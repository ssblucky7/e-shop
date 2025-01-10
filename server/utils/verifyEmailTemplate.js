const verifyEmailTemplate =({name,url}) => {
    return `
    <p>Thank you for registering DurableDress.</p>
    <a herf=${url} style="color:white;background : blue;margin-top : 10px">
    Verify Email
    </a>
    `
}

export default verifyEmailTemplate