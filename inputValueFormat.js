export const inputValueFormat = (inputValue) =>
{
    if(inputValue !== ""){
        inputValue = inputValue.split("");
        inputValue[0] = inputValue[0].toLowerCase();
        return inputValue.join("");
    }
    else{
        return "";
    }
}