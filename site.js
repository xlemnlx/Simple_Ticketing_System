function calc(adultz,childrenz)
{
    let pricez = (adultz*12)+(childrenz*6);
    document.getElementById("adultCount").value = "";
    document.getElementById("childrenCount").value = "";
    return pricez;
}

window.onload = function()
{
    let fBtn = document.getElementById("buttonCalc");
    fBtn.onclick = function()
    {
        let fAdult = document.getElementById("adultCount").value;
        let fChildren = document.getElementById("childrenCount").value;
        let fPrice = calc(fAdult,fChildren);
        alert("$" + fPrice);
    }
}