document.getElementById("Deposit-Button").addEventListener('click', function () {

    const DepositInputField = document.getElementById("Deposit-Input-Field");
    const DepositInputFieldInnerText = DepositInputField.value;
    DepositInputField.value = '';
    const DepositInputFieldNumber = parseFloat(DepositInputFieldInnerText);
    if (isNaN(DepositInputFieldNumber)) {
        alert("Please Enter A Valid Number !");
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

























document.getElementById('Withdraw-Button').addEventListener('click', function () {

    const WithdrawInputField = document.getElementById('Withdraw-Input-Field');
    const WithdrawInputFieldValue = WithdrawInputField.value;
    WithdrawInputField.value = '';
    const WithdrawInputFieldNumber = parseFloat(WithdrawInputFieldValue);
    if (isNaN(WithdrawInputFieldNumber)) {
        alert('Please Enter A Valid Number !')
        return;

    }

    const WithdrawHoldingPlace = document.getElementById('Withdraw-Holding-Place');
    const WithdrawHoldingPlaceInnerText = WithdrawHoldingPlace.innerText;
    const WithdrawHoldingPlaceNumber = parseFloat(WithdrawHoldingPlaceInnerText);
    const WithdrawAmmount = WithdrawInputFieldNumber + WithdrawHoldingPlaceNumber;
    WithdrawHoldingPlace.innerText = WithdrawAmmount;

    const BalanceHoldingPlace = document.getElementById("Balance-Holding-Place");
    const BalanceHoldingPlaceInnnerText = BalanceHoldingPlace.innerText;
    const BalanceHoldingPlaceNumber = parseFloat(BalanceHoldingPlaceInnnerText);
    const BlaanceAmmount = BalanceHoldingPlaceNumber - WithdrawAmmount;
    BalanceHoldingPlace.innerText = BlaanceAmmount;

})