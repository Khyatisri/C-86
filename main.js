var canvas=new fabric.Canvas('myCanvas');
player_x=10;
player_y=10;
block_width=30;
block_height=30;
player_object="";
block_object="";
function playerUpload(){

fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToHeight(140);
player_object.scaleToWidth(150);
player_object.set({
top:player_y,left:player_x
});
canvas.add(player_object);
});
}

fabric.Image.fromURL(get_image,function(Img){
    block_object=Img;
    block_object.scaleToHeight(block_height);
    block_object.scaleToWidth(block_width);
    block_object.set({
    top:player_y,left:player_x
    });
    canvas.add(block_object);
    });
    }