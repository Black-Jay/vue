 ```js

 beforeCreate: function(){
     alert("组件实例化之前执行得函数");
 },

 created: function(){
     alert("组件实例化完毕，但页面还未显示")
 }

 beforeMount: function(){
     alert("组件挂载前，页面仍未展示，但虚拟Dom已经配置")
 }

 mounted: function(){
     alert("组件挂载后，此方法执行后，页面显示")
 }

 beforeUpdate: function(){
     alert("组件更新前，页面仍未更新，但虚拟Dom已经配置")
 }

updated: function(){
    alert("组件更新，此方法执行后，页面显示")
}

beforeDestory: function(){
    alert("组件销毁前")
}

destoryed: function(){
    alert("组件销毁")
}
 ```