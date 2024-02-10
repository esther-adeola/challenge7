document.querySelector(".dateHere").textContent = dayjs().format("DD/MM/YYYY")

var currentHour = dayjs().format("HH")
var timeBlocks = document.querySelectorAll(".row")
for (let i = 0; i < timeBlocks.length; i++) {
    //console.log(currentHour)
    var hour = parseInt(timeBlocks[i].id.split("-")[1])
    if(currentHour < hour){
        timeBlocks[i].classList.add("future")
    }
    else if(currentHour == hour){
        timeBlocks[i].classList.add("present")
    }
    else {
        timeBlocks[i].classList.add("past")
    }
}

$('.saveBtn').on('click', function(event) {
    var toDo = $(this).siblings('.description').val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(hour, toDo);
})

for(let i = 9; i < 18; i++){

    let id = "hour-" + i;
    let toDo = localStorage.getItem(id);
    $(`#${id}`).children(".description").val(toDo);

}
