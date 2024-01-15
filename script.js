const getColor = () =>
{
    // Math.floor use for round off the number
    const randomNumber = Math.floor(Math.random()* 16777215);
    const randomCode= "#"+randomNumber.toString(16);
    // this 16 means hexadecimal code
    document.body.style.backgroundColor=randomCode;
    document.getElementById("colorcode").innerText=randomCode;
    navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener(
    "click",getColor
)

//init call
getColor();