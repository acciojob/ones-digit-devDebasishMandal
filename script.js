function onesDigit(n) {
  // your code here
	let ans=n.toString();

let x= ans.length-1;
	
	return ans[x];
	
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
