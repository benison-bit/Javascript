function getMiddle(s)
{
  //Code goes here!
  let length = s.length;
  let middle = Math.floor(length/2);
  
  if(length%2 == 0)
    {
      //if it is even
      return s[middle-1]+s[middle];
    }
  else
    {
        //if it is odd 
      return s[middle];
    }
}