document.getElementById('Deposit-Button').addEventListener('click', function () {
    const DepositInputField = document.getElementById('Deposit-Input-Field');
    const DepositOutputValue = DepositInputField.value;
    const DepositOutputResult = Number(DepositOutputValue);
    const DepositHoldingPlace = document.getElementById('Deposit-Holding-Place');
if(isNaN(DepositOutputResult)){
    alert('alvi')
}
else{
    const DepositHoldingPlaceNumber = Number(DepositHoldingPlace.textContent);
    const DepositAmmout = DepositOutputResult + DepositHoldingPlaceNumber;
    DepositHoldingPlace.textContent=DepositAmmout;
}
    DepositInputField.value = "";
}
)
