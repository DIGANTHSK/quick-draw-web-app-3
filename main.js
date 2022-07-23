quick_draw_data_set=["aircraft carrier", "airplane", "alram clock", "ambulance", "angel", "animal migration", "ant", "anvil", "apple", "arm", "asparagus"]
random_number = math.floor((math.random()*quick_draw_data_set.length)+1);
element_of_array = quick_draw_data_set[random_number];
document.getElementById("sketch_to_be_drawn").innerHTML = "Sketch to be drawn: "+element_of_array;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;
sketch = element_of_array;

function draw() {
check_sketch();
if(drawn_sketch == sketch){
answer_holder = "set";
score = score+1;
document.getElementById("score").innerHTML = "score: "+score;
}
}

function check_sketch(){
timer_counter++;
document.getElementById("timer").innerHTML = "score: "+timer_counter;
if(timer_counter>400){
timer_counter = 0;
timer_check = "completed";
}
if(timer_check = "completed" | | answer_holder == "set"){
timer_check = "";
answer_holder = "";
updateCanavas();
}
}

function updateCanavas(){
background("white");
sketch = element_of_array;
document.getElementById("sketch_to_be_drawn").innerhtml = "sketch to be drawn: "+sketch;
}

function setup(){
canavas = createCanavas(200,200);
canavas.content();
background("white");
}