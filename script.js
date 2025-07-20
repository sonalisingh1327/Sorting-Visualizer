let fixedArray = [45, 10, 78, 32, 56, 89, 23, 67];
let array = [...fixedArray];

function createBars(arr) {
  const container = document.getElementById("bar-container");
  container.innerHTML = "";
  arr.forEach(value => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    bar.innerText = value;
    container.appendChild(bar);
  });
}

function resetArray() {
  array = [...fixedArray];
  createBars(array);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, 3000));
}

// Bubble Sort
async function bubbleSort() {
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].style.backgroundColor = "red";
      bars[j + 1].style.backgroundColor = "red";
      await sleep(300);

      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        bars[j].style.height = `${array[j] * 3}px`;
        bars[j + 1].style.height = `${array[j + 1] * 3}px`;
        bars[j].innerText = array[j];
        bars[j + 1].innerText = array[j + 1];
      }

      bars[j].style.backgroundColor = "steelblue";
      bars[j + 1].style.backgroundColor = "steelblue";
    }
    bars[array.length - i - 1].style.backgroundColor = "green";
  }
  bars[0].style.backgroundColor = "green";
}

// Selection Sort
async function selectionSort() {
  const bars = document.getElementsByClassName("bar");
  for (let i = 0; i < array.length; i++) {
    let min = i;
    bars[min].style.backgroundColor = "orange";
    for (let j = i + 1; j < array.length; j++) {
      bars[j].style.backgroundColor = "red";
      await sleep(300);
      if (array[j] < array[min]) {
        bars[min].style.backgroundColor = "steelblue";
        min = j;
        bars[min].style.backgroundColor = "orange";
      } else {
        bars[j].style.backgroundColor = "steelblue";
      }
    }

    [array[i], array[min]] = [array[min], array[i]];
    bars[i].style.height = `${array[i] * 3}px`;
    bars[min].style.height = `${array[min] * 3}px`;
    bars[i].innerText = array[i];
    bars[min].innerText = array[min];

    bars[i].style.backgroundColor = "green";
  }
}

// Insertion Sort
async function insertionSort() {
  const bars = document.getElementsByClassName("bar");
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    bars[i].style.backgroundColor = "orange";
    await sleep(300);

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      bars[j + 1].style.height = `${array[j + 1] * 3}px`;
      bars[j + 1].innerText = array[j + 1];
      bars[j + 1].style.backgroundColor = "red";
      j--;
      await sleep(300);
    }

    array[j + 1] = key;
    bars[j + 1].style.height = `${key * 3}px`;
    bars[j + 1].innerText = key;

    for (let k = 0; k <= i; k++) {
      bars[k].style.backgroundColor = "green";
    }
  }
}

// Initialize with fixed array
resetArray();
