function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort(function(a, b){return a-b});
	let count=0;
	let count=arr[i]+arr[j];
	for(let i=2;i<arr.length;i++)
		{
			let tempc=count+arr[i];
			count=count+tempc;
		}
	
	
	return arr;
  
}

module.exports=mincost;
