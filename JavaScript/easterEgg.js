//easter eggs
var fallObjects=new Array();
function newObject(url,height,width){
    fallObjects[fallObjects.length]=new Array(url,height,width);
}
var numObjs=5, waft=0, fallSpeed=20, wind=0;
newObject("pictures/egg1.png",38,50);
newObject("pictures/egg2.png",38,50);
newObject("pictures/egg3.png",38,50);
newObject("pictures/egg4.png",38,50);
newObject("pictures/egg5.png",28,50);
function winSize(){
    winWidth=(moz)?window.innerWidth:document.body.clientWidth;winHeight=(moz)?window.innerHeight:document.body.clientHeight;
}
function winOfy(){
    winOffset=(moz)?window.pageYOffset:document.body.scrollTop;
}
function fallObject(num,vari,nu){
    objects[num]=new Array(parseInt(Math.random()*(winWidth-waft)),-30,(parseInt(Math.random()*waft))*((Math.random()>0.5)?1:-1),0.02+Math.random()/20,0,1+parseInt(Math.random()*fallSpeed),vari,fallObjects[vari][1],fallObjects[vari][2]);
    if(nu==1){
        document.write('<img id="fO'+i+'" style="position:absolute; display:none" src="'+fallObjects[vari][0]+'">');
    }
}
function fall(){
    for(i=0;i<numObjs;i++){
        var fallingObject=document.getElementById('fO'+i);
        if((objects[i][1]>(winHeight-(objects[i][5]+objects[i][7])))||(objects[i][0]>(winWidth-(objects[i][2]+objects[i][8])))){
            fallObject(i,objects[i][6],0);
        }
        objects[i][0]+=wind;objects[i][1]+=objects[i][5];objects[i][4]+=objects[i][3];
        with(fallingObject.style){
            top=objects[i][1]+winOffset+"px";
            left=objects[i][0]+(objects[i][2]*Math.cos(objects[i][4]))+"px";
        }
    }
}
var objects=new Array(),winOffset=0,winHeight,winWidth,togvis,moz=(document.getElementById&&!document.all)?1:0;
winSize();
window.onscroll=winOfy;
window.onresize=winSize;
for (i=0;i<numObjs;i++){
    fallObject(i,parseInt(Math.random()*fallObjects.length),1);
}
var t;
var OnOrOff = 1;
function showEggs(){
    for (i=0;i<numObjs;i++){
        var fallingObject=document.getElementById('fO'+i);
        fallingObject.style.display = "block"
    }
    t = setInterval("fall()",30);
    OnOrOff--;
}
function stopEggs(){
    for (i=0;i<numObjs;i++){
        var fallingObject=document.getElementById('fO'+i);
        fallingObject.style.display = "none"
    }
    clearInterval(t);
    OnOrOff++;
}
function eggs(){
    if(OnOrOff == 1){
        showEggs();
    } else{
        stopEggs();
    }
}