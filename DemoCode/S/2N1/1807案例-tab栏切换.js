 // 获取元素
 var tab_list = document.querySelector('.tab_list');
 var list = document.querySelectorAll('li');
 var items = document.querySelectorAll('.item');

 for(var i = 0;i<list.length;i++){
    list[i].setAttribute('index',i);
    list[i].onclick = function(){
        for(var i = 0;i<list.length;i++){
            list[i].className = '';
            this.className = 'current';
        }
        var index = this.getAttribute('index');
        console.log(index);
        for(var i = 0;i<items.length;i++){
            // items[i].style.display = 'none';
        }
        items[index].style.display = 'block';
    }  
 }