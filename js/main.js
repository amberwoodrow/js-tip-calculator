function calcTip(billAmount, percentageSelected) {
  var tipAmount = billAmount * percentageSelected;
  return tipAmount.toFixed(2);
}

function handleClick(event) {
  var billAmount = document.getElementsByTagName("input")[0].value;
  var percentageElement = document.getElementsByTagName("select")[0];
  var percentageSelected = percentageElement.options[percentageElement.selectedIndex].value;
  percentageSelected = percentageSelected/100;
  document.getElementById("result").innerHTML = "You should tip $" + calcTip(billAmount, percentageSelected);
}

document.getElementsByTagName("input")[1].onclick = handleClick;