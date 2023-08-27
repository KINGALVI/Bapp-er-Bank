document.getElementById("Deposit-Button").addEventListener('click', function () {

    const DepositInputField = document.getElementById("Deposit-Input-Field");
    const DepositInputFieldInnerText = DepositInputField.value;
    DepositInputField.value = '';
    const DepositInputFieldNumber = parseFloat(DepositInputFieldInnerText.trim());
    if (isNaN(DepositInputFieldNumber)) {
        alert("Please enter a valid number!");
        return;
    }

    const DepositHoldingPlace = document.getElementById("Deposit-Holding-Place");
    const DepositHoldingPlaceInnerText = DepositHoldingPlace.innerText;
    const DepositHoldingPlaceNumber = parseFloat(DepositHoldingPlaceInnerText)
    const DepositAmmout = DepositHoldingPlaceNumber + DepositInputFieldNumber;
    DepositHoldingPlace.innerText = DepositAmmout;

    const BalanceHoldingPlace = document.getElementById("Balance-Holding-Place");
    const BalanceHoldingPlaceInnnerText = BalanceHoldingPlace.innerText;
    const BalanceHoldingPlaceNumber = parseFloat(BalanceHoldingPlaceInnnerText);
    const BlaanceAmmount = BalanceHoldingPlaceNumber + DepositAmmout;
    BalanceHoldingPlace.innerText = BlaanceAmmount;
})