let username = document.querySelector('#username');
let number = document.querySelector('#number');
let address = document.querySelector('#address');
let form = document.querySelector('#form');
let thickness = document.getElementById('inputSelect');
let inputSize = document.getElementById('inputSize');
let wrapper = document.querySelector('.container');
let Checkboxes = document.querySelectorAll('.checkbox');
let Add = document.querySelectorAll('.checkbox2');
let checkboxSum = 0; //
let addSum = 0; //
let inpSum = 0;
let selectSum = 0;

let Arr = [];
Checkboxes.forEach((e) => {
	e.addEventListener('change', (e) => {
		checkboxSum += Number(e.target.dataset.price);
		// console.log(checkboxSum);
		if (e.target.checked) {
			Arr.push(e.target.id);
			// console.log(checkboxSum);
		} else {
			Arr = Arr.filter((n) => n !== e.target.id);
		}
		// console.log(Arr);
	});
});

let AddArr = [];
Add.forEach((e) => {
	e.addEventListener('change', (e) => {
		addSum += Number(e.target.dataset.price);
		console.log(addSum);
		if (e.target.checked) {
			AddArr.push(e.target.id);
		} else {
			AddArr = AddArr.filter((n) => n !== e.target.id);
		}
		
		// console.log(Arr);
	});
});

inputSize.addEventListener('change', (e) => {
	if (e.target.value == '25sm') {
		selectSum = 10;
	} else if (e.target.value == '30sm') {
		selectSum = 12;
	} else {
		selectSum = 15;
	}
	console.log(selectSum);
});

thickness.addEventListener('change', (e) => {
	selectSum = Number(e.target.dataset.price);
	if (e.target.value == 'Thin') {
		inpSum = 10;
	} else if (e.target.value == 'Medium') {
		inpSum = 12;
	} else {
		inpSum = 15;
	}
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let Total = addSum + checkboxSum + inpSum + selectSum;

	wrapper.innerHTML += `
  
  <div class="card style="width: 28rem;"">
    <p class="ps-3 pt-1 fst-italic fw-bold">Name: ${username.value}</p>
    <p class="ps-3 pt-1 fst-italic fw-bold">Phone: ${number.value}</p>
    <p class="ps-3 pt-1 fst-italic fw-bold">Address: ${address.value}</p>
    <p class="ps-3 pt-1 fst-italic fw-bold">Thickness: ${thickness.value}</p>
    <p class="ps-3 pt-1 fst-italic fw-bold">Size: ${inputSize.value}</p>
    <p class="ps-3 pt-1 fst-italic fw-bold">On Pizza: ${Arr}</p>
    <p class="ps-3 pt-1 fst-italic fw-bold">Add: ${addSum}</p>
    <p class="ps-3 pt-1 fst-italic fw-bold">Total: ${Total}</p>
  </div>
  
  `;
});
