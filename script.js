function mincost(arr)
{ 
//write your code here
// return the min cost
let totalcost=0;
	arr.sort((a,b)=>a-b);
	while(arr.length>1){
		let first=arr.shift();
		let second=arr.shift();
	
	let cost=first+second;
	totalcost=totalcost+cost;

	arr.push(cost);
	arr.sort((a,b)=>a-b);
  
}
return totalcost;
  
}

module.exports=mincost;
