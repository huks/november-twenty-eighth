const copyToClipboard = (textToCopy) => {
  console.log(`copyToClipboard(${textToCopy})`)
  const tempEl = document.createElement('textarea')
  tempEl.value = textToCopy
  document.body.appendChild(tempEl)

  tempEl.select()
  return new Promise((res, rej) => {
    document.execCommand('copy') ? res() : rej()
    tempEl.remove()
  })
}

// const copyToClipboard = (textToCopy) => {
//   if (navigator.clipboard) {
//     // navigator clipboard api method
//     return navigator.clipboard.writeText(textToCopy)
//   } else {
//     // text area method
//     const tempEl = document.createElement('textarea')
//     tempEl.value = textToCopy
//     document.body.appendChild(tempEl)

//     tempEl.select()
//     return new Promise((res, rej) => {
//       document.execCommand('copy') ? res() : rej()
//       tempEl.remove()
//     })
//   }
// }

export default copyToClipboard
