function mincost(arr)
{ 
//write your code here
// return the min cost
	for(let i=0;i<arr.length;i++)
		{
			
			for(let j=i+1;j<arr.length;j++)
				{
					if(arr[i]>arr[j])
					{
						let temp=arr[i];
						arr[i]=arr[j];
						arr[j]=temp;
					}
				}
		}
	if(arr.length<3)
	{
		return arr[0]+arr[1];
	}
	let count=0;
	let count=arr[0]+arr[1];
	for(let i=2;i<arr.length;i++)
		{
			let tempc=count+arr[i];
			count=count+tempc;
		}
	
	
	return arr;
  
}

module.exports=mincost;
