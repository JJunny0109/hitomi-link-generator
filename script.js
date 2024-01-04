// Get HTML elements
const input = document.querySelector('#input');
const output = document.querySelector('#output');
const outputLink = document.querySelector('#outputLink');
const genBtn = document.querySelector('#genBtn');
const copyBtn = document.querySelector('#copyBtn');

// Generate the link
genBtn.addEventListener('click', () => {
    // Get input value
    const inputValue = input.value;
    // Check if input value is empty
    if (inputValue === '') {
        alert('Please enter the gallery number');
    } else {
        // Generate the link
        output.value = generateLink(inputValue);

        // apply the link to the a tag
        outputLink.href = generateLink(inputValue);
    }
});

// copy the link to clipboard
copyBtn.addEventListener('click', () => {
  if (output.value == '') {
    alert('Please generate the link first');
  }
  else {
    copyToClipboard(output.value);
  }
});

// generate link function
function generateLink(inputValue) {
    // Get the gallery number
    const galleryNumber = inputValue;
    // Generate the link
    const link = `https://hitomi.la/galleries/${galleryNumber}.html`;
    // Return the link
    return link;
}

// function that copies the url to clipboard
function copyToClipboard(url) {
  const linkToCopy = url;

  // Clipboard API를 사용하여 텍스트 복사
  navigator.clipboard.writeText(linkToCopy)
      .then(() => {
          // 성공적으로 복사되면 사용자에게 피드백 제공
          alert('클립보드에 복사된 링크: ' + linkToCopy);
      })
      .catch(err => {
          // 복사 실패 시 에러 메시지 출력
          console.error('클립보드 복사 실패:', err);
      });
}