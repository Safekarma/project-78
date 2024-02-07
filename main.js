var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://th.bing.com/th/id/OIP.B5ojJFUMFz8o9MZkzOUAHwHaJQ?w=150&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7","https://th.bing.com/th/id/OIP.psRevLlQcL2dkkO3HB5GrAHaFB?w=279&h=189&c=7&r=0&o=5&dpr=1.5&pid=1.7","https://th.bing.com/th/id/OIP.V1Y0fiUQj2EBEZtMZodQ6wHaHh?w=168&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7","https://th.bing.com/th/id/OIP.y6Ju4pKzWoJmJ7n9jhaujAAAAA?w=149&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7","https://th.bing.com/th/id/OIP._HdnP_YN-vO8P842M9HtMAHaLo?w=189&h=297&c=7&r=0&o=5&dpr=1.5&pid=1.7","https://th.bing.com/th/id/OIP.T8UwtR7QsxhxWmbTTaPokgHaKZ?w=111&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7","https://th.bing.com/th/id/OIP.tIwphUWLSUAJAbec2T04igHaJC?w=189&h=231&c=7&r=0&o=5&dpr=1.5&pid=1.7","https://th.bing.com/th/id/OIP.DD689YwEbwP1njss82Nu2QHaLH?w=189&h=284&c=7&r=0&o=5&dpr=1.5&pid=1.7"];
var names = ["Family Book","Sam", "Nichole", "Ellie", "Raymond", "Mason", "Jacob", "Mom", "Dad"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 8
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
