// 新增元素
function btn(){
    // 克隆 id 为 file_upload 的节点
    var file_upload = document.querySelector('#file_upload')
    // 克隆节点
    var newtr = file_upload.cloneNode(true);
    // 插入节点
        // 获取元素
    var tables = document.querySelector('table');

    tables.children[0].appendChild(newtr);
}

// 删除元素

/* var remove_tr = document.getElementById('remove');
remove_tr.onclick = function(){
    var file_uploads = document.getElementById('file_upload');
    var tables = document.querySelector('table');
    console.log(this);
    file_uploads.removeChild(this.parentNode.parentNode);
} */


// 删除元素
var removeBtn = document.getElementById('removebtn');
removeBtn.onclick = function(){
    var removes = document.getElementsByName('removetr');
    for(var i = 0;i<removes.length;i++){
        removes[i].removeChild(this.parentNode)
        return true;
    }
}
