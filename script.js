//your JS code here. If required.
function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    document.getElementById('btn').addEventListener('click', () => {
      const inputValue = parseFloat(document.getElementById('ip').value);
      if (!isNaN(inputValue)) {
        transformNumber(inputValue);
      } else {
        alert('Please enter a valid number');
      }
    });

    function transformNumber(num) {
      delay(2000)
        .then(() => {
          document.getElementById('output').innerText = `Result: ${num}`;
          return num * 2;
        })
        .then(result => {
          return delay(2000).then(() => {
            document.getElementById('output').innerText = `Result: ${result}`;
            return result - 3;
          });
        })
        .then(result => {
          return delay(1000).then(() => {
            document.getElementById('output').innerText = `Result: ${result}`;
            return result / 2;
          });
        })
        .then(result => {
          return delay(1000).then(() => {
            document.getElementById('output').innerText = `Result: ${result}`;
            return result + 10;
          });
        })
        .then(finalResult => {
          return delay(1000).then(() => {
            document.getElementById('output').innerText = `Final Result: ${finalResult}`;
          });
        });
    }
