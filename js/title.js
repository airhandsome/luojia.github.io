var titleTime,OriginTitile=document.title;document.addEventListener("visibilitychange",(function(){document.hidden?(document.title="开始下一段旅程了吗~",clearTimeout(titleTime)):(document.title="欢迎回家～",titleTime=setTimeout((function(){document.title=OriginTitile}),2e3))}));