let turn = 0
let emoColor;
let arr;

function init() {
    document.getElementById("popup").classList.remove("open_popup");
    arr = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
    for (let i = 1; i < 10; i++) {
        if (i <= 3) {
            document.getElementById(i).innerHTML = `<button class="btn btn-success btn-lg" onclick="changeValue(${i})">
              <i class="fa-solid fa-face-smile"></i>
            </button>`}
        else if (i <= 6) {
            document.getElementById(
                i
            ).innerHTML = `<button class="btn btn-warning btn-lg" onclick="changeValue(${i})">
              <i class="fa-solid fa-face-smile"></i>
            </button>`;
        }
        else {
            document.getElementById(
                i
            ).innerHTML = `<button class="btn btn-danger btn-lg" onclick="changeValue(${i})">
              <i class="fa-solid fa-face-smile"></i>
            </button>`;
        }
    }
}
function changeValue(id) {
    
    
    if (turn % 2 == 0)
    {
        document.getElementById(id).innerHTML = `
          <i class="fa-solid fa-hashtag"></i>
        `
        arr[id] = 0;
    }
    else
    {
        document.getElementById(id).innerHTML = `<i class="fa-solid fa-0"></i>`
        arr[id] = 1;
    }
    turn++
    if ((
      (arr[1] === arr[2] && arr[1] === arr[3]) ||
        (arr[4] === arr[5] && arr[4] === arr[6]) ||
        (arr[7] === arr[8] && arr[7] === arr[9]) ||
        (arr[1] === arr[4] && arr[1] === arr[7]) ||
        (arr[2] === arr[5] && arr[2] === arr[8]) ||
        (arr[3] === arr[6] && arr[3] === arr[9]) ||
        (arr[1] === arr[5] && arr[1] === arr[9]) ||
        (arr[3] === arr[5] && arr[3] === arr[7])
      ) )
    {
        setTimeout(() => {
          document.getElementById("popup").classList.add("open_popup");
        }, 100);   
    }
    else if (turn == 0)
    {
        init();
        }
    // console.log(arr);
}


// if (document.getElementById(1).innerHTML === document.getElementById(2).innerHTML)
// {
//     prompt("hello")
// }
