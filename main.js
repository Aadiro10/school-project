menu_list_array = [""];
    
    function getstudents(){
        var htmldata="";
        menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>'
        }
        document.getElementById("display_menu").innerHTML = htmldata;
       
     
    }

    function add_item(){
        var htmldata;
        var item=document.getElementById("add_item").value;
        menu_list_array.sort()
        htmldata="";
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+imgtags+ menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;
		
    }

function add_top(){
	var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
console.log("Hi everyone This is math page team");
console.log("containing Aadi, Aadvik, Agastya, Imon, Ila, Dwithi");
console.log("this app can hold any amount of student in a sorted manner");
console.log(menu_list_array);
