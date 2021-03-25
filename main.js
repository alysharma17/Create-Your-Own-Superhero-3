var c=new fabric.Canvas("mycanvas");
var hero_x=10;
var hero_y=10;
var hero_object="";
hero_image_width='50';
hero_image_height='50';
hero_image_object="";
function hero() {
fabric.image.fromURL("", function(img){
hero_object=img; 
hero_object.scaleToWidth(150);
hero_object.scaleToHeight(150);
hero_object.set({
    top:hero_y, left:hero_x
});
c.add(hero_object);
})


function add_image(get_image) {
    fabric.image.fromURL(get_image, function(img) {
hero_image_object=img;
hero_image_object.scaleToWidth(hero_image_width);
hero_image_object.scaleToHeight(hero_image_height);
heero_image_object.set({
    top:hero_y, left:hero_x
})
c.add(hero_image_object);
     
        if (e.shiftKey==true && keypress=='80') {
            hero_image_width=hero_image_width+10;
           hero_image_height=hero_image_height+10;
            document.getElementById("current_width").innerHTML=hero_image_width;
            document.getElementById("current_height").innerHTML=hero_image_height;
        }
        if (e.shiftKey==true && keypress=='77') {
            hero_image_height=hero_image_height-10;
            hero_image_width=hero_image_width-10;
            document.getElementById("current_width").innerHTML=hero_image_width;
            document.getElementById("current_height").innerHTML=hero_image_height;
        }
        if (keypress=='38') {
            up();
         }
         if (keypress=='40') {
             down();
         }
         if (keypress=='37') {
             left();
         }
         if (keypress=='39') {
            right();
        }
        function up() {
            if (hero_y>=0) {
                hero_y=hero_y-10;
            }
        }
        function down() {
            if (hero_y<=500) {
                hero_y=hero_y+10;
            }
        }
        function left() {
            if (hero_x>=0 )
                hero_x=hero_x-10;
                    }
           }
           
       ,
        function right() {
            if (hero_x<=700) {
                hero_x==hero_x+10;
            }
            } 